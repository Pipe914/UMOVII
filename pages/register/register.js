Page({
  data: {},
  onLoad() { },
  Registrarse(a,e) {


    // my.showLoading({
    //   content: 'Cargando...',
    //   delay: 1000
    // });
    my.alert({title: e.detail.value});
    if (a.detail.value["mail"] === a.detail.value["pass1"]) {
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
  // my.hideLoading();
},
formSubmit: function(e) {
    console.log('form has a submit event, carrying data ', e.detail.value)
    my.alert({title: e.detail.value.mail})
    if (e.detail.value.pass1 == e.detail.value.pass2 && !(e.detail.value.mail=="")){
      my.alert({
        title: "Usuario registrado",
        content: "Usuario registrado exitosamente",
        buttonText: "Ok",
      })
      my.navigateTo({
        url: '../index/index'

      })  
    }else{
      my.alert({
        title: "Usuario no registrado",
        content: "No se ha podido registrar el usuario. Intente de nuevo",
        buttonText: "Ok",
      })
    }
  }
});
