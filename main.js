var application = require('app'),
    BrowserWindow = require('browser-window');
application.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        center:true,
        title:"Electron Shell Demo"
    });
    mainWindow.loadUrl('file://' + __dirname + '/main.html');
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});