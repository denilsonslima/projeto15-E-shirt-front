import { Button, Header, LinkTexto, Main } from "../../assets/styles"

export default function Pix() {
    return (
        <Main>
            <Header>
                <h2>Pagamento</h2>
                <i class="uil uil-ellipsis-h"></i>
            </Header>
            <h3>Pix</h3>
            <p>Use a chave pix para realizar o pagamento e após validado, enviaremos a confirmação da comprar para você!</p>
            <div className="QR">
                <h4>67.801.575/0001-84</h4>
                <p>Tipo CNPJ</p>
            </div>
            <Button>Copiar a chave</Button>
            <LinkTexto>Em caso de dúvida clique <a href="https://www.google.com/" target="_blank" rel="noreferrer">aqui</a></LinkTexto>
        </Main>
    )
}
