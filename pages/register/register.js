Page({
  data: {
    title: "Registro"
  },
  onLoad() { },
  go() {
    my.switchTab({ url: "../login/login" })
  },
  formSubmit: function (e) {
    if (e.detail.value.pass1 == e.detail.value.pass2 && e.detail.value.mail!="" && e.detail.value.mail.includes("@unisabana.edu.co")) {
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
