
$.ajax{(
  method: 'get',
  url: 'https://data.cityofchicago.org/Parks-Recreation/Parks-Facilities-Features/y7qa-tvqx',
  dataType: 'json',
  success: function(data){
    parkData = data;
    console.log(parkData);

    for (var i = 0; i < parkData.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(parkData[i].latitude, parkData[i].longitude),
        map: map,

        // title: data[i].address
      });
      google.maps.event.addListener(marker, 'click', function(marker, i){
        var markerAddress = marker.title;
        return function() {
          console.log(markerAddress)
          $('#saved').append('<li>'+ markerAddress + '</li>')
        }
      }) (marker, i));
    };
  )};
