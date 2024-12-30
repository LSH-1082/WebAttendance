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
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../stores/page';

const WorkTimeList = (props) => {  
    const listData = props.listData
    const dispatch = useDispatch();

    //검색버튼 클릭 후 상태변화시 다시 랜더링
    React.useEffect(() => {
        console.log("Updated listData from Redux:", listData);
    }, [listData]);

    function clickProfile(userId) {
        dispatch(setPage("People"));
    }

    function calculateDuration(start, end, callback){
        let hours = dayjs(end).diff(dayjs(start), 'hour');
        let minutes = dayjs(end).diff(dayjs(start), 'minute') % 60;
        let data = {
            'hours': hours,
            'minutes': minutes
        }
        return data;
    }

    return(
        listData.map((obj, index) => (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }} key={index}>
                    <ListItemButton alignItems="center" sx={{borderRadius: "15px"}}
                        onClick={() => clickProfile(obj.user_id)}
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
                                        근무시간: {
                                            calculateDuration(obj.attendance_time, obj.leave_time).hours != 0 ? 
                                            calculateDuration(obj.attendance_time, obj.leave_time). hours + "시간 " : ""}
                                        {calculateDuration(obj.attendance_time, obj.leave_time).minutes}분
                                    </Typography>
                                </React.Fragment>
                            }
                        />
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
                                    marginRight: obj.leave_time === null ? '40px' : 0
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