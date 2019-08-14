(function() {
    let mapsJson = "../json/uzbekistan.json";
    $.getJSON(mapsJson, {
            format: "json"
        })
        .fail(function() {
            alert('Error maps')
        })
        .done(function(data) {
            window.JSMaps.maps.uzbekistan = data
        });
})();