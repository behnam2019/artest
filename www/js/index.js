var app = {
  // initialization
  initialize: function() {
    this.bindEvents();
  },
    // set event
  bindEvents: function() {
    document.addEventListener('deviceready', app.onDeviceReady, false);
  },

  onDeviceReady: function() {
    wikitudePlugin.isDeviceSupported(
      app.onDeviceSupported,
        app.onDeviceNotSupported,
        [ "2d_tracking"]
    );
  },

  // run on AR supported Devices
  onDeviceSupported: function() {
    wikitudePlugin.loadARchitectWorld(
      app.onARExperienceLoadedSuccessful, 
      app.onARExperienceLoadError,
      "www/ar.html",
      [ "2d_tracking"],
      {"camera_position": "back"}
    );
  },

  // if device isnt supported, show error
  onDeviceNotSupported: function(errorMessage) {
    alert(errorMessage);
  },

  // if AR hass been loaded successfully
  onARExperienceLoadedSuccessful: function(loadedURL) {
  },

  // if AR has not been loaded, show error message
  onARExperienceLoadError: function(errorMessage) {
    alert('Loading AR web view failed: ' + errorMessage);
  }
};

app.initialize();
