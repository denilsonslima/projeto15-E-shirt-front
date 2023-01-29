import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 375px;
    height: 812px;
    background-color: #228b22;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.header`
    width: 100%;
    height: 270px;
    position: absolute;
    top: 0;
    padding: 20px;
    background: url("https://s2.glbimg.com/iqMwmmN_HoSLILEj2li8_QfXeMo=/0x0:1080x608/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/G/u/Dx3kklTXqF3qpFFnsoAw/carrossel-jogadores-sem-clima.jpg") no-repeat center;
    background-size: auto 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 3px;
`;