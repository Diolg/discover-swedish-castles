//Initialize Google Map function
function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 8,
        center: {
            lat: 59.2354,
            lng: 18.3051
        },
    };

    //Create map locations array
    var myMap = new google.maps.Map(element, options);
    var markers = [{
            coordinates: {
                lat: 59.2354,
                lng: 18.3051
            },
            image: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            info: `<div class="info-window">
                        <img class="info-window-image" src="assets/images/tyreso-castle.jpg" alt="castle">
                        <h6><strong>Tyreso castle</strong></h6>
                        <p>Marked with flag, because it is my favorite.</p>
                        <p>Built in 1630s currently it is a museum with beautiful parks and lakes.
                        <p>Here you find:
                            <ul>
                                <li>Museum</li>
                                <li>Hotel</li>
                                <li>SPA</li>
                                <li>Restaurant</li>
                                <li>Spaces for hiking</li>
                                <li>Natural swimming areas</li>
                            </ul>
                        </p>
                        <a href="https://www.nordiskamuseet.se/en/castles-manors/tyreso-palace" target="_blank">
                        Check full information</a>
                    </div>`
        },

        {   coordinates: {
                lat: 59.4349,
                lng: 17.7872
            },
            info: `<div class="info-window">
                        <img class="info-window-image" src="assets/images/gorvalnslott-castle.jpg" alt="castle">
                        <h6><strong>Gorvalnslott castle</strong></h6>
                        <p>Built in 1670s castle is a perfect place for romantic time or for recharging batteries in luxury.</p>
                        <p>Here you find: 
                            <ul>
                                <li>Hotel</li>
                                <li>SPA</li>
                                <li>Restaurant</li>
                                <li>Spaces for walking</li>
                                <li>Natural swimming areas</li>
                                <li>Fishing areas</li>
                                <li>Facilities for winter skiing</li>
                            </ul>
                        </p>
                        <a href="https://www.gorvalnsslott.se/en/" target="_blank">
                        Check full information</a>
                    </div>`
        },

        {
            coordinates: {
                lat: 59.0393,
                lng: 18.0142
            },
            info: `<div class="info-window">
                        <img class="info-window-image" src="assets/images/herringe-castle.jpg" alt="castle">
                        <h6><strong>Herringe castle</strong></h6>
                        <p>A cosy castle in a 1657 property offering dining & a bowling alley, plus a garden with a pool.</p>
                        <p>Here you find: 
                            <ul>
                                <li>Hotel</li>
                                <li>SPA</li>
                                <li>Restaurant</li>
                                <li>Outside swimming pool</li>
                                <li>Spaces for walking</li>
                                <li>Natural swimming areas</li>
                                <li>Fishing areas</li>
                                <li>Riding school</li>
                            </ul>
                        </p>
                        <a href="http://www.haringeslott.se/haringe-slott" target="_blank">Check full information</a>
                    </div>`
        }

    ];

    //Added markers of castles locations on the map
    for (var i = 0; i < markers.length; i++)
    {
        addMarker(markers[i]);
    }

    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: myMap,
        });

        if (properties.image)

        {
            marker.setIcon(properties.image);
        }

        //Set infoWindows
        if (properties.info) {
            var InfoWindow = new google.maps.InfoWindow({
                content: properties.info
            });

        // Added click listener to markers
            marker.addListener("click", function() {
                InfoWindow.open(myMap, marker);
            });

        }
    }
}

