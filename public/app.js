var initialize = function(){
  var mapDiv = document.getElementById('main-map');
  var center = {lat: 29.313  , lng:-94.7766 };
  var mainMap = new MapWrapper(mapDiv, center, 10);
  mainMap.addMarker(center);
  mainMap.addClickEvent();
}







window.addEventListener("load", initialize);
