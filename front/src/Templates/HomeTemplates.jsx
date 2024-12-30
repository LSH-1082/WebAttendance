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

const MainTemplates = () => {  
    const listData = useSelector((state) => state.listData.listData);
    const dispatch = useDispatch();

    //검색버튼 클릭 후 상태변화시 다시 랜더링
    React.useEffect(() => {
        console.log("Updated listData from Redux:", listData);
    }, [listData]);

    function clickProfile(userId) {
        
        dispatch(setPage("People"));
        
    }

    return(
        listData.length > 0 ? (
            listData.map((obj, index) => (
                <List sx={{ width: '100%', bgcolor: 'background.paper' }} key={index}>
                        <ListItemButton alignItems="center" sx={{borderRadius: "15px"}}
                            onClick={() => clickProfile(obj.user_id)}
                        >
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={obj.imgUrl} />
                            </ListItemAvatar>
                            <ListItemText primary={obj.name}/>
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
        ) : (
            <p>no data</p>
        )
    );
}

export default MainTemplates;