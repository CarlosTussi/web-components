import { useState } from "react";
import { useBoxContext } from "./BoxProvider";

function BoxInput()
{
    const {myInput, updateInput} = useBoxContext();
    return(
        <div>
            <form>
                <input 
                    type="text"
                    onChange = {(e) => updateInput(e.target.value)}
                    value={myInput}/>
            </form>
        </div>
    );
}

export default BoxInput;