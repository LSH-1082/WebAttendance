const PeopleTemplate = (props) => {
    const userName = props.userName;

    return(<>
    {userName === undefined ? <h1>null</h1> : <><h1>{userName}</h1></>}
    </>);
}

export default PeopleTemplate;