import React, {useState} from 'react';
import {Icon, Typography, Select, Paper, IconButton} from '@material-ui/core';

function Widget1(props)
{
    const [currentRange, setCurrentRange] = useState(props.widget.currentRange);

    function handleChangeRange(ev)
    {
        setCurrentRange(ev.target.value)
    }

    return (
        <Paper className="w-full rounded-8 shadow-none border-1">
            <div className="flex items-center justify-between pr-4 pl-16 pt-4">
            <Typography className="text-16">{props.widget.title}</Typography>  
            </div>
            <div className="text-center pt-12 pb-28">
                <Typography
                    className="text-72 leading-none text-blue">{props.widget.data.count[currentRange]}%</Typography>
                <Typography className="text-16" style={{height:'24px'}} color="textSecondary">{props.widget.data.label}</Typography>
            </div>
            <div className="flex items-center px-16 h-52 border-t-1">
                <Typography className="text-15 flex w-full" color="textSecondary">
                    
                </Typography>
            </div>
        </Paper>
    );
}

export default React.memo(Widget1);
