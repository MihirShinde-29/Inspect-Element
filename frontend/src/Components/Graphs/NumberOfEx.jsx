import React, { useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';


const NumberOfEx = () => {
    const [d, setD] = useState();
    const options = {
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: `Total No of Exercises Done : ${d}`
        },
        series: [
            {
                data: [1,0,3,5,2,6]
            }
        ]
    };
    return (
        <div><HighchartsReact highcharts={Highcharts} options={options} /></div>

    )
}

export default NumberOfEx