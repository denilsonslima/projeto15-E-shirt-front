import styled from "styled-components";

export const Main = styled.main`
    max-width: 480px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    padding: 30px 27px 40px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    h2 {
        font-size: 22px;
        line-height: 33px;
        color: #158A8A;
        width: 100%;
    }
    h3 {
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
    .QR {
        height: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h4 {
            width: 200px;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
            color: #158A8A;
        }
        img {
            width: 150px;
        }
    }
`
export const Header = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top:0;
    left:0;
    `
export const Bag = styled.div`
    width: 100%;
    `
export const PurchaseSummary = styled.div`
    
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

    margin: 8px 0 0 0;

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
    gap: 13px;
    margin-bottom: 22px;
    input {
        width: 100%;
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
        margin-bottom:17px
    }
    div {
        position: relative;
        svg {
            position: absolute;
            right: 15px;
            top: 10px;
            width: 20px;
            height: 20px;
            color: #9D9D9D;
        }
    } 

    label input {
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