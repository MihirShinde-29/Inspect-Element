import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const options = {
    colors: ['#058DC7', '#50B432', '#ED561B', 'purple', '#24CBE5', '#64E572',
        '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        type: 'spline',
        backgroundColor: '#121212',

    },
    title: {
        text: 'Most used items over the years',
        style: {
            fontFamily: 'monospace',
            fontSize: '1.3rem',
            color: "#f00"
        }
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        title: {
            text: 'Items',
            style: {
                color: '#F00',
                font: '11px Georgia',
            }
        },
        tickColor: '#000',
        labels: {
            style: {
                color: '#F00',
                font: '11px Georgia',
            }
        }
    },

    xAxis: {
        accessibility: {
            // rangeDescription: 'Range: 2010 to 2017'
        }
        ,
        tickColor: '#000',
        labels: {
            style: {
                color: '#F00',
                font: '11px Georgia',
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        backgroundColor: 'white',
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Acetic Acid',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Methylamine',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sodium Hydroxide',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Beakers',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

}
const Line = () => {
    return (
        <div><HighchartsReact highcharts={Highcharts} options={options} /></div>

    )
}

export default Line