'use strict';
import render from '../lib/render'
import jsonFormat from '../util/JsonFormat'

function Routes(){

}

Routes.prototype.ng2Ctrl = function* (next){
	//this.redirect('/');
	let _data = {title: '首页', result: jsonFormat.success('消息1')};
	this.body = yield render('index', _data);	
}

module.exports = new Routes();