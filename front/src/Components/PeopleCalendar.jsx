import { Badge } from "@mui/material";
import { 
  DateCalendar, 
  LocalizationProvider, 
  PickersDay,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function ServerDay(props) {
    const { workDays = [], day, outsideCurrentMonth, ...other } = props;
    
    const isSelected = !props.outsideCurrentMonth && workDays.indexOf(props.day.date()) >= 0;
    
    return (
        <Badge
            key={props.day.toString()}
            overlap="circular"
            badgeContent={isSelected ? '🟢' : undefined}
        >
            <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
        </Badge>
    );
}

function getWorkDays(workTime) {
    let workDays = [];
    for(let i = 0; i < workTime.length; i++){
        let day = dayjs(workTime[i].attendance_time);
        let workDay = day.date();
        workDays.push(workDay);
    }
    return workDays
}


const PeopleCalendar = () => {
    const workTime = useSelector((state) => state.peopleData.workTime);
    const [workDays, setWorkDays] = useState([]);

    useEffect(() => {
        setWorkDays(getWorkDays(workTime));
    }, [setWorkDays, workTime])

    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                disabled
                slots={{
                    day: ServerDay,
                }}
                slotProps={{
                    day: {
                        workDays, //slotProps안에 day에 대한 값을 프롭으로 줄 수 있는 것이고 거기에 hightlightedDays를 입력함으로서 자동으로 저 함수에 day를 프롭스로 넘겨줌
                        sx: {
                                "&.MuiPickersDay-root.Mui-selected": {
                                border: '2px black solid',
                                color: "black",
                                backgroundColor: "white"
                            },
                        }
                    },
                }}
            />
        </LocalizationProvider>
    );
}

export default PeopleCalendar;