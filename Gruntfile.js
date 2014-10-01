module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        replace: {
            example: {
                src: ['src/index.html'],             // source files array (supports minimatch)
                dest: 'dist/',             // destination directory or file
                replacements: [{
                    from: 'image-gallery-three.js',                   // string replacement
                    to: 'image-gallery-three.min.js'
                },{
                    from: 'assets.js',                   // string replacement
                    to: 'assets.min.js'
                },{
                    from: 'image-gallery-three.css',                   // string replacement
                    to: 'image-gallery-three.min.css'
                },{
                    from: 'style.css',                   // string replacement
                    to: 'style.min.css'
                }]
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/js/image-gallery-three.min.js': ['src/js/image-gallery-three.js'],
                    'dist/js/assets.min.js': ['src/js/assets.js']
                }
            }
        },
        cssmin : {
            styles: {
                src: ['src/css/image-gallery-three.css'],
                dest: 'dist/css/image-gallery-three.min.css'
            },
            styles: {
                src: ['src/css/style.css'],
                dest: 'dist/css/style.min.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['replace', 'uglify', 'cssmin']);

};