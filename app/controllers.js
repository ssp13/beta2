/*
 Application controllers
 Main controllers for the app
 */

angular.module("app.controllers", []).controller("AdminAppCtrl", ["$scope", "$location",
    function ($scope, $location) {
        $scope.checkIfOwnPage = function () {

            return _.contains(["/404", "/pages/500", "/pages/login", "/pages/signin", "/pages/signin1", "/pages/signin2", "/pages/signup", "/pages/signup1", "/pages/signup2", "/pages/forgot", "/pages/lock-screen"], $location.path());

        };

        $scope.$watch(function(){
            return $location.path();
        },function(v){
            console.log(v)
        });
        $scope.info = {
            theme_name: "Kimono",
            user_name: "John Doe"
        };


    }
]).controller("NavCtrl", ["$scope",
    function ($scope) {

        $scope.navInfo = {
            tasks_number: 5,
            widgets_number: 13
        };

        $scope.toggleAlternativeMenu = function(){
            $('body .page-wrapper').toggleClass('nav-style--alternative');
        };

    }
]).controller("DashboardCtrl", ["$scope",
    function ($scope) {


    }
]);


/*

 Chart controllers

 Includes controller for :

 https://github.com/rendro/easy-pie-chart - Easypiechart
 Morris charts
 FlotCharts
 http://omnipotent.net/jquery.sparkline/ - Sparkline

 */

