
  var url = 'http://igor.gold.ac.uk/~bcool001/api-test/pintlabs_service/brewery_api.php';

  $(document).ready(function reload() {

    $.getJSON(url, processResult);

    function processResult(result) {
        beerStyle = result.data;
        // Beer SyleIds: 1 - English Pale Ale, 2 - English IPA, 3 - Bitter, 12 - Brown Ale, 15 - Scotch Ale,
        // 16 - British Imperial Stout, 18 - Brown Porter, 20 - Cream Stout, 21 - Oatmeal Stout,
        // 59 - Belgian Tripel, 36 - Blonde Ale, 48 - Hefeweizen, 72 - Saison, 75 - German Pilsener,
        // 112 - Wheat Ale, 95 - North American Lager
        var styleIdList = [0,1,2,11,14,15,17,19,20,58,35,47,71,74,111,94];

        $('#paleale').on('click',function(e){
          console.log('Pale Ale');
          var styleId = styleIdList[0];

          reload();
          console.log(result);
          console.log(beerStyle[styleId]['name']);
          console.log(beerStyle[styleId]['description']);
          console.log(beerStyle[styleId]['abvMin']);
          console.log(beerStyle[styleId]['abvMax']);

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#Ipa').on('click',function(e){
          console.log('IPA');
          var styleId = styleIdList[1];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#bitter').on('click',function(e){
          console.log('Bitter');
          var styleId = styleIdList[2];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#brownale').on('click',function(e){
          console.log('Brown Ale');
          var styleId = styleIdList[3];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#scotchale').on('click',function(e){
          console.log('Scotch Ale');
          var styleId = styleIdList[4];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#imperial').on('click',function(e){
          console.log('Imperial Stout');
          var styleId = styleIdList[5];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#brownporter').on('click',function(e){
          console.log('Brown Porter');
          var styleId = styleIdList[6];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#creamstout').on('click',function(e){
          console.log('Cream Stout');
          var styleId = styleIdList[7];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#oatmealstout').on('click',function(e){
          console.log('Oatmeal Stout');
          var styleId = styleIdList[8];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#tripel').on('click',function(e){
          console.log('Belgian Tripel');
          var styleId = styleIdList[9];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#blonde').on('click',function(e){
          console.log('Blonde Ale');
          var styleId = styleIdList[10];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#hef').on('click',function(e){
          console.log('Hefeweizen');
          var styleId = styleIdList[11];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#saison').on('click',function(e){
          console.log('Saison');
          var styleId = styleIdList[12];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#pilsener').on('click',function(e){
          console.log('German Pilsener');
          var styleId = styleIdList[13];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#wheat').on('click',function(e){
          console.log('Wheat Ale');
          var styleId = styleIdList[14];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });

        $('#lager').on('click',function(e){
          console.log('American Lager');
          var styleId = styleIdList[15];

          reload();

          $('.name').html(beerStyle[styleId]['name']);
          $('.description').html(beerStyle[styleId]['description']);
          $('#abvMin').html(beerStyle[styleId]['abvMin']);
          $('#abvMax').html(beerStyle[styleId]['abvMax']);
        });



    };

  });
