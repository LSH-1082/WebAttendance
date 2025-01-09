import HomeTemplate from "../Templates/HomeTemplate";
import SideMenu from "../Components/SideMenu";
import Header from "../Components/Header";
import { 
    Stack,
    Box
} from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import PeopleTemplate from "../Templates/PeopleTemplate";

function MainPage() {
    const page = useLocation().pathname;
    const { userName } = useParams();

    let content;

    if(page === "/")
        content = <HomeTemplate/>
    else if(page === "/People")
        content = <PeopleTemplate/>
    else if(userName !== undefined)
        content = <PeopleTemplate userName={userName}/>
    else if(page === "/Analytics")
        content = <><h1>2</h1></>

    return(
        <Box sx={{display: 'flex'}}>
            <SideMenu />
            <Stack sx={{
                display: 'flex', 
                width: '100%', 
                marginRight: '20px', 
                marginLeft: '20px', 
                height: '100vh',
                }}>
                <Header/>
                {content}
            </Stack>
        </Box>
    );
}
export default MainPage;