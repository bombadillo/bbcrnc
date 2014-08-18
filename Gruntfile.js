module.exports = function(grunt) {
 
    grunt.initConfig({
 
		copy: {
			bootstrapCss: {
				// set working folder / root to copy
				cwd: 'node_modules/bootstrap/less',  
				// copy all files and subfolders
				src: '**/*',        
				// destination folder   
				dest: 'css/_vendor/bootstrap',    
				// required when using cwd
				expand: true           
			},
			bootstrapJs: {
				// set working folder / root to copy
				cwd: 'node_modules/bootstrap/dist/js/',  
				// copy all files and subfolders
				src: 'bootstrap.js',        
				// destination folder   
				dest: 'js/_vendor/',    
				// required when using cwd
				expand: true    				
			}
		},

		clean : {
		    yourTarget : {
		        src : [ 
		        	"css/_vendor/bootstrap/variables.less"
		        ]
		    }
		},

        // Our JSHint options
        jshint: {
        	options: {
            	reporter: require('jshint-stylish'),
            	strict: false
        	},
        	// Files to lint
            all: ['js/*.js', 'js/controllers/*.js', 'js/models/*.js', 'js/templates/*.js', 'js/views/*.js'] 
        },

        // Our Browserify options
		browserify: {
			app: {
				files: {
					'js/app.bundle.js': ['js/app.js'],
					'js/app.bundle.test.js': ['js/app.test.js']
				},
				options: {
					transform: ['jstify']
				}
			}
		},   

	    // Our Uglify options
	    uglify: {
	        js: {
	            files: {
	            	// Create minified/obfuscated version.
	                'js/app.bundle.min.js': ['js/app.bundle.js'] 
	            }
	        }
	    },

	    // Our CSSMin options
		cssmin: {
			combine: {
				files: {
				  'css/main.css': ['css/main.css', 'css/normalize.css']
				}
			}
		},
 
		// Our LESS options
		less: {
		    production: {
		        files: {
		            "css/main.css": "css/main.less"
		        }
		    }
		},

		// Our Watch options
		watch: {
			css: {				
		    	files: "css/**/*.less",
		    	tasks: ["less"]
		    },
		    scripts: {
		    	files: ["js/**/*.js", "!js/app.bundle.js", "!js/app.bundle.test.js"],
		    	tasks: ["browserify"]
		    }
		}			  

    });

    // Load our tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
 
    // Default tasks to run
    grunt.registerTask('default', ['jshint', 'browserify', 'uglify', 'cssmin', 'less']);

    // Development tasks.
	grunt.registerTask('dev', ['jshint', 'browserify', 'less', 'cssmin']);
	// Production tasks.
	grunt.registerTask('prod', ['jshint', 'browserify', 'uglify', 'less', 'cssmin']);    
}