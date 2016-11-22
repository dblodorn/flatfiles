# 📁 FlatFiles 📁
Blank WP theme for API Connection. This is just for you to connect to the CMS and access your data via JSON! In fact all you really need are the functions.php file and the public/library/custom-post-type.php / and whatever else creates enough for wordpress to recognize the theme as a [basic theme](https://github.com/MrMaz/Smallest-Wordpress-Theme-Ever). - so you can use custom post types. The other stuff is just extra fun if you want to play around and make a theme you can look at...

See the API output on this page ⛓: [https://flatfiles.info/wp-json/wp/v2/posts/12](https://flatfiles.info/wp-json/wp/v2/posts/12)  
See the API consumed on this page ⛓: [https://dain.kim/archive/](https://dain.kim/archive/) 

See the theme in action on this page 😂: [https://flatfiles.info/](https://flatfiles.info/) 

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

## Utilities:
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
And btw, using this in conjunction with [VueJs](https://vuejs.org/) is awesome... 😎

#### Here's an example vue 2.x component using [Vue-Axios](https://github.com/imcvampire/vue-axios):

    <template lang="pug">
      ul
        li(v-for='item in work.acf.website_archive')
          a( :href="item.website_link" target='_blank') {{item.website_title}}
    </template>

    <script>
    export default {
      name: 'work',
      data: () => ({
        work: {}
      }),
      beforeMount () {
        this.axios.get('https://flatfiles.info/wp-json/wp/v2/posts/12').then((workData) => {
          this.work = workData.data
        })
      }
    }
    </script>

    <style lang="sass" scoped>
    a
      color: blue
    </style>
