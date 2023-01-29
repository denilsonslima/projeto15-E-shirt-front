import { Main, Content, Header } from './constants/styled.js';
import { teams, showCase, teamShirt } from './constants/teams.js';
import styled from 'styled-components';
import iconSearch from '../../assets/img/iconSearch.jpg';
import back from '../../assets/img/back.png';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Home(props){
    const [team, setTeam] = useState('');
    const [findTeam, setFindTeam] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);
    const { setImgShirt, setShirtPrice } = props;

    const [showList, setShowList] = useState([]);

    useEffect(() => {
        const promise = axios.get("http://localhost:5000/showCase");
        promise.then(answer => setShowList(answer.data));
        promise.catch(error => alert(`${error.response.data.message}`));
    }, []);

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
        <Main>

            <Content>

                <Header>
                    <Search 
                        type = 'text'
                        placeholder = 'Pesquise um time ou seleção'
                        value = {team}
                        onChange = {e => setTeam(e.target.value)}
                        required
                    />

                    <SearchIcon src = {iconSearch} alt = "search" onClick = {verifyTeam}/>
                    <BackIcon src = {back} alt = "back" onClick = {backShowCase} findTeam = {findTeam}/>
                </Header>

                <ShirtsContent findTeam = {findTeam}>
                    {showList.map(shirt =>
                        <Link to={`/product/${shirt.id}`} key={shirt.id}>
                            <ShirtBox>
                                <img src = {shirt.shirt} alt = "shirt" onClick = {() => saveDataShirt(shirt.shirt, shirt.price)}/>
                                <p>{shirt.price}</p>
                            </ShirtBox>
                        </Link>
                    )}
                </ShirtsContent>

                <FindTeamContent findTeam = {findTeam}>
                    {filteredItems.map(t => 
                        <Link to={`/product/${t.id}`} key={t.id}>
                            <ShirtBox>
                                <img src = {t.shirt} alt = "shirt" onClick = {() => saveDataShirt(t.shirt, t.price)}/>
                                <p>{t.price}</p>
                            </ShirtBox>
                        </Link>
                    )}
                </FindTeamContent>

            </Content>

        </Main>
    );
}

const Search = styled.input`
    width: 287px;
    height: 34px;
    border-radius: 21px;
    border: none;
    padding: 10px;
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
`;

const SearchIcon = styled.img`
    width: 32px;
    height: 32px;
    position: absolute;
    top: center;
    right: 68px;
`;

const BackIcon = styled.img`
    width: 32px;
    height: 32px;
    position: absolute;
    top: 0px;
    left: 20px;
    margin-top: 10px;
    display: ${props => props.findTeam? 'flex' : 'none'};
`;

const ShirtsContent = styled.div`
    width: 100%;
    display: ${props => props.findTeam? 'none' : 'flex'};
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

const FindTeamContent = styled.div`
    width: 100%;
    display: ${props => props.findTeam? 'flex' : 'none'};
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

const ShirtBox = styled.div`
    width: 157px;
    height: 181px;
    border-radius: 11px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
        img{
            width: 124px;
            height: 117px;
            margin-bottom: 15px;
        }
        p{
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 19px;
            color: #000000;
        }
`;