angular.module("app.chart.ctrls", []).controller("chartingCtrl", ["$scope", 'config',
    function ($scope, config) {
        return $scope.easypie1 = {
            percent: 25,
            options: {
                animate: {
                    duration: 1e2,
                    enabled: !0
                },
                barColor: config.primary_color,
                lineCap: "round",
                size: 130,
                lineWidth: 8
            },
            name: "Bounce rate"
        }, $scope.easypie2 = {
            percent: 35,
            options: {
                animate: {
                    duration: 1e2,
                    enabled: !0
                },
                barColor: config.secondary_color,
                lineCap: "round",
                size: 130,
                lineWidth: 8
            },
            name: "Daily active user activation"
        }, $scope.easypie3 = {
            percent: 87,
            options: {
                animate: {
                    duration: 1e2,
                    enabled: !0
                },
                barColor: config.third_color,
                lineCap: "round",
                size: 130,
                lineWidth: 8
            },
            name: "registration / unique visit"
        }, $scope.easypiesmall1 = {
            percent: 25,
            options: {
                animate: {
                    duration: 1e2,
                    enabled: !0
                },
                trackColor: false,
                scaleColor: false,
                barColor: config.primary_color,
                lineCap: "round",
                size: 67,
                lineWidth: 5
            },
            name: "Bounce rate"
        }, $scope.easypiesmall2 = {
            percent: 35,
            options: {
                animate: {
                    duration: 1e2,
                    enabled: !0
                },
                trackColor: false,
                scaleColor: false,
                barColor: config.secondary_color,
                lineCap: "round",
                size: 67,
                lineWidth: 5
            },
            name: "Daily active user activation"
        }, $scope.easypiesmall3 = {
            percent: 87,
            options: {
                animate: {
                    duration: 1e2,
                    enabled: !0
                },
                trackColor: false,
                scaleColor: false,
                barColor: config.third_color,
                lineCap: "round",
                size: 67,
                lineWidth: 5
            },
            name: "registration / unique visit"
        };
    }
]).controller("gaugeCtrl", ["$scope","config",
    function ($scope,config) {
        return $scope.gauge1 = {
            gaugeData: {
                maxValue: 3e3,
                animationSpeed: 100,
                val: 1075
            },
            gaugeOptions: {
                lines: 12,
                angle: 0,
                lineWidth: 0.47,
                pointer: {
                    length: 0.6,
                    strokeWidth: 0.03,
                    color: "#555555"
                },
                limitMax: "false",
                colorStart: config.primary_color,
                colorStop: config.primary_color,
                strokeColor: "#F5F5F5",
                generateGradient: !0,
                percentColors: [
                    [0, config.primary_color],
                    [1, config.primary_color]
                ]
            }
        }, $scope.gauge2 = {
            gaugeData: {
                maxValue: 3e3,
                animationSpeed: 100,
                val: 1300
            },
            gaugeOptions: {
                lines: 12,
                angle: 0,
                lineWidth: 0.47,
                pointer: {
                    length: 0.6,
                    strokeWidth: 0.03,
                    color: "#555555"
                },
                limitMax: "false",
                colorStart: config.secondary_color,
                colorStop: config.secondary_color,
                strokeColor: "#F5F5F5",
                generateGradient: !0,
                percentColors: [
                    [0, config.secondary_color],
                    [1, config.secondary_color]
                ]
            }
        }, $scope.gauge3 = {
            gaugeData: {
                maxValue: 3e3,
                animationSpeed: 100,
                val: 1500
            },
            gaugeOptions: {
                lines: 12,
                angle: 0,
                lineWidth: 0.47,
                pointer: {
                    length: 0.6,
                    strokeWidth: 0.03,
                    color: "#555555"
                },
                limitMax: "false",
                colorStart: config.third_color,
                colorStop: config.third_color,
                strokeColor: "#F5F5F5",
                generateGradient: !0,
                percentColors: [
                    [0, config.third_color],
                    [1, config.third_color]
                ]
            }
        };
    }
]).controller("morrisChartCtrl", ["$scope",
    function ($scope) {
        return $scope.mainData = [{
            month: "2013-01",
            xbox: 294e3,
            will: 136e3,
            playstation: 244e3
        }, {
            month: "2013-02",
            xbox: 228e3,
            will: 335e3,
            playstation: 127e3
        }, {
            month: "2013-03",
            xbox: 199e3,
            will: 159e3,
            playstation: 13e4
        }, {
            month: "2013-04",
            xbox: 174e3,
            will: 16e4,
            playstation: 82e3
        }, {
            month: "2013-05",
            xbox: 255e3,
            will: 318e3,
            playstation: 82e3
        }, {
            month: "2013-06",
            xbox: 298400,
            will: 401800,
            playstation: 98600
        }, {
            month: "2013-07",
            xbox: 37e4,
            will: 225e3,
            playstation: 159e3
        }, {
            month: "2013-08",
            xbox: 376700,
            will: 303600,
            playstation: 13e4
        }, {
            month: "2013-09",
            xbox: 527800,
            will: 301e3,
            playstation: 119400
        }], $scope.simpleData = [{
            year: "2008",
            value: 20
        }, {
            year: "2009",
            value: 10
        }, {
            year: "2010",
            value: 5
        }, {
            year: "2011",
            value: 5
        }, {
            year: "2012",
            value: 20
        }, {
            year: "2013",
            value: 19
        }], $scope.comboData = [{
            year: "2008",
            a: 20,
            b: 16,
            c: 12
        }, {
            year: "2009",
            a: 10,
            b: 22,
            c: 30
        }, {
            year: "2010",
            a: 5,
            b: 14,
            c: 20
        }, {
            year: "2011",
            a: 5,
            b: 12,
            c: 19
        }, {
            year: "2012",
            a: 20,
            b: 19,
            c: 13
        }, {
            year: "2013",
            a: 28,
            b: 22,
            c: 20
        }], $scope.donutData = [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }, {
            label: "Online Sales",
            value: 19
        }];
    }
]).controller("chartjsCtrl", ["$scope","config",
    function ($scope,config) {
        return $scope.chartjsLine = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: config.primary_color,
                    strokeColor: config.primary_color,
                    pointColor: "#fff",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: config.primary_color,
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: config.secondary_color,
                    strokeColor: config.secondary_color,
                    pointColor: "#fff",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: config.secondary_color,
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }, $scope.chartjsBar = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: config.primary_color,
                    strokeColor: config.primary_color,
                    highlightFill: config.primary_color,
                    highlightStroke: config.primary_color,
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: config.secondary_color,
                    strokeColor: config.secondary_color,
                    highlightFill: config.secondary_color,
                    highlightStroke: config.secondary_color,
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }, $scope.chartjsRadar = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: config.primary_color,
                    strokeColor: config.primary_color,
                    pointColor: config.primary_color,
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: config.primary_color,
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: config.secondary_color,
                    strokeColor: config.secondary_color,
                    pointColor: config.secondary_color,
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: config.secondary_color,
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        }, $scope.chartjsPolarArea = [{
            value: 300,
            color: config.primary_color,
            highlight: config.primary_color,
            label: "Primary"
        },
        {
            value: 50,
            color: config.secondary_color,
            highlight: config.secondary_color,
            label: "Secondary"
        },
        {
            value: 100,
            color: config.third_color,
            highlight: config.third_color,
            label: "Third"
        },
        {
            value: 40,
            color: config.fourth_color,
            highlight: config.fourth_color,
            label: "Four"
        },
        {
            value: 120,
            color: "#503f3c",
            highlight: "#503f3c",
            label: "Dark Brown"
        }],
        $scope.chartjsPie = [{
            value: 300,
            color: config.primary_color,
            highlight: config.primary_color,
            label: "Primary"
        },
        {
            value: 50,
            color: config.secondary_color,
            highlight: config.secondary_color,
            label: "Secondary"
        },
        {
            value: 100,
            color: config.third_color,
            highlight: config.third_color,
            label: "Third"
        }],
        $scope.chartjsDoughnut = [{
            value: 300,
            color: config.primary_color,
            highlight: config.primary_color,
            label: "Primary"
        },
        {
            value: 50,
            color: config.secondary_color,
            highlight: config.secondary_color,
            label: "Secondary"
        },
        {
            value: 100,
            color: config.third_color,
            highlight: config.third_color,
            label: "Third"
        }];
    }
]).controller("flotChartCtrl", ["$scope", 'config',
    function ($scope, config) {

        var areaChart, barChart, lineChart1;

        return lineChart1 = {}, lineChart1.data1 = [
            [1, 15],
            [2, 20],
            [3, 14],
            [4, 10],
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
        ], $scope.line1 = {}, $scope.line1.data = [{
            data: lineChart1.data1,
            label: "New visitors",
            lines: {
                fill: !1
            }
        }, {
            data: lineChart1.data2,
            label: "Returning visitors",
            lines: {
                fill: !1
            }
        }], $scope.line1.options = {
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
        }, barChart = {}, barChart.data1 = [
            [2008, 20],
            [2009, 10],
            [2010, 5],
            [2011, 5],
            [2012, 20],
            [2013, 28]
        ], barChart.data2 = [
            [2008, 16],
            [2009, 22],
            [2010, 14],
            [2011, 12],
            [2012, 19],
            [2013, 22]
        ], barChart.data3 = [
            [2008, 12],
            [2009, 30],
            [2010, 20],
            [2011, 19],
            [2012, 13],
            [2013, 20]
        ], $scope.barChart = {}, $scope.barChart.data = [
            {
                color: '#fbfbfb',
                label: "Direct Visits",
                data: [
                    [3, 2], [4, 5], [5, 4], [6, 11], [7, 12], [8, 11], [9, 8], [10, 14], [11, 12], [12, 16], [13, 9],
                    [14, 10], [15, 14], [16, 15], [17, 9]
                ],

                lines: {
                    show: true,
                    fill: true,
                    lineWidth: .1,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0
                            }, {
                                opacity: 0.4
                            }
                        ]
                    }
                },
                points: {
                    show: false
                },
                shadowSize: 0
            },
            {
                color: '#fbfbfb',
                label: "Referral Visits",
                data: [
                    [3, 10], [4, 13], [5, 12], [6, 16], [7, 19], [8, 19], [9, 24], [10, 19], [11, 18], [12, 21], [13, 17],
                    [14, 14], [15, 12], [16, 14], [17, 15]
                ],
                bars: {
                    order: 1,
                    show: true,
                    borderWidth: 0,
                    barWidth: 0.4,
                    lineWidth: .5,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.4
                            }, {
                                opacity: 1
                            }
                        ]
                    }
                }
            },
            {
                color:'#fbfbfb',
                label: "Search Engines",
                data: [
                    [3, 14], [4, 11], [5, 10], [6, 9], [7, 5], [8, 8], [9, 5], [10, 6], [11, 4], [12, 7], [13, 4],
                    [14, 3], [15, 4], [16, 6], [17, 4]
                ],
                lines: {
                    show: true,
                    fill: false,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.3
                            }, {
                                opacity: 0
                            }
                        ]
                    }
                },
                points: {
                    show: true
                }
            }]
        , $scope.barChart.options = {
            legend: {
                show: false
            },
            xaxis: {
                tickDecimals: 0,
                color: '#f3f3f3'
            },
            yaxis: {
                min: 0,
                color: '#f3f3f3',
                tickFormatter: function(val, axis) {
                    return "";
                },
            },
            grid: {
                hoverable: true,
                clickable: false,
                borderWidth: 0,
                aboveData: false,
                color: '#fbfbfb'

            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false,
                content: " <b>%x May</b> , <b>%s</b> : <span>%y</span>",
            }
        }, $scope.pieChart = {}, $scope.pieChart.data = [{
            label: "Download Sales",
            data: 12
        }, {
            label: "In-Store Sales",
            data: 30
        }, {
            label: "Mail-Order Sales",
            data: 20
        }, {
            label: "Online Sales",
            data: 19
        }], $scope.pieChart.options = {
            series: {
                pie: {
                    show: !0
                }
            },
            legend: {
                show: !0
            },
            grid: {
                hoverable: !0,
                clickable: !0
            },
            colors: [config.primary_color, config.secondary_color, config.third_color, config.fourth_color],
            tooltip: !0,
            tooltipOpts: {
                content: "%p.0%, %s",
                defaultTheme: !1
            }
        }, $scope.donutChart = {}, $scope.donutChart.data = [{
            label: "Download Sales",
            data: 12
        }, {
            label: "In-Store Sales",
            data: 30
        }, {
            label: "Mail-Order Sales",
            data: 20
        }, {
            label: "Online Sales",
            data: 19
        }], $scope.donutChart.options = {
            series: {
                pie: {
                    show: !0,
                    innerRadius: 0.5
                }
            },
            legend: {
                show: !0
            },
            grid: {
                hoverable: !0,
                clickable: !0
            },
            colors: [config.primary_color, config.secondary_color, config.third_color, config.fourth_color],
            tooltip: !0,
            tooltipOpts: {
                content: "%p.0%, %s",
                defaultTheme: !1
            }
        }, $scope.donutChart2 = {}, $scope.donutChart2.data = [{
            label: "Download Sales",
            data: 12
        }, {
            label: "In-Store Sales",
            data: 30
        }, {
            label: "Mail-Order Sales",
            data: 20
        }, {
            label: "Online Sales",
            data: 19
        }, {
            label: "Direct Sales",
            data: 15
        }], $scope.donutChart2.options = {
            series: {
                pie: {
                    show: !0,
                    innerRadius: 0.5
                }
            },
            legend: {
                show: !1
            },
            grid: {
                hoverable: !0,
                clickable: !0
            },
            colors: [config.primary_color, config.secondary_color, config.third_color, config.fourth_color],
            tooltip: !0,
            tooltipOpts: {
                content: "%p.0%, %s",
                defaultTheme: !1
            }
        },
        $scope.new_visitors = true,
        $scope.returning_visitors = true,
        $scope.switchClick = function(attr){
            var choiceContainer = $(".choices");
            choiceContainer.find('input[name=' + attr + ']').click();
        };
    }
]).controller("flotChartCtrl.realtime", ["$scope",
    function () {
    }
]).controller("sparklineCtrl", ["$scope", "config",
    function ($scope, config) {
        return $scope.demoData1 = {
            sparkData: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7],
            sparkOptions: {
                type: "line",
                lineColor: "#fff",
                highlightLineColor: "#fff",
                fillColor: config.primary_color,
                spotColor: !1,
                minSpotColor: !1,
                maxSpotColor: !1,
                width: "100%",
                height: "150px"
            }
        }, $scope.simpleChart1 = {
            sparkData: [3, 1, 2, 3, 5, 3],
            sparkOptions: {
                type: "line",
                lineColor: config.primary_color,
                fillColor: config.primary_color,
                spotColor: !1,
                minSpotColor: !1,
                maxSpotColor: !1,
                width: "80px",
                height: "50px"
            }
        }, $scope.simpleChart2 = {
            sparkData: [1, 2, 4, 1, 5, 3, 4, 2,1, 5, 1, 4],
            sparkOptions: {
                type: "bar",
                barColor: config.secondary_color,
                width: "150px",
                height: "50px"
            }
        },$scope.simpleChart2danger = {
            sparkData: [3, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3],
            sparkOptions: {
                type: "bar",
                barColor: config.danger_color,
                width: "150px",
                height: "50px"
            }
        }, $scope.simpleChartlong = {
            sparkData: [1, 3, 2, 5, 4, 2, 1, 7, 1, 8, 4, 3, 5, 2, 4, 5, 1, 7, 1, 8],
            sparkOptions: {
                type: "bar",
                barColor: config.primary_color,
                width: "250px",
                height: "80px"
            }
        }, $scope.simpleChart2long = {
            sparkData: [3, 1, 2, 3, 5, 3, 4, 2, 5, 4, 2, 6, 2, 4, 3, 1],
            sparkOptions: {
                type: "bar",
                barColor: config.secondary_color,
                width: "200px",
                height: "30px"
            }
        }, $scope.simpleChart2info = {
            sparkData: [3, 1, 2, 3, 5, 3, 4, 2],
            sparkOptions: {
                type: "bar",
                barColor: "#FFFFFF",
                width: "100px",
                height: "30px"
            }
        }, $scope.simpleChart3 = {
            sparkData: [3, 1, 2, 3, 5, 3, 4, 2],
            sparkOptions: {
                type: "pie",
                sliceColors: [config.primary_color, config.secondary_color, config.third_color, config.fourth_color, "#CCCCCC", "#365340"],
                width: "50px",
                height: "50px"
            }
        }, $scope.tristateChart1 = {
            sparkData: [1, 2, -3, -5, 3, 1, -4, 2],
            sparkOptions: {
                type: "tristate",
                posBarColor: config.primary_color,
                negBarColor: config.secondary_color,
                width: "100%",
                height: "50px"
            }
        }, $scope.largeChart1 = {
            sparkData: [3, 1, 2, 3, 5, 3, 4, 2],
            sparkOptions: {
                type: "line",
                lineColor: config.primary_color,
                highlightLineColor: config.primary_color,
                fillColor: config.primary_color,
                spotColor: !1,
                minSpotColor: !1,
                maxSpotColor: !1,
                width: "100%",
                height: "150px"
            }
        }, $scope.largeChart2 = {
            sparkData: [3, 1, 2, 3, 5, 3, 4, 2],
            sparkOptions: {
                type: "bar",
                barColor: config.primary_color,
                barWidth: 10,
                width: "100%",
                height: "150px"
            }
        }, $scope.largeChart3 = {
            sparkData: [3, 1, 2, 3, 5],
            sparkOptions: {
                type: "pie",
                sliceColors: [config.primary_color, config.secondary_color, config.third_color, config.fourth_color, "#CCCCCC", "#365340"],
                width: "150px",
                height: "150px"
            }
        };
    }
]);


