const app = getApp()
Page({
  data: {
    title: "Registro"
  },
  onLoad() { },
  formSubmit: function (e) {


    const name = e.detail.value.nombre;
    const pass = e.detail.value.pass;
    const tele = e.detail.value.tel;
    const maill = e.detail.value.mail;
    // const check = e.checkTerminos;

    console.log(e)

    if (name != "" && pass != "" && tele != "" && maill != "") {
      if (maill.includes("@unisabana.edu.co")) {
        app.globalData.dataUserRegister.mail = "" + maill + "";
        app.globalData.dataUserRegister.pass = "" + pass + "";
        app.globalData.dataUserRegister.nombre = "" + name + "";
        app.globalData.dataUserRegister.telefono = "" + tele + "";
        app.globalData.dataUserRegister.estado = 1;
        my.alert({
          title: "Usuario registrado con exito!",
          buttonText: "Ok",
        });
        my.navigateTo({
          url: '../codeEmail/codeEmail'
        });
      } else {
        my.alert({
          title: "Debe registrarse con su correo institucional",
          content: "ex: javier@unisabana.edu.co",
          buttonText: "Ok",
        });
      }

    } else {
      my.alert({
        title: "No se ha podido registrar el usuario!",
        content: "Intente de nuevo mas tarde",
        buttonText: "Ok",
      });
    }
    console.log(app.globalData.dataUserRegister);

  }
});
