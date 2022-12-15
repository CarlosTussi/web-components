function Bar(props)
{
    const bar_style ={
        background: "aliceblue",
        textAlign: "right"
    };

    return (
        <div style={bar_style}>
            {props.children}
        </div>
    );
}

export default Bar;