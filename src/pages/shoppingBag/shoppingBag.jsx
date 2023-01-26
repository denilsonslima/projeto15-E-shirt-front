import { Main, Header, Bag, PurchaseSummary, Button, Title } from "../../assets/styles";
import { useContext } from "react";
import UserContext from "../../context/valoresGlobais";

export default function ShoppingBag() {
    const {carrinhoTeste}= useContext(UserContext)
    return (
        <Main>
            <Header>
                <h2>Sacola de compras</h2>
                <i class="uil uil-ellipsis-v"></i>
            </Header>
            <Bag>
                apresentar com map os itens
            </Bag>
            <PurchaseSummary>
                <p>apresentar em letras pequenas valor total, valor de frete (se assim escolhido), desconto e o total.</p>
            </PurchaseSummary>
            <Button>IR PARA O PAGAMENTO</Button>
        </Main>
    )
}

