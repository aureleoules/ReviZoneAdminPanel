module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'js/jquery.min.js',
                    'js/angular/angular.min.js',
                    'js/angular/revizone.js',
                    'js/angular/angular-route.min.js',
                    'js/bootstrap/bootstrap.min.js',
                    'js/angular/revizone.controllers.js',
                    'js/angular/revizone.constants.js',
                    'js/angular/revizone.services.js',
                    'js/momentjs/moment.js',
                    'js/angular/directives/*'

                ],
                dest: 'build/js/scripts.js'
            },
            css: {
                src: [
                    'css/fonts/imports.css', //must be the first imported file
                    'css/bootstrap/bootstrap.css',
                    'css/bootstrap/rdash.css',
                    'css/animate/animate.css',
                    'css/styles.css'
                ],
                dest: 'build/css/styles.css'
            }
        },
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js', 'ngAnnotate', 'uglify:js']
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat:css', 'cssmin:css']
            },
            dev: {
                files: ['js/**/*.js'],
                tasks: ['concat:js']
            }
        },
        uglify: {
            js: {
                files: {
                    'build/js/scripts.js': ['build/js/scripts.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,

            },
            css: {
                files: {
                    'build/css/styles.css': ['build/css/styles.css']
                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    'build/js/scripts.js': ['build/js/scripts.js']
                }
            }
        },
        copy: {
            icons: {
                flatten: true,
                expand: true,
                src: 'css/icons/*',
                dest: 'build/icons/',
            },
            fonts: {
                flatten: true,
                expand: true,
                src: 'css/fonts/*',
                dest: 'build/fonts',
            },
        },
    });

    grunt.registerTask('default', ['js', 'css']);
    grunt.registerTask('js', ['concat:js', 'ngAnnotate', 'uglify:js']);
    grunt.registerTask('css', ['concat:css', 'cssmin:css', 'copy:icons', 'copy:fonts']);

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-ng-annotate');

}
