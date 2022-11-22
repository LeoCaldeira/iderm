import React, { useState } from 'react'
import AuthLayout from 'layouts/AuthLayout/AuthLayout'
import Atendimento from 'components/elements/Atendimento/Atendimento'
import './Contact.scss'

const Contact = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fome, setFome] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    const handleSendForm = (e) => {
        e.preventDefault()
        setNome('')
        setEmail('')
        setFome('')
        setAssunto('')
        setMensagem('')

        alert(`Agradecemos seu contato ${nome}!`)
    }

    return (
        <AuthLayout>
            <div className="contact-wrapper">
                <div className="contact-content">
                    <form>
                        <input
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Nome"
                            className="contact__input line1"
                            required
                        />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="contact__input line2"
                            type="email"
                            required
                        />
                        <input
                            value={fome}
                            onChange={(e) => setFome(e.target.value)}
                            placeholder="xx-xxxxx-xxxx"
                            className="contact__input line3"
                            type="tel"
                            pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                            required
                        />
                        <input
                            value={assunto}
                            onChange={(e) => setAssunto(e.target.value)}
                            placeholder="Assunto"
                            className="contact__input line4"
                            required
                        />
                        <textarea
                            id="w3review"
                            name="w3review"
                            rows="8"
                            cols="50"
                            onChange={(e) => setMensagem(e.target.value)}
                            className="contact__input line5"
                            placeholder="Mensagem"
                            value={mensagem}
                            required
                        />
                        <button type="submit" className="line6" onClick={(e) => handleSendForm(e)}>
                            enviar
                        </button>
                    </form>
                    <Atendimento />
                </div>
            </div>
        </AuthLayout>
    )
}

export default Contact
