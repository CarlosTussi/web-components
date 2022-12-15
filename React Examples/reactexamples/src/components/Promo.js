function Promo(props){
    return(
        <div className="promo-section delete-test">
            <div>
                <h1>{props.text}</h1>
            </div>
            <div>
                <h2>Subscribe to my newsletter and get 50% off!</h2>
            </div>
        </div>
    );
};

export default Promo;