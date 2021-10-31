let tipouser = ""
let estadoConductor=0
let estadoPasajero=0
const app = getApp()
Page({
  data: {},
  onLoad() {},
  onTapConductor(){
    estadoConductor=1
    estadoPasajero=0
  },
  onTapPasajero(){
    estadoPasajero=1
    estadoConductor=0
  },
  onTapConfirmar(){
    if(estadoConductor==0 && estadoPasajero==0){
      my.alert({
        title: "Seleccione una opcion",
        button: "Ok"
      });
    }else if(estadoConductor==1){
      app.globalData.dataUserRegister.tipoUser = "Conductor"
      app.globalData.dataUserRegister.estado=1;
      my.navigateTo({
        url: '../registerCar/registerCar' 
      });
      
    }else{
      app.globalData.dataUserRegister.tipoUser = "Pasajero"
      app.globalData.dataUserRegister.estado=1;
      my.navigateTo({
        url: '../../splash/splash' 
      });
    }
    console.log(app.globalData.dataUserRegister)
  },
});
