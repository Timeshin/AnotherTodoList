import { createSlice, current } from "@reduxjs/toolkit"
import { getTodos, postTodo, editTodo, deleteTodo } from "../../services/services"

let uniqId = () => {
    return Math.floor(Math.random() * (1000 - 200) + 200)
}

const initialState = {
    todoItems: [],
    completedItems: [],
    editingItem: {},
    loading: true,
    error: ""
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        changeToTodoItem: (state, action) => {
            state.completedItems = state.completedItems.filter(item => item.id !== action.payload.id)
            state.todoItems.push({...action.payload, completed: false})
        },
        changeToCompletedItem: (state, action) => {
            state.todoItems = state.todoItems.filter(item => item.id !== action.payload.id)
            state.completedItems.push({...action.payload, completed: true})
        },
        setEditingItem: (state, action) => {
            state.editingItem = {...action.payload}
        },
    },
    extraReducers: {
        [getTodos.fulfilled]: (state, action) => { // fulfilled (successful), pending (waiting), rejected (error)
            action.payload.map(item => item.completed ? state.completedItems.push(item) : state.todoItems.push(item))
            state.loading = false
            state.error = ""
        },

        [getTodos.pending]: (state) => {
            state.loading = true
        },

        [getTodos.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        [postTodo.fulfilled]: (state, action) => {
            state.todoItems.push({ ...action.payload, id: uniqId()})
        },

        [editTodo.fulfilled]: (state, action) => {
            console.log(current(state).todoItems)
            state.todoItems = state.todoItems.map(item =>
                item.id === action.payload.id ?
                { ...item, title: action.payload.title } :
                item
            )
            state.editingItem = {}
        },

        [deleteTodo.fulfilled]: (state, action) => {
            if(action.payload.completed) {
                state.completedItems = state.completedItems.filter(item => item.id !== action.payload.id)
            } else {
                state.todoItems = state.todoItems.filter(item => item.id !== action.payload.id)
            }
            state.editingItem = {}
        }
    }
})

const { actions, reducer } = todoSlice

export const {
    changeToCompletedItem,
    changeToTodoItem,
    setEditingItem
} = actions

export default reducer