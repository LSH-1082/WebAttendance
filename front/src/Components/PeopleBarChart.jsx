import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import localeData from 'dayjs/plugin/localeData';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/ko';
import { useTheme } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

dayjs.extend(weekOfYear);
dayjs.extend(localeData);
dayjs.extend(duration);
dayjs.locale('ko');

function getTotalDayTimes(workTime) {
    const startDate = dayjs().startOf('week').add(1, 'day');
    const endDate = dayjs().endOf('week').add(1, 'day');
    let totalDayTimes = [];
    let dayWorkTime;
    let previous;
    const filteredData = workTime.filter(item => {
        const itemDate = dayjs(item.attendance_time);
        return itemDate.isAfter(startDate.subtract(1, 'day')) && itemDate.isBefore(endDate.add(1, 'day'));
    });

    for(let i = 0; i < filteredData.length; i++) {
        let start = dayjs(filteredData[i].attendance_time);
        let end = filteredData[i].leave_time !== null ? dayjs(filteredData[i].leave_time) : dayjs();

        if(previous !== start.date()){
            dayWorkTime = end.diff(start, 'minute');
            totalDayTimes.push(dayWorkTime);
        }
        else{
            totalDayTimes[totalDayTimes.length - 1] += end.diff(start, 'minute');
        }
        previous = start.date();
    }
    return totalDayTimes;
}

const formatTime = (timeInMinutes) => {
    const durationObj = dayjs.duration(timeInMinutes, 'minutes');
    return durationObj.format('HH:mm');
};

const PeopleBarChart = () => {
    const workTime = useSelector(state => state.peopleData.workTime);
    const [totalDayTimes, setTotalDayTimes] = useState([]);

    useEffect(() => {
        setTotalDayTimes(getTotalDayTimes(workTime));
    }, [setTotalDayTimes, workTime])

    const theme = useTheme();
    const colorPalette = [
        (theme.vars || theme).palette.primary.light,
    ];

    return (
        <BarChart
            xAxis={[{ 
                scaleType: 'band', 
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
            }]}
            borderRadius={12}
            series={[{ 
                label: 'Work Time',
                data: totalDayTimes,
                valueFormatter: formatTime,
            },]}
            height={300}
            colors={colorPalette}
            margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
            grid={{ horizontal: true }}
            slotProps={{
                legend: {
                hidden: true,
                },
            }}
        />
    );
}

export default PeopleBarChart;