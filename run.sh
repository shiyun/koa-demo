#!/bin/sh

if [ "release" == ${1} ];then
	export configPath='config.release.js'
elif [ "beta" == ${1} ];then
	export configPath='config.beta.js'
else
	export configPath='config.alpha.js'
fi
pm2 stop app.js
pm2 start process.json