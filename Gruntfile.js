/**
 * Created by Dhruba on 21-Jul-15.
 */
module.exports = function (grunt) {

    grunt.initConfig({
        less: {
            dev: {
                options: {
                    paths: 'app/assets/styles',
                    sourceMap: true,
                    sourceMapFileInline: true,
                    relativeUrls: true
                },
                /*
                 list of files which will be compiled from LESS to CSS
                 destination : source
                 */
                files: {
                    'app/assets/styles/app.css': 'app/assets/styles/app.less'
                }
            }
        },
        cssmin: {
            dev: {
                options: {
                    keepBreaks: true,
                    keepSpecialComments: '*',
                    rebase: true,
                    relativeTo: 'app/assets/styles',
                    target: 'app/dist/css'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'app/assets/styles',
                        src: ['*.css'],
                        dest: 'app/dist/css',
                        ext: '.css'
                    }
                ]
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: 1337
                },
                files: ['app/dist/**/*']
            },
            less: {
                files: ['app/assets/styles/*.less'],
                tasks: ['less:dev', 'cssmin:dev']
            }
        },
        connect: {
            dev: {
                options: {
                    port: 8080,
                    protocol: 'http',
                    hostname: '127.0.0.1',
                    base: ['app'],
                    livereload: true
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:8080'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('compile', ['less:dev', 'cssmin:dev']);

    grunt.registerTask('dev', ['connect:dev', 'open:dev', 'watch:less']);

    grunt.registerTask('default', ['dev']);

};
