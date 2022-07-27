import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const options = {
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
    '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        type: 'pie',
        backgroundColor: '#121212',
    },
    title: {
        text: ''
    },
    series: [
        {
            data: [1, 2, 1, 4, 3, 6]
        }
    ]
};
const Pie = () => {
    return (
        <div><HighchartsReact highcharts={Highcharts} options={options} /></div>
    )
}

export default Pie