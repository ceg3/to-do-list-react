import './Items.css';

function Item(props) {

    // perform this block of code only if a list of items exists
    if(props.itemList.length !== 0){
        const ul = document.querySelector(".Items");
        // remove current list of "li" from "ul"
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        // rebuild new list of "li" and attach to "ul"
        for(const item of props.itemList) {
            const li = document.createElement("li");
            li.textContent = item.value;
            li.classList.add("li-item");
            li.id = item.key;
            li.onclick=props.handleDeleteEvent;
            ul.appendChild(li);
        }
    }
    return (
        <ul className="Items">
        </ul>
    )

}

export default Item;