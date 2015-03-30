/**
 * Created by e76956 on 27/3/2015.
 */


sensors.service('sensorsDao',['$http',function($http){
    return {
        getSensors:function(){
            var prom;
            var data=[{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"}];
            return data
        }
    }
}])