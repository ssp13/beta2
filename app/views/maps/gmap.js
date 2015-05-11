

window.google = window.google || {};
google.maps = google.maps || {};
(function() {

  function getScript(src) {
    document.write('<' + 'script src="' + src + '"' +
                   ' type="text/javascript"><' + '/script>');
  }

  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };

  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[[["http://mt0.googleapis.com/vt?lyrs=m@279000000\u0026src=api\u0026hl=en\u0026","http://mt1.googleapis.com/vt?lyrs=m@279000000\u0026src=api\u0026hl=en\u0026"],null,null,null,null,"m@279000000",["https://mts0.google.com/vt?lyrs=m@279000000\u0026src=api\u0026hl=en\u0026","https://mts1.google.com/vt?lyrs=m@279000000\u0026src=api\u0026hl=en\u0026"]],[["http://khm0.googleapis.com/kh?v=161\u0026hl=en\u0026","http://khm1.googleapis.com/kh?v=161\u0026hl=en\u0026"],null,null,null,1,"161",["https://khms0.google.com/kh?v=161\u0026hl=en\u0026","https://khms1.google.com/kh?v=161\u0026hl=en\u0026"]],[["http://mt0.googleapis.com/vt?lyrs=h@279000000\u0026src=api\u0026hl=en\u0026","http://mt1.googleapis.com/vt?lyrs=h@279000000\u0026src=api\u0026hl=en\u0026"],null,null,null,null,"h@279000000",["https://mts0.google.com/vt?lyrs=h@279000000\u0026src=api\u0026hl=en\u0026","https://mts1.google.com/vt?lyrs=h@279000000\u0026src=api\u0026hl=en\u0026"]],[["http://mt0.googleapis.com/vt?lyrs=t@132,r@279000000\u0026src=api\u0026hl=en\u0026","http://mt1.googleapis.com/vt?lyrs=t@132,r@279000000\u0026src=api\u0026hl=en\u0026"],null,null,null,null,"t@132,r@279000000",["https://mts0.google.com/vt?lyrs=t@132,r@279000000\u0026src=api\u0026hl=en\u0026","https://mts1.google.com/vt?lyrs=t@132,r@279000000\u0026src=api\u0026hl=en\u0026"]],null,null,[["http://cbk0.googleapis.com/cbk?","http://cbk1.googleapis.com/cbk?"]],[["http://khm0.googleapis.com/kh?v=84\u0026hl=en\u0026","http://khm1.googleapis.com/kh?v=84\u0026hl=en\u0026"],null,null,null,null,"84",["https://khms0.google.com/kh?v=84\u0026hl=en\u0026","https://khms1.google.com/kh?v=84\u0026hl=en\u0026"]],[["http://mt0.googleapis.com/mapslt?hl=en\u0026","http://mt1.googleapis.com/mapslt?hl=en\u0026"]],[["http://mt0.googleapis.com/mapslt/ft?hl=en\u0026","http://mt1.googleapis.com/mapslt/ft?hl=en\u0026"]],[["http://mt0.googleapis.com/vt?hl=en\u0026","http://mt1.googleapis.com/vt?hl=en\u0026"]],[["http://mt0.googleapis.com/mapslt/loom?hl=en\u0026","http://mt1.googleapis.com/mapslt/loom?hl=en\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en\u0026","https://mts1.googleapis.com/mapslt?hl=en\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en\u0026"]]],["en","US",null,0,null,null,"http://maps.gstatic.com/mapfiles/","http://csi.gstatic.com","https://maps.googleapis.com","http://maps.googleapis.com",null,"https://maps.google.com"],["http://maps.gstatic.com/maps-api-v3/api/js/18/14","3.18.14"],[3062753088],1,null,null,null,null,null,"",null,null,0,"http://khm.googleapis.com/mz?v=161\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"http://mt.googleapis.com/vt/icon",[["http://mt0.googleapis.com/vt","http://mt1.googleapis.com/vt"],["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],[null,[[0,"m",279000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],0],[null,[[0,"m",279000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],3],[null,[[0,"m",279000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],0],[null,[[0,"m",279000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],3],[null,[[4,"t",132],[0,"r",132000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[63],[37,[["smartmaps"]]]]],0],[null,[[4,"t",132],[0,"r",132000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[63],[37,[["smartmaps"]]]]],3],[null,null,[null,"en","US",null,18],0],[null,null,[null,"en","US",null,18],3],[null,null,[null,"en","US",null,18],6],[null,null,[null,"en","US",null,18],0],["https://mts0.google.com/vt","https://mts1.google.com/vt"],"/maps/vt",279000000,132],2,500,["http://geo0.ggpht.com/cbk","http://g0.gstatic.com/landmark/tour","http://g0.gstatic.com/landmark/config","","http://www.google.com/maps/preview/log204","","http://static.panoramio.com.storage.googleapis.com/photos/"],["https://www.google.com/maps/api/js/master?pb=!1m2!1u18!2s14!2sen!3sUS!4s18/14","https://www.google.com/maps/api/js/widget?pb=!1m2!1u18!2s14!2sen"],1,0], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
  getScript("https://maps.googleapis.com/maps/api/js");
})();
app.directive("gmap",function(){
    return{
        replace:false,
        templateUrl:"",
        scope:{
            
        },
        controller:Controller,
        
    }
})
app.controller("MapDemoCtrl", ["$scope", "$http", "$interval",
    function ($scope, $http, $interval) {
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Uluru (Ayers Rock)'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
        google.maps.event.addDomListener(window, 'load', initialize);
    }



])
