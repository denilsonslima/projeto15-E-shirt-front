import { Main, Header, Bag, PurchaseSummary, Button } from "../../assets/styles";
import { useContext } from "react";
import UserContext from "../../context/valoresGlobais";

export default function ShoppingBag() {
    const {carrinhoTeste}= useContext(UserContext)
    return (
        <Main>
            <Header>
                <h1>Sacola de compras</h1>
                <i class="uil uil-ellipsis-v"></i>
            </Header>
            <Bag>
                apresentar com map os itens
            </Bag>
            <PurchaseSummary>
                apresentar em letras pequenas valor total, valor de frete (se assim escolhido), desconto e o total.
            </PurchaseSummary>
            <Button>IR PARA O PAGAMENTO</Button>
        </Main>
    )
}

