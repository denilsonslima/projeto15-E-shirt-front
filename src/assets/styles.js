import styled from "styled-components";

export const Main = styled.main`
    max-width: 480px;
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
`

export const Title = styled.h1`
    font-family: 'Prata';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 82px;
    color: #000000;
    margin-bottom: 30px;
`

export const Button = styled.button`
    width: 100%;
    height: 46px;

    background: #158A8A;
    border-radius: 5px;
    border: none;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #F3F3F3;
    outline-color: #A328D6;
    cursor: pointer;
    :hover {
        background: #179b9b;
    }
`

export const Button2 = styled(Button)`
    background-color: #FFFFFF;
    border: 2px solid #158A8A;
    color: #158A8A;
    :hover {
        background: transparent;
    }

`

export const LinkTexto = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #9D9D9D;
    margin-top: 30px;
    > a {
        text-decoration: none;
        color: #158A8A;
        :hover {
            text-decoration: underline;
        }
    }
    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
    > input {
        height: 35px;
        padding-left: 15px;
        border: none;
        border-radius: 5px;
        font-family: 'Poppins';
        font-size: 16px;
        outline: none;
        border-bottom: 2px solid #158A8A;
        ::placeholder {
            font-size: 15px;
            line-height: 21px;
            color: #9D9D9D;
        }
    }
`

export const Pagamento = styled(Main)`
    > h1 {
        font-size: 22px;
        line-height: 33px;
        color: #158A8A;
        width: 100%;
    }
    > h2 {
        width: 100%;
        margin-top: 40px;
        margin-bottom: 8px;
        font-size: 18px;
        line-height: 27px;
        color: #313131;
    }
    & p {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #A0A0A0;
    }
    > div {
        height: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > h3 {
            width: 200px;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
            color: #158A8A;
        }
    }
`