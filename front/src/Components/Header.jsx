import Stack from '@mui/material/Stack';
import Search from './Search';
import CustomDatePicker from './CustomDatePicker';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { searchByYearMonth } from '../Apis/searchApi';
import { setListData } from '../stores/listData';
import { useLocation } from 'react-router-dom';

const P = styled('p')({
    fontSize: '20px',
    fontWeight: 'bold',
})

const Header = () => {
    const dispatch = useDispatch();
    const date = useSelector(state => state.date.date);
    const path = useLocation().pathname.split('/');
    let content;

    content = path[2] !== undefined ? `${path[1]}/${path[2]}` : path[1];

    function searchWorkTime() {
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
            <P>{path[1] === "" ? 'Home' : content}</P>
            <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                {path[1] === 'People' ? (<Search/>) : (<CustomDatePicker />)}
                <IconButton 
                onClick={() => path[1] === 'People' ? console.log(path) : searchWorkTime() }
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