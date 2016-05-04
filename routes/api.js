'use strict';
import createRand from '../util/randSixNum';
import jsonFormat from '../util/jsonFormat';

function apiRouter(app){
	app.post('/getVeriCode', function* (next){
		console.log(this.request.body);
		let rnd = createRand();
		this.session.veriCode = rnd;
		this.body = jsonFormat.success(rnd);
	});

	app.post('/apiLogin', function* (next){
		console.log(this.request.body.verifyCode);
		console.log(this.session);
		console.log(this.request);
		if(this.request.body.verifyCode == this.session.veriCode){
			this.body = jsonFormat.success('登录成功');
		}else{
			this.body = jsonFormat.fail(null, '登录失败');
		}
	});
}

module.exports = apiRouter;