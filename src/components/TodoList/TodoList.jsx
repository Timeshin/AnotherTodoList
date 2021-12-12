import { useSelector } from "react-redux"
import ItemList from "../ItemList/ItemList"
import Item from "../Item/Item"
import ControlPanel from "../ControlInput/ControlInput"

const TodoList = () => {
    const { todoItems } = useSelector(store => store.todoState)

    return (
        <>
            <ControlPanel />
            <ItemList qty={`To do (${todoItems.length})`} items={todoItems}>
                {
                    todoItems.map(item => 
                        !item.completed ?
                        <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        completed={item.completed}
                        /> :
                        null
                    )
                }
            </ItemList>
        </>
    )
    
}

export default TodoList