import { useSelector } from 'react-redux';
import WorkTimeList from '../Components/WorkTimeList';
import PaginationComponent from '../Components/PaginationComponent';
import { 
    Stack,
    Box
} from '@mui/material';

const MainTemplates = () => {  
    const homeListData = useSelector((state) => state.homeListData.homeListData);

    return(
        homeListData.length > 0 ? (
            <Stack height='100%' display='flex' alignItems='center' justifyContent='space-between'>
                <Box height='calc(100vh - 136px)' flexDirection="column" display="flex" width='100%' overflow='auto'>
                    <WorkTimeList homeListData={homeListData}/>
                </Box>
                <PaginationComponent homeListData={homeListData}/>
            </Stack>
        ) : (
            <p>no data</p>
        )
    );
}


export default MainTemplates;
