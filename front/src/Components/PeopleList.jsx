import * as React from 'react';
import {
        Stack, 
        ListItemButton,
        List,
        ListItemText,
        ListItemAvatar,
        Typography,
        Avatar
    } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPeopleListData } from '../Stores/peopleListData';
import { getPeopleList } from '../Apis/peopleSearchApi';

const PeopleList = () => {  
    const dispatch = useDispatch();
    const peopleListData = useSelector((state) => state.peopleListData.peopleListData);
    const navigate = useNavigate();

    function calculateMonthTime(obj) {
        let monthHour = parseInt(obj.month_work_time / 60);
        let monthMinute = obj.month_work_time % 60;

        let content;

        if(monthHour === 0)
            content = monthMinute + "분";
        else
            content = monthHour + "시간 " + monthMinute + "분";

        return content;
    }

    function calculateTotalTime(obj){
        let totalHour = parseInt(obj.total_work_time / 60);
        let totalMinute = obj.total_work_time % 60;
        
        let content;

        if(totalHour === 0)
            content = totalMinute + "분";
        else
            content = totalHour + "시간 " + totalMinute + "분";

        return content;
    }

    React.useEffect(() => {
        getPeopleList().then((res) => {
            dispatch(setPeopleListData(res.data));
        }).catch((e) => {
            console.log(e);
        })
    }, [dispatch])

    return(
        peopleListData.map((obj, index) => (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }} key={index}>
                <ListItemButton alignItems="center" sx={{borderRadius: "15px"}}
                    onClick={() => navigate(`/People/${obj.name}`)}
                >
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={obj.imgUrl} />
                    </ListItemAvatar>
                    <ListItemText 
                        primary={obj.name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    {obj.state}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                    <Stack direction="row" gap={5} >
                        <ListItemText
                            sx={{width: "100px"}}
                            primary="당월 근무시간"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        {calculateMonthTime(obj)}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemText
                            primary="총 근무시간"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        {calculateTotalTime(obj)}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </Stack>
                </ListItemButton>
            </List>
        ))
    );
}

export default PeopleList;