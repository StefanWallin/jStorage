module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		qunit: {
			src: ['tests/index.htm']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.registerTask('test', 'qunit:src');

	// Default task(s).
	grunt.registerTask('default', ['test']);
};