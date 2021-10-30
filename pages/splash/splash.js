Page({
  data: {
    scale: 12,
    longitude: 120.107822,
    latitude: 30.267023,
    primerToque: false,
    markers: [{
      latitude: 0,
      longitude: 0,
      id: 1,
    }, {
      latitude: 0,
      longitude: 0,
      id: 2,
    }],
    polyline: [{
      points: [{
        latitude: 30.267023,
      longitude: 120.107822,
      },{
        latitude: 30.267023,
      longitude: 120.107822,
      }],
      color: "#00000",
      width: 500,
      dottedLine: true
    }],
    textInfo: "Selecciona tu punto de partida",

  },
  onLoad(e) {

  },
  onReady(e) {
    my.showLoading({ content: "Obteniendo Ubicacion ...", });
    var long = 0;
    var lat = 0;
    const that = this
    my.getLocation({
      success(e) {
        my.hideLoading();
        console.log(e);
        lat = e.latitude;
        long = e.longitude;
        that.setData({
          latitude: lat,
          longitude: long,
        });

      },
      fail() {
        my.hideLoading();
        my.alert({ title: 'location failed' });
      },
    })
    this.mapCtx = my.createMapContext('map')
    this.mapCtx.showsCompass({ isShowsCompass: 0 });
    // this.mapCtx.gestureEnable({ isGestureEnable: 1 });

  },
  SelAdress(e) {
    console.log(e.latitude)
    const that = this;
    if (!that.data.primerToque) {
      that.setData({
        markers: [{
          latitude: e.latitude,
          longitude: e.longitude,
        }, {
          latitude: that.data.markers[1].latitude,
          longitude: that.data.markers[1].longitude,
        }],
        polyline: [{
          points: [{
            latitude: e.latitude,
          longitude: e.longitude,
          },{
            latitude: that.data.markers[1].latitude,
          longitude: that.data.markers[1].longitude,
          }]
        }],
        primerToque: true,
        // textInfo: "Selecciona tu destino",
        // estilo: "margin-left: auto; marign-right: auto;"
      })
    } else {
      that.setData({
        markers: [{
          latitude: that.data.markers[0].latitude,
          longitude: that.data.markers[0].longitude,
        }, {
          latitude: e.latitude,
          longitude: e.longitude,
        }],
        polyline: [{
          points: [{
            latitude: that.data.markers[0].latitude,
          longitude: that.data.markers[0].longitude,
          },{
            latitude: e.latitude,
          longitude: e.longitude,
          }]
        }],
        primerToque: false,
      })
    }
    console.log(this.data);
  }


});
