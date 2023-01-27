import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Main2, Title, Button, LinkTexto, Form } from "../assets/styles"
import { RotatingLines } from 'react-loader-spinner'
import logo from "../assets/img/logo.png"

export default function SignUp() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        repeat_password: ""
    })
    const navigate = useNavigate()
    const [load, setLoad] = useState(false)

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    async function autenticar(e) {
        e.preventDefault()
        try {
            setLoad(true)
            await axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, form)
            setTimeout(() => {
                navigate("/")
            }, 500);
        } catch (error) {
            alert(error.response.data)
            setLoad(false)
        }
    }
    return (
        <Main2>
            <Title src={logo} alt="logo"/>
            <Form onSubmit={autenticar}>
                <input
                    required
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleForm}
                    value={form.name}
                />
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
                <input
                    required
                    type="password"
                    placeholder="Confirme a senha"
                    name="repeat_password"
                    onChange={handleForm}
                    value={form.repeat_password}
                />
                <Button type="submit">
                    {!load ? 
                    <div>Cadastrar</div> 
                    : 
                    <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="30"
                        visible={true}
                    />  
                    }
                </Button>
            </Form>
            <LinkTexto>Já tem uma conta? <Link to={"/"}>Entre agora</Link></LinkTexto>
        </Main2>
    )
}

