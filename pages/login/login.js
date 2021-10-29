import fs from 'fs';
Page({
  data: {},
  onLoad() { },
  formSubmit: function (e) {


    if (e.detail.value.mail.contains("@unisabana.edu.co") && e.detail.value.pass != "") {
      my.alert({
        title: "Inicio de sesion exitoso",
        content: "Se ha iniciado sesion exitosamente",
        buttonText: "Ok",
      });
      my.navigateTo({
        url: '../index/index'
      });
    } else {
      my.alert({
        title: "Usuario no encontrado",
        content: "No existe el usuario",
        buttonText: "Ok",
      });
    }
  },
});
