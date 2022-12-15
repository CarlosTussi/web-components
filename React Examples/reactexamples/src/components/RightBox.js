import { useBoxContext } from "./BoxProvider";

function RightBox()
{
    const {myInput} = useBoxContext();
    return(
        <div>
            <label>Right box: {myInput}</label>
        </div>
    )
}

export default RightBox; 