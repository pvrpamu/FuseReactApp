import React from 'react';

export const NewsLetterConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/reports/itsmNewsLetter',
            component: React.lazy(() => import('../NewsLetter/newsLetter'))
        }
    ]
};