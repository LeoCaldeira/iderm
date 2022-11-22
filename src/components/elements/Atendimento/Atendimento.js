import React from 'react'
import { MdAccessTimeFilled } from 'react-icons/md'
import { ImPhone } from 'react-icons/im'
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import './Atendimento.scss'

const Atendimento = () => {
    return (
        <div className="atendimento-wrapper">
            <h1>Atendimento</h1>
            <div className="home-atendimento__infos">
                <ImPhone size={20} /> <span>(11) 2965-0562 / 2965-0099</span>
            </div>
            <div className="home-atendimento__infos">
                <IoLogoWhatsapp size={20} /> <span>(11) 99685-2365</span>
            </div>
            <div className="home-atendimento__infos">
                <IoMdMail size={20} />{' '}
                <span>
                    <a href="mailto:contato@iderm.com.br">contato@iderm.com.br</a>
                </span>
            </div>
            <div className="home-atendimento__infos">
                <MdAccessTimeFilled size={20} />{' '}
                <span>
                    Segunda a sexta: das 12h às 20h <br />
                    Atendemos um sábado ao mês <br />
                    (conforme agenda)
                </span>
            </div>
        </div>
    )
}

export default Atendimento
