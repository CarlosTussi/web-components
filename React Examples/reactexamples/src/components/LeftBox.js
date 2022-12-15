import { useBoxContext } from "./BoxProvider";


function LeftBox()
{
    const {myInput} = useBoxContext();
    return (
        <div>
            <form>
                <label>Left Box: {myInput}</label>                        
            </form>
        </div>
    );
}

export default LeftBox