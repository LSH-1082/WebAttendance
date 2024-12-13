import { useSelector } from "react-redux";
import MainTemplates from "../Templates/MainTemplates";
import Box from '@mui/material/Box';
import SideMenu from "../Components/SideMenu";

const MainPage = () => {
    const page = useSelector(state => state.page.page);

    let content;

    if(page === 0)
        content = <MainTemplates/>
    else if(page === 1)
        content = <><h1>1</h1></>
    else if(page === 2)
        content = <><h1>2</h1></>


    return(
        <Box sx={{display: 'flex'}}>
            <SideMenu />
            {content}
        </Box>
    );
}

export default MainPage;