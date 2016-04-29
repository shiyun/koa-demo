'use strict';
import render from '../lib/render'
import jsonFormat from '../util/JsonFormat'

function Routes(){

}

Routes.prototype.ng2Ctrl = function* (next){
	//let _data = {title: '首页', result: jsonFormat.success('消息1')};
	//this.body = yield render('index', _data);
	this.redirect('/');
}

module.exports = new Routes();