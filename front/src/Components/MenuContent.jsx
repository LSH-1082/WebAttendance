import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

const ItemButton = styled(ListItemButton)({
    borderRadius: '12px',
    '&.Mui-selected': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
    },
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    }
})

const mainListItems = [
    { text: 'Home', icon: <HomeRoundedIcon /> },
    { text: 'People', icon: <PeopleRoundedIcon /> },
    { text: 'Analytics', icon: <AnalyticsRoundedIcon /> },
];
  
const secondaryListItems = [
    { text: 'About', icon: <InfoRoundedIcon /> },
    { text: 'Feedback', icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
    const navigate = useNavigate();
    const page = useLocation().pathname.split('/')[1];

    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
        <List dense>
            {mainListItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ItemButton 
                    selected={ item.text === 'Home' ? page === '' : page === `${item.text}` }
                    onClick={() => item.text === 'Home' ? navigate('/') : navigate(`/${item.text}`)}
                >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                </ItemButton>
            </ListItem>
            ))}
        </List>

        <List dense>
            {secondaryListItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                </ItemButton>
            </ListItem>
            ))}
        </List>
        </Stack>
  );
}
