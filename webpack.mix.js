let mix = require('laravel-mix');
mix
.sass('src/master.scss','css')
.setPublicPath('assets/')
.options({
   processCssUrls: false
});