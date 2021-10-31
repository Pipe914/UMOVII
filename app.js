App({
  globalData: {
    dataUser1: {
      mail: "juanc@unisabana.edu.co",
      pass: "unapass1",
      tipoUser: "Pasajero",
      nombre: "Juan",
      telefono: "3228529597",
      estado: 0,
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