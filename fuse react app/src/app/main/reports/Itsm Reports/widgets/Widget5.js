import React, {useState} from 'react';
import {Typography, Paper, Button} from '@material-ui/core';
import {Bar, Line} from 'react-chartjs-2';
import _ from 'lodash';

function Widget5(props)
{
    const [currentRange, setCurrentRange] = useState('TW');
    const widget = _.merge({}, props.widget);

    function handleChangeRange(range)
    {
        setCurrentRange(range);
    }

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
    return (
        <Paper className="w-full rounded-8 shadow-none border-1">
      
            <div className="flex flex-row flex-wrap">
            <div className="w-full md:w-1/2 p-8 min-h-420 h-420">
                    <Line
                        data={data}
                    />
                </div>
                <div className="w-full md:w-1/2 p-8 min-h-390 h-400">
                    <Bar
                        data={{
                            labels  : widget.mainChart[currentRange].labels,
                            datasets: widget.mainChart[currentRange].datasets
                        }}
                        // options={widget.mainChart.options}
                    />
                </div>
              
            </div>
        </Paper>
    );
}

export default React.memo(Widget5);
