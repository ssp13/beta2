/**
 * Created by e76956 on 27/3/2015.
 */


sensors.service('sensorsDao',['$http',function($http){
    var sensorTest=[];
    return {
        getSensors:function(){
            var prom;
            var data=[{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"}];
            return data;
        },
        getTemp:function(){
           var data=$http.get("/api/getTemp");
            return data;
        },
        getPluvio:function(){
            var data=$http.get("http://mtp.doeyetea.eu:8080/gmswar/gms/getLastMeasurements/2/PLUVIO");
            return data;
        },
        getAir:function(){
            var data=$http.get("/api/getAir");
            return data;
        },
        getVane:function(){
            var data=$http.get("api/getVane");
            return data;
        },
        getTempAll:function(){
            var data=$http.get('api/getTempAll');
            return data;
        },
        setSensorTest:function(param){
            sensorTest=param;
        },
        getSensorTest:function(){
            return sensorTest;
        },
        getTempSensor:function(){
            var data=$http.get('api/getTempSensor');
            return data;
        },
        getTempValues:function(param){
            var data=$http.get('api/getLastTemperatures'+param);
            return data;
        },
        getTempValuesDirect:function(param){
            var data=$http.get('http://mtp.doeyetea.eu:8080/gmswar/gms/getMeasurementsByModule/4/'+param);
            return data;
        },
        getPressureValuesDirect:function(param){
            var data=$http.get('http://mtp.doeyetea.eu:8080/gmswar/gms/getMeasurementsByModule/7/'+param);
            return data;
        },
        getHumidity:function(){
            var data=$http.get('http://mtp.doeyetea.eu:8080/gmswar/gms/getLastMeasurements/2/HUMIDITY');;
            return data;
        },
        getPressure:function() {
            var data = $http.get('http://mtp.doeyetea.eu:8080/gmswar/gms/getLastMeasurements/2/PRESSURE');
            return data;
        }
        ,getBattLevel:function(){
                var data=$http.get('http://mtp.doeyetea.eu:8080/gmswar/gms/getLastMeasurements/2/BAT_LVL');
                return data;
        },getBattVolts : function (){
            var data=$http.get('http://mtp.doeyetea.eu:8080/gmswar/gms/getLastMeasurements/2/BAT_VOLT');
            return data;
        }





    };
}]);