/*
 App tasks controllers
 Main task controllers (includes saving tasks into localStorage)
 */

angular.module("app.task", []).factory("taskStorage", function () {

    /**************************
     Saves and loads tasks from the localStorage
     **************************/

    var DEMO_TASKS, STORAGE_ID;
    return STORAGE_ID = "tasks",
        DEMO_TASKS = '[ ' +
        '{"title": "Call customer X", "completed": true}, ' +
        '{"title": "Review marketing system", "completed": true}, ' +
        '{"title": "Do the twist!", "completed": false}, ' +
        '{"title": "Watch over the mars scheme", "completed": false}, ' +
        '{"title": "Complete proposal for spaceship", "completed": false}, ' +
        '{"title": "Do inventory of everything", "completed": false} ]', {
        get: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS);
        },
        put: function (tasks) {
            return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks));
        }
    };
}).controller("taskCtrl", ["$scope", "taskStorage", "filterFilter", "$rootScope", "loggit",
    function ($scope, taskStorage, filterFilter, $rootScope, loggit) {
        var tasks;

        return tasks = $scope.tasks = taskStorage.get(),
            $scope.newTask = "",
            $scope.countTasksLeft = filterFilter(tasks, {
                completed: !1
            }).length, $scope.editedTask = null, $scope.statusFilter = {
            completed: !1
        },$scope.active_tasks = filterFilter(tasks, {
            completed: !1
        }),$scope.completed_tasks = filterFilter(tasks, {
            completed: !0
        }),
        $scope.tasksStatus = [{
            key: "all",
            label: "All",
            tasks:$scope.tasks
        },{
            key: "active",
            label: "Active",
            tasks: $scope.active_tasks
        },{
            key: "completed",
            label: "Completed",
            tasks:$scope.completed_tasks
        }],
        $scope.filter = function (filterType) {
            switch (filterType) {
                case "all":
                    $scope.statusFilter = "";
                    break;
                case "active":
                    $scope.statusFilter = {
                        completed: !1
                    };
                    break;
                case "completed":
                    $scope.statusFilter = {
                        completed: !0
                    };
                    break;
            }
        },$scope.add = function () {
            var newTask;
            return newTask = $scope.newTask.trim(), 0 !== newTask.length ? (tasks.push({
                title: newTask,
                completed: !1
            }), loggit.logSuccess('New task added : "' + newTask + '"'), taskStorage.put(tasks), $scope.newTask = "", $scope.countTasksLeft++) : void 0;
        }, $scope.edit = function (task) {
            $scope.editedTask = task;
        }, $scope.doneEditing = function (task) {
            return $scope.editedTask = null, task.title = task.title.trim(), task.title ? loggit.log("Task was updated") : $scope.remove(task), taskStorage.put(tasks);
        }, $scope.remove = function (task) {
            var index;
            return $scope.countTasksLeft -= task.completed ? 0 : 1, index = $scope.tasks.indexOf(task), $scope.tasks.splice(index, 1), taskStorage.put(tasks), loggit.logError("Task was removed");
        }, $scope.completed = function (task) {

                return $scope.countTasksLeft += task.completed ? -1 : 1,
                $scope.active_tasks = filterFilter(tasks, {
                    completed: !1
                }),
                console.log($scope.active_tasks),
                $scope.completed_tasks = filterFilter(tasks, {
                    completed: !0
                }),
                taskStorage.put(tasks),
                task.completed ? $scope.countTasksLeft > 0 ?
                loggit.log(1 === $scope.countTasksLeft ? "Only " + $scope.countTasksLeft + " task left" : "Well done! Only " + $scope.countTasksLeft + " tasks left") : loggit.logSuccess("Yay!! All tasks are done :)") : void 0;

        }, $scope.clearCompleted = function () {
            return $scope.tasks = tasks = tasks.filter(function (val) {
                return !val.completed;
            }), taskStorage.put(tasks);
        }, $scope.markAll = function (completed) {
            return tasks.forEach(function (task) {
                task.completed = completed;
            }), $scope.countTasksLeft = completed ? 0 : tasks.length, taskStorage.put(tasks), completed ? loggit.logSuccess("Yay!! All tasks are done :)") : void 0;
        }, $scope.$watch("countTasksLeft == 0", function (val) {
            $scope.allChecked = val;
        }), $scope.$watch("countTasksLeft", function (newVal) {
            $rootScope.$broadcast("taskRemaining:changed", newVal);
        }),$scope.$watch("tasks", function (newVal) {
            $rootScope.$broadcast("tasksStatus:changed", newVal);
        });
    }
]);


