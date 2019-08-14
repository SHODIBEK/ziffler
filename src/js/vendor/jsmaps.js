$(function() {

    $('#uzbekistan-map').JSMaps({
        map: 'uzbekistan',
        selectElement: false,
        strokeColor: '#dddddd',
        textPosition: 'bottom',
        displayPreloader: false,
    });
});
window.JSMaps.maps.uzbekistan = JSON.parse($('#uzbMapData').val());