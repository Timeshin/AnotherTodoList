import logo from "../../assets/logo.svg"
import profileLogo from "../../assets/person.png"

import "./header.scss"

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <div className="logo-content">
                    <img src={logo} alt="to-do list logo" />
                    <div className="logo-text">to-do</div>
                </div>
                <div className="header-text">
                    Tasks
                </div>
            </div>
            <div className="profile">
                <p className="profile-name">Leanne Graham</p>
                <img src={profileLogo} alt="profile logo" />
                <span className="profile-arrow"></span>
            </div>
        </div>
    )
}

export default Header
