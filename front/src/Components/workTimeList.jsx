import * as React from 'react';
import dayjs from 'dayjs';
import {
        Stack, 
        ListItem,
        List,
        ListItemText,
        ListItemAvatar,
        Typography,
        Avatar
    } from '@mui/material';
import { useSelector } from 'react-redux';

const WorkTimeList = (props) => {  
    const homeListData = props.homeListData
    const page = useSelector((state) => state.page.page);

    const itemsPerPage = 10;
    const startIndex = (page - 1) * itemsPerPage;
    const currentPageData = homeListData.slice(startIndex, startIndex + itemsPerPage);

    function printNameTextComponent(obj) {
        let hours = dayjs(obj.leave_time).diff(dayjs(obj.attendance_time), 'hour');
        let minutes = dayjs(obj.leave_time).diff(dayjs(obj.attendance_time), 'minute') % 60;
        let text;

        if(obj.leave_time === null) 
            text = obj.state + "중";
        else if(hours !== 0) 
            text = "근무시간: " + hours + "시간 " + minutes + "분";
        else 
            text = "근무시간: " + minutes + "분";

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
                        {text}
                        </Typography>
                    </React.Fragment>
                }
            />
        );
    }

    return(
        currentPageData.map((obj, index) => (
            <List sx={{ bgcolor: 'background.paper' }} key={index}>
                <ListItem alignItems="center" sx={{ borderRadius: "15px"}}>
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
                </ListItem>
            </List>
        ))
    );
}

export default WorkTimeList;