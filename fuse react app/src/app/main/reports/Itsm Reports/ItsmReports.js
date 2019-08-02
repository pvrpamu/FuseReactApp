import React, {useEffect, useRef, useState} from 'react';
import {Menu, MenuItem, Hidden, Icon, IconButton, Tab, Tabs, Typography, Button, Paper} from '@material-ui/core';
import {FuseAnimateGroup, FusePageSimple} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from '../Itsm Reports/store/actions'
import reducer from '../Itsm Reports/store/reducers';
import _ from 'lodash';
import clsx from 'clsx';
import ReportsWidget from '../Itsm Reports/widgets/reportsWidget';
import ImpactWidget from '../Itsm Reports/widgets/ImpactWidget';
import Widget5 from '../Itsm Reports/widgets/Widget5';

import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    content          : {
        '& canvas': {
            maxHeight: '100%'
        }
    },
    selectedProject  : {
        background  : theme.palette.primary.main,
        color       : theme.palette.primary.contrastText,
        borderRadius: '8px 0 0 0'
    },
    projectMenuButton: {
        background  : theme.palette.primary.main,
        color       : theme.palette.primary.contrastText,
        borderRadius: '0 8px 0 0',
        marginLeft  : 1
    },
}));

function ProjectDashboardApp(props)
{
    const dispatch = useDispatch();
    const widgets = useSelector(({projectDashboardApp}) => projectDashboardApp.widgets);
    const projects = useSelector(({projectDashboardApp}) => projectDashboardApp.projects);

    const classes = useStyles(props);
    const pageLayout = useRef(null);
    const [tabValue, setTabValue] = useState(0);
    const [selectedProject, setSelectedProject] = useState({
        id    : 1,
        menuEl: null
    });
    const [currentRange, setCurrentRange] = useState('DY');

    function handleChangeRange(range)
    {
        setCurrentRange(range);
    }

    useEffect(() => {
        dispatch(Actions.getWidgets());
        dispatch(Actions.getProjects());
    }, [dispatch]);

    

    function handleChangeProject(id)
    {
        setSelectedProject({
            id,
            menuEl: null
        });
    }

    function handleOpenProjectMenu(event)
    {
        setSelectedProject({
            id    : selectedProject.id,
            menuEl: event.currentTarget
        });
    }

    function handleCloseProjectMenu()
    {
        setSelectedProject({
            id    : selectedProject.id,
            menuEl: null
        });
    }

    if ( !widgets || !projects )
    {
        return null;
    }

    return (
        <FusePageSimple
            classes={{
                header      : "min-h-160 h-160",
                toolbar     : "min-h-48 h-48",
                rightSidebar: "w-288",
                content     : classes.content,
            }}
            header={
                <div className="flex flex-col justify-between flex-1 px-24 pt-24">
                    <div className="flex justify-between ">
                        <Typography className="py-0 sm:py-24 pr" variant="h4" style={{textAlign:'center'}}>ITSM REPORTS</Typography>
                        <Hidden lgUp>
                            <IconButton
                                onClick={(ev) => pageLayout.current.toggleRightSidebar()}
                                aria-label="open left sidebar"
                            >
                                <Icon>menu</Icon>
                            </IconButton>
                        </Hidden>
                    </div>
                    <div className="flex items-end">
                        <div className="flex items-center">
                            <div className={clsx(classes.selectedProject, "flex items-center h-40 px-16 text-16")}>
                                {_.find(projects, ['id', selectedProject.id]).name}
                            </div>
                            {/* <IconButton
                                className={clsx(classes.projectMenuButton, "h-40 w-40 p-0")}
                                aria-owns={selectedProject.menuEl ? 'project-menu' : undefined}
                                aria-haspopup="true"
                                onClick={handleOpenProjectMenu}
                            >
                                <Icon>more_horiz</Icon>
                            </IconButton>
                            <Menu
                                id="project-menu"
                                anchorEl={selectedProject.menuEl}
                                open={Boolean(selectedProject.menuEl)}
                                onClose={handleCloseProjectMenu}
                            >
                                {projects && projects.map(project => (
                                    <MenuItem key={project.id} onClick={ev => {
                                        handleChangeProject(project.id)
                                    }}>{project.name}</MenuItem>
                                ))}
                            </Menu> */}
                        </div>
                    </div>
                </div>
            }
          
            content={
                <div className="p-12">
        
                        <FuseAnimateGroup
                            className="flex flex-wrap"
                            enter={{
                                animation: "transition.slideUpBigIn"
                            }}
                        >
                            <div className="widget flex w-full p-12">
                                <ReportsWidget widget={widgets}/>
                            </div>
                            <div className="widget flex w-full p-12">
                                <ImpactWidget widget={widgets.widget5}/>
                            </div>
                            <div className="widget flex w-full p-12">
                                <Widget5 widget={widgets.widget5}/>
                            </div>

                        </FuseAnimateGroup>
                   
                </div>
            }
            
            ref={pageLayout}
        />
    );
}

export default withReducer('projectDashboardApp', reducer)(ProjectDashboardApp);
