var dest = "./public";
var src = "./src";

module.exports = {
  sass: {
    src: src + "/sass/**/*.{sass,scss}",
    dest: dest,
    settings: {
      indentedSyntax: true,
      imagePath: 'images'
    }
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  fonts: {
    src: src + '/fonts/**/*',
    dest: dest + "/fonts/",
    extensions: ['woff2', 'woff', 'eot', 'ttf', 'svg']
  },
  production: {
    cssSrc: dest + '/*.css',
    dest: dest
  }
};
