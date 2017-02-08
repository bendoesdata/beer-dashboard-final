  google.charts.setOnLoadCallback(drawGID);

function drawGID() {
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
  //var data2 = google.visualization.arrayToDataTable(handleQueryResponse)
  //console.log(data2);
  var data = response.getDataTable();
  var options = {
    title:'Which style of beer do you prefer?',
  //  width:500,
    height:600,
    colors: ['#b35900'],
    legend: {position: 'top'},
    bar: {groupWidth: "90%"},
  };
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
  $("button").click(function(){
    location.reload('chart_div');
})};
