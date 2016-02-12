module.exports = function(grunt) {

  grunt.initConfig({
    concurrent: {
      tasks: ['shell', 'nodemon'],
      options: {
        logConcurrentOutput: true
      }
    },
    shell: {
      mongo: {
        command: 'mongod',
        options: {
          async: true
        }
      }
    },
    nodemon: {
      dev: {
        script: "bin/www",
      }
    },
    'mongo-drop': {
            options: {
                dbname: 'posts',
                host: 'localhost'
            }
        }
  });


  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-mongo-drop-task');


  grunt.registerTask('drop', ['mongo-drop']);
  grunt.registerTask('default', ['concurrent']);

};
