/**
 * Created by Dhruba on 21-Jul-15.
 */
module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        less: {
            dev: {
                options: {
                    paths: 'client/assets/styles',
                    sourceMap: true,
                    sourceMapFileInline: true,
                    relativeUrls: true
                },
                files: {
                    'client/assets/styles/app.css': 'client/assets/styles/app.less'
                }
            }
        },
        cssmin: {
            dist: {
                options: {
                    keepBreaks: false,
                    keepSpecialComments: '0',
                    rebase: true,
                    relativeTo: 'client/assets/styles',
                    target: 'public/assets/styles'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'client/assets/styles',
                        src: ['*.css'],
                        dest: 'public/assets/styles',
                        ext: '.min.css'
                    }
                ]
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'client/assets/**/*',
                    'client/app/*.js',
                    'client/app/**/*.js',
                    'client/*.html',
                    'client/app/**/*/html',
                    '!client/assets/**/*.less'
                ]
            },
            less: {
                files: ['client/assets/styles/*.less'],
                tasks: ['less:dev']
            }
        },
        connect: {
            dev: {
                options: {
                    port: 8080,
                    protocol: 'http',
                    hostname: '127.0.0.1',
                    base: ['client'],
                    livereload: true
                }
            },
            prod: {
                options: {
                    port: 9090,
                    protocol: 'http',
                    hostname: '127.0.0.1',
                    base: ['client'],
                    livereload: true
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:8080'
            },
            prod: {
                path: 'http://localhost:9090'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('compile', 'Compile application assets', function(target) {
        if(target && target === 'dist') {
            return grunt.task.run('less:dev', 'cssmin:dist');
        }

        grunt.task.run('less:dev');
    });

    grunt.registerTask('dev', ['compile:dev', 'connect:dev', 'open:dev', 'watch']);

    grunt.registerTask('prod', ['compile:dist', 'connect:prod', 'open:prod', 'watch']);

    grunt.registerTask('default', ['dev']);

};
