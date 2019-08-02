import React, {useState} from 'react';
import {Typography, Paper, Button} from '@material-ui/core';
import {Bar, Line} from 'react-chartjs-2';
import _ from 'lodash';

function ImpactWidget(props)
{
    const [currentRange, setCurrentRange] = useState('TW');
    const widget = _.merge({}, props.widget);

    function handleChangeRange(range)
    {
        setCurrentRange(range);
    }

    return (
        <Paper className="w-full rounded-8 shadow-none border-1" style={{height:'200px'}}>
      
            
        </Paper>
    );
}

export default React.memo(ImpactWidget);
