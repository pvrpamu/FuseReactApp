import React from 'react';

export const ItsmReportsConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/reports/itsmReports',
            component: React.lazy(() => import('../Itsm Reports/ItsmReports'))
        }
    ]
};