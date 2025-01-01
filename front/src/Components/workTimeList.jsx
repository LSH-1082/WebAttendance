import * as React from 'react';
import dayjs from 'dayjs';
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

const WorkTimeList = (props) => {  
    const listData = props.listData
    const navigate = useNavigate();

    function printNameTextComponent(obj) {
        let hours = dayjs(obj.leave_time).diff(dayjs(obj.attendance_time), 'hour');
        let minutes = dayjs(obj.leave_time).diff(dayjs(obj.attendance_time), 'minute') % 60;
        let content;

        if(obj.leave_time === null) 
            content = obj.state + "중";
        else if(hours !== 0) 
            content = hours + "시간 " + minutes + "분";
        else 
            content = minutes + "분";

        return(
            <ListItemText 
                primary={obj.name}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                        >
                        {content}
                        </Typography>
                    </React.Fragment>
                }
            />
        );
    }

    return(
        listData.map((obj, index) => (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }} key={index}>
                <ListItemButton alignItems="center" sx={{borderRadius: "15px"}}
                    onClick={() => navigate(`/People/${obj.name}`)}
                >
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={obj.imgUrl} />
                    </ListItemAvatar>
                    {printNameTextComponent(obj)}
                    <Stack direction="row" gap={5} >
                        <ListItemText
                            sx={{width: "100px"}}
                            primary="출근시간"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        {dayjs(obj.attendance_time).format('DD일 HH시 mm분')}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemText
                            primary="퇴근시간"
                            sx={{
                                marginRight: obj.leave_time === null ? '37px' : 0
                            }}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        {obj.leave_time != null ? (dayjs(obj.leave_time).format('DD일 HH시 mm분')) : ("출근중")}
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

export default WorkTimeList;