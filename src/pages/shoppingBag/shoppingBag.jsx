import { Main, Header, Bag, PurchaseSummary, Button } from "../../assets/styles";
import Item from "../../components/item/Item";

import { useContext } from "react";
import UserContext from "../../context/valoresGlobais";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function ShoppingBag() {
    
    const { carrinhoTeste, user } = useContext(UserContext);
    const navigate = useNavigate();
    async function purchase(){
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/payment`, carrinhoTeste, { headers: { Authorization: `Bearer ${user.token}` } })
            .then((res) => alert(res.data))
            navigate("/payment");
        } catch (error) {
            alert(error.response.data)
        }
    }
    return (
        <Main>
            <Header>
                <h2>Sacola de compras</h2>
                <i className="uil uil-ellipsis-v"></i>
            </Header>
            <Bag>
                {carrinhoTeste.map((p) => <Item key={p.product}p={p}></Item>)}
            </Bag>
            <PurchaseSummary>
                <p>apresentar em letras pequenas valor total, valor de frete (se assim escolhido), desconto e o total.</p>
            </PurchaseSummary>
            <Button onClick={() => purchase()}>IR PARA O PAGAMENTO</Button>
        </Main>
    )
}

