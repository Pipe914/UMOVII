Page({
  data: {},
  onLoad() {},
  popUp(){
    my.confirm({
      title: 'Juan Caicedo',
      content: 'Cupos: 2',
      confirmButtonText: 'Reservar Ahora',
      cancelButtonText: 'Seguir Mirando',
      success: (result) => {
        if (result.confirm) {
          my.alert({
            title: `${'Viaje reservado con exito'}`,
          });  
        }
        
      },
    })
  },
});
