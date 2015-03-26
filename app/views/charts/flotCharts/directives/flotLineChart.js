/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module("app.custom").directive("flotLineChart",function(){
  return{
    restrict:"AE",
      replace:false,
    
    
    templateUrl:"app/views/charts/flotCharts/directives/flotChart.html",
    controller:['$scope','config',Controller],
      link:function(scope,element,attrs){
        
     
      }
  };

    function Controller ($scope, config) {

        var lineChart1;

               return lineChart1 = {},
                        lineChart1.data3 = [
            [1, 14],
            [2, 203],
            [3, 122],
            [4, 22],
            [5, 10],
            [6, 20],
            [7, 28],
            [8, 26],
            [9, 22],
            [10, 23],
            [11, 24]
        ],lineChart1.data1 = [
            [1, 15],
            [2, 20],
            [3, 14],
            [4, 102],
            [5, 10],
            [6, 20],
            [7, 28],
            [8, 26],
            [9, 22],
            [10, 23],
            [11, 24]
        ], lineChart1.data2 = [
            [1, 9],
            [2, 15],
            [3, 17],
            [4, 21],
            [5, 16],
            [6, 15],
            [7, 13],
            [8, 15],
            [9, 29],
            [10, 21],
            [11, 29]
        ], $scope.line1 = {}, 
           $scope.line1.data = [{
            data: lineChart1.data1,
            label: "New visitsors",
            lines: {
                fill: !1
            }
        }, {
            data: lineChart1.data2,
            label: "Returning visitors",
            lines: {
                fill: !1
            }
        },
        {
            data: lineChart1.data3,
            label: "Returning visitors",
            lines: {
                fill: !1
            }
        }
        ], $scope.line1.options = {
            series: {
                lines: {
                    show: !0,
                    fill: !1,
                    lineWidth: 3,
                    fillColor: {
                        colors: [{
                            opacity: 0.3
                        }, {
                            opacity: 0.3
                        }]
                    }
                },
                points: {
                    show: !0,
                    lineWidth: 3,
                    fill: !0,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 5
                },
                shadowSize: 0

            },
            colors: [config.primary_color, config.secondary_color],
            tooltip: !0,
            tooltipOpts: {
                defaultTheme: !1
            },
            grid: {
                hoverable: !0,
                clickable: !0,
                tickColor: config.chart_lines,
                borderWidth: 1,
                borderColor: config.chart_lines
            },
            xaxis: {
                ticks: [
                    [1, "Jan."],
                    [2, "Feb."],
                    [3, "Mar."],
                    [4, "Apr."],
                    [5, "May"],
                    [6, "June"],
                    [7, "July"],
                    [8, "Aug."],
                    [9, "Sept."],
                    [10, "Oct."],
                    [11, "Nov."],
                    [12, "Dec."]
                ]
            }
        }, areaChart = {}, areaChart.data1 = [
            [2007, 7],
            [2008, 13],
            [2009, 26],
            [2010, 23],
            [2011, 17],
            [2012, 13],
            [2013, 10],
            [2014, 15],
            [2015, 20],
            [2016, 28]
        ], areaChart.data2 = [
            [2007, 4],
            [2008, 6],
            [2009, 13],
            [2010, 20],
            [2011, 19],
            [2012, 16],
            [2013, 14],
            [2014, 20],
            [2015, 15],
            [2016, 13]
        ], $scope.area = {}, $scope.area.data = [{
            data: areaChart.data1,
            label: "New visits",
            lines: {
                fill: true
            }
        }, {
            data: areaChart.data2,
            label: "New sales",
            lines: {
                fill: true
            },
            yaxis: 2
        }], $scope.area.options = {
            series: {
                shadowSize: 0,
                lines: {
                    show: true,
                    lineWidth: false,
                    fill: true
                },
                curvedLines: {
                    apply: true,
                    active: true,
                    monotonicFit: false
                }
            },
            grid: {
                hoverable: !0,
                clickable: !0,
                tickColor: "#f5f5f5",
                borderWidth: 1,
                borderColor: "#f5f5f5"
            },
            colors: [config.primary_color_opac,config.primary_color]
        }, $scope.new_visitors = true,
        $scope.returning_visitors = true,
        $scope.switchClick = function(attr){
            var choiceContainer = $(".choices");
            choiceContainer.find('input[name=' + attr + ']').click();
        };
    }
;
});  