import { useSelector } from "react-redux"

import "./itemList.scss"

const ItemList = ({qty, items, children}) => {
    const { error } = useSelector(store => store.todoState)

    if(error) {
        return <h1 className="error">ERROR</h1>
    }

    if(items.length === 0) {
        return <h1>EMPTY</h1>
    }

    return (
        <div className="items-list">
            <p className="items-list-qty">{qty}</p>
            {
                children
            }
        </div>
    )
}

export default ItemList
