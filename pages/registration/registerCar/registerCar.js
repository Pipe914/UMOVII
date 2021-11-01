const app = getApp()
Page({
  data: {},
  onLoad() { },
  formSubmitRegistrar: function (e) {
    let modelo = e.detail.value.modelo;
    let cupo = e.detail.value.cupo;
    if (modelo != "" && cupo != "") {
      if (app.globalData.dataUserRegister.tipoUser == "Conductor") {
        app.globalData.dataUserRegister.carro.modelo = "" + modelo + "";
        app.globalData.dataUserRegister.carro.cupo = cupo;
        my.alert({
          title: "Registro exitoso",
          button: "Ok"
        })
        setTimeout(function () {
          my.redirectTo({
            url: '../../splash/splash'
          });
        }, 2000);
      }
    } else {
      my.alert({
        title: "Campos incompletos",
        content: "Se deben rellenar todos los campos",
        button: "Ok"
      });
    }
  }
});
