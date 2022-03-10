import "./button-style.css"
import { Icons } from "./icons/icons"

export default function Button({
    color = "primary",
    icon = "",
    onClick,
    disabled = false,
    children
}) {
    return (
        <button
            className={`button-component 
                        ${color}-button 
                        ${Icons.hasOwnProperty(icon) ? "icon-button" : ""}
                        ${disabled ? "disabled-button" : ""}`}
            onClick={!disabled ? onClick : undefined}
        >
            {children}
            {children && <img src={Icons[icon]} alt="" />}

        </button>
    )
} 