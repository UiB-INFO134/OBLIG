console.log("tekst");

/* Javascript for Google Maps */
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: 60.394356, lng: 5.325036}
    });

    setMarkers(map);
}

var labels = 'ABC';
var labelIndex = 0;


/* Array med 3 forskjellige koordinater  */
var locations = [
    ['Magic Hotel', 60.394301, 5.322801, 1],
    ['Hanseatic', 60.396280, 5.326036, 2],
    ['Thon Bristol', 60.392515, 5.323011, 3]
];
/* Setter markers for hvert element i Arrays med koordinater  */
function setMarkers(map) {
    for (var i = 0; i < locations.length; i++) {
        var location = locations[i];
        var marker = new google.maps.Marker({
            position: {lat: location[1], lng: location[2]},
            label: labels[labelIndex++ % labels.length],
            map: map
        });
    }

}
