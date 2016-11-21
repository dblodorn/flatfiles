# 📁 FlatFiles 📁
Blank WP theme for API Connection. This is just for you to connect to the CMS and access your data via JSON!

## WP Plugins you need:
+ [WP REST API (2.0)](http://v2.wp-api.org/)
+ [WP REST API Cache](https://github.com/airesvsg/wp-rest-api-cache)
+ [Advanced Custom Fields PRO](https://github.com/wp-premium/advanced-custom-fields-pro)
+ [ACF to REST API](https://github.com/airesvsg/acf-to-rest-api)

### Nice to have but not necessary:
+ [CloudFlare Flexible SSL](https://wordpress.org/plugins/cloudflare-flexible-ssl/)
+ [EWWW Image Optimizer](https://ewww.io/)
+ [WordPress HTTPS](https://github.com/Mvied/wordpress-https)
+ [WP-Markdown](https://wordpress.org/plugins/wp-markdown/)
+ [Duplicate Post](https://wordpress.org/plugins/duplicate-post/)

I recommend routing your site through [CloudFlare](https://www.cloudflare.com/) so you have free SSL.

## Utilies:
If you use FTP...

  # using vinyl ftp through gulp you can do an easy deploy by creating a file called deploy-credentials.json in the root directory.
  # this file should have the following info:

  {
    "user": "username",
    "password": "password",
    "host": "your.host",
    "remoteFolder": "/uploadfolder/"
  }

  # Don't forget to make sure deploy-credentials.json in included in .gitignore!

## Webpack / Build:
This project uses jade-php (or pug) & sass, so if you want to extend the theme you can start there.  
Gulp Tasks are trigerred through webpack config.

    # install dependencies
    npm install

    # Watch your files
    npm run watch

    # build for production with minification & deploy via ftp
    npm run build

    # You Should probably run
    gulp jade
    gulp move

    #to move unwatched files (like functions.php and the library folder) type
    gulp move

#### HAVE FUN
And btw, using this in conjunction with [VueJs](https://vuejs.org/) is awesome... 