import "./ListItem.css"

export const ListItem = ({ item, onDelete, onThrough }) => (
    <div className="list_item-container">
        <li onClick={() => onThrough(item.id)} className={item.completed ? "list_item-through" : ""}>{item.value}</li>
        <button onClick={() => onDelete(item.id)}>Borrar</button>
    </div>
)
