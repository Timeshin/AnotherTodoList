import { useEffect } from "react"
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postTodo, editTodo } from "../../services/services"
import { deleteTodo } from "../../services/services"

import "./controlInput.scss"

const ControlPanel = () => {
    const [value, setValue] = useState("")
    const { editingItem } = useSelector(state => state.todoState)
    const dispatch = useDispatch()
    const buttonRef = useRef()

    useEffect(() => {
        editingItem.title ? setValue(editingItem.title) : setValue("")
    }, [editingItem])

    const handleKeyUp = (e) => {
        if(e.keyCode === 13) {
            buttonRef.current.click()
        }
    }

    const handlerButton = () => {
        if(value.trim().length !== 0) {
            setValue("")
            dispatch(postTodo(value))
        } else {
            alert("Input field is empty!")
        }
    }

    const editItem = () => {
        if(value.trim().length !== 0) {
            dispatch(editTodo({...editingItem, title: value}))
        } else {
            dispatch(deleteTodo({...editingItem}))
        }
    }

    return (
        <div className="control-panel">
            <input
            onKeyDown={(e) => handleKeyUp(e)}
            onChange={(e) => setValue(e.target.value)}
            className="control-panel-input"
            value={value}
            type="text"
            placeholder="+ Add a task, press Enter to save" />
            <button
            ref={buttonRef}
            onClick={() => {
                editingItem.title ?
                editItem() :
                handlerButton()
            }}
            className="control-panel-btn">
                {
                    editingItem.title ? "Save" : "Add"
                }
            </button>
        </div>
    )
}

export default ControlPanel
