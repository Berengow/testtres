 var panorama1,panorama, panorama2,infospot2, panorama3, viewer, container, infospot, panorama4,widget;// переменые

var bar = document.querySelector( '#bar' );
var seting = document.querySelector( '#one' );
var scope = this, item, isFullscreen = false, tapSkipped = true, stylesheetId;

function onProgressUpdate ( event ) {
  var percentage = event.progress.loaded/ event.progress.total * 100;
  bar.style.width = percentage + "%";
  if (percentage >= 100){
    bar.classList.add( 'hide' );
    setTimeout(function(){
      bar.style.width = 0;
    }, 1000);
  }
}

//создание переменых
container = document.querySelector( '#container' );

panorama1 = new PANOLENS.ImagePanorama( 'финальная_111.56gyc.jpg' );
panorama1.addEventListener( 'progress', onProgressUpdate );


panorama2 = new PANOLENS.ImagePanorama( 'IMG_8661 Panorama.jpg' );
panorama2.addEventListener( 'progress', onProgressUpdate );

panorama3 = new PANOLENS.ImagePanorama( 'IMG_8872 Panorama.jpg' );
panorama3.addEventListener( 'progress', onProgressUpdate );

panorama4 = new PANOLENS.ImagePanorama( 'финальная_111.56gyc.jpg' );
panorama4.addEventListener( 'progress', onProgressUpdate );


//создание точки информации
infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot.position.set( 0, -2000, -5000 );
infospot.addHoverText( "lalala <br \/> lalala");

infospot.addEventListener( 'click', function(){
  this.focus();
  
} );
panorama1.add( infospot );


infospot2 = new PANOLENS.Infospot(300,PANOLENS.DataImage.Info, true); //new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
infospot2.position.set( -5000.00, -625.25, -197.56 );
infospot2.addHoverElement( document.querySelector( '#desc-container' ), 200 );
infospot2.addEventListener( 'click', function(){

  
} );
panorama1.add( infospot2 );

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama1, panorama2, panorama3, panorama4 );






//функция для переключения панорам
  function link1() {
      viewer.setPanorama( panorama1 );
  }

  function link2() {
      viewer.setPanorama( panorama2 );
  }

  function link3() {
    viewer.setPanorama( panorama3 );
  }





  function onTap () {

    

    tapSkipped = false;

    if ( !isFullscreen ) {
        scope.container.requestFullscreen && scope.container.requestFullscreen();
        scope.container.msRequestFullscreen && scope.container.msRequestFullscreen();
        scope.container.mozRequestFullScreen && scope.container.mozRequestFullScreen();
        scope.container.webkitRequestFullscreen && scope.container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        isFullscreen = true;
    } 

    

}
 





span = document.querySelector( '#span' );





var k = new PANOLENS.Widget(span)



k.createDefaultMenu()