/*
 App Form validations
 Validator functions for form elements (signIn,signUp and custom forms)
 */

angular.module("app.form.validation", []).controller("wizardFormCtrl", ["$scope",
    function ($scope) {
        return $scope.wizard = {
            firstName: "some name",
            lastName: "",
            email: "",
            password: "",
            age: "",
            address: ""
        }, $scope.isValidateStep1 = function () {
            return void 0;
        }, $scope.finishedWizard = function () {
            return void 0;
        };
    }
]).controller("formConstraintsCtrl", ["$scope",
    function ($scope) {
        var original;
        return $scope.form = {
            required: "",
            minlength: "",
            maxlength: "",
            length_rage: "",
            type_something: "",
            confirm_type: "",
            foo: "",
            email: "",
            url: "",
            num: "",
            minVal: "",
            maxVal: "",
            valRange: "",
            pattern: ""
        }, original = angular.copy($scope.form), $scope.revert = function () {
            return $scope.form = angular.copy(original), $scope.form_constraints.$setPristine();
        }, $scope.canRevert = function () {
            return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine;
        }, $scope.canSubmit = function () {
            return $scope.form_constraints.$valid && !angular.equals($scope.form, original);
        };
    }
]).controller("signinCtrl", ["$scope",
    function ($scope) {
        var original;
        return $scope.user = {
            email: "",
            password: ""
        }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
            return $scope.user = angular.copy(original), $scope.form_signin.$setPristine();
        }, $scope.canRevert = function () {
            return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine;
        }, $scope.canSubmit = function () {
            return $scope.form_signin.$valid && !angular.equals($scope.user, original);
        }, $scope.submitForm = function () {
            return $scope.showInfoOnSubmit = !0, $scope.revert();
        };
    }
]).controller("signupCtrl", ["$scope",
    function ($scope) {
        var original;
        return $scope.user = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            age: ""
        }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
            return $scope.user = angular.copy(original), $scope.form_signup.$setPristine(), $scope.form_signup.confirmPassword.$setPristine();
        }, $scope.canRevert = function () {
            return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
        }, $scope.canSubmit = function () {
            return $scope.form_signup.$valid && !angular.equals($scope.user, original);
        }, $scope.submitForm = function () {
            return $scope.showInfoOnSubmit = !0, $scope.revert();
        };
    }
]).directive("validateEquals", [
    function () {
        return {
            require: "ngModel",
            link: function (scope, ele, attrs, ngModelCtrl) {
                var validateEqual;
                return validateEqual = function (value) {
                    var valid;
                    return valid = value === scope.$eval(attrs.validateEquals), ngModelCtrl.$setValidity("equal", valid), "function" == typeof valid ? valid({
                        value: void 0
                    }) : void 0;
                }, ngModelCtrl.$parsers.push(validateEqual), ngModelCtrl.$formatters.push(validateEqual), scope.$watch(attrs.validateEquals, function (newValue, oldValue) {
                    return newValue !== oldValue ? ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue) : void 0;
                });
            }
        };
    }
]);


