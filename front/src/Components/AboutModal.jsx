import { 
    Box, 
    Modal, 
    Button
} from "@mui/material";

import github from "../static/images/github.png";
import notion from "../static/images/notion.png";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const aboutType = (
    <>
        <Box sx={{ 
            display: "flex", 
            justifyContent: "space-evenly", 
        }}>
            <img 
                src={github} 
                alt="github Icon" 
                style={{ width: 80, height: 80, cursor: 'pointer' }}
                onClick={() => window.location.href = "https://github.com/LSH-1082/WebAttendance"}
            />
            <img 
                src={notion} 
                alt="github Icon" 
                style={{ width: 80, height: 80, cursor: 'pointer' }}
                onClick={() => window.location.href = "https://splashy-spike-cd8.notion.site/4526251cbefb47008c6fb27bf1abb266"}
            />
        </Box>
        <Box sx={{textAlign: 'center', paddingTop: '20px', fontSize: "20px"}}>
            <p>Made By LSH-1082</p>
        </Box> 
    </>
);

const feedbackType = (
    <Box sx={{ textAlign: "center" }}>
        <Button href="mailto:tkdgus2282@naver.com">Send Email</Button>
    </Box>
);

const CustomModal = ({ isOpen, handleClose, type }) => {
    return(
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {type === 'About' ? aboutType : feedbackType}
            </Box>
        </Modal>
    );
}

export default CustomModal;