import React from 'react';
import {Icon, Typography, Paper, IconButton} from '@material-ui/core';

function Widget4(props)
{
    return (
        <Paper className="w-full rounded-8 shadow-none border-1">
            <div className="flex items-center justify-between pr-4 pl-16 pt-4">
                <Typography className="text-16">{props.widget.title}</Typography>
            </div>
            <div className="text-center pt-12 pb-28">
                <Typography
                    className="text-72 leading-none text-green">{props.widget.data.count}</Typography>
                <Typography className="text-16" style={{height:'24px'}}  color="textSecondary">{props.widget.data.label}</Typography>
            </div>
            <div className="flex items-center px-16 h-52 border-t-1">
                <Typography className="text-15 flex w-full" color="textSecondary">
                    
                </Typography>
            </div>
        </Paper>
    );
}

export default React.memo(Widget4);