/*
 App Form Ui Controls
 Controllers for form Ui components
 */

angular.module("app.ui.form.ctrls", []).controller("TagsDemoCtrl", ["$scope",
    function ($scope) {
        $scope.tags = ["foo", "bar"];
    }
]).controller("DatepickerDemoCtrl", ["$scope",
    function ($scope) {
        return $scope.today = function () {
            $scope.dt = new Date();
        }, $scope.today(), $scope.showWeeks = !0, $scope.toggleWeeks = function () {
            $scope.showWeeks = !$scope.showWeeks;
        }, $scope.clear = function () {
            $scope.dt = null;
        }, $scope.disabled = function (date, mode) {
            return "day" === mode && (0 === date.getDay() || 6 === date.getDay());
        }, $scope.toggleMin = function () {
            var _ref;
            $scope.minDate = null !== (_ref = $scope.minDate) ? _ref : {
                "null": new Date()
            };
        }, $scope.toggleMin(), $scope.open = function ($event) {
            return $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0;
        }, $scope.dateOptions = {
            "year-format": "'yy'",
            "starting-day": 1
        }, $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate"], $scope.format = $scope.formats[0];
    }
]).controller("TimepickerDemoCtrl", ["$scope",
    function ($scope) {
        return $scope.mytime = new Date(), $scope.hstep = 1, $scope.mstep = 15, $scope.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        }, $scope.ismeridian = !0, $scope.toggleMode = function () {
            $scope.ismeridian = !$scope.ismeridian;
        }, $scope.update = function () {
            var d;
            return d = new Date(), d.setHours(14), d.setMinutes(0), $scope.mytime = d;
        }, $scope.changed = function () {
            return void 0;
        }, $scope.clear = function () {
            $scope.mytime = null;
        };
    }
]).controller("TypeaheadCtrl", ["$scope",
    function ($scope) {
        return $scope.selected = void 0, $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    }
]).controller("RatingDemoCtrl", ["$scope",
    function ($scope) {
        return $scope.rate = 7, $scope.max = 10, $scope.isReadonly = !1, $scope.hoveringOver = function (value) {
            return $scope.overStar = value, $scope.percent = 100 * (value / $scope.max);
        }, $scope.ratingStates = [{
            stateOn: "glyphicon-ok-sign",
            stateOff: "glyphicon-ok-circle"
        }, {
            stateOn: "glyphicon-star",
            stateOff: "glyphicon-star-empty"
        }, {
            stateOn: "glyphicon-heart",
            stateOff: "glyphicon-ban-circle"
        }, {
            stateOn: "glyphicon-heart"
        }, {
            stateOff: "glyphicon-off"
        }];
    }
]);

/*
 App Tables
 Controller for dynamic and other tables
 */

angular.module("app.tables", []).controller("tableCtrl", ["$scope", "$filter",
    function ($scope, $filter) {
        var init;
        return $scope.stores = [{
            name: "Nijiya Market",
            price: "$$",
            sales: 292,
            rating: 4
        }, {
            name: "Eat On Monday Truck",
            price: "$",
            sales: 119,
            rating: 4.3
        }, {
            name: "Tea Era",
            price: "$",
            sales: 874,
            rating: 4
        }, {
            name: "Rogers Deli",
            price: "$",
            sales: 347,
            rating: 4.2
        }, {
            name: "MoBowl",
            price: "$$$",
            sales: 24,
            rating: 4.6
        }, {
            name: "The Milk Pail Market",
            price: "$",
            sales: 543,
            rating: 4.5
        }, {
            name: "Nob Hill Foods",
            price: "$$",
            sales: 874,
            rating: 4
        }, {
            name: "Scratch",
            price: "$$$",
            sales: 643,
            rating: 3.6
        }, {
            name: "Gochi Japanese Fusion Tapas",
            price: "$$$",
            sales: 56,
            rating: 4.1
        }, {
            name: "Cost Plus World Market",
            price: "$$",
            sales: 79,
            rating: 4
        }, {
            name: "Bumble Bee Health Foods",
            price: "$$",
            sales: 43,
            rating: 4.3
        }, {
            name: "Costco",
            price: "$$",
            sales: 219,
            rating: 3.6
        }, {
            name: "Red Rock Coffee Co",
            price: "$",
            sales: 765,
            rating: 4.1
        }, {
            name: "99 Ranch Market",
            price: "$",
            sales: 181,
            rating: 3.4
        }, {
            name: "Mi Pueblo Food Center",
            price: "$",
            sales: 78,
            rating: 4
        }, {
            name: "Cucina Venti",
            price: "$$",
            sales: 163,
            rating: 3.3
        }, {
            name: "Sufi Coffee Shop",
            price: "$",
            sales: 113,
            rating: 3.3
        }, {
            name: "Dana Street Roasting",
            price: "$",
            sales: 316,
            rating: 4.1
        }, {
            name: "Pearl Cafe",
            price: "$",
            sales: 173,
            rating: 3.4
        }, {
            name: "Posh Bagel",
            price: "$",
            sales: 140,
            rating: 4
        }, {
            name: "Artisan Wine Depot",
            price: "$$",
            sales: 26,
            rating: 4.1
        }, {
            name: "Hong Kong Chinese Bakery",
            price: "$",
            sales: 182,
            rating: 3.4
        }, {
            name: "Starbucks",
            price: "$$",
            sales: 97,
            rating: 3.7
        }, {
            name: "Tapioca Express",
            price: "$",
            sales: 301,
            rating: 3
        }, {
            name: "House of Bagels",
            price: "$",
            sales: 82,
            rating: 4.4
        }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
            var end, start;
            return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end);
        }, $scope.onFilterChange = function () {
            return $scope.select(1), $scope.currentPage = 1, $scope.row = "";
        }, $scope.onNumPerPageChange = function () {
            return $scope.select(1), $scope.currentPage = 1;
        }, $scope.onOrderChange = function () {
            return $scope.select(1), $scope.currentPage = 1;
        }, $scope.search = function () {
            return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange();
        }, $scope.order = function (rowName) {
            return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0;
        }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function () {
            return $scope.search(), $scope.select($scope.currentPage);
        }), $scope.search();
    }
]);

