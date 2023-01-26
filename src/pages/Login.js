import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Main, Title, Button, LinkTexto, Form } from "../assets/styles"
import { FaEyeSlash, FaEye } from 'react-icons/fa';

export default function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [password, setPassword] = useState(false)

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
            <Title>E-Shirt</Title>
            <Form onSubmit={autenticar}>
                <input
                    required
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleForm}
                    value={form.email}
                />
                <div>
                    <input
                        required
                        type={password ? "text" : "password"}
                        placeholder="Senha"
                        name="password"
                        onChange={handleForm}
                        value={form.password}
                    />
                    {password ?  <FaEye onClick={()=> setPassword(!password)}/> : <FaEyeSlash onClick={()=> setPassword(!password)}/>}
                </div>
                <Button type="submit">Entrar</Button>
            </Form>
            <LinkTexto>Não tem conta? <Link to={"/cadastro"}>Criar conta</Link></LinkTexto>
        </Main>
    )
}
