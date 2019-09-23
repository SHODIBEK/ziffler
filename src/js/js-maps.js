    $(function() {
        window.JSMaps.maps.uzbekistan = JSON.parse($('#uzbMapData').val());
        $('#uzbekistan-map').JSMaps({
            "responsive": true,
            map: 'uzbekistan',
            selectElement: true,
            strokeColor: '#dddddd',
            textPosition: 'bottom',
            displayPreloader: false,
            "pinSize": 10,
            "disableTooltip": false,
            selectElementDevices: ['mobile', 'tablet'],
            selectElementDefaultText: $('#uzbekistan-map').data('txt'),
            onStateClick: function(data) {
                var circle = $('circle');
                var iframeSrc = data.iframe;
                var mapsLink = data.mapsLink;
                var clickCityName = data.name;
                var xPos = data.xPos;
                var yPos = data.yPos;
                circle.attr('cx', xPos);
                circle.attr('cy', yPos);
                circle.addClass('move');
                $("#iframeSrc").attr('src', iframeSrc);
                $("#mapsLink").attr('href', mapsLink);
                // $.getJSON('../json/uzbekistan.json', function(data) {
                //     var pinsName = data.pins[0];
                //     data.pins[0].name = clickCityName;
                // });
            },
        });
    });