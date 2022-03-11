import "./button-style.css"
import { Icons } from "./icons/icons"

export default function Button({
    /** define a cor do botão
     * apenas funcionará com "primary" ou "secondary"
     */
    color = "primary",
    /** ícone para o botão no canto direito
     * não é necessário um botão ter ícone
     * "arrow-right" "refresh" "check"
     */
    icon = "",
    /** função a ser executada ao apertar o botão
     */
    onClick,
    /** caso verdadeiro o botão não funcionará
     */
    disabled = false,
    /** conteúdo do botão
     * recebe o valor tanto na props children
     * quanto entre a tag
     */
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
            {children && Icons[icon]}

        </button>
    )
} 