import { Button, LinkTexto, Pagamento } from "../../assets/styles"
import qrcode from "../../assets/img/qrcode.png"

export default function Qrcode() {
    return (
        <Pagamento>
            <h1>Pagamento</h1>
            <h2>QR Code</h2>
            <p>Use o QR Code para realizar o pagamento e após validado, enviaremos a confirmação da comprar para você!</p>
            <div>
                <img src={qrcode} alt="" />
            </div>
            <Button>Copiar</Button>
            <LinkTexto>Em caso de dúvida clique <a href="https://www.google.com/" target="_blank" rel="noreferrer">aqui</a></LinkTexto>
        </Pagamento>
    )
}