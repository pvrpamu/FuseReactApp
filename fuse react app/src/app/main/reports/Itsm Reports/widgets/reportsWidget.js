import React, {useState} from 'react';
import {Typography, Paper, Button} from '@material-ui/core';
import Widget1 from './Widget1';
import Widget2 from './Widget2';
import Widget3 from './Widget3';
import Widget4 from './Widget4';
import _ from 'lodash';

function Widget5(props)
{
    const [currentRange, setCurrentRange] = useState('DY');
    const widget = _.merge({}, props.widget);

    function handleChangeRange(range)
    {
        setCurrentRange(range);
    }

    return (
        <Paper className="w-full rounded-8 shadow-none border-1">
            <div className="flex items-center justify-between px-16 py-16 border-b-1">
                <Typography className="text-16">Status</Typography>
                <div className="items-center">
                    {Object.entries(widget.widget1.ranges).map(([key, n]) => {
                        return (
                            <Button
                                key={key}
                                className="normal-case shadow-none px-16"
                                onClick={() => handleChangeRange(key)}
                                color={currentRange === key ? "secondary" : "default"}
                                variant={currentRange === key ? "contained" : "text"}
                            >
                                {n}
                            </Button>
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-row flex-wrap">
            <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
                                <Widget1 widget={widget.widget1}/>
                            </div>
                            <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
                                <Widget2 widget={widget.widget2}/>
                            </div>
                            <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
                                <Widget3 widget={widget.widget3}/>
                            </div>
                            <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
                                <Widget4 widget={widget.widget4}/>
                            </div>
            </div>
        </Paper>
    );
}

export default React.memo(Widget5);
