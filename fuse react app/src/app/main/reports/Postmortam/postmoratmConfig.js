import React from 'react';

export const PostMortamConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/reports/postmortamAnalysis',
            component: React.lazy(() => import('../Postmortam/postMortam'))
        }
    ]
};