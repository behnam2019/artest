var World = {
    loaded: false,

  // Initialize the process
    init: function initFn() {
        this.createOverlays();
    },

  // Determine Overlay
    createOverlays: function createOverlaysFn() {
        this.tracker = new AR.ClientTracker("www/img/magazine.wtc");
        var imgOne = new AR.ImageResource("www/img/imageOne.png");
        var overlayOne = new AR.ImageDrawable(imgOne, 1, {
            offsetX: -0.15,
            offsetY: 0
        });
        var pageOne = new AR.Trackable2DObject(this.tracker, "*", {
            drawables: {
                cam: overlayOne
            }
        });
    }

};

World.init();
