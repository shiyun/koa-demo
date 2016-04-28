'use strict';
const path = require('path'); 
const koa = require('koa'); 
const Router = require('koa-router');
const logger = require('koa-logger');
//const staticCache = require('koa-static-cache');
const staticServ = require('koa-static');
const bodyParser = require('koa-bodyparser');
const routeList = require('./routes/routes');
const render = require('./lib/render');
const jsonFormat = require('./util/JsonFormat');


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