
import React, {useEffect, useRef, useState} from 'react';
import {Menu, MenuItem, Hidden, Icon, IconButton, Tab, Tabs, Typography, Button, Paper} from '@material-ui/core';
import {FuseAnimateGroup, FusePageSimple} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from '../Itsm Reports/store/actions'
import reducer from '../Itsm Reports/store/reducers';
import _ from 'lodash';
import clsx from 'clsx';

function ProjectDashboardApp(props)
{
  

    return (
        <FusePageSimple
            classes={{
                header      : "min-h-160 h-160",
                toolbar     : "min-h-48 h-48",
                rightSidebar: "w-288",
            }}
          
            content={
                <div className="p-12">
        
                        <FuseAnimateGroup
                            className="flex flex-wrap"
                            enter={{
                                animation: "transition.slideUpBigIn"
                            }}
                        >
                        <Typography className="py-0 sm:py-24 pr" variant="h4" style={{textAlign:'center'}}>POSTMORTAM ANALYSIS</Typography>
                           

                        </FuseAnimateGroup>
                   
                </div>
            }
            
        />
    );
}

export default withReducer('projectDashboardApp', reducer)(ProjectDashboardApp);
