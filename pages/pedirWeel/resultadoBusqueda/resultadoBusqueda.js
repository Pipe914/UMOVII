const app = getApp();
let user1 = app.globalData.dataUser1;
let user2 = app.globalData.dataUserRegister;
Page({
  data: {
    nombreActivo: "",
    precio: "",
    hora: "",
    cupos: 0,
    markers: [{
      latitude: 0,
      longitude: 0,
      id: 1,
    }, {
      latitude: 0,
      longitude: 0,
      id: 2,
    }],

  },
  onLoad() { },
  onReady() {
    const that = this;
    if (user1.tipoUser == "Conductor") {
      that.setData({
        nombreActivo: user1.nombre,
        precio: user1.viaje.precio,
        hora: user1.viaje.hora,
        cupos: user1.carro.cupo,
        markers: [user1.puntoPartida,user1.puntoLlegada]
      })
    } else if (user2.tipoUser == "Conductor") {
      that.setData({
        nombreActivo: user2.nombre,
        precio: user2.viaje.precio,
        hora: user2.viaje.hora,
        cupos: user2.carro.cupo,
        markers: [user2.puntoPartida,user2.puntoLlegada]
      })
    }
    console.log(this.data)
    this.mapCtx = my.createMapContext('map')
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
  popUp() {
    if (this.data.nombreActivo == "") {
      my.confirm({
        title: 'Juan Caicedo',
        content: 'Cupos: 2',
        confirmButtonText: 'Reservar Ahora',
        cancelButtonText: 'Seguir Mirando',
        success: (result) => {
          if (result.confirm) {
            my.alert({
              title: `${'Viaje reservado con exito'}`,
            });
            my.redirectTo({
              url: '../../splash/splash',
            });
          }

        },
      })
    } else {
      my.confirm({
        title: this.data.nombreActivo,
        content: this.data.cupos,
        confirmButtonText: 'Reservar Ahora',
        cancelButtonText: 'Seguir Mirando',
        success: (result) => {
          if (result.confirm) {
            my.alert({
              title: `${'Viaje reservado con exito'}`,
            });
            my.redirectTo({
              url: '../../splash/splash',
            });
          }

        },
      })
    }

  },
});
