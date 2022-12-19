import ContainmentComponent from "./ContainmentComponent";

function SpecializedComponent (prop)
{
    return(
        <ContainmentComponent>
            <form>
                <label>My input</label><br/>
                <input 
                type="text"/>
            </form>
            <p>Hello world</p>
        </ContainmentComponent>

    );
}

export default SpecializedComponent;