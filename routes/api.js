'use strict';
import createRand from '../util/randSixNum';
import jsonFormat from '../util/jsonFormat';

function apiRouter(app){
	app.post('/getVeriCode', function* (ctx, next){
		console.log(this.request.body);
		let rnd = createRand();
		this.session.veriCode = rnd;
		this.body = jsonFormat.success(rnd);
	});


}

module.exports = apiRouter;