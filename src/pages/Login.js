import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    async function autenticar(e) {
        e.preventDefault()
        try {
            const user = await axios.post(`${process.env.REACT_APP_API_URL}/login`, form)
            console.log(user)
            navigate("/boleto")
        } catch (error) {
            alert(error.response.data)
        }
    }
    return (
        <Main>
            <h1>E-Shirt</h1>
            <form onSubmit={autenticar}>
                <input
                    required
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleForm}
                    value={form.email}
                />
                <input
                    required
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={handleForm}
                    value={form.password}
                />
                <button type="submit">Entrar</button>
            </form>
            <Link to={"/cadastro"}>
                <p>Não tem conta? <span>Criar conta</span></p>
            </Link>
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
        font-family: 'Prata';
        font-style: normal;
        font-weight: 400;
        font-size: 60.4779px;
        line-height: 82px;
        color: #000000;
        margin-bottom: 30px;
    }
    > form {
        > input {
            width: 100%;
            height: 58px;
            padding-left: 15px;
            border: none;
            border-radius: 5px;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
            outline: none;
            border-bottom: 2px solid #158A8A;
        }
        > input[type=password] {
            margin-top: 30px;
            margin-bottom: 60px;
        }
        > button {
            width: 100%;
            height: 46px;
            margin-bottom: 36px;
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
        }
    }
    > a {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #9D9D9D;
        text-decoration: none;
        >p > span {
            color: #158A8A;
        }
        :hover{
            font-size: 14.5px;
            text-decoration: underline;
        }
    }
`