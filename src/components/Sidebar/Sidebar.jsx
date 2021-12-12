import vectortodo from "../../assets/Vectortodo.svg"

import "./sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <img src={vectortodo} alt="Vectortodo" />
            </div>
        </div>
    )
}

export default Sidebar
