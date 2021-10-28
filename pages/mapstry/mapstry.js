Page({
  data: {
    scale: 20,
    longitude: 0,
    latitude: 0,
  },

  onReady(e) {
    // Use my.createMapContext to obtain the map context.
    this.mapCtx = my.createMapContext('map')
    this.mapCtx.gestureEnable({ isGestureEnable: 1 });
  },

  getCenterLocation() {
    this.mapCtx.getCenterLocation(function (res) {
      console.log(res.longitude)
      console.log(res.latitude)
    })
  },

  moveToLocation() {
    this.mapCtx.moveToLocation()
  },

  regionchange(e) {
    console.log('regionchange', e);
    // Note: If the user zooms in or zooms out the map, reset the value of scale of the onRegionChange function before setting the latitude and longitude of the location. Otherwise the map restores to the original size.
    if (e.type === 'end') {
      this.setData({
        scale: e.scale
      });
    }
  },

  markertap(e) {
    console.log('marker tap', e);
  },

  controltap(e) {
    console.log('control tap', e);
  },

  tap() {
    console.log('tap:');
  },

  changeScale() {
    this.setData({
      scale: 8,
    });
  },

  changeCenter() {
    this.setData({
      latitude: 1.343573,
      longitude: 103.867935,
      includePoints: [{
        latitude: 1.351028,
        longitude: 103.861018,
      }],
    });
  },
  //An indicator of whether to support gesture events. When isGestureEnable is 1, gesture events are supported. Otherwise gesture events are not supported.
  gestureEnable() {
    this.mapCtx.gestureEnable({ isGestureEnable: 1 });
  },
  //An indicator of whether to show the compass. When isShowCompass is 1, display the compass. Otherwise the compass is not displayed.
  showsCompass() {
    this.mapCtx.showsCompass({ isShowsCompass: 1 });
  },
  changeMarkers() {
    this.setData({
      markers: [{
        iconPath: "/image/green_tri.png",
        id: 10,
        latitude: 1.351028,
        longitude: 103.861018,
        width: 50,
        height: 50
      }],
      includePoints: [{
        latitude: 1.350428,
        longitude: 103.861718,
      }],
    });
  },
  getLoc(res) {
    my.showLoading({ content: "Obteniendo Ubicacion ...", });
    var long = 0;
    var lat = 0;
    const that = this
    my.getLocation({
      success(res) {
        my.hideLoading();
        console.log(res);
        lat = res.latitude;
        long = res.longitude;
        that.setData({
          latitude: lat,
          longitude: long,
        });
        console.log(lat + long);
        my.alert({ title: parseFloat(lat), });

      },
      fail() {
        my.hideLoading();
        my.alert({ title: 'location failed' });
      },
    })
    console.log(lat + long);

  },

})