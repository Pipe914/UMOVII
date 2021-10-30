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
      url: '../register/register'
    });
  }
});
