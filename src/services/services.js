import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const _url = "https://jsonplaceholder.typicode.com/todos"

const getTodos = createAsyncThunk(
    "todos/getTodos",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${_url}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("error")
        }
    }
)

const postTodo = createAsyncThunk(
    "todos/postTodo",
    async props => {
        const response = await axios.post(`${_url}`, { 
            title: props,
            completed: false
        })
        return response.data
    }
)

const editTodo = createAsyncThunk(
    "todos/editTodo",
    async ({id, title}) => {
        await axios.patch(`${_url}/${id}`, { title: title })
        return {id, title}
    }
)

const deleteTodo = createAsyncThunk(
    "todos/deleteTodo",
    async ({id, completed}) => {
        await axios.delete(`${_url}/${id}`)
        return {id, completed}
    }
)

export {
    getTodos,
    postTodo,
    editTodo,
    deleteTodo
}