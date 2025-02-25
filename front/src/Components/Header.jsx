import HeaderBreadcrumbs from './HeaderBreadcurmbs';
import Stack from '@mui/material/Stack';
import Search from './Search';
import CustomDatePicker from './CustomDatePicker';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { searchByYearMonth } from '../Apis/homeSearchApi';
import { setHomeListData } from '../Stores/homeListData';
import { useLocation } from 'react-router-dom';


const Header = () => {
    const dispatch = useDispatch();
    const date = useSelector(state => state.date.date);
    const path = useLocation().pathname.split('/');
    
    function searchWorkTime() {
        let year = date.split("-")[0];
        let month = date.split("-")[1];
        let searchData = {
            'year': year,
            'month': month
        }
        searchByYearMonth(searchData)
        .then((res) => {
            dispatch(setHomeListData(res.data));
        })
        .catch((e) => console.log(e));
    }

    return(
        <Stack direction="row" sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '12px',
            marginBottom: '12px',
        }}>
            <HeaderBreadcrumbs/>
            <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                {path[1] === 'People' ? (<Search/>) : (<CustomDatePicker />)}
                <IconButton 
                onClick={() => path[1] === 'People' ? <></> : searchWorkTime() }
                sx={{
                    borderRadius: '10px'
                }}>
                    <SearchRoundedIcon/>
                </IconButton>
            </Stack>
        </Stack>
    );
}

export default Header;