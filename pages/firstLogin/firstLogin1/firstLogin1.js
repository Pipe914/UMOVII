Page({
  data: {},
  onLoad() { },
  formSubmit: function (e) {
    if (e.detail.value.pass1 == e.detail.value.pass2 && !(e.detail.value.mail == "")) {
      my.alert({
        title: "Usuario registrado",
        content: "Usuario registrado exitosamente",
        buttonText: "Ok",
      })
      my.navigateTo({
        url: '../index/index'
      })
    } else {
      my.alert({
        title: "Usuario no registrado",
        content: "No se ha podido registrar el usuario. Intente de nuevo",
        buttonText: "Ok",
      })
    }
  }
});
