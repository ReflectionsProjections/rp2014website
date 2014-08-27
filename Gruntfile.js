module.exports = function(grunt) {


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {

      },
      dist: {
        files: {

        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [],
        dest: 'dasfd'
      }

    },

    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          document: true,
          console: true,
          module: true
        }
      }
    }

  });

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register Tasks
  grunt.registerTask('default', ['uglify']);
  gulp.registerTask('js', ['jshint', 'uglify', 'concat']);
};