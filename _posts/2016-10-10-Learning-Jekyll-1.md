---
layout: post
title: Definition of sales
date: March 24, 2015
category: Jekyll Installation
---


Installation on windows :-
Run cmd as admin
Install Chocolatey [https://chocolatey.org/install]
choco install ruby -y
[open Intellij with admin rights to open embedded terminal with admin rights]
gem install jekyll

If error [

C:\Users\Anonymous\Dropbox\sunilchowdhary.com\sunilchowdhary>gem install jekyll
ERROR:  Could not find a valid gem 'jekyll' (>= 0), here is why:
          Unable to download data from https://rubygems.org/ - SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (https://api.rubygems.o
rg/specs.4.8.gz)]

Use Sarog's method in url [30 secs of work :)] :
-https://gist.github.com/luislavena/f064211759ee0f806c88

Copy pasting Sarog's[https://gist.github.com/sarog] comment for easier access :-
sarog commented 5 days ago
Guys, there's an even simpler method.
I created a new file called root-r1.pem inside the folder
C:\Ruby23-x64\lib\ruby\2.3.0\rubygems\ssl_certs and then copy/pasted the following GlobalSign Root R1 certificate (click "View Base64"). It worked on Windows 10 x64 without having to mess around with OpenSSL DER/PEM conversions.

-----BEGIN CERTIFICATE-----
MIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkG
A1UEBhMCQkUxGTAXBgNVBAoTEEdsb2JhbFNpZ24gbnYtc2ExEDAOBgNVBAsTB1Jv
b3QgQ0ExGzAZBgNVBAMTEkdsb2JhbFNpZ24gUm9vdCBDQTAeFw05ODA5MDExMjAw
MDBaFw0yODAxMjgxMjAwMDBaMFcxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9i
YWxTaWduIG52LXNhMRAwDgYDVQQLEwdSb290IENBMRswGQYDVQQDExJHbG9iYWxT
aWduIFJvb3QgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDaDuaZ
jc6j40+Kfvvxi4Mla+pIH/EqsLmVEQS98GPR4mdmzxzdzxtIK+6NiY6arymAZavp
xy0Sy6scTHAHoT0KMM0VjU/43dSMUBUc71DuxC73/OlS8pF94G3VNTCOXkNz8kHp
1Wrjsok6Vjk4bwY8iGlbKk3Fp1S4bInMm/k8yuX9ifUSPJJ4ltbcdG6TRGHRjcdG
snUOhugZitVtbNV4FpWi6cgKOOvyJBNPc1STE4U6G7weNLWLBYy5d4ux2x8gkasJ
U26Qzns3dLlwR5EiUWMWea6xrkEmCMgZK9FGqkjWZCrXgzT/LCrBbBlDSgeF59N8
9iFo7+ryUp9/k5DPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8E
BTADAQH/MB0GA1UdDgQWBBRge2YaRQ2XyolQL30EzTSo//z9SzANBgkqhkiG9w0B
AQUFAAOCAQEA1nPnfE920I2/7LqivjTFKDK1fPxsnCwrvQmeU79rXqoRSLblCKOz
yj1hTdNGCbM+w6DjY1Ub8rrvrTnhQ7k4o+YviiY776BQVvnGCv04zcQLcFGUl5gE
38NflNUVyRRBnMRddWQVDf9VMOyGj/8N7yy5Y0b2qvzfvGn9LhJIZJrglfCm7ymP
AbEVtQwdpf5pLGkkeB6zpxxxYu7KyJesF12KwvhHhm4qxFYxldBniYUr+WymXUad
DKqC5JlR3XC321Y9YeRq4VzW9v493kHMB65jUr9TU/Qr6cf9tveCX4XSQRjbgbME
HMUfpIBvFSDJ3gyICh3WZlXi/EjJKSZp4A==
-----END CERTIFICATE-----


Running Jekyll :-rwq`

jekyll serve --profile [from your site directory, so that it can travel through the site heirarchy]

File Structure :
_config.yml : to set variables, kind of global which u can access through out the site.Holds configuration of site
_drafts : allows to work on blog post
_includes :- used for duplicable page sections, kind of common content
_layouts:- templates to wrap content, mainly contains navigation , footer header (repeating code) code which do not changes,
_posts : to store blog posts
_site :  full static website created by jekyll


Jekyll Front Matter :-
To set variables on a page
---
<all font matter goes here>

vriablename : "variable value"  //not use of double quotes
showfooter : true
fruit:
  - apple //note use of double spaces before, not the tab
  - banana
  - orange


fruits:
  - name : apple //note use of double spaces before, not the tab
    cost : $1
    color : red
  - name : banana
    cost : $2
    color : yellow
  - name : orange
    cost : $3
    color : orange


---

use in page
{{variablename}}

{% if page.showfooter %}
<footer>I am a footer  </footer>
{% endif %}

<ul>
{% for item in page.fruit %}
<li>{{item}}</li>
{% endfor %}
</ul>


<ul>
{% for item in page.fruits %}
<li>{{item.name}} , cost : {{item.cost}}, color : {{item.color}}</li>
{% endfor %}
</ul>

Layouts :-

Minify html, css, js
https://github.com/digitalsparky/jekyll-minifier
Page Speed Tool
https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fsunilchowdhary.com

Optimize images :
1) https://github.com/nidi3/jekyll-image_optimizer [Didnt' work, too lazy to go with y]
gem install jekyll-image_optimizer [Didn't work]

2)https://sourceforge.net/projects/nikkhokkho/files/FileOptimizer/ //to optimize images

https://www.cloudflare.com/a/performance/sunilchowdhary.com#minify
//to enable caching , minimized css and js files  and CDN

//Get optimized css, images and js from :
https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fsunilchowdhary.com%2F&tab=desktop

https://www.toptal.com/javascript/optimize-js-and-css-with-gulp
//gulp to optimize css and js files

Install gulp using npm
Node js runs only on IntelliJ IDEA Ultimate 
Intellij Ultimate 2016.3.4  Activation
http://www.aku.vn/idea
Select "License server" and input "http://www.aku.vn/idea" and click "OK" activation JetBrains' product.

Download Nodejs from : https://nodejs.org/en/







