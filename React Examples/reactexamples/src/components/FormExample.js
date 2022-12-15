import { useState } from "react";

function FormExample(){
    const [name, setName] = useState("");

    /*CALBACKS*/
    const handleNameInput = (e) => {
        setName(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        setName(""); //To clear the input after submit
    }


    return(
        <>
            <form>
                <fieldset>
                    <div className="Field">
                        <label htmlFor="name">Name: </label>
                        <input id="name" type="text" onChange={handleNameInput} value={name} placeholder="Name" name="name" />
                    </div>
                    <button disabled ={!name} type="submit" onClick={submitForm}>Submit</button>
                </fieldset>
            </form>
            
            <p>{name}</p>
        </>
    );
}

export default FormExample;