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
    }
  });


  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-shell-spawn');

  grunt.registerTask('default', ['concurrent']);

};
