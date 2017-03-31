module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

     responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{

           width: 300,
            suffix: '_small',
            quality: 90
          } ]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'iii/',
          dest: 'iii/'
        }]
      }
    },



    /* Copy the "fixed" images that don't go through processing into the images/directory */


  });

  grunt.loadNpmTasks('grunt-responsive-images');


  grunt.registerTask('default', ['responsive_images']);

};