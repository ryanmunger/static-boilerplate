module.exports = function(grunt) {
	grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          },
          pretty: true
        },
        files: {
          "index.html": ["views/index.jade"]
        }
      }
    },
    sass: {
      dist: {
        files: {
          'css/styles.css' : 'sass/styles.sass'
          },
        options: {
          style: 'expanded',
          sourcemap: true
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    autoprefixer: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'sass/*.sass',
        dest: 'css/'
      },
      sourcemap: {
        options: {
          map: true
        },
        src: 'css/styles.css',
        dest: 'css/styles.css'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      files: ['views/**/*.jade', 'sass/**/*.sass', 'js/**/*.js'],
      tasks: ['jade', 'sass', 'jshint', 'autoprefixer']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
};
