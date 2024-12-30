import HomeTemplates from "../Templates/HomeTemplates";
import SideMenu from "../Components/SideMenu";
import Header from "../Components/Header";
import { 
    Stack,
    Box
} from "@mui/material";
import { useSelector } from "react-redux";

function MainPage() {
   const page = useSelector(state => state.page.page);

    let content;

    if(page === "Home")
        content = <HomeTemplates/>
    else if(page === "People")
        content = <><h1>1</h1></>
    else if(page === "Analytics")
        content = <><h1>2</h1></>


    return(
        <Box sx={{display: 'flex'}}>
            <SideMenu />
            <Stack sx={{width: '100%', marginRight: '20px', marginLeft: '20px'}}>
                <Header/>
                <Box sx={{width: '100%', height: '90vh', overflow: 'auto'}}>
                    {content}
                </Box>
            </Stack>
        </Box>
    );
}
export default MainPage;