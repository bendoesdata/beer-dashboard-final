
// Callback that draws the Beer Styles Chart.
function drawStylesChart() {
  var queryString = encodeURIComponent('SELECT I, J LIMIT 10 OFFSET 1')
  console.log(queryString);
  var query = new google.visualization.Query(
   'https://docs.google.com/spreadsheets/d/1sfr_GmDp11F-ruRjsHr17a8V04eP0Daw2ojZb2nHtNk/gviz/tq?gid=250938787&headers=1&tq=' + queryString);
   console.log(query);
  query.send(handleQueryResponse);
}
function handleQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
  return;
  }
  var data = response.getDataTable();
  var options = {
    title:'Which style of beer do you prefer?',
    colors: [ '#b35900' ],
    legend: {position: 'top'},
    bar: {groupWidth: "90%"}
};
// Instantiate and draw the Beer Styles Chart
var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
chart.draw(data, options);
};

// Reload the Beer Styles Chart
$(document).ready(function(){
  $("#chart_Style_button").on("click",drawStylesChart)});


  // start new chart

  function drawPrefChart() {
    var queryString = encodeURIComponent('SELECT K, L LIMIT 13 OFFSET 1')
    console.log(queryString);
    var query = new google.visualization.Query(
     'https://docs.google.com/spreadsheets/d/1sfr_GmDp11F-ruRjsHr17a8V04eP0Daw2ojZb2nHtNk/gviz/tq?gid=250938787&headers=1&tq=' + queryString);
     console.log(query);
    query.send(handleQueryResponse);
  }
  function handleQueryResponse(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
    }
    var data = response.getDataTable();
    var options = {
      title:'How do you like your beer?',
      colors: [ '#b35900' ],
      height: 400,
      legend: {position: 'top'},
      bar: {groupWidth: "90%"}
    };
    // Instantiate and draw the Beer Preferences Chart
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    };
    // Reload the Beer Preferences Chart
    $(document).ready(function(){
      $("#chart_Pref_button").on("click",drawPrefChart)});
