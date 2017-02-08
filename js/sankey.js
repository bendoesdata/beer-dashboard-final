
   function drawChart() {
    var data = new google.visualization.DataTable();
    //data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', '');
    data.addRows([
       [ 'From IRELAND...', 'UK', 2980.6 ],
       [ 'From NETHERLANDS...', 'UK', 1736.4 ],
       [ 'From ITALY...', 'UK', 1267.3 ],
       [ 'From FRANCE...', 'UK', 923.4 ],
       [ 'From BELGIUM...', 'UK', 400.9 ],
       [ 'From GERMANY...', 'UK', 281.8 ],
       [ 'From CZECH...', 'UK', 222.4 ],
       [ 'From Other EU country...', 'UK', 328 ],

       [ 'UK', '...to IRELAND', 1359.7 ],
       [ 'UK', '...to FRANCE', 820.3 ],
       [ 'UK', '...to ITALY', 450.3 ],
       [ 'UK', '...to NETHERLANDS', 376.4 ],
       [ 'UK', '...to SWEDEN', 102.1 ],
       [ 'UK', '...to SPAIN', 84.9 ],
       [ 'UK', '...to Other EU country', 549.2 ],
    ]);

    //colors
    var options = {
     //width: 600,
    // height: 400,
     tooltip: {isHtml: true },
     sankey: {
       link: { color: { fill: '#daa520',
       fillOpacity: 0.8,
     }
   },

     node: { colors: [ '#b35900' ],
                label: { color: '#871b47', fontName: 'Coming Soon',
                         fontSize: 12, } },
      }
    };



    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
    chart.draw(data, options);
}
