import * as React from 'react';
import {
    Breadcrumbs,
    Typography
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation } from 'react-router-dom';

export default function HeaderBreadcrumbs() {
    const path = useLocation().pathname.split('/');

    function printPeoplePath() {
        if(path[2]){
            return(
                <Typography
                    sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
                >
                    <PersonIcon sx={{ mr: 0.5 }} fontSize='inherit' />
                    {path[2]}
                </Typography>
            );
        }
    }

    function printIcon(){
        if(path[1] === "")
            return(<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />);
        else if(path[1] === "People")
            return(<PeopleIcon sx={{ mr: 0.5 }} fontSize='inherit' />);
        else
            return(<AnalyticsIcon sx={{ mr: 0.5 }} fontSize='inherit' />)
    }

    return (
        <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Typography
                sx={{ color: 'text.primary', display: 'flex', alignItems: 'center'}}
                color="inherit"
            >
                {printIcon()}
                {path[1] === "" ? "Home" : path[1]}
            </Typography>
            {printPeoplePath()}
        </Breadcrumbs>
        </div>
    );
}
