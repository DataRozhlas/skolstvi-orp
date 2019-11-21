import { drawInfo } from "./shared"

export function drawChart(data, xID, yID) {
    Highcharts.chart('corchart', {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: ``,
            useHTML: true,
        },
        credits: {
            enabled: false,
        },
        xAxis: {
            title: {
                enabled: true,
                text: xID
            },
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: yID
            }
        },
        legend: {
            enabled: false,
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    enabled: false,
                    pointFormatter: function (e) {
                        drawInfo(this.orp_kod, xID, yID)
                    }
                }
            }
        },
        series: [{
            name: '',
            data: data,
        }]
    });
}
