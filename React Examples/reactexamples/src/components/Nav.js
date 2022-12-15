function Nav(props){
    var color = props.color;
    return (
        <nav className="main-nav" style={color={color}}>
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contract</li>
            </ul>
        </nav>
    );
};

export default Nav;