Page({
  data: {
    scale: 12,
    longitude: 120.107822,
    latitude: 30.267023,
  },
  onLoad(e) {
    // my.showLoading({ content: "Obteniendo Ubicacion ...", });
    // var long = 0;
    // var lat = 0;
    // const that = this
    // my.getLocation({
    //   success(e) {
    //     my.hideLoading();
    //     console.log(e);
    //     lat = e.latitude;
    //     long = e.longitude;
    //     that.setData({
    //       latitude: lat,
    //       longitude: long,
    //     });

    //   },
    //   fail() {
    //     my.hideLoading();
    //     my.alert({ title: 'location failed' });
    //   },
    // })
    this.mapCtx = my.createMapContext('map')
    this.mapCtx.showsCompass({isShowsCompass:1});
    this.mapCtx.gestureEnable({ isGestureEnable: 1 });
  },
  onReady(e){

    
  },
    
  
});
