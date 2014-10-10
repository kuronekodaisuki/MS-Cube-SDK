var tcpServer = require('./lib/tcpServer.js');
var webServer = require('./lib/webServer.js');

// setup kinect data
var kinectData = {};
kinectData.skeletonCount = 0;
kinectData.skeletons = [];
for (var s=0; s < 6; s++) {
	kinectData.skeletons[s] = [];
	for (var j=0; j < 25; j++)
	{
		kinectData.skeletons[s][j] = {};
		kinectData.skeletons[s][j].x = 0;
		kinectData.skeletons[s][j].y = 0;
		kinectData.skeletons[s][j].z = 0;
	}
}

tcpServer.start('127.0.0.1', 3000, kinectData);
webServer.start('127.0.0.1', 8000, kinectData);