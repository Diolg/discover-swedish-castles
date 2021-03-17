//Initialized Google Map function

function initMap()
{
    var element = document.getElementById('map');

//Created an object from parameters
    var  options = {
        zoom: 8,
        center: {lat:59.2354, lng: -18.3051},

    };

 //Created map locations array

    var  myMap = new google.maps.Map(element, options);

    var  markers = [
        {
        coordinates: {lat: 59.2354, lng: -18.3051},
        image: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        info: '<h6><strong>Tyreso castle</strong></h6> <br><p>Marked with flag, because it is my favorite.</p><br><p>Here you find: <ul><li>Museum</li><li>Hotel</li><li>SPA</li><li>Restaurant</li><li>Spaces for hiking</li><li>Natural swimming areas</li></ul></p> '
    },

    {
        coordinates: {lat: 59.4349, lng:-17.7872},
        info: '<h6><strong>Gorvalnslott castle</strong></h6><br><p>Here you find: <ul><li>Hotel</li><li>SPA</li><li>Restaurant</li><li>Spaces for walking</li><li>Natural swimming areas</li><li>Fishing areas</li><li>Facilities for winter skiing</li></ul></p></h1>'
    },

    {
        coordinates:{lat: 59.0393, lng:-18.0142},
        info: '<h6><strong>Herringe castle</strong></h6><br><p>Here you find: <ul><li>Hotel</li><li>SPA</li><li>Restaurant</li><li>Outside swimming pool</li><li>Spaces for walking</li><li>Natural swimming areas</li><li>Fishing areas</li><li>Riding school</li></ul></p></h1>'
    }

    ];

    
    //Added markers of castles locations on the map

      
    for(var  i = 0; i < markers.length; i++)

     {
        addMarker(markers[i]);
     }
    

function addMarker(properties) {
        var  marker = new google.maps.Marker({
        position: properties.coordinates,
        map: myMap,
    });

if(properties.image) 

{
 marker.setIcon(properties.image)
}

// Set infoWindiws

if(properties.info)
{
var  InfoWindow = new google.maps.InfoWindow({
content: properties.info
});

marker.addListener('click', function(){
InfoWindow.open(myMap, marker);
})


}
}
}
