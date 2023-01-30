import { Button, LinkTexto, Main, Header } from "../../assets/styles"
import qrcode from "../../assets/img/qrcode.png"

export default function Qrcode() {
    return (
        <Main>
            <Header>
                <h2>Pagamento</h2>
                <i className="uil uil-ellipsis-h"></i>
            </Header>
            <h3>QR Code</h3>
            <p>Use o QR Code para realizar o pagamento e após validado, enviaremos a confirmação da comprar para você!</p>
            <div className="QR">
                <img src={qrcode} alt="" />
            </div>
            <Button>Copiar</Button>
            <LinkTexto>Em caso de dúvida clique <a href="https://www.google.com/" target="_blank" rel="noreferrer">aqui</a></LinkTexto>
        </Main>
    )
}