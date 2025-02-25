import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { 
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
// import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { useState } from 'react';
import CustomModal from './AboutModal';

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
    // { text: 'Analytics', icon: <AnalyticsRoundedIcon /> },
];
  
const secondaryListItems = [
    { text: 'About', icon: <InfoRoundedIcon /> },
    { text: 'Feedback', icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
    const navigate = useNavigate();
    const page = useLocation().pathname.split('/')[1];
    const [modalType, setModalType] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);

    function clickAbout() {
        setModalType("About");
        setIsModalOpen(true);
    }
    function clickFeedback() {
        setModalType("Feedback");
        setIsModalOpen(true);
    }

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
                    <ItemButton onClick={() => item.text === 'About' ? clickAbout() : clickFeedback()}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ItemButton>
                </ListItem>
                ))}
            </List>
            <CustomModal isOpen={isModalOpen} handleClose={closeModal} type={modalType}></CustomModal>
        </Stack>
  );
}
