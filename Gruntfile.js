module.exports = function(grunt) {

    // live reload port
    var lrPort = 35729;
    var lrSnippet = require('connect-livereload')({ port: lrPort });
    var lrModdleware = function(connect, options) {
        return [
            lrSnippet,
            connect.static(options.base),
            connect.directory(options.base)
        ];
    };

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            basePath: './',
            srcPath: './src/scss/',
            deployPath: './build/'
        },

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        connect: {
            options: {
                port: 8008,
                hostname: 'localhost',
                base: '.'
            },
            livereload: {
                options: {
                    middleware: lrModdleware
                }
            }
        },

        // Task configuration.
        sass: {
            dist: {
                files: {
                    '<%= meta.deployPath %>style.css': '<%= meta.srcPath %>style.scss'
                },
                options: {
                    // sourcemap: 'true'
                }
            }
        },
        watch: {
            client: {
                options: {
                    livereload: lrPort
                },
                files: ['*.html','src/*','resource/*'] 
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task.
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('watch',['connect', 'watch']);
};