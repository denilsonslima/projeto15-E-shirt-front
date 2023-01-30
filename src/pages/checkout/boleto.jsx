import { Button, Button2, Header, LinkTexto, Main } from "../../assets/styles"

export default function Boleto() {
    return (
        <Main>
            <Header>
                <h2>Pagamento</h2>
                <i className="uil uil-ellipsis-h"></i>
            </Header>
            <h3>Boleto bancário</h3>
            <p>Use o código para realizar o pagamento e após validado, enviaremos a confirmação da comprar para você!</p>
            <div className="QR">
                <h4>34191.79001 01043.510047 91020.150008 8 87980026000</h4>
            </div>
            <Button>Copiar código</Button>
            <Button2 onClick={() => alert("oi")}>Prosseguir </Button2>
            <LinkTexto>Em caso de dúvida clique <a href="https://www.google.com/" target="_blank" rel="noreferrer">aqui</a></LinkTexto>
        </Main>
    )
}
