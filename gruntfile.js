module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
        options : {
            target: 'es5',
            sourceMap: false
        },
      default : {
          src: [ "ts/*.ts" ],
          outDir: "js/",
          watch: "./ts/"
      }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);
};