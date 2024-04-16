The "backend" folder contains files, that would be copied to /usr/lib/svrjs directory.
The "frontend" folder contains files, that would be copied to /var/www/svrjs directory.

You may need to set "useWebRootServerSideScript" in SVR.JS config.json to "false" and set up HTTP authentication at "/admin" and "/admin/" URLs.

