import React from 'react'
import mapHelper from '../../assets/mapsHelper'
import './Map.css'

const map = (props) => {
  mapHelper.getGeolocation((position) => {

    let map = mapHelper.renderMap(position)

    if(  props.origem && props.destino  ){
      mapHelper.calcRate(map, props.origem, props.destino );
    }
    mapHelper.setMarker(map, props.origem)
    mapHelper.setMarker(map, props.destino)
    // mapHelper.calcRateDistance(map, position);
  })

  return (
    <div id="map"></div>
  )
}

// function _success(position) {

//   var locations = [
//     // {
//     //   "driver_id": "821415d8-3bd5-4e27-9604-194e4359a449",
//     //   "lat": -8.053898821715235,
//     //   "long": -34.95084555
//     // },
//     // {
//     //   "driver_id": "821415d8-3bd5-4e27-9604-194e4359a440",
//     //   "lat": -8.090573715687416,
//     //   "long": -34.93252749999999
//     // },
//     // {
//     //   "driver_id": "821415d8-3bd5-4e27-9604-194e4359a450",
//     //   "lat": -8.043581028713954,
//     //   "long": -34.93352060000001
//     // },
//     // {
//     //   "driver_id": "821415d8-3bd5-4e27-9604-194e4359a451",
//     //   "lat": -8.043581028713954,
//     //   "long": -34.93352060000001
//     // }
//   ];



//   function _showDirection(geoEnd) {
//     var directionsDisplay = new window.google.maps.DirectionsRenderer();
//     var directionsService = new window.google.maps.DirectionsService();

//     //linha abaixo comentada em caso de customizar a rota no mapa
//     var rendererOptions = {
//       suppressMarkers: true,
//       polylineOptions: {
//         strokeColor: 'black'
//       }
//     };

//     //linha abaixo comentada em caso de customizar a rota no mapa
//     directionsDisplay = new window.google.maps.DirectionsRenderer(rendererOptions);
//     directionsDisplay.setMap(map);
//     directionsDisplay.setOptions({ suppressMarkers: true });


//     var start = new window.google.maps.LatLng(loc.latitude, loc.longitude);
//     geoEnd.forEach(geoEnd => {

//       var end = new window.google.maps.LatLng(geoEnd.lat, geoEnd.long);
//       var request = {
//         origin: start,
//         destination: end,
//         travelMode: window.google.maps.DirectionsTravelMode.DRIVING
//       };

//       directionsService.route(request, function (response, status) {
//         if (status == 'OK') {
//           var route = response.routes[0].legs[0];
//           directionsDisplay.setDirections(response);
//           map.panTo(new window.google.maps.LatLng(geoEnd.lat, geoEnd.long));
//           map.setCenter(new window.google.maps.LatLng(loc.latitude, loc.longitude));
//         }
//       });

//     });
//   }
// }


export default map
