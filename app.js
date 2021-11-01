App({
  globalData: {
    dataUser1: {
      mail: "juanc@unisabana.edu.co",
      pass: "unapass1",
      tipoUser: "Pasajero",
      nombre: "Juan",
      telefono: "3228529597",
      estado: 0,
      textpuntopartida: "Punto de partida",
      textpuntollegada: "Destino",
      puntoPartida: {
        latitude: 0,
        longitude: 0,
      },
      puntoLlegada: {
        latitude: 0,
        longitude: 0,
      },

    },
    dataUserRegister: {
      mail: "",
      pass: "",
      tipoUser: "Conductor",
      nombre: "",
      telefono: "",
      estado: 0,
       textpuntopartida: "Punto de partida",
      textpuntollegada: "Destino",
      puntoPartida: {
        latitude: 0,
        longitude: 0,
      },
      puntoLlegada: {
        latitude: 0,
        longitude: 0,
      },
      carro: {
        modelo: "",
        cupo: 0,
      },
      viaje: {
        precio: 0,
        hora: "00:00"
      }
    },
    predetSitios: {
      sitio1: {
        nombre: "Casa",
      direccion: "calle 127 #32-15",
      latitude: 4.726260,
      longitude: -74.099270,
      },
      sitio2: {
        nombre: "Universidad",
      direccion: "Universidad de La Sabana - Chia",
      latitude: 4.863383730147097, 
      longitude: -74.03375563856136,
      },
      sitio3: {
        nombre: "Portal Norte",
      direccion: "Calle 170",
      latitude: 4.75495640683143, 
      longitude: -74.0455804646636,
      }
      
      
    }
  }
  ,
  onLaunch(options) {
    // Page opens for the first time
    console.info('App onLaunch');
  },
  onShow(options) {
    // Reopened by scheme from the background
  },
});