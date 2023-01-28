import { Header, Main } from "../../assets/styles";
import boleto from "../../assets/img/boleto.svg"
import pix from "../../assets/img/pix.svg"
import cartao from "../../assets/img/cartao.svg"
import qrcode from "../../assets/img/qrcode.svg"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Payment() {
    const navigate = useNavigate()
    return (
        <Main>
            <Header>
                <h2>Pagamento</h2>
            </Header>
            <h3>Selecione o método de pagamento</h3>
            <Container>
                <img src={boleto} alt="" onClick={() => navigate("/boleto")} />
                <img src={pix} alt="" onClick={() => navigate("/pix")} />
                <img src={cartao} alt="" onClick={() => navigate("/cartao-de-credito")} />
                <img src={qrcode} alt="" onClick={() => navigate("/qr-code")} />
            </Container>
        </Main>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    margin: 30px;
    img {
        width: 150px;
        cursor: pointer;
        :hover {
            transform: scale(1.05);
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        }
    }

    @media (max-width: 375px){
        img {
            width: calc(50% - 12px);
        }
    }
`