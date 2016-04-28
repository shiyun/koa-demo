'use strict';
const render = require('../lib/render');
const jsonFormat = require('../util/JsonFormat');

function Routes(){

}

Routes.prototype.ng2Ctrl = function* (next){
	let _data = {title: '首页', result: jsonFormat.success('消息1')};
	this.body = yield render('index', _data);
}

module.exports = new Routes();