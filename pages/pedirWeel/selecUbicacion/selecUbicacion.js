const app = getApp()
let user1 = app.globalData.dataUser1;
let user2 = app.globalData.dataUserRegister;
Page({
  data: {
    style: "display: none;",
    puntoPartida: false,
    textPuntoPartida: "",
    textPuntoLlegada: "",
    sitios: {
      sitio1: {
        nombre: "",
        direccion: "",
        latitude: 0,
        longitude: 0,
      },
      sitio2: {
        nombre: "",
        direccion: "",
        latitude: 0,
        longitude: 0,
      },
      sitio3: {
        nombre: "",
        direccion: "",
        latitude: 0,
        longitude: 0,
      },
    }
  },
  onLoad() { },
  onReady() {
    const that = this
    that.setData({
      sitios: app.globalData.predetSitios,
    })
    console.log(this.data)
  },
  appearDiv() {
    const that = this;
    that.setData({
      style: "display: block;"
    })
  },
  sitio1F() {
    const that = this;
    if (this.data.puntoPartida == false) {
      if (user1.estado == 1) {
        app.globalData.dataUser1.puntoPartida.latitude = this.data.sitios.sitio1.latitude;
        app.globalData.dataUser1.puntoPartida.longitude = this.data.sitios.sitio1.longitude;
        app.globalData.dataUser1.textpuntopartida =  this.data.sitios.sitio1.nombre;
      } else {
        app.globalData.dataUserRegister.puntoPartida.latitude = this.data.sitios.sitio1.latitude;
        app.globalData.dataUserRegister.puntoPartida.longitude = this.data.sitios.sitio1.longitude;
        app.globalData.dataUserRegister.textpuntopartida =  this.data.sitios.sitio1.nombre;
      }
      that.setData({
        textPuntoPartida: this.data.sitios.sitio1.nombre,
        style: "display: none;",
        puntoPartida: true
      })
    } else {
      if (user1.estado == 1) {
        app.globalData.dataUser1.puntoLlegada.latitude = this.data.sitios.sitio1.latitude;
        app.globalData.dataUser1.puntoLlegada.longitude = this.data.sitios.sitio1.longitude;
        app.globalData.dataUser1.textpuntollegada = this.data.sitios.sitio1.nombre;
      } else {
        app.globalData.dataUserRegister.puntoLlegada.latitude = this.data.sitios.sitio1.latitude;
        app.globalData.dataUserRegister.puntoLlegada.longitude = this.data.sitios.sitio1.longitude;
        app.globalData.dataUserRegister.textpuntollegada = this.data.sitios.sitio1.nombre;
      }
      that.setData({
        textPuntoLlegada: this.data.sitios.sitio1.nombre,
        style: "display: none;"
      })
      
    
      setTimeout(function () {
        my.redirectTo({
          url: '../../splash/splash'
        });
      }, 2000);
    }
    
  },
  sitio2F() {
    const that = this;
    if (this.data.puntoPartida == false) {
      if (user1.estado == 1) {
        app.globalData.dataUser1.puntoPartida.latitude = this.data.sitios.sitio2.latitude;
        app.globalData.dataUser1.puntoPartida.longitude = this.data.sitios.sitio2.longitude;
        app.globalData.dataUser1.textpuntopartida = this.data.sitios.sitio2.nombre;
      } else {
        app.globalData.dataUserRegister.puntoPartida.latitude = this.data.sitios.sitio2.latitude;
        app.globalData.dataUserRegister.puntoPartida.longitude = this.data.sitios.sitio2.longitude;
        app.globalData.dataUserRegister.textpuntopartida =  this.data.sitios.sitio2.nombre;
      }
      that.setData({
        textPuntoPartida: this.data.sitios.sitio2.nombre,
        style: "display: none;",
        puntoPartida: true
      })
    } else {
      if (user1.estado == 1) {
        app.globalData.dataUser1.puntoLlegada.latitude = this.data.sitios.sitio2.latitude;
        app.globalData.dataUser1.puntoLlegada.longitude = this.data.sitios.sitio2.longitude;
        app.globalData.dataUser1.textpuntollegada =  this.data.sitios.sitio2.nombre;
      } else {
        app.globalData.dataUserRegister.puntoLlegada.latitude = this.data.sitios.sitio2.latitude;
        app.globalData.dataUserRegister.puntoLlegada.longitude = this.data.sitios.sitio2.longitude;
        app.globalData.dataUserRegister.textpuntollegada =  this.data.sitios.sitio2.nombre;
      }
      that.setData({
        textPuntoLlegada: this.data.sitios.sitio2.nombre,
        style: "display: none;"
      })

      setTimeout(function () {
        my.redirectTo({
          url: '../../splash/splash'
        });
      }, 2000);
    }

  },
  sitio3F() {
    const that = this;
    if (this.data.puntoPartida == false) {
      if (user1.estado == 1) {
        app.globalData.dataUser1.puntoPartida.latitude = this.data.sitios.sitio3.latitude;
        app.globalData.dataUser1.puntoPartida.longitude = this.data.sitios.sitio3.longitude;
        app.globalData.dataUser1.textpuntopartida = this.data.sitios.sitio3.nombre;
      } else {
        app.globalData.dataUserRegister.puntoPartida.latitude = this.data.sitios.sitio3.latitude;
        app.globalData.dataUserRegister.puntoPartida.longitude = this.data.sitios.sitio3.longitude;
        app.globalData.dataUserRegister.textpuntopartida = this.data.sitios.sitio3.nombre;
      }
      that.setData({
        textPuntoPartida: this.data.sitios.sitio3.nombre,
        style: "display: none;",
        puntoPartida: true
      })
    } else {
      if (user1.estado == 1) {
        app.globalData.dataUser1.puntoLlegada.latitude = this.data.sitios.sitio3.latitude;
        app.globalData.dataUser1.puntoLlegada.longitude = this.data.sitios.sitio3.longitude;
        app.globalData.dataUser1.textpuntollegada = this.data.sitios.sitio3.nombre;
      } else {
        app.globalData.dataUserRegister.puntoLlegada.latitude = this.data.sitios.sitio3.latitude;
        app.globalData.dataUserRegister.puntoLlegada.longitude = this.data.sitios.sitio3.longitude;
        app.globalData.dataUserRegister.textpuntollegada = this.data.sitios.sitio3.nombre;
      }
      that.setData({
        textPuntoLlegada: this.data.sitios.sitio3.nombre,
        style: "display: none;"
      })
      setTimeout(function () {
        my.redirectTo({
          url: '../../splash/splash'
        });
      }, 2000);
    }

  }
});
