const app = getApp()
let user1 = app.globalData.dataUser1;
let user2 = app.globalData.dataUserRegister;

Page({
  data: {
    nombre: "",
  },
  onLoad() { },
  onReady() {
    const that = this;
    if (user1.estado == 1) {
      that.setData({
        nombre: user1.nombre,
      })
    } else if (user2.estado == 1) {
      that.setData({
        nombre: user2.nombre,
      })
    }
  },
  onTapCerrarSesion(e) {


    if (user1.estado == 1) {
      app.globalData.dataUser1.estado = 0;

    }
    if(user2.estado==1){
      app.globalData.dataUserRegister.estado = 0;
    }
    my.redirectTo({
      url: '../../login/login'
    })
    
  },
});
