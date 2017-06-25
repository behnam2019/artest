
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

app.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin")
var worldpath = cordova.file.dataDirectory + 'www/inex.html';
loadCustomARchitectWorldFromURL(worldpath);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

loadARchitectWorld: function(architectWorld){

app.wikitudePlugin.isDeviceSupported(function() {


app.wikitudePlugin.setOnUrlInvokeCallback(app.onUrlInvoke);
app.wikitudePlugin.loadARchitectWorld(function successFn(loadedURL) {

}, function errorFn(error) {
alert('Loading AR web view failed: ' + error);
},
architectWorld.path, architectWorld.requiredFeatures, architectWorld.startupConfiguration

);
}, function(errorMessage) {
alert('device suport nemikonad');
alert(errorMessage)
},
architectWorld.requiredFeatures
);

},

loadCustomARchitectWorldFromURL: function(url) {
        var world = {
            "path": url,
            "requiredFeatures": [
                "2d_tracking",
                "geo"
            ],
            "startupConfiguration": {
                "camera_position": "back"
            }
        };
        app.loadARchitectWorld(world);
    },


onUrlInvoke: function (url) {
if (url.indexOf('captureScreen') > -1) {

}
else{

    alert(url + "not handled");

}
}




};

