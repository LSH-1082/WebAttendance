import { useSelector } from 'react-redux';
import WorkTimeList from '../Components/WorkTimeList';

const MainTemplates = () => {  
    const listData = useSelector((state) => state.listData.listData);

    return(
        listData.length > 0 ? (
           <WorkTimeList listData={listData}/>
        ) : (
            <p>no data</p>
        )
    );
}

export default MainTemplates;