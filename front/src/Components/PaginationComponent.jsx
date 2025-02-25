import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../Stores/page';

export default function PaginationComponent(props) {
    const homeListData = props.homeListData;
    const page = useSelector((state) => state.page.page);
    const dispatch = useDispatch();

    const clickPage = (event, value) => {
        dispatch(setPage(value));
    }

    return (
        <Stack spacing={2} padding='20px'>
            <Pagination count={Math.ceil(homeListData.length/10)} page={page} onChange={clickPage} />
        </Stack>
    );
}