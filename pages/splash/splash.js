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
    if (this.data.nombreActiveUser == "dataUserRegister") {
      that.setData({
        markers: [{
          latitude: app.globalData.dataUserRegister.puntoPartida.latitude,
          longitude: app.globalData.dataUserRegister.puntoPartida.longitude,
          id: 1,
        }, {
          latitude: app.globalData.dataUserRegister.puntoLlegada.latitude,
          longitude: app.globalData.dataUserRegister.puntoLlegada.longitude,
          id: 2,
        }],
      })
    } else {
      that.setData({
        markers: [{
          latitude: app.globalData.dataUser1.puntoPartida.latitude,
          longitude: app.globalData.dataUser1.puntoPartida.longitude,
          id: 1,
        }, {
          latitude: app.globalData.dataUser1.puntoLlegada.latitude,
          longitude: app.globalData.dataUser1.puntoLlegada.longitude,
          id: 2,
        }],
      })
    }
    this.mapCtx.showRoute({
      searchType: "drive",         // searchType: "walk", "bus", "drive", "ride". Default value: walk. Added in v10.1.50.
      startLat: this.data.markers[0].latitude,        // The latitude of the start point.
      startLng: this.data.markers[0].longitude,       // The longitude of the start point.
      endLat: this.data.markers[1].latitude,         //  The latitude of the end point.
      endLng: this.data.markers[1].longitude,        // The longitude of the end point.
      // throughPoints: [{ lat: 1.343573, lng: 103.861916 }],// A set of points on the route. It is only available for driving planning, that is, available when searchType="drive". Added in v10.1.50.
      routeColor: '#FFB90F',       // The color of the route. This parameter takes effect only in 2D maps in versions later than 10.1.50.
      iconWidth: 10,           // The width of the texture. In v10.1.35, this parameter takes effect only when iconPath is specified. We recommend that you do not specify this parameter in v10.1.50. A default texture width is set in 3D maps.
      routeWidth: 10,          // The width of the route. This parameter takes effect when texture is not used. We recommend that you do not specify this parameter in v10.1.50, because a default value is set in 2D maps and it is no longer required in 3D maps.
      zIndex: 4,             // The z-axis index of the overlay 10.1.35
      mode: 0,             // Only supported in driving and public transit modes. For more information about its values, see the mode values list below.
    });


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
    this.mapCtx.showRoute({
      searchType: "drive",         // searchType: "walk", "bus", "drive", "ride". Default value: walk. Added in v10.1.50.
      startLat: this.data.markers[0].latitude,        // The latitude of the start point.
      startLng: this.data.markers[0].longitude,       // The longitude of the start point.
      endLat: this.data.markers[1].latitude,         //  The latitude of the end point.
      endLng: this.data.markers[1].longitude,        // The longitude of the end point.
      // throughPoints: [{ lat: 1.343573, lng: 103.861916 }],// A set of points on the route. It is only available for driving planning, that is, available when searchType="drive". Added in v10.1.50.
      routeColor: '#FFB90F',       // The color of the route. This parameter takes effect only in 2D maps in versions later than 10.1.50.
      iconWidth: 10,           // The width of the texture. In v10.1.35, this parameter takes effect only when iconPath is specified. We recommend that you do not specify this parameter in v10.1.50. A default texture width is set in 3D maps.
      routeWidth: 10,          // The width of the route. This parameter takes effect when texture is not used. We recommend that you do not specify this parameter in v10.1.50, because a default value is set in 2D maps and it is no longer required in 3D maps.
      zIndex: 4,             // The z-axis index of the overlay 10.1.35
      mode: 0,             // Only supported in driving and public transit modes. For more information about its values, see the mode values list below.
    });
  },
  onTapProfile() {
    my.redirectTo({
      url: '../profile/mainProfile/mainProfile'
    });
  },
  BuscarSitios() {
    my.redirectTo({
      url: '../pedirWeel/selecUbicacion/selecUbicacion'
    });
  },
  pasarPagina() {
    if (this.data.nombreActiveUser == "dataUserRegister") {
      if (app.globalData.dataUserRegister.tipoUser == "Pasajero") {
        my.redirectTo({
          url: '../pedirWeel/resultadoBusqueda/resultadoBusqueda'
        });
      } else {
        my.redirectTo({
          url: '../pedirWeel/detallesWeels/detallesWeels'
        });
      }

    } else {
      if (app.globalData.dataUser1.tipoUser == "Pasajero") {
        my.redirectTo({
          url: '../pedirWeel/resultadoBusqueda/resultadoBusqueda'
        });
      } else {
        my.redirectTo({
          url: '../pedirWeel/detallesWeels/detallesWeels'
        });
      }

    }

  },


});
