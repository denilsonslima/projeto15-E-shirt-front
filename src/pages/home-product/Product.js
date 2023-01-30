import { Main, Content } from './constants/styled.js';
import styled from 'styled-components';
import { useState, useContext } from 'react';
//import { useParams } from "react-router-dom";
import UserContext from '../../context/valoresGlobais.jsx';

export default function Product(){
    const [size, setSize] = useState('');
    //const { idShirt } = useParams();
    const { imgShirt, shirtPrice } = useContext(UserContext);
    console.log(imgShirt)
    console.log(shirtPrice)

    return(
        <Main>

            <Content>

                <Header>
                    <ShirtImg src = {imgShirt} />
                </Header>

                <InfoBox>
                    <p>R$ {shirtPrice}</p>
                    <SizeBox>
                        <p>Tamanho:</p>
                        <ChooseSize 
                            id = "size" 
                            name = "size" 
                            value = {size} 
                            onChange = {e => setSize(e.target.value)}
                        >
                            <option>P</option>
                            <option>M</option>
                            <option>G</option>
                        </ChooseSize>
                    </SizeBox>

                </InfoBox>

                <BuyBox>
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </BuyBox>

            </Content>

        </Main>
    );
}

const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    margin-top: -100px;
`;

const ShirtImg = styled.img`
    width: 90%;
    height: auto;
    border-radius: 10px;
`;

const InfoBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
        p{
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 30px;
            line-height: 27px;
            margin-left: 26px;
            margin-bottom: 20px;
        }
`;

const SizeBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const ChooseSize = styled.select`
    width: 80px;
    height: auto;
    padding: 7px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 16px;
    margin-left: 12px;
    margin-bottom: 12px;
    border-radius: 3px;
`;

const BuyBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
        button{
            width: 322px;
            height: 43px;
            border-radius: 5px;
            border: none;
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 18px;
            margin-bottom: 15px;
        }
`;