/*
 App Ui Controllers
 Provides general controllers for the app
 */

angular.module("app.ui.ctrls", []).controller("NotifyCtrl", ["$scope", "loggit",
    function ($scope, loggit) {
        $scope.notify = function (type) {
            switch (type) {
                case "info":
                    return loggit.log("Hello! This is an alert of the info importance level.");
                case "success":
                    return loggit.logSuccess("Great! You did something successfully.");
                case "warning":
                    return loggit.logWarning("Warning! Something that happened that is not critical but important.");
                case "error":
                    return loggit.logError("Error! Something went terribly wrong and needs your attention.");
            }
        };
    }
]).controller("AlertDemoCtrl", ["$scope",
    function ($scope) {
        $scope.alerts = [{
            type: "success",
            msg: "Great! You did something successfully."
        }, {
            type: "info",
            msg: "Hello! This is an alert of the info importance level."
        }, {
            type: "warning",
            msg: "Warning! Something that happened that is not critical but important."
        }, {
            type: "danger",
            msg: "Error! Something went terribly wrong and needs your attention."
        }];

        $scope.addAlert = function () {
            $scope.alerts.push({msg: 'Another alert!'});
        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };
    }
]).controller("ProgressDemoCtrl", ["$scope",
    function ($scope) {
        $scope.max = 200;

        $scope.random = function () {
            var value = Math.floor((Math.random() * 100) + 1);
            var type;

            if (value < 25) {
                type = 'success';
            } else if (value < 50) {
                type = 'info';
            } else if (value < 75) {
                type = 'warning';
            } else {
                type = 'danger';
            }

            $scope.showWarning = (type === 'danger' || type === 'warning');

            $scope.dynamic = value;
            $scope.type = type;
        };
        $scope.random();

        $scope.randomStacked = function () {
            $scope.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];

            for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
                var index = Math.floor((Math.random() * 4));
                $scope.stacked.push({
                    value: Math.floor((Math.random() * 30) + 1),
                    type: types[index]
                });
            }
        };
        $scope.randomStacked();
    }
]).controller("AccordionDemoCtrl", ["$scope",
    function ($scope) {
        return $scope.oneAtATime = !0, $scope.groups = [{
            title: "First Group Header",
            content: "First Group Body"
        }, {
            title: "Second Group Header",
            content: "Second Group Body"
        }, {
            title: "Third Group Header",
            content: "Third Group Body"
        }], $scope.items = ["Item 1", "Item 2", "Item 3"], $scope.status = {
            isFirstOpen: !0,
            isFirstOpen1: !0,
            isFirstOpen2: !0,
            isFirstOpen3: !0,
            isFirstOpen4: !0,
            isFirstOpen5: !0,
            isFirstOpen6: !0
        }, $scope.addItem = function () {
            var newItemNo;
            newItemNo = $scope.items.length + 1;
            $scope.items.push("Item " + newItemNo);
        };
    }
]).controller("CollapseDemoCtrl", ["$scope",
    function ($scope) {
        $scope.isCollapsed = !1;
    }
]).controller("ModalDemoCtrl", ["$scope", "$modal", "$log",
    function ($scope, $modal, $log) {
        $scope.items = ['item1', 'item2', 'item3'];

        $scope.open = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }
]).controller("ModalInstanceCtrl", ["$scope", "$modalInstance", "items",
    function ($scope, $modalInstance, items) {
        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
]).controller("PaginationDemoCtrl", ["$scope",
    function ($scope) {
        $scope.totalItems = 64;
        $scope.currentPage = 4;

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function () {
            console.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
    }
]).controller("MapDemoCtrl", ["$scope", "$http", "$interval",
    function ($scope, $http, $interval) {
        var i, markers;
        for (markers = [], i = 0; 8 > i;) {
            markers[i] = new google.maps.Marker({
                title: "Marker: " + i
            });
            i++;
        }
        $scope.GenerateMapMarkers = function () {
            var d, lat, lng, loc, numMarkers;
            for (d = new Date(), $scope.date = d.toLocaleString(), numMarkers = Math.floor(4 * Math.random()) + 4, i = 0; numMarkers > i;) {
                lat = 38.73 + Math.random() / 100;
                lng = -9.14 + Math.random() / 100;
                loc = new google.maps.LatLng(lat, lng);
                markers[i].setPosition(loc);
                markers[i].setMap($scope.map);
                i++;
            }
        };
        $interval($scope.GenerateMapMarkers, 2e3);
    }
]).controller("TreeDemoCtrl", ["$scope",
    function ($scope) {
        // Parameters

        $scope.list = [{
            "id": 1,
            "title": "1. dragon-breath",
            "items": []
        }, {
            "id": 2,
            "title": "2. moiré-vision",
            "items": [{
                "id": 21,
                "title": "2.1. tofu-animation",
                "items": [{
                    "id": 211,
                    "title": "2.1.1. spooky-giraffe",
                    "items": []
                }, {
                    "id": 212,
                    "title": "2.1.2. bubble-burst",
                    "items": []
                }]
            }, {
                "id": 22,
                "title": "2.2. barehand-atomsplitting",
                "items": []
            }]
        }, {
            "id": 3,
            "title": "3. unicorn-zapper",
            "items": []
        }, {
            "id": 4,
            "title": "4. romantic-transclusion",
            "items": []
        }];

        $scope.callbacks = {};

        $scope.remove = function (scope) {
            scope.remove();
        };

        $scope.toggle = function (scope) {
            scope.toggle();
        };

        $scope.newSubItem = function (scope) {
            var nodeData = scope.$modelValue;
            nodeData.items.push({
                id: nodeData.id * 10 + nodeData.items.length,
                title: nodeData.title + '.' + (nodeData.items.length + 1),
                items: []
            });
        };
    }
]);


angular.module('app.material', ['ngMaterial']).controller('SwitchCtrl', function ($scope) {
    $scope.data = {
        cb1: true,
        cb4: true
    };
    $scope.onChange = function (cbState) {
        $scope.message = "The switch is now: " + cbState;
    };
}).controller('SliderCtrl', function ($scope) {
    $scope.color = {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255)
    };
    $scope.rating1 = 3;
    $scope.rating2 = 2;
    $scope.rating3 = 4;
    $scope.disabled1 = 0;
    $scope.disabled2 = 70;
}).controller('RadiobuttonsCtrl', function ($scope) {
    $scope.data = {
        group1: 'Banana',
        group2: '2',
        group3: 'avatar-1'
    };
    $scope.radioData = [
        {label: '1', value: 1},
        {label: '2', value: 2},
        {label: '3', value: '3', isDisabled: true},
        {label: '4', value: '4'}
    ];
    $scope.submit = function () {
        alert('submit');
    };
    $scope.addItem = function () {
        var r = Math.ceil(Math.random() * 1000);
        $scope.radioData.push({label: r, value: r});
    };
    $scope.removeItem = function () {
        $scope.radioData.pop();
    };
}).controller('CheckboxCtrl', function ($scope) {
    $scope.data = {};
    $scope.data.cb1 = true;
    $scope.data.cb2 = false;
    $scope.data.cb3 = false;
    $scope.data.cb4 = false;
    $scope.data.cb5 = false;
}).controller('SelectCtrl', function ($scope) {
    $scope.neighborhoods = ['Chelsea', 'Financial District', 'Midtown', 'West Village', 'Williamsburg'];
    $scope.neighborhoods2 = ['Chelsea', 'Financial District', 'Lower Manhattan', 'Midtown', 'Soho', 'Upper Manhattan', 'West Village', 'Williamsburg'];
}).controller('Demoautocomplete', function ($timeout, $q) {
    var self = this;
    // list of `state` value/display objects
    self.states = loadAll();
    self.selectedItem = null;
    self.searchText = null;
    self.querySearch = querySearch;
    self.simulateQuery = false;
    self.isDisabled = false;
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
        var results = query ? self.states.filter(createFilterFor(query)) : [],
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
        /*jshint multistr: true */
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
        return allStates.split(/, +/g).map(function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    }
}).controller('DialogDemoCtrl', function ($scope, $mdDialog) {
    $scope.alert = '';
    $scope.showAlert = function (ev) {
        $mdDialog.show(
            $mdDialog.alert()
                .title('This is an alert title')
                .content('You can specify some description text in here.')
                .ariaLabel('Password notification')
                .ok('Got it!')
                .targetEvent(ev)
        );
    };
    $scope.showConfirm = function (ev) {
        var confirm = $mdDialog.confirm()
            .title('Would you like to delete your debt?')
            .content('All of the banks have agreed to forgive you your debts.')
            .ariaLabel('Lucky day')
            .ok('Please do it!')
            .cancel('Sounds like a scam')
            .targetEvent(ev);
        $mdDialog.show(confirm).then(function () {
            $scope.alert = 'You decided to get rid of your debt.';
        }, function () {
            $scope.alert = 'You decided to keep your debt.';
        });
    };
    $scope.showAdvanced = function (ev) {
        $mdDialog.show({
            controller: function ($scope, $mdDialog) {
                $scope.hide = function () {
                    $mdDialog.hide();
                };
                $scope.cancel = function () {
                    $mdDialog.cancel();
                };
                $scope.answer = function (answer) {
                    $mdDialog.hide(answer);
                };
            },
            templateUrl: 'app/views/templates/dialog1.tmpl.html',
            targetEvent: ev
        })
            .then(function (answer) {
                $scope.alert = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.alert = 'You cancelled the dialog.';
            });
    };
}).controller('ProgressCtrl', ['$scope', '$interval',
    function ($scope, $interval) {
        $scope.mode = 'query';
        $scope.determinateValue = 30;
        $interval(function () {
            $scope.determinateValue += 1;
            if ($scope.determinateValue > 100) {
                $scope.determinateValue = 30;
            }
        }, 100, 0, true);
    }
]).controller('ProgressLinearCtrl', ['$scope', '$interval', function ($scope, $interval) {
    $scope.mode = 'query';
    $scope.determinateValue = 30;
    $scope.determinateValue2 = 30;
    $interval(function () {
        $scope.determinateValue += 1;
        $scope.determinateValue2 += 1.5;
        if ($scope.determinateValue > 100) {
            $scope.determinateValue = 30;
            $scope.determinateValue2 = 30;
        }
    }, 100, 0, true);
    $interval(function () {
        $scope.mode = ($scope.mode == 'query' ? 'determinate' : 'query');
    }, 7200, 0, true);
}]).controller('SidenavCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = function () {
        $mdSidenav('left').toggle()
            .then(function () {
                $log.debug("toggle left is done");
            });
    };
    $scope.toggleRight = function () {
        $mdSidenav('right').toggle()
            .then(function () {
                $log.debug("toggle RIGHT is done");
            });
    };
})
.controller('SidenavLeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('left').close()
            .then(function () {
                $log.debug("close LEFT is done");
            });
    };
})
.controller('SidenavRightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('right').close()
            .then(function () {
                $log.debug("close RIGHT is done");
            });
    };
}).controller('SubheaderAppCtrl', function ($scope) {
    $scope.messages = [
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
    ];
}).controller('TabsDemoCtrl', function ($scope, $log) {
    var tabs = [
        {title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
        {title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
        {
            title: 'Three',
            content: "You can bind the selected tab via the selected attribute on the md-tabs element."
        },
        {title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
        {title: 'Five', content: "If you remove a tab, it will try to select a new one."},
        {
            title: 'Six',
            content: "There's an ink bar that follows the selected tab, you can turn it off if you want."
        },
        {
            title: 'Seven',
            content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."
        },
        {
            title: 'Eight',
            content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"
        },
        {title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
        {title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
    ];
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function (current, old) {
        if (old && (old != current)) $log.debug('Goodbye ' + tabs[old].title + '!');
        if (current)                $log.debug('Hello ' + tabs[current].title + '!');
    });
    $scope.addTab = function (title, view) {
        view = view || title + " Content View";
        tabs.push({title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
        for (var j = 0; j < tabs.length; j++) {
            if (tab.title == tabs[j].title) {
                $scope.tabs.splice(j, 1);
                break;
            }
        }
    };
}).controller('StaticTabsDemoCtrl', function ($scope) {
    $scope.data = {
        selectedIndex: 0,
        secondLocked: true,
        secondLabel: "Item Two"
    };
    $scope.next = function () {
        $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
    };
    $scope.previous = function () {
        $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
}).controller('ToastDemoCtrl', function($scope, $mdToast, $animate) {
    $scope.toastPosition = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };
    $scope.getToastPosition = function() {
        return Object.keys($scope.toastPosition)
            .filter(function(pos) { return $scope.toastPosition[pos]; })
            .join(' ');
    };
    $scope.showCustomToast = function() {
        $mdToast.show({
            controller: 'ToastCtrl',
            templateUrl: 'app/views/templates/toast.tmpl.html',
            hideDelay: 6000,
            parent:'#toastcontainer',
            position: $scope.getToastPosition()
        });
    };
    $scope.showSimpleToast = function() {
        $mdToast.show(
            $mdToast.simple()
                .content('Simple Toast!')
                .position($scope.getToastPosition())
                .hideDelay(3000)
        );
    };
    $scope.showActionToast = function() {
        var toast = $mdToast.simple()
            .content('Action Toast!')
            .action('OK')
            .highlightAction(false)
            .position($scope.getToastPosition());
        $mdToast.show(toast).then(function() {
            alert('You clicked \'OK\'.');
        });
    };
})
.controller('ToastCtrl', function($scope, $mdToast) {
    $scope.closeToast = function() {
        $mdToast.hide();
    };
}).controller('TooltipDemo', function($scope) {
    $scope.demo = {};
}).controller('ToolbarShrinkDemoCtrl', function($scope) {
    var item = {
        face: 'dist/images/user.png',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        notes: "I'll be in your neighborhood doing errands."
    };
    $scope.todos = [];
    for (var i = 0; i < 15; i++) {
        $scope.todos.push({
            face: 'dist/images/user.png',
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            notes: "I'll be in your neighborhood doing errands."
        });
    }
}).controller('TooltipCtrl', function($scope) {
    $scope.demo = {};
}).controller('RightNavbarCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('rightmessages').close()
            .then(function () {
                $log.debug("close RIGHT is done");
            });
    };

    $scope.toggleRightNavbar = function() {
        $mdSidenav('rightmessages').toggle()
            .then(function(){
                $log.debug("toggle RIGHT is done");
            });
    };
}).controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet) {
    $scope.alert = '';
    $scope.showListBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'app/views/templates/bottom-list.tmpl.html',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event,
            parent:'#content'
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };
    $scope.showGridBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'app/views/templates/bottom-grid.tmpl.html',
            controller: 'GridBottomSheetCtrl',
            targetEvent: $event,
            parent:'#content'
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };
}).controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
        $scope.items = [
            { name: 'Share', icon: 'dist/img/icons/ic_share_48px.svg' },
            { name: 'Upload', icon: 'dist/img/icons/ic_cloud_upload_48px.svg' },
            { name: 'Copy', icon: 'dist/img/icons/ic_content_copy_48px.svg' },
            { name: 'Print this page', icon: 'dist/img/icons/ic_local_print_shop_48px.svg' },
        ];
        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    })
    .controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
        $scope.items = [
            { name: 'Share', icon: 'dist/img/icons/ic_share_48px.svg' },
            { name: 'Upload', icon: 'dist/img/icons/ic_cloud_upload_48px.svg' },
            { name: 'Copy', icon: 'dist/img/icons/ic_content_copy_48px.svg' },
            { name: 'Print', icon: 'dist/img/icons/ic_local_print_shop_48px.svg' },
            { name: 'Location', icon: 'dist/img/icons/ic_my_location_48px.svg' },
            { name: 'Messages', icon: 'dist/img/icons/ic_message_48px.svg' },
        ];
        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    }).controller('UserBottomMenu', function($scope, $timeout, $mdBottomSheet) {
        $scope.alert = '';
        $scope.showGridBottomSheet = function($event) {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'app/views/templates/user-bottom-grid.tmpl.html',
                controller: 'UserBottomSheetCtrl',
                targetEvent: $event,
                parent:'#content'
            }).then(function(clickedItem) {
                //$scope.alert = clickedItem.name + ' clicked!';
            });
        };
    })
