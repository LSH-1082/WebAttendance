import Stack from '@mui/material/Stack';
import Search from './Search';
import CustomDatePicker from './CustomDatePicker';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { searchByYearMonth } from '../Apis/searchApi';
import { setListData } from '../stores/listData';

const P = styled('p')({
    fontSize: '20px',
    fontWeight: 'bold',
})

const Header = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page.page);
    const date = useSelector(state => state.date.date);

    function clickSearchButton() {
        let year = date.split("-")[0];
        let month = date.split("-")[1];
        let searchData = {
            'year': year,
            'month': month
        }
        searchByYearMonth(searchData)
        .then((res) => {
            dispatch(setListData(res.data));
        })
        .catch((e) => console.log(e));
    }

    return(
        <Stack direction="row" sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <P>{page}</P>
            <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                {page === 'People' ? (<Search/>) : (<CustomDatePicker />)}
                <IconButton 
                onClick={() => clickSearchButton()}
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