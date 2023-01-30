import { Header } from './constants/styled.js';
import { teams, teamShirt } from './constants/teams.js';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Main } from '../../assets/styles.js';
import { SlMagnifier, SlMenu, SlArrowRight } from "react-icons/sl";
import axios from 'axios';
import { FiShoppingBag } from "react-icons/fi";

import { useContext } from "react";
import UserContext from "../../context/valoresGlobais";
export default function Home(){
    const [team, setTeam] = useState('');
    const navigate = useNavigate();    const [findTeam, setFindTeam] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);
    const { setImgShirt, setShirtPrice, user, dados, setDados } = useContext(UserContext);
    useEffect(() => {
        const dados = async () => {
            const url = `${process.env.REACT_APP_API_URL}/product`
            const dados = await axios.get(url, { headers: { Authorization: `Bearer ${user.token}` } })
            console.log(dados)
            setDados([...dados.data])
        }
        dados()

    }, [user])
    
    function verifyTeam(){;
        if(team.length === 0){
            return alert("Pesquise um time ou seleção.");
        }

        for(let i = 0; i < teams.length; i++){
            if(team.toLowerCase() === teams[i]){
                setFilteredItems(teamShirt.filter(t => t.team === team.toLowerCase()));
                return setFindTeam(true);
            }
        }

        alert("Time fora de estoque no momento.");
        setTeam('');
    };

    function backShowCase(){
        setFindTeam(false);
        setTeam('');
    };

    function saveDataShirt(shirtImage, shirtPrice){
        setImgShirt(shirtImage);
        setShirtPrice(shirtPrice);
    };

    return(
        <Main width="800">
            <Header>
                <Search>
                    {!findTeam ? <SlMenu/> : <SlArrowRight onClick = {backShowCase} findTeam = {findTeam}/>}
                    <div>
                        <input 
                            type = 'text'
                            value = {team}
                            onChange = {e => setTeam(e.target.value)}
                            required
                        />
                        <SlMagnifier onClick={verifyTeam}/>
                    </div>
                </Search>
                <Titulo>E-shirt</Titulo>
            </Header>
            <Section>
                <div>
                    <h2>Ofertas especiais</h2>
                    <span>Os melhores preços</span>
                    <FiShoppingBag onClick={() => navigate("/shoppingBag")}/>
                </div>
                <ShirtsContent findTeam = {findTeam}>
                    {dados.slice(0, 6).map(e =>
                        <Link to={`/product/${e.idUser}`} key={e._id}>
                            <ShirtBox>
                                <img src = {e.url} alt = "shirt" onClick = {() => saveDataShirt(e.url, e.valor)}/>
                                <h3>{e.name}</h3>
                                <p>R$ {e.valor}</p>
                                <span>10x de R$ 250</span>
                            </ShirtBox>
                        </Link>
                    )}
                </ShirtsContent>

                <FindTeamContent findTeam = {findTeam}>
                    {filteredItems.map(t => 
                        <Link to={`/product/${t.idUser}`} key={t.idUser}>
                            <ShirtBox>
                                <img src = {t.url} alt = "shirt" onClick = {() => saveDataShirt(t.url, t.valor)}/>
                                <h3>{t.name}</h3>
                                <p>R$ {t.valor}</p>
                                <span>10x de R$ 250</span>
                            </ShirtBox>
                        </Link>
                    )}
                </FindTeamContent>
            </Section>
            
        </Main>
    );
}

const Search = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    svg:first-child {
        width: 25px;
        height: 25px;
        color: #fff;
    }

    > div {
        position: relative;
        max-width: 320px;
        width: 100%;
        input {
            width: 100%;
            border-radius: 21px;
            border: 1.5px solid #dad8d8;
            outline: none;
            padding: 8px 35px 8px 14px;
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 16px;
            color: #000000;
            &::placeholder{
                font-family: 'Raleway', sans-serif;
                font-weight: 700;
                font-size: 16px;
                color: gray;
            }
        }
        svg:last-child {
            width: 17px;
            color: #bbb9b9;
            position: absolute;
            top: calc(50% - 17px/2);
            right: 10px;
            cursor: pointer;
        }
    }
`;

const Titulo = styled.h1`
    color: #fff;
    font-family: 'lora';
    font-style: normal;
    font-weight: 400;
    font-size: 55px;
`

const Section = styled.section`
    margin-top: 240px;
    width: 100%;
    > div {
        position: relative;
        margin-bottom: 15px;
        margin-top: 9px;
        > h2 {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            font-family: 'Poppins';
            font-style: normal;
            color: #313131;
            height: 21px;
        }
        > span {
            font-weight: 300;
            font-size: 12px;
            line-height: 18px;
            font-family: 'Poppins';
            font-style: normal;
            color: #313131;
            height: 14px;
        }
        > svg {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
`

const ShirtsContent = styled.div`
    width: 100%;
    display: ${props => props.findTeam? 'none' : 'flex'};
    flex-wrap: wrap;
    justify-content: center;;
    align-items: center;
    gap: 20px;
    @media(max-width: 500px){
        gap: 9px;
    }
    a {
        text-decoration: none;
    }
`;

const FindTeamContent = styled.div`
    width: 100%;
    display: ${props => props.findTeam? 'flex' : 'none'};
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media(max-width: 500px){
        gap: 9px;
    }
    a {
        text-decoration: none;
    }
`;

const ShirtBox = styled.div`
    width: 170px;
    padding: 5px 12px 13px;
    border-radius: 11px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 0px 180px rgba(0, 0, 0, 0.059);
    border-radius: 11px;
    h3 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        line-height: 18px;
        color: #313131;
    }

    > img{
        width: 100%;
        height: 117px;
        border-radius: 11px;
    }
    > p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #313131;
    }
    > span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 10px;
        color: #8A8A8A;
    }

    @media(max-width: 500px){
        width: 150px;
        box-shadow: 0px 0px 180px rgba(0, 0, 0, 0.09);
    }
`;