Page({
  data: {
    scale: 14,
    longitude: 103.855457,
    latitude: 1.339712,
    markers: [{
      iconPath: "/image/green_tri.png",
      id: 10,
      latitude:  1.342983,
      longitude: 103.867935,
      width: 50,
      height: 50
   },{
      iconPath: "/image/green_tri.png",
      id: 11,
      latitude: 1.343573,
      longitude: 103.861916,
      width: 50,
      height: 50,
      customCallout: {
        type: 1,
        time: '1',
     },
      fixedPoint:{
        originX: 400,
        originY: 400,
     },
      iconAppendStr: 'Map icon'
   }],
    includePoints: [{
      latitude: 1.347016,
      longitude: 103.860167,
   }],
    polyline: [{
      points: [{
        longitude: 103.863218,
        latitude: 1.351628
     }, {
        longitude: 103.862718,
        latitude: 1.351428
     }, {
        longitude: 103.862218,
        latitude: 1.350828
     }, {
        longitude: 103.861718,
        latitude: 1.350428
     }, {
        longitude: 103.861018,
        latitude: 1.351028
     }],
      color: "#FF0000DD",
      width: 5,
      dottedLine: false
   }],
    circles: [{
      latitude: 1.351628,
      longitude: 103.863718,
      color: "#000000AA",
      fillColor: "#000000AA",
      radius: 80,
      strokeWidth: 5,
   }],
    controls: [{
      id: 5,
      iconPath: '../../resources/pic/2.jpg',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
     },
      clickable: true
   }]
 },
 
 onReady(e) {
   // Use my.createMapContext to obtain the map context.
   this.mapCtx = my.createMapContext('map')
 },
 
 getCenterLocation() {
   this.mapCtx.getCenterLocation(function (res) {
      console.log(res.longitude)
      console.log(res.latitude)
   })
 },
 
 moveToLocation() {
   this.mapCtx.moveToLocation()
 },
 
 regionchange(e) {
    console.log('regionchange', e);
// Note: If the user zooms in or zooms out the map, reset the value of scale of the onRegionChange function before setting the latitude and longitude of the location. Otherwise the map restores to the original size.
if (e.type === 'end') {
     this.setData({
        scale: e.scale
     });
   }
 },
 
 markertap(e) {
    console.log('marker tap', e);
 },
 
 controltap(e) {
    console.log('control tap', e);
 },
 
 tap() {
    console.log('tap:');
 },
 
 changeScale() {
   this.setData({
      scale: 8,
   });
 },
 
 changeCenter() {
   this.setData({
      longitude: 103.867935,
      latitude: 1.343573,
      includePoints: [{
        latitude: 1.351028,
        longitude: 103.861018,
     }],
   });
 },
 //An indicator of whether to support gesture events. When isGestureEnable is 1, gesture events are supported. Otherwise gesture events are not supported.
 gestureEnable() {
   this.mapCtx.gestureEnable({isGestureEnable:1});
 },
 //An indicator of whether to show the compass. When isShowCompass is 1, display the compass. Otherwise the compass is not displayed.
 showsCompass() {
   this.mapCtx.showsCompass({isShowsCompass:1});
 },
 changeMarkers() {
   this.setData({
      markers: [{
        iconPath: "/image/green_tri.png",
        id: 10,
        latitude: 1.351028,
        longitude: 103.861018,
        width: 50,
        height: 50
     }],
      includePoints: [{
        latitude: 1.350428,
        longitude: 103.861718,
     }],
   });
 },

  
  
});
