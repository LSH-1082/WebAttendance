import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeopleData } from "../Apis/peopleSearchApi";
import { setPeopleWorkTime } from "../Stores/peopleData";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PeopleProfile from "./PeopleProfile";
import PeopleCalendar from "./PeopleCalendar";
import PoepleBarChart from "./PeopleBarChart";

const PeopleAnalytics = () => {
    const people = useSelector((state) => state.peopleData);
    const dispatch = useDispatch();

    useEffect(() => {
        getPeopleData(people.userId)
        .then((res) => {
            dispatch(setPeopleWorkTime(res.data));
        })
        .catch((e) => console.log(e));
    }, [dispatch, people.userId])
    
    return(
        <Box width='100%' height='100vh'>
            <Grid height='100%' container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <PeopleProfile/>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Typography variant="h6" component="h2" sx={{paddingLeft: '50px'}}>
                            금주 근무 시간
                        </Typography>
                    </Box>
                    <PoepleBarChart/>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Typography variant="h6" component="h2">
                            금월 출근 날짜
                        </Typography>
                    </Box>
                    <PeopleCalendar/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default PeopleAnalytics;