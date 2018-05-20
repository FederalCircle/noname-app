/*
        *@method function init get current localization
        */
function myMap() {

        if (window.navigator.geolocation) {
            //watchPosition pega a localization em realtime
            window.navigator.geolocation.getCurrentPosition(_success, _error);
        } else {
            //caso o browser nao dê suporte
            console.log('Não foi possível capturar a sua localização.');
        }

    }

    /*
    * calback error
    */
    var _error = function (error) {
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
    }

    /*
    * calback success
    */
    var __success = function (position) {
        console.log(position)
        var loc = position.coords;
        var myLatLng = new google.maps.LatLng(loc.latitude, loc.longitude);
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
            map = new google.maps.Map(document.getElementById("map"), mapOptions),
            markers = [];

        var outMarker = new google.maps.Marker({
            position: myLatLng,
            'flat': true,
            icon: {
                'path': google.maps.SymbolPath.CIRCLE,
                'fillColor': '#C8D6EC',
                'fillOpacity': 0.7,
                'scale': 12,
                'strokeWeight': 0,
            },
            clickable: false,
            draggable: false,
            map: map
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            'flat': true,
            icon: {
                'path': google.maps.SymbolPath.CIRCLE,
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
            map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(centerControlDiv);
        }

        /*
        * @method marker all motot
        * @param new instance maps
        * @param all
        */

        var locations = [{
            "driver_id": "821415d8-3bd5-4e27-9604-194e4359a449",
            "lat": -8.053898821715235,
            "long": -34.95084555
        },
        {
            "driver_id": "821415d8-3bd5-4e27-9604-194e4359a440",
            "lat": -8.090573715687416,
            "long": -34.93252749999999
        },
        {
            "driver_id": "821415d8-3bd5-4e27-9604-194e4359a450",
            "lat": -8.043581028713954,
            "long": -34.93352060000001
        },
        {
            "driver_id": "821415d8-3bd5-4e27-9604-194e4359a451",
            "lat": -8.043581028713954,
            "long": -34.93352060000001
        }];


        setMarkers(map, locations);

        function setMarkers(map, locations) {
            for (var k = 0; k < markers.length; k++) {
                markers[k].setMap(null);
            }

            markers = [];

            for (var i = 0; i < locations.length; i++) {
                var myLatLng = new google.maps.LatLng(locations[i].lat, locations[i].long);
                var infoWindow = new google.maps.InfoWindow();
                var marker = new google.maps.Marker({
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

                markers.push(marker);
                (function (i) {
                    google.maps.event.addListener(marker, "click", function () {
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
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < markers.length; i++) {
                var myLatLng = new google.maps.LatLng(markers[i].lat, markers[i].long);
                bounds.extend(myLatLng);
            }
            map.setCenter(bounds.getCenter());
            map.fitBounds(bounds);
            if (map.getZoom() > 18) {
                map.setZoom(18);
            }

            map.panTo(new google.maps.LatLng(loc.latitude, loc.longitude));
            map.setCenter(new google.maps.LatLng());
            map.setZoom(18);
            _showDirection(markers);
        }

        function _showDirection(geoEnd) {
            var directionsDisplay = new google.maps.DirectionsRenderer();
            var directionsService = new google.maps.DirectionsService();

            //linha abaixo comentada em caso de customizar a rota no mapa
            var rendererOptions = {
                suppressMarkers: true,
                polylineOptions: {
                    strokeColor: 'black'
                }
            };

            //linha abaixo comentada em caso de customizar a rota no mapa
            directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
            directionsDisplay.setMap(map);
            directionsDisplay.setOptions({ suppressMarkers: true });


            var start = new google.maps.LatLng(loc.latitude, loc.longitude);
            geoEnd.forEach(geoEnd => {

                var end = new google.maps.LatLng(geoEnd.lat, geoEnd.long);
                var request = {
                    origin: start,
                    destination: end,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };

                directionsService.route(request, function (response, status) {
                    if (status == 'OK') {
                        var route = response.routes[0].legs[0];
                        directionsDisplay.setDirections(response);
                        map.panTo(new google.maps.LatLng(geoEnd.lat, geoEnd.long));
                        map.setCenter(new google.maps.LatLng(loc.latitude, loc.longitude));
                    }
                });

            });
        }

    }
