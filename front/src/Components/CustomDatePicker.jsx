import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../Stores/date';
import dayjs from 'dayjs';

function CustomDatePicker() {
    const dispatch = useDispatch();
    const date = dayjs(useSelector(state => state.date.date))

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']} sx={{
            padding: 0,
        }}>
            <DatePicker
                format="MMM, YYYY"
                value={date}
                onChange={(newValue) => dispatch(setDate(newValue.format('YYYY-MM')))}
                views={['year', 'month']}
                slotProps={{ textField: { size: 'small', InputProps: {sx: { borderRadius: '10px', } }}}}
                
                sx={{
                    width: '200px',
                }}
            />
        </DemoContainer>
    </LocalizationProvider>
  );
}

export default CustomDatePicker;