Page({
  data: {
    title: "Registro"
  },
  onLoad() { },
  go() {
    my.switchTab({ url: "../login/login" })
  },
  formSubmit: function (e) {
    console.log('form has a submit event, carrying data ', e.detail.value)
    my.alert({ title: e.detail.value.mail })
    if (e.detail.value.pass1 == e.detail.value.pass2 && e.detail.value.mail!="") {
      my.alert({
        title: "Usuario registrado",
        content: "Usuario registrado exitosamente",
        buttonText: "Ok",
      })
      my.navigateTo({
        url: '../login/login'
      })
    }else{
      my.alert({
        title: "Usuario no registrado",
        content: "No se registro el usuario. Intente de nuevo.",
        buttonText: "Ok",
      })
    }
  }
});