.controller('UserBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.items = [
        { name: 'Security',icon_class:'color-primary', icon: 'dist/img/icons/ic_verified_user_48px.svg' },
        { name: 'Domain',icon_class:'color-warning', icon: 'dist/img/icons/ic_invert_colors_48px.svg' },
        { name: 'Notifications',icon_class:'color-danger', icon: 'dist/img/icons/ic_wallet_membership_48px.svg' },
        { name: 'Groups',icon_class:'color-info', icon: 'dist/img/icons/ic_brightness_6_48px.svg' },
        { name: 'Education',icon_class:'color-dark', icon: 'dist/img/icons/ic_trending_up_24px.svg' },
        { name: 'Pages',icon_class:'color-primary', icon: 'dist/img/icons/ic_access_alarms_24px.svg' },
    ];
    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
}).controller('InputDemoCtrl', function($scope) {
    $scope.user = {
        title: 'Developer',
        email: 'ipsum@lorem.com',
        firstName: '',
        lastName: '' ,
        company: 'Google' ,
        address: '1600 Amphitheatre Pkwy' ,
        city: 'Mountain View' ,
        state: 'CA' ,
        biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
        postalCode : '94043'
    };
})
.config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
}).controller('InputErrorsDemoCtrl', function($scope) {
        $scope.project = {
            description: 'Nuclear Missile Defense System',
            rate: 500
        };
    }).controller('InputIconsDemoCtrl', function($scope) {
        $scope.user = {
            name: 'John Doe',
            email: 'ipsum@lorem.com',
            phone: '',
            address: ''
        };
    });

