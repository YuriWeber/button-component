import "./style.css"
import { useEffect, useState } from "react";
import Button from "./components/button-component/Button";

const EmailValidate = (email) => {
  if (email.includes("@")) {
    const emailSplit = email.split("@")
    if (emailSplit.length === 2 && emailSplit[0].length >= 3 && emailSplit[1].length >= 3) {
      return true
    }
  }
  return false
}

function App() {
  const [disabled, setDisabled] = useState(true)
  // dados do usuário
  const [user, setUser] = useState({ name: "", email: "", number: "", tradeName: "" })
  // permitir a aparição de mensagens de erro
  const [errorEnabler, setErrorEnabler] = useState({ name: false, email: false, number: false, tradeName: false })

  useEffect(() => {
    // libera o uso do botão apenas cumprindo todas condições
    if (user.name !== "" && EmailValidate(user.email) && user.number.length === 15 && user.tradeName !== "") {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [user])

  // atualização das informações do usuário
  const NameUpdate = (element) => {
    setUser({ ...user, name: element.value })
  }
  const EmailUpdate = (element) => {
    setUser({ ...user, email: element.value })
  }
  const NumberUpdate = (element) => {
    // irá formatar o número no padrão brasileiro
    let phone = element.value
    phone = phone.replace(/\D/g, "")
    // OBS: só esta aplicando após o oitavo digito
    phone = phone.replace(/^(\d{2})(\d{5})(\d)/, "($1) $2-$3")
    setUser({ ...user, number: phone })
  }
  const TradeNameUpdate = (element) => {
    setUser({ ...user, tradeName: element.value })
  }

  const SendUser = () => {
    // apenas para dar uso visual ao botão enviar
    // enviaria os dados do usuário para onde for necessário
    alert(`Enviado: ${user.name}, ${user.email}, ${user.number}, ${user.tradeName}`)
  }

  const RefreshFields = () => {
    // limpa todos os campos e permição de aparição de erros
    setUser({ name: "", email: "", number: "", tradeName: "" })
    setErrorEnabler({ name: false, email: false, number: false, tradeName: false })
  }



  return (
    <div className="container">
      <form>
        <div className="input-container">
          <label htmlFor="name" className={user.name !== "" ? "input-active" : ""}>Seu nome</label>
          <input type="text" onBlur={() => { setErrorEnabler({ ...errorEnabler, name: true }) }} id="name" maxLength={30} placeholder="Seu nome" value={user.name} onChange={event => { NameUpdate(event.target) }}></input>
          <span className={errorEnabler.name ? (user.name === "" ? "error" : "error-disabled") : "error-disabled"}>Obrigatório</span>
        </div>
        <div className="input-container">
          <label htmlFor="name" className={user.email !== "" ? "input-active" : ""}>E-mail</label>
          <input type="email" onBlur={() => { setErrorEnabler({ ...errorEnabler, email: true }) }} id="email" placeholder="E-mail" value={user.email} onChange={event => { EmailUpdate(event.target) }}></input>
          <span className={errorEnabler.email ? (!EmailValidate(user.email) ? "error" : "error-disabled") : "error-disabled"}>Insira um e-mail válido</span>
        </div>
        <div className="input-container">
          <label htmlFor="number" className={user.number !== "" ? "input-active" : ""}>Número do seu WhatsApp</label>
          <input type="tel" onBlur={() => { setErrorEnabler({ ...errorEnabler, number: true }) }} id="number" maxLength={15} placeholder="Número do seu WhatsApp" value={user.number} onChange={event => { NumberUpdate(event.target) }}></input>
          <span className={errorEnabler.number ? (user.number.length < 15 ? "error" : "error-disabled") : "error-disabled"}>Digite seu telefone</span>
        </div>
        <div className="input-container">
          <label htmlFor="tradeName" className={user.tradeName !== "" ? "input-active" : ""}>Nome fantasia da empresa</label>
          <input type="text" onBlur={() => { setErrorEnabler({ ...errorEnabler, tradeName: true }) }} id="tradeName" maxLength={30} placeholder="Nome fantasia da empresa" value={user.tradeName} onChange={event => { TradeNameUpdate(event.target) }}></input>
          <span className={errorEnabler.tradeName ? (user.tradeName === "" ? "error" : "error-disabled") : "error-disabled"}>Obrigatório</span>
        </div>
      </form >
      <div className="button-container">
        <Button disabled={disabled} onClick={SendUser}>Enviar</Button>
        <Button icon="refresh" color="secondary" onClick={RefreshFields}>Limpar</Button>
      </div>
    </div >
  )
}

export default App;
