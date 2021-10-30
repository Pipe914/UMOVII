App({
  globalData: {
    dataUser1: {
      mail: "juanc@unisabana.edu.co",
      pass: "unapass1",
      tipoUser: "Pasajero",
      nombre: "Juan",
      telefono: "Caicedo",
    },
    dataUserRegister: {
      mail: "",
      pass: "",
      tipoUser: "Conductor",
      nombre: "",
      telefono: "",
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