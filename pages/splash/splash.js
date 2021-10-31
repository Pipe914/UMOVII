const app = getApp()
Page({
  data: {
    scale: 12,
    longitude: 120.107822,
    latitude: 30.267023,
    textpuntopartida: "Punto de partida",
    textpuntollegada: "Destino",
    primerToque: false,
    nombreActiveUser: "",
    markers: [{
      latitude: 0,
      longitude: 0,
      id: 1,
    }, {
      latitude: 0,
      longitude: 0,
      id: 2,
    }],

    textInfo: "Selecciona tu punto de partida",

  },
  onLoad(e) {

  },
  onReady(e) {
    console.log(app.globalData.dataUser1.textpuntopartida)
    console.log(app.globalData.dataUserRegister.textpuntopartida)
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
    let estado1 = app.globalData.dataUserRegister.estado;
    let estado2 = app.globalData.dataUser1.estado;
    if (estado1 == 1) {
      that.setData({
        nombreActiveUser: "dataUserRegister",
        textpuntopartida: app.globalData.dataUserRegister.textpuntopartida,
        textpuntollegada: app.globalData.dataUserRegister.textpuntollegada,
      })
    } else if (estado2 == 1) {
      that.setData({
        nombreActiveUser: "dataUser1",
        textpuntopartida: app.globalData.dataUser1.textpuntopartida,
        textpuntollegada: app.globalData.dataUser1.textpuntollegada,
      })
    }

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
        primerToque: false,
      })

    }
    console.log(this.data);
    if (that.data.nombreActiveUser == "dataUser1") {
      app.globalData.dataUser1.puntoPartida.latitude = that.data.markers[0].latitude;
      app.globalData.dataUser1.puntoPartida.longitude = that.data.markers[0].longitude;
      app.globalData.dataUser1.puntoLlegada.longitude = that.data.markers[1].longitude;
      app.globalData.dataUser1.puntoLlegada.latitude = that.data.markers[1].latitude;
    } else if (that.data.nombreActiveUser == "dataUserRegister") {
      app.globalData.dataUserRegister.puntoPartida.latitude = that.data.markers[0].latitude;
      app.globalData.dataUserRegister.puntoPartida.longitude = that.data.markers[0].longitude;
      app.globalData.dataUserRegister.puntoLlegada.longitude = that.data.markers[1].longitude;
      app.globalData.dataUserRegister.puntoLlegada.latitude = that.data.markers[1].latitude;
    }
    console.log(app.globalData)
  },
  onTapProfile() {
    my.redirectTo({
      url: '../profile/mainProfile/mainProfile'
    });
  },
  BuscarSitios(){ 
    my.redirectTo({
      url: '../pedirWeel/selecUbicacion/selecUbicacion'
    });
  },


});
