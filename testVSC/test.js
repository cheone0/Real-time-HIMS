function initMap() {
    const styledMapType = new google.maps.StyledMapType(
        [
            {
                featureType: "poi",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
            },
        ],
    );

    var mapOptions = {
            center: new google.maps.LatLng(19.806692123413086, 105.7851791381836),
            zoom: 16.3 
    };

    var map = new google.maps.Map(
        document.getElementById("googleMap"), mapOptions);

    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map")
}
window.initMap = initMap;