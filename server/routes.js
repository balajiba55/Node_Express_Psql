'use strict';

module.exports = function(app){
	//insert roots here
	app.use('/api/users', require('./api/users'));
};