<?php
 header("Access-Control-Allow-Origin: *");

require('Pintlabs/Service/Brewerydb.php');

$apikey = "a6fab1de5e1c2de4cb1602c6563f7276";

$bdb = new Pintlabs_Service_Brewerydb($apikey);
$bdb->setFormat('php');


try {
    // The first argument to request() is the endpoint you want to call
    // 'brewery/BrvKTz', 'beers', etc.
    // The third parameter is the HTTP method to use (GET, PUT, POST, or DELETE)
    $results = $bdb->request('styles', $params, 'GET'); // where $params is a keyed array of parameters to send with the API call.
    echo json_encode($results);
} catch (Exception $e) {
    $results = array('error' => $e->getMessage());
}

?>

<html>
  <head>
    <meta charset="utf-8">
    <title>beer food selector</title>

    <!-- Google fonts -->
        <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Coming+Soon" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Cambay" rel="stylesheet">

    <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>\
    <!-- add the Google places library -->
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?libraries=places&sensor=false"></script>



    <script type="text/javascript">
      google.charts.load('current', {'packages':['map']});
    </script>

    <style>
      h1 {
      font-family: "Gloria Hallelujah", sans-serif;
      }


    </style>

  </head>

  <body>
    <div style="margin:auto">
      <h1>The MAP</h1>
      <!-- search box -->
      <div style="border:1px solid #ccc; background:#e5e5e5; padding:10px; width: 600px; margin: auto">
        <h3 style="text-align: center">Welcome to our beer map. The menu below shows all the breweries that appear on the map, though I'm not sure how to get the map to zoom when you click on each.</h3>
        <select type="dropdown" id="mySelect" style="margin: auto; text-align: center">
          <option value="beef">Brewery 1 </option>
          <option value="b2">Brewery 2</option>
        <input type="button" value="find" onClick="up206b.geocode()">
        <br />
        <p1 style="display: none">Here is som info about Brewery 2</p1>
      </div>
      <!-- side panel div container -->
      	<div style="text-align: center; z-index: 1; position:absolute; width:380px; height: 100%; overflow:auto; float:left; padding-left:10px; padding-right:10px;">
      		<h1>The Beer Map</h1>


      	</div>
    </div>
    <div id="map_markers_div" style="width: 600px; height:600px; margin: auto">

    </div>

  </body>

  <script>
  $(document).ready(function() {
      $('#mySelect').change(function(){
          if($(this).val() == 'b2') {
            beer = "Pilsener";
            $("p1").show();
          };

      });
  });
  </script>

  <script>


    google.charts.setOnLoadCallback(drawMap);



    function drawMap() {

      var data = new google.visualization.DataTable();

// Insert data for super polluters
      data.addColumn('number', 'Lat');
      data.addColumn('number', 'Long');
      data.addColumn({
          type: 'string',
          role: 'tooltip',
          'p': {'html': true}//added html version
      });

      var markers = data.addRows([


      //  [37.921543,-87.329647,'<div class="infowindow" style="width: 180px"><div><h1 style="font-family: Tahoma; font-size: 120%">ALCOA WARRICK OPERATIONS</h1><h4 style="font-size: 100%"><em>Owned by ALCOA INC</em></h4></div><div style="background-color: #FFF1E0; width: 100%; padding-top: 2px; padding-right: 3px; padding-bottom: 3px; text-align: center"><h3 style="font-family: Tahoma; font-size: 120%; color: #686868; text-align: center">Emissions Ranking</h3><p><span style="color:green; font-size:3.5em; ">98</span><br /> in greenhouse gases<p><p><span style="color:orange; font-size:3.5em">47</span><br /> in toxic air </p></h1></div></div>'],
        [51.583963,-0.008712,'<div><h3>Open on:Friday - 5pm till Midnight <br /> Saturday - 11am till Midnight <br />Sunday - 11am till 11pm </h3><p>URL </p></div>'],
        [51.445823,-0.162359,'<div><h1>Belleville Brewing Co.</h1><h4 style="font-family: Coming Soon; margin-top: -20px"><a href="http://www.bellevillebrewing.co.uk/">Website</a></h4><div style="float: left; display: inline"><h3 style="font-family: Coming Soon; margin-top: -10px">Open on: </h3><p style="font-family: Coming Soon">Friday - 5pm till Midnight <br /> Saturday - 11am till Midnight <br />Sunday - 11am till 11pm </p></div><div style="float: right; display: inline"><h3 style="font-family: Coming Soon; margin-top: -10px">Recommended beer: </h3><p style="font-family: Coming Soon;font-size: 1.2em; margin-bottom: 80px">Thames Surfer</p></div></div><div style="margin-top: 30px; display: block; padding-top: 30px"><div><form action="http://maps.google.com/maps" method="get" target="_blank"><label for="saddr" style="font-family: Coming Soon">Enter your location</label><input type="text" name="saddr" /><input type="hidden" name="daddr" value="Belleville Brewing Co." /><input type="submit" value="Get directions" /></form></div>'],
        [51.583963,-0.008712,'<div><h3>Open on:Friday - 5pm till Midnight <br /> Saturday - 11am till Midnight <br />Sunday - 11am till 11pm </h3><p>URL </p></div>']

      ]);



      var options = {
      icons: {
          default: {
            normal: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/24/beer-icon.png',
            selected: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/24/beer-icon.png'
          }
      },
      zoomLevel: 11,
      showTooltip: true,
      showInfoWindow: true,
      useMapTypeControl: true,
      mapType: 'styledMap',
      maps: {
        // Your custom mapTypeId holding custom map styles.
        styledMap: {
          name: 'Styled Map', // This name will be displayed in the map type control.
          styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
]

        }}

      };

// Draw Super Polluter Map

      var map = new google.visualization.Map(document.getElementById('map_markers_div'));
      map.draw(data, options);



    }
  </script>
</html>
