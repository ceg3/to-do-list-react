import './Form.css';

function Form(props) {
    return (
        <div className="Form">
            <form className = "add" onSubmit={props.handleSubmitEvent}>
                <input type="text" id="itemToAdd"></input>
                <input type="submit" id="addButton" value="Add Item"></input>
            </form>
        </div>
    );
}

export default Form;