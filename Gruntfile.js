
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/form5-tabs.css': 'src/form5-tabs.scss'
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'dist/form5-tabs.min.css': 'dist/form5-tabs.css'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/form5-tabs.min.js': 'src/form5-tabs.js'
        }
      }
    },
    jshint: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['*.js'],
            dest: 'dist/'
          }
        ],
        options: {
          jshintrc: '.jshintrc' // Read hinting options from .jshintrc
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  return grunt.registerTask('build', ['sass', 'cssmin', 'jshint', 'uglify']);
};
