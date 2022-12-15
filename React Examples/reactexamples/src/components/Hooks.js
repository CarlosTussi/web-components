import React, {useState, useRef} from 'react';


const Result = (props) =>{

    return(
        <div>
            <h2>My Result</h2>
            <p>{props.message}</p>
        </div>
    );
}

function Hooks()
{
    const [message, setMessage] = useState("Type something");
    const [updatedMessage, setUpdatedMessage] = useState("");
    let notState = "default";

    const buttonClicked = (e) => {
        //Pass the message to the child component
        e.preventDefault();
        setMessage(updatedMessage)
        // console.log(notState);

    };

    const updateInput = (e) => {
        setUpdatedMessage(e.target.value);
    }

    return(
        <>
            <form>
                <label>Type something: </label><br></br>
                <input type='text' onInput={updateInput}></input><br></br>
                <button type='submit' onClick={buttonClicked}>Click Me!</button>
            </form>

            <Result message={message}/>
        </>
    );

    // const [form, setForm] = useState({
    //     firstName: "Jane",
    //     lastName: "Doe",
    //     email: "janedoe@janedoe.com"
    // });
    
    // const updateFirstname = (e) => {
    //     setForm({
    //         ...form,
    //         firstName: e.target.value            
    //     }
    //     );
    // };

    // const updateLastName = (e) => {
    //     setForm({
    //         ...form,
    //         lastName: e.target.value
    //     }          
    //     );
    // };

    // const updateEmail = (e) => {
    //     setForm({
    //         ...form,
    //         email: e.target.value
    //     }
    //     );

    // }

    // return(
    // <div>
    //    <form>
    //     <label htmlFor='first-name' style={{display: "block", padding: '1em'}}>First Name:</label>
    //     <input type='text' onInput={updateFirstname}></input>
    //     <label htmlFor='last-name' style={{display: "block", padding: '1em'}}>Last Name:</label>
    //     <input type='text' onInput={updateLastName}></input>
    //     <label htmlFor='email' style={{display: "block", padding: '1em'}}>Emaill:</label>
    //     <input type='email' onInput={updateEmail}></input>
    //    </form>

    //    <h1>Your Form Preview</h1>
    //     <p>{form.firstName} {form.lastName} ({form.email})</p>
    // </div>
    // );


}

export default Hooks;