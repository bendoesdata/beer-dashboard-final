// var beer;
  $(document).ready(function() {
    $('#mySelect').change(function(){
    // If... show statements
      if($(this).val() == 'chicken') {
        // order of arguments in each instance - hide lead pic, show/hide relevant beer pic, show/hide relvant text

        $(".captionLager").show();
        $(".captionIPA").hide();
        $(".captionWheat").hide();
        $(".captionPorter").hide();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").show();
        $("#ipa").hide();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").show();
        $("#ipaText").hide();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'shellfish') {
        // beer = "lager";
                $(".captionLager").show();
                $(".captionIPA").hide();
                $(".captionWheat").hide();
                $(".captionPorter").hide();
                $(".captionStout").hide();
        $("#mainPic").hide();
        $("#lager").show();
        $("#ipa").hide();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").show();
        $("#ipaText").hide();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'mildcheese') {
        // beer = "lager";
                        $(".captionLager").show();
                        $(".captionIPA").hide();
                        $(".captionWheat").hide();
                        $(".captionPorter").hide();
                        $(".captionStout").hide();
        $("#mainPic").hide();
        $("#lager").show();
        $("#ipa").hide();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").show();
        $("#ipaText").hide();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'whitefish') {
        // beer = "lager";
                $(".captionLager").show();
                $(".captionIPA").hide();
                $(".captionWheat").hide();
                $(".captionPorter").hide();
                $(".captionStout").hide();
        $("#mainPic").hide();
        $("#lager").show();
        $("#ipa").hide();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").show();
        $("#ipaText").hide();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'lemon') {
        // beer = "lager";
                $(".captionLager").show();
                $(".captionIPA").hide();
                $(".captionWheat").hide();
                $(".captionPorter").hide();
                $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").show();
        $("#ipa").hide();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").show();
        $("#ipaText").hide();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'hotdogs') {
        // beer = "lager";
                $(".captionLager").show();
                $(".captionIPA").hide();
                $(".captionWheat").hide();
                $(".captionPorter").hide();
                $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").show();
        $("#ipa").hide();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").show();
        $("#ipaText").hide();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'thai') {
        // beer = "ipa";
                        $(".captionIPA").show();
                        $(".captionLager").hide();
                        $(".captionWheat").hide();
                        $(".captionPorter").hide();
                        $(".captionStout").hide();
        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").show();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").hide();
        $("#ipaText").show();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'burgers') {
        // beer = "ipa";
        $(".captionIPA").show();
        $(".captionLager").hide();
        $(".captionWheat").hide();
        $(".captionPorter").hide();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").show();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").hide();
        $("#ipaText").show();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'oilyfish') {
        // beer = "ipa";
        $(".captionIPA").show();
        $(".captionLager").hide();
        $(".captionWheat").hide();
        $(".captionPorter").hide();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").show();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").hide();
        $("#ipaText").show();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'goancurries') {
        // beer = "ipa";
        $(".captionIPA").show();
        $(".captionLager").hide();
        $(".captionWheat").hide();
        $(".captionPorter").hide();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").show();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").hide();
        $("#ipaText").show();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'mango') {
        // beer = "ipa";
        $(".captionIPA").show();
        $(".captionLager").hide();
        $(".captionWheat").hide();
        $(".captionPorter").hide();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").show();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").hide();
        $("#ipaText").show();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'vietnamese') {
        // beer = "ipa";
        $(".captionIPA").show();
        $(".captionLager").hide();
        $(".captionWheat").hide();
        $(".captionPorter").hide();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").show();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").hide();
        $("#ipaText").show();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'mexican') {
        // beer = "ipa";
        $(".captionIPA").show();
        $(".captionLager").hide();
        $(".captionWheat").hide();
        $(".captionPorter").hide();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").show();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").hide();
        $("#ipaText").show();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'citrusdessert') {
        // beer = "ipa";
        $(".captionIPA").show();
        $(".captionLager").hide();
        $(".captionWheat").hide();
        $(".captionPorter").hide();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").show();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").hide();
        $("#ipaText").show();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'indian') {
        // beer = "wheatbeer";
        $(".captionIPA").hide();
        $(".captionLager").hide();
        $(".captionWheat").show();
        $(".captionPorter").hide();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").hide();
        $("#wheatbeer").show();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").hide();
        $("#ipaText").hide();
        $("#wheatbeerText").show();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'italian') {
        // beer = "wheatbeer";
        $(".captionIPA").hide();
        $(".captionLager").hide();
        $(".captionWheat").show();
        $(".captionPorter").hide();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").hide();
        $("#wheatbeer").show();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").hide();
        $("#ipaText").hide();
        $("#wheatbeerText").show();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'ham') {
        // beer = "wheatbeer";
        $(".captionIPA").hide();
        $(".captionLager").hide();
        $(".captionWheat").show();
        $(".captionPorter").hide();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").hide();
        $("#wheatbeer").show();
        $("#stout").hide();
        $("#porter").hide();
        $("#lagerText").hide();
        $("#ipaText").hide();
        $("#wheatbeerText").show();
        $("#stoutText").hide();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'pudding') {
        // beer = "porterstout";
        $(".captionIPA").hide();
        $(".captionLager").hide();
        $(".captionWheat").hide();
        $(".captionPorter").show();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").hide();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").show();
        $("#lagerText").hide();
        $("#ipaText").hide();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").show();
        $("p11").show();
      };
      if($(this).val() == 'oyster') {
        // beer = "porterstout";
        $(".captionIPA").hide();
        $(".captionLager").hide();
        $(".captionWheat").hide();
        $(".captionPorter").show();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").hide();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").show();
        $("#lagerText").hide();
        $("#ipaText").hide();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").show();
        $("p11").show();
      };
      if($(this).val() == 'grilled') {
        // beer = "porterstout";
        $(".captionIPA").hide();
        $(".captionLager").hide();
        $(".captionWheat").hide();
        $(".captionPorter").show();
        $(".captionStout").hide();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").hide();
        $("#wheatbeer").hide();
        $("#stout").hide();
        $("#porter").show();
        $("#lagerText").hide();
        $("#ipaText").hide();
        $("#wheatbeerText").hide();
        $("#stoutText").hide();
        $("#porterText").show();
        $("p11").show();
      };
      if($(this).val() == 'gamemeat') {
        // beer = "porterstout";
        $(".captionIPA").hide();
        $(".captionLager").hide();
        $(".captionWheat").hide();
        $(".captionPorter").hide();
        $(".captionStout").show();

        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").hide();
        $("#wheatbeer").hide();
        $("#stout").show();
        $("#porter").hide();
        $("#lagerText").hide();
        $("#ipaText").hide();
        $("#wheatbeerText").hide();
        $("#stoutText").show();
        $("#porterText").hide();
        $("p11").show();
      };
      if($(this).val() == 'fruitydessert') {
        // beer = "porterstout";
        $(".captionIPA").hide();
        $(".captionLager").hide();
        $(".captionWheat").hide();
        $(".captionPorter").hide();
        $(".captionStout").show();
        
        $("#mainPic").hide();
        $("#lager").hide();
        $("#ipa").hide();
        $("#wheatbeer").hide();
        $("#stout").show();
        $("#porter").hide();
        $("#lagerText").hide();
        $("#ipaText").hide();
        $("#wheatbeerText").hide();
        $("#stoutText").show();
        $("#porterText").hide();
        $("p11").show();
      };
    });

    $("#show").click(function() {
      $("p2").show();
    });

    $("#show1").click(function() {
      $("p4").show();
    });

    $("#show2").click(function() {
      $("p6").show();
    });

    $("#show3").click(function() {
      $("p8").show();
    });

    $("#show4").click(function() {
      $("p10").show();
    });
  });
