'use strict';
import path from 'path';
import koa from 'koa'
import Router from 'koa-router'
import logger from 'koa-logger'
//import staticCache from 'koa-static-cache'
import staticServ from 'koa-static'
import bodyParser from 'koa-bodyparser'

import routeList from './routes/routes'
import render from './lib/render'
import jsonFormat from './util/JsonFormat'

global.CONFIG = require('./' + process.argv[2]);
const app = koa();
const api = new Router();

app.use(bodyParser());
app.use(api.routes())
   .use(api.allowedMethods());

routeList(api);

if(typeof staticCache != "undefined"){
	app.use(staticCache(path.join(__dirname, 'ng2'), {
	  maxAge:24 * 60 * 60
	}))
}else{
	app.use(staticServ(path.join(__dirname, 'ng2')));
}
api.get('/', index)

function* index(next) {	
	let _data = {title: '首页', result: jsonFormat.success('成功')};
	this.body = yield render('index', _data);
}

app.listen('3002', ()=>{console.log('listening on port 3002')});