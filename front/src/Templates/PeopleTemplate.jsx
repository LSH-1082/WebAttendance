import PeopleAnalytics from "../Components/PeopleAnalytics";
import PeopleList from "../Components/PeopleList";

const PeopleTemplate = (props) => {
    const userName = props.userName;

    return(
        userName === undefined ? (
            <PeopleList/>
        ) : (
            <PeopleAnalytics/>
        )
    );
}

export default PeopleTemplate;