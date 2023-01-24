import styled from "styled-components"

export default function Boleto(){
    return(
        <Main>
            <h1>Pagamento</h1>
            <h2>Boleto bancário</h2>
            <p>Use o código para realizar o pagamento e após validado, enviaremos a confirmação da comprar para você!</p>
            <h3>34191.79001 01043.510047 91020.150008 8 87980026000</h3>
            <button>Copiar código</button>
            <br></br>
            <button>Enviar código via e-mail</button>
            <p>Em caso de dúvida clique <span>aqui</span></p>
        </Main>
    )
}

const Main = styled.main`
    max-width: 500px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    padding: 30px 27px 40px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    > h1 {
        font-size: 22px;
        line-height: 33px;
        color: #158A8A;
        width: 100%;
    }
    > h2 {
        width: 100%;
        margin-top: 60px;
        margin-bottom: 8px;
        font-size: 18px;
        line-height: 27px;
        color: #313131;
    }
    > p {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #A0A0A0;
    }
    > h3 {
        width: 200px;
        height: 110px;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #158A8A;
        margin: 71px auto 90px;
        flex-wrap: wrap;
    }
    > button {
        max-width: 322px;
        width: 100%;
        height: 43px;
        border-radius: 5px;
        border: none;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        cursor: pointer;
    }

    > button:nth-of-type(1){
        background: #158A8A;
        color: #F3F3F3;
        margin-bottom: 15px;
        :hover{
            background: #189494;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        }
    }

    > button:nth-of-type(2){
        background-color: #ffffff;
        color: #158A8A;
        border: 1.5px solid #158A8A;
        :hover{
            background-color: #fffafa;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
    }

    >p:nth-last-child(1){
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #A0A0A0;
        margin-top: 100px;
        > span {
            color: #1fbebe;
            text-decoration: underline;
            cursor: pointer;
            :hover{
                color: #199e9e;
            }
        }
    }
`