'use strict';
const contrl = require('../controllers');

function rourtes(app){
	app.get(/^\/ng\/?/, contrl.ng2Ctrl);
}

module.exports = rourtes;