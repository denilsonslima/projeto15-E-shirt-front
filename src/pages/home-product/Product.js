import styled from 'styled-components';
import { useState } from 'react';
//import { useParams } from "react-router-dom";
import UserContext from '../../context/valoresGlobais.jsx';

export default function Product(){
    const [size, setSize] = useState('');
    const navigate = useNavigate();
    //const { idShirt } = useParams();
    const { imgShirt, shirtPrice } = props;

    function purchase(){
        setCarrinhoTeste([dados.find((t)=> t.url === imgShirt)])
        navigate("/payment")
    }
    function addShoppBag(){
        setCarrinhoTeste([...carrinhoTeste, dados.find((t)=> t.url === imgShirt)])
        navigate("/home")
    }
    return(
        <Main>
            <Header>
                <ShirtImg src = {imgShirt} />
            </Header>

            <InfoBox>
                <div>
                    <h3>Cadeira vitalis</h3>
                    <span>Sharps moveis</span>
                    <h3>{shirtPrice} <span>à vista</span></h3>
                </div>
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

            <Button onClick={() => purchase()}>Comprar</Button>
            <Button2 onClick={()=> addShoppBag()}>Adicionar a sacola</Button2>
        </Main>
    );
}

const Header = styled.header`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;

const ShirtImg = styled.img`
    height: 100%;
    border-radius: 10px;
`;

const InfoBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    > div {
        > h3 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #313131;
        margin: 0;
        height: 21px;
        > span {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #313131;
        }
    }
    > span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 18px;
        color: #313131;
    }
    }
`;

const SizeBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    p {
        font-size: 13px;
    }
`;

const ChooseSize = styled.select`
    width: 43px;
    height: 25px;
    padding: 2px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 14px;
    margin-left: 10px;
    border-radius: 3px;
`;
