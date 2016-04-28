'use strict';
const path = require('path'); 
const koa = require('koa'); 
const route = require('koa-route');
const logger = require('koa-logger');
//const staticCache = require('koa-static-cache');
const staticServ = require('koa-static');
const bodyParser = require('koa-bodyparser');
const render = require('./lib/render');
const jsonFormat = require('./util/JsonFormat');

const app = koa();

app.use(bodyParser());
/*app.use(staticCache(path.join(__dirname, 'ng2'), {
  maxAge:24 * 60 * 60
}))*/

app.use(staticServ(path.join(__dirname, 'ng2')));
app.use(route.get(/^\/ng\/?/, index));


app.use(route.get('/', index));

function* index() {	
	let _data = {title: '首页', result: jsonFormat.success('成功')};
	this.body = yield render('index', _data);
}

app.listen('3002', ()=>{console.log('listening on port 3002')});