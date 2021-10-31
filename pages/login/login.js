const app = getApp()
Page({

  data: {
  },
  onLoad() {

  },
  formSubmit: function (e) {

    const mail = e.detail.value.mail
    const pass = e.detail.value.pass
    var user1 = app.globalData.dataUser1;
    var user2 = app.globalData.dataUserRegister;
    if (mail == user1.mail && pass == user1.pass) {
      app.globalData.dataUser1.estado =1;
      app.globalData.dataUserRegister.estado =0;
      my.alert({
        title: "Inicio de sesion exitoso",
        content: "Se ha iniciado sesion exitosamente",
        buttonText: "Ok",
      });


      setTimeout(function () {
        my.navigateTo({
          url: '../splash/splash'
          // cambiar a usuario pasajero
        });
      }, 3000);
    } else if (mail == user2.mail && pass == user2.pass) {
      app.globalData.dataUser1.estado =0;
      app.globalData.dataUserRegister.estado =1;
      my.alert({
        title: "Inicio de sesion exitoso",
        content: "Se ha iniciado sesion exitosamente",
        buttonText: "Ok",
      });

      setTimeout(function () {
        my.navigateTo({
          url: '../splash/splash'
          // cambiar a conductor
        });
      }, 3000);
    } else {
      my.alert({
        title: "Usuario no encontrado",
        content: "No existe el usuario",
        buttonText: "Ok",
      });
    }
  },
  onTap(e) {
    my.navigateTo({
      url: '../registration/register/register'
    });
  }
});
