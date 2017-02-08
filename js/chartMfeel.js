// drawMfeelChart function
function drawMfeelChart() {
  var queryString = encodeURIComponent('SELECT O, P LIMIT 5 OFFSET 1')
  var query = new google.visualization.Query(
   'https://docs.google.com/spreadsheets/d/1sfr_GmDp11F-ruRjsHr17a8V04eP0Daw2ojZb2nHtNk/gviz/tq?gid=250938787&headers=1&tq=' + queryString);
  query.send(handleQueryResponse);

function handleQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
  return;
  };
  var data = response.getDataTable();
  var options = {
    title:'Poll Q.: And your favourite mouthfeel?',
    fontName: 'Coming Soon',
    fontSize: 16,
    legend: 'none',
//    width:400,
//    height:600,
    bar: {groupWidth: "90%"},
    colors: ['#b35900'],
    backgroundColor: '#eeb933'
  };
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
  //Button to reload drawMfeelChart

}};
