import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const options = {
    chart: {
        type: 'pie'
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