import { configureStore } from "@reduxjs/toolkit"
import { todoSlice } from "."

const store = configureStore({
    reducer: {
        todoState: todoSlice
    }
})

export default store