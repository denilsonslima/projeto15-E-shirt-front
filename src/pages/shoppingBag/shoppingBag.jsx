import { Main, Header, Bag, PurchaseSummary, Button } from "../../assets/styles";
import Item from "../../components/item/Item";

import { useContext } from "react";
import UserContext from "../../context/valoresGlobais";

export default function ShoppingBag() {
    const { carrinhoTeste, setCarrinhoTeste } = useContext(UserContext)
    return (
        <Main>
            <Header>
                <h2>Sacola de compras</h2>
                <i className="uil uil-ellipsis-v"></i>
            </Header>
            <Bag>
                {carrinhoTeste.map((p) => <Item
                    key={p.product}
                    p={p}
                    setCarrinhoTeste={setCarrinhoTeste}
                    carrinhoTeste={carrinhoTeste}
                ></Item>)}
            </Bag>
            <PurchaseSummary>
                <p>apresentar em letras pequenas valor total, valor de frete (se assim escolhido), desconto e o total.</p>
            </PurchaseSummary>
            <Button>IR PARA O PAGAMENTO</Button>
        </Main>
    )
}

