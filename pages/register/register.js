Page({
  data: {},
  onLoad() { },
  Registrarse(a) {


    my.showLoading({
      content: 'Cargando...',
      delay: 1000
    });
    if (a.detail.value.contra === a.detail.value.contra2) {
      my.alert({
        title: 'Registro Exitoso',
        content: 'Se ha registrado con exito el usuario',
        buttonText: 'Ok',
        // success: () => {
        //   my.alert({
        //     title: 'nvm',
        //   });
        // },
      });
    } else {
      my.alert({
        title: 'Registro no exitoso',
        content: 'Intente de nuevo mas tarde',
        buttonText: 'Ok',
        
       
      });
    

  }
  my.hideLoading();
}
});
