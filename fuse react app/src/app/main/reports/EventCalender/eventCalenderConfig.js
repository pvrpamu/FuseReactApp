import React from 'react';

export const EventCalenderConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/reports/eventCalender',
            component: React.lazy(() => import('../EventCalender/eventCalender'))
        }
    ]
};