import {base} from '../assets/rebase'

export default {
  renderMap: renderMap,
  getGeolocation: getGeolocation,
  setMarker: setMarker,
  calcRateDistance: calcRateDistance
  
}

function getGeolocation(callback) {
  if (navigator.geolocation) {
    //watchPosition pega a localization em realtime
    navigator.geolocation.getCurrentPosition(callback, function (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
        console.log("PERMISSION_DENIED");
        alert("Permissão de acesso a geolocalizacão negada, \npara ter acesso ao serviço aceite a permissão! ");
        break;
        case error.POSITION_UNAVAILABLE:
        alert("geolocalizacao indisponivel! ");
        console.log("POSITION_UNAVAILABLE");
        break;
        case error.TIMEOUT: 2
        console.log("TIMEOUT");
        break;
        case error.UNKNOWN_ERROR:
        console.log("UNKNOWN_ERROR");
        break;
      }
    })
  } else {
    //caso o browser nao dê suporte
    console.log('Não foi possível capturar a sua localização.');
  }
}

function renderMap(position) {
  var loc = position.coords;
  var myLatLng = new window.google.maps.LatLng(loc.latitude, loc.longitude);
  var mapOptions = {
    zoom: 18,
    center: myLatLng,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  },
  map = new window.google.maps.Map(document.getElementById("map"), mapOptions),
  markers = [];

  var outMarker = new window.google.maps.Marker({
    position: myLatLng,
    'flat': true,
    icon: {
      'path': window.google.maps.SymbolPath.CIRCLE,
      'fillColor': '#C8D6EC',
      'fillOpacity': 0.7,
      'scale': 12,
      'strokeWeight': 0,
    },
    clickable: false,
    draggable: false,
    map: map
  });

  var marker = new window.google.maps.Marker({
    position: myLatLng,
    'flat': true,
    icon: {
      'path': window.google.maps.SymbolPath.CIRCLE,
      'fillColor': '#4285F4',
      'fillOpacity': 1,
      'scale': 6,
      'strokeColor': 'white',
      'strokeWeight': 2,
    },
    clickable: false,
    draggable: false,
    map: map
  });

  function CenterControl(controlDiv, map) {
    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    //controlUI.style.marginTop = '52px';
    controlUI.style.marginRight = '10px';
    controlUI.title = 'Centralizar o mapa no balão azul';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.width = '25px';
    controlText.style.height = '25px';
    controlText.style.display = 'block';
    controlText.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
    controlText.style.backgroundRepeat = 'no-repeat';
    controlText.style.backgroundPosition = "4px";
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function () {
      map.setCenter(marker.position);
    });
  }

  var hasCurrentLocalization = loc.latitude && loc.latitude;
  if (hasCurrentLocalization) {
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);
    centerControlDiv.index = 1;
    map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(centerControlDiv);
  }

  return map
}

function setMarker(map, location) {
  var myLatLng = new window.google.maps.LatLng(location.latitude, location.longitude);
  var infoWindow = new window.google.maps.InfoWindow();
  var marker = new window.google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: {
      path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
      fillColor: "#7AB800",
      fillOpacity: 1,
      strokeColor: '#E6E6E6',
      strokeWeight: 1,
      scale: 1
    }
  });
}

function calcRateDistance(positionCurrent){
    base.fetch('rotinas', {
      context: this,
      asArray: true,
      then(data){
        var positionDriver = data[0];
        _getGoogleDistanceApi(positionCurrent, positionDriver);
      }
    });
}

function _getGoogleDistanceApi(positionCurrent, positionDriver){
  console.log("positionCurrent", positionCurrent);
  console.log("positionDriver", positionDriver);

   var elements = [
      {
          "distance": {
              "text": "1,9 km",
              "value": 1853
          },
          "duration": {
              "text": "7 minutos",
              "value": 413
          },
          "status": "OK"
      },
      {
          "distance": {
              "text": "11,6 km",
              "value": 11643
          },
          "duration": {
              "text": "22 minutos",
              "value": 1349
          },
          "status": "OK"
      }
  ];


  var dataDriver = elements[0].duration.text;//position of driver
  // var dataCurrent = elements[1].duration.text; //position of destination
  console.log(dataDriver);
  // console.log(dataCurrent);
  



}

/*
function _setMarker() {
  setMarkers(map, locations);


  function setMarkers(map, locations) {

    for (var i = 0; i < locations.length; i++) {


      markers.push(marker);
      (function (i) {
        window.google.maps.event.addListener(marker, "click", function () {
          infoWindow.close();
          infoWindow.setContent(
            "<div id='infoWindow'><h3 style='margin-bottom: 5px; margin-top: 5px;'>" + locations[i].nomeLoja + "</h3><label>" + locations[i].ruaFormatada + "</label><br/><span>" + locations[i].enderecoFormatado + "</span></div>"
          );
          infoWindow.open(map, this);
        });
      })(i);
    }

    _fitBoundsMap(map, locations);
  }

  function _fitBoundsMap(map, markers) {
    var bounds = new window.google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
      var myLatLng = new window.google.maps.LatLng(markers[i].lat, markers[i].long);
      bounds.extend(myLatLng);
    }
    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds);
    if (map.getZoom() > 18) {
      map.setZoom(18);
    }

    map.panTo(new window.google.maps.LatLng(loc.latitude, loc.longitude));
    map.setCenter(new window.google.maps.LatLng());
    map.setZoom(18);
    _showDirection(markers);
  }

}
*/
