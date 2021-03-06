module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            src: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %>*/\n\n'
                },
                files: {
                    'dist/react-fusioncharts.min.js': ['src/react-fusioncharts-non-jsx.js']
                }
            }
        },
        copy: {
            core: {
                files: [
                    {src:'dist/react-fusioncharts.js', dest: 'examples/bower_components/react-fusioncharts-plugin/react-fusioncharts.js'},
                    {src:'dist/react-fusioncharts.min.js', dest: 'examples/bower_components/react-fusioncharts-plugin/react-fusioncharts.min.js'}
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadTasks('./grunt-tasks');
    //grunt.registerTask('default', ['makeDemos:demos', 'uglify', 'copy']); // For gh-pages branch only
    grunt.registerTask('default', ['uglify', 'copy']); // For other branches
};
