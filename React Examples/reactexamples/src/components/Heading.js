function Heading(props){
    return(
        <ul>
            {props.items.map(item => {
                return(<li>{item}</li>);
            })}
        </ul>
    );
};

export default Heading;