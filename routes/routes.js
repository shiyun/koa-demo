'use strict';
import contrl from  '../controllers'

function rourtes(app){
	app.get(/^\/ng\/?/, contrl.ng2Ctrl);
}

module.exports = rourtes;