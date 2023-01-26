import styled from "styled-components"
import { Button, LinkTexto, Pagamento } from "../../assets/styles"


export default function Cartao() {
    return (
        <Pagamento>
            <h1>Pagamento</h1>
            <h2>Cartão de crédito</h2>
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
        </Pagamento>
    )
}

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin-bottom: 65px;
    input {
        width: 100%;
        background: #E6E6E6;
        border: none;
        outline: none;
        border-radius: 5px;
        height: 48px;
        padding-left: 15px;
    }
    label p { 
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #158A8A;
        margin-bottom: 3px;
    }
    > div {
        display: flex;
        justify-content: space-between;
        label {
            width: calc(50% - 12px/2);
        }
    }
`