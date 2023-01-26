import { Button, LinkTexto, Pagamento } from "../../assets/styles"

export default function Pix() {
    return (
        <Pagamento>
            <h1>Pagamento</h1>
            <h2>Pix</h2>
            <p>Use a chave pix para realizar o pagamento e após validado, enviaremos a confirmação da comprar para você!</p>
            <div>
                <h3>67.801.575/0001-84</h3>
                <p>Tipo CNPJ</p>
            </div>
            <Button>Copiar a chave</Button>
            <LinkTexto>Em caso de dúvida clique <a href="https://www.google.com/" target="_blank" rel="noreferrer">aqui</a></LinkTexto>
        </Pagamento>
    )
}
