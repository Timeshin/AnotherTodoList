import { useSelector } from "react-redux"
import Item from "../Item/Item"
import ItemList from "../ItemList/ItemList"


const CompletedList = () => {
    const { completedItems } = useSelector(store => store.todoState)

    return <ItemList qty={`Completed (${completedItems.length})`} items={completedItems}>
        {
            completedItems.map(item => 
                item.completed ?
                <Item key={item.id} id={item.id} title={item.title} completed={item.completed} /> :
                null
            )
        }
    </ItemList>
}

export default CompletedList
