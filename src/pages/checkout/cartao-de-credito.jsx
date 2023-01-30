import { Button, Header, LinkTexto, Main, Form } from "../../assets/styles"

export default function Cartao() {
    return (
        <Main>
            <Header>
                <h2>Pagamento</h2>
                <i className="uil uil-ellipsis-h"></i>
            </Header>
            <h3>Cartão de crédito</h3>
            <Form>
                <label>
                    <p>Número do cartão</p>
                    <input type="text" placeholder="1111 2222 3333 4444" />
                </label>
                <div>
                    <label>
                        <p>Validade</p>
                        <input type="text" placeholder="11/22" />
                    </label>
                    <label>
                        <p>CVV</p>
                        <input type="text" placeholder="123" />
                    </label>
                </div>
                <label>
                    <p>Titular da cartão</p>
                    <input type="text" placeholder="LUCAS LACERDA" />
                </label>
                <label>
                    <p>CPF do titular</p>
                    <input type="text" placeholder="123.456.789-10" />
                </label>
            </Form>
            <Button>Confirmar</Button>
            <LinkTexto>Em caso de dúvida clique <a href="https://www.google.com/" target="_blank" rel="noreferrer">aqui</a></LinkTexto>
        </Main>
    )
}

