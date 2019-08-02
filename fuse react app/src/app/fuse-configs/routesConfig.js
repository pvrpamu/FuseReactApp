import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ItsmReportsConfig} from 'app/main/reports/Itsm Reports/itsmReportsConfig';
import {EventCalenderConfig} from 'app/main/reports/EventCalender/eventCalenderConfig'
import {NewsLetterConfig} from 'app/main/reports/NewsLetter/newsLetterConfig'
import {PostMortamConfig} from 'app/main/reports/Postmortam/postmoratmConfig'

const routeConfigs = [
    ItsmReportsConfig,
    EventCalenderConfig,
    PostMortamConfig,
    NewsLetterConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/reports/itsmReports"/>
    }
];

export default routes;
