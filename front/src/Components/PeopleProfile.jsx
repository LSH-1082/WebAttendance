import React from "react";
import { Box, Avatar, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useSelector } from "react-redux";

const PeopleProfile = () => {
    const people = useSelector((state) => state.peopleData);
    return(
        <Box 
            width='100%' 
            height='100%' 
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Avatar alt={people.name} src={people.imgUrl} sx={{width: '100px', height: '100px', zIndex: 1, boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)'}}/> 
            <Grid marginLeft='30px'>
                <Typography
                    variant="h4"
                >
                    {people.name}
                </Typography>
                <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                >
                    상태: {people.state === '출근' ? '🟢' : '🔴'}
                </Typography>
            </Grid>
        </Box>
    );
}

export default PeopleProfile;