import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Main2, Title, Button, LinkTexto, Form } from "../assets/styles"
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { RotatingLines } from 'react-loader-spinner'
import logo from "../assets/img/logo.png"

export default function Login({setToken}) {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [password, setPassword] = useState(false)
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
            const dados = await axios.post(`${process.env.REACT_APP_API_URL}/login`, form)
            setTimeout(() => {
                setToken(dados.data.token)
                navigate("/home")
            }, 500);
        } catch (error) {
            alert(error.response.data)
            setLoad(false)
        }
    }
    return (
        <Main2>
            <Title src={logo} alt="logo"/>
            <Form onSubmit={autenticar} gap="15px">
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
                <Button type="submit" margin="25px">
                    {!load ? 
                    <div>Entrar</div> 
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
            <LinkTexto>Não tem conta? <Link to={"/cadastro"}>Criar conta</Link></LinkTexto>
        </Main2>
    )
}
