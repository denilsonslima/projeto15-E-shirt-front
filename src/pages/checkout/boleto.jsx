import { Button, Button2, LinkTexto, Pagamento } from "../../assets/styles"

export default function Boleto() {
    return (
        <Pagamento>
            <h1>Pagamento</h1>
            <h2>Boleto bancário</h2>
            <p>Use o código para realizar o pagamento e após validado, enviaremos a confirmação da comprar para você!</p>
            <div>
                <h3>34191.79001 01043.510047 91020.150008 8 87980026000</h3>
            </div>
            <Button>Copiar código</Button>
            <br />
            <Button2 onClick={() => alert("oi")}>Prosseguir </Button2>
            <LinkTexto>Em caso de dúvida clique <a href="https://www.google.com/" target="_blank" rel="noreferrer">aqui</a></LinkTexto>
        </Pagamento>
    )
}
