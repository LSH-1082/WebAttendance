import PeopleList from "../Components/PeopleList";

const PeopleTemplate = (props) => {
    const userName = props.userName;

    return(
        userName === undefined ? (
            <PeopleList/>
        ) : (
            <><h1>{userName}</h1></>
        )
    );
}

export default PeopleTemplate;