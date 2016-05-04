'use strict';
import path from 'path';
import koa from 'koa'
import Router from 'koa-router'
import logger from 'koa-logger'
import staticCache from 'koa-static-cache'
import staticServ from 'koa-static'
import bodyParser from 'koa-bodyparser'
import session from 'koa-session'

import routeList from './routes/routes'
import apiRouter from './routes/api'
import render from './lib/render'
import jsonFormat from './util/JsonFormat'

const configFile =  process.env.configPath !== undefined ? process.env.configPath : process.argv[2];
global.CONFIG = require('./' + configFile);
const app = koa();
const api = new Router();

app.use(bodyParser());
app.use(api.routes())
   .use(api.allowedMethods());
app.keys = ['some secret hurr'];
app.use(session(app));

routeList(api);
apiRouter(api);

if(global.CONFIG.ENV === "Release"){
	app.use(staticCache(path.join(__dirname, 'ng2'), {
	  maxAge:24 * 60 * 60 
	}))
}else{
	app.use(staticServ(path.join(__dirname, 'ng2')));
}
api.get('/', index)

function* index(next) {	
	this.session.aa = '33333'
	let _data = {title: '首页', result: jsonFormat.success('成功')};
	this.body = yield render('index', _data);
}

let port = global.CONFIG.PORT || 3002;

app.listen(port, ()=>{console.log(`listening on port ${port}`)});