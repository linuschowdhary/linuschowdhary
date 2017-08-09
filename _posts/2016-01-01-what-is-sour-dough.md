---
layout: post
category: Information
date: 20th March 2017
---
package ab.ce.defg;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageFilter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;


public class SitemapPageFilter extends PageFilter {

    @Override
    public boolean includes(Page page) {
        try {
            //takes care of isSearchable, hideInNav, hidden, offTime etc
            boolean defualtIncludeCheck = super.includes(page);

            if(defualtIncludeCheck){
            ValueMap properties = page.getProperties();
            boolean isPromotable = properties.get("isPromotable", false);
                Resource contentResource = page.getContentResource();
                Session session = contentResource.getResourceResolver().adaptTo(Session.class);
                boolean hasReadAccess = hasReadAccess(page.adaptTo(Node.class), session);
                if (isPromotable && hasReadAccess) {
                    return true;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }

    private boolean hasReadAccess(Node pageNode, Session userSession) throws RepositoryException {
        String path = pageNode.getPath();
        try {
            userSession.checkPermission(path, Session.ACTION_READ);
          } catch (java.security.AccessControlException e) {
            return false;
        }
        return true;
    }

}
