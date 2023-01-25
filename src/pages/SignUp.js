import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Main, Title, Button, LinkTexto, Form } from "../assets/styles"

export default function SignUp() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        repeat_password: ""
    })
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    async function autenticar(e) {
        e.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, form)
            navigate("/")
        } catch (error) {
            alert(error.response.data)
        }
    }
    return (
        <Main>
            <Title>E-Shirt</Title>
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
                <Button type="submit">Cadastrar</Button>
            </Form>
            <LinkTexto>Já tem uma conta? <Link to={"/"}>Entre agora</Link></LinkTexto>
        </Main>
    )
}

