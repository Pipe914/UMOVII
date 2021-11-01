const app = getApp()
Page({
  data: {},
  onLoad() {},
  formSubmit: function(e){
    let modelo = e.detail.value.modelo;
    let cupos = e.detail.value.cupos;
    let precio = e.detail.value.precio;
    let hora = e.detail.value.hora;

    console.log(modelo+"este es el modelo")

    if(modelo !="" && cupos!="" && precio!="" && hora!=""){
      if(app.globalData.dataUserRegister.tipoUser=="Conductor"){
        console.log(app.globalData.dataUserRegister.carro.modelo)
        console.log(app.globalData.dataUserRegister.carro.modelo==modelo)
        if(app.globalData.dataUserRegister.carro.modelo==modelo){
          app.globalData.dataUserRegister.viaje.precio = precio;
          app.globalData.dataUserRegister.viaje.hora = hora;
          my.alert({
        title: "Viaje Registrado!",
        button: "Ok"
      });
      my.redirectTo({
        url: '../../splash/splash',
      });
        }else{
          my.alert({
        title: "Error",
        content: "No esta registrado ese modelo",
        button: "Ok"
      });
        }
      }else{
        my.alert({
        title: "Error",
        content: "No hay un conductor registrado!",
        button: "Ok"
      });
      }
    }else{
      my.alert({
        title: "Campos incompletos",
        content: "Se deben llenar todos los campos",
        button: "Ok"
      });
    }
  },
});
