import styled from "styled-components"

export default function Pix(){
    return(
        <Main>
            <h1>Pagamento</h1>
            <h2>Pix</h2>
            <p>Use a chave pix para realizar o pagamento e após validado, enviaremos a confirmação da comprar para você!</p>
            <h3>67.801.575/0001-84</h3>
            <p>Tipo CNPJ</p>
            <button>Copiar a chave</button>
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
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #158A8A;
        margin: 71px auto 0;
    }

    > p:nth-of-type(2){
        margin-bottom: 142px;
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
        background: #158A8A;
        color: #F3F3F3;
        margin-bottom: 15px;
        :hover{
            background: #189494;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
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