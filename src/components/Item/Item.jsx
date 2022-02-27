import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { deleteTodo } from "../../services/services"
import { 
    changeToCompletedItem,
    changeToTodoItem,
    setEditingItem
} from "../../redux/actions/actions"

const Item = ({id, title, completed}) => {
    const { todoItems, completedItems, editingItem } = useSelector(state => state.todoState)
    const [ copiedText, setCopiedText ] = useState("")
    const [ edit, setEdit ] = useState(false)
    const dispatch = useDispatch()
    const titleRef = useRef()

    console.log("hello13")
    console.log("hello123")

    useEffect(() => {
        setCopiedText(title)
        editingItem.id === id ? setEdit(true) : setEdit(false)
    }, [editingItem, id, title])

    const changeItem = () => {
        let elem

        if(completed) {
            elem = completedItems.find(item => item.id === id)
            dispatch(changeToTodoItem(elem))
        } else {
            elem = todoItems.find(item => item.id === id)
            dispatch(changeToCompletedItem(elem))
        }
    }

    const editItem = () => {
        dispatch(setEditingItem({id, title, completed}))
    }

    const deleteItem = () => {
        dispatch(deleteTodo({id, completed}))
    }

    return (
        <div className="items-list-elem">
            <div className="items-list-elem-content">
                <label
                onClick={changeItem}
                className="items-list-elem-content-checkbox">
                    <input type="checkbox" defaultChecked={completed} />
                    <span className="background"/>
                </label>
                <div
                ref={titleRef}
                className={completed ? "items-list-elem-title completed" : "items-list-elem-title"}>
                    {title}
                </div>
            </div>
            <div className="items-list-elem-icons">
                {
                    (!completed && !edit) &&
                    <>
                        <span onClick={editItem}>
                            <i className="far fa-edit edit"></i>
                        </span>
                        <CopyToClipboard text={copiedText}>
                            <span
                                onClick={() => alert("Copied!")}
                            >
                                <i className="far fa-copy copy"></i>
                            </span>
                        </CopyToClipboard>
                </>
                }
                <span onClick={() => deleteItem()}>
                    <i className="far fa-trash-alt trash"></i>
                </span>
            </div>
        </div>
    )
}

export default Item