angular.module("app.music",[]).controller('AudioJsCtrl',
    function ($scope) {

        audiojs.events.ready(function() {
            var audios = document.getElementsByTagName('audio');
            //console.log(audios[0]);

            /*jshint multistr: true */

            _.each(audios,function(audio){

                var a1 = audiojs.create(audio, {
                    css: false,
                    createPlayer: {
                        markup: '\
                     <div class="play-pause"> \
                     <p class="play"><button class="trigger"><i class="fa fa-play fa-2x"></i></button></p> \
                     <p class="pause"><button class="trigger"><i class="fa fa-pause fa-2x"></i></button></p> \
                     <p class="loading_music"><button class="trigger"><i class="fa fa-refresh fa-spin fa-2x"></button></i></p> \
                     <p class="error"></p> \
                     </div> \
                     <div class="scrubber"> \
                     <div class="progress"></div> \
                     <div class="loaded"></div> \
                     </div> \
                     <div class="time"> \
                     <em class="played">00:00</em>/<strong class="duration">00:00</strong> \
                     </div> \
                     <div class="error-message"></div>',
                        playPauseClass: 'play-pause',
                        scrubberClass: 'scrubber',
                        progressClass: 'progress',
                        loaderClass: 'loaded',
                        timeClass: 'time',
                        durationClass: 'duration',
                        playedClass: 'played',
                        errorMessageClass: 'error-message',
                        playingClass: 'playing',
                        loadingClass: 'player-loading',
                        errorClass: 'error'
                    }
                });

            });
        });

});