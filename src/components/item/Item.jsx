import styled from "styled-components";

export default function Item({ p,setCarrinhoTeste }) {
    const installments = (p.price / 10) + (p.price * 0.15);
    function calcAmount(value){
        if(value === "sum"){
            setCarrinhoTeste({...p,amount: p.amount+1})
        }
        else{
            setCarrinhoTeste({...p,amount: p.amount-1})
        }
    }
    return (
        <li>
            <Product>
                <div><img src={p.image} alt="" /></div>
                <div className="description">
                    <h4>{p.product}</h4>
                    <div>
                        <div><h5>R${p.price}</h5><h6>à vista</h6></div>
                        <p>10x de R$ {installments.toFixed(2)}</p>
                    </div>
                </div>
                <div className="theAmount">
                    <div><p>Quantidade</p></div>
                    <div>
                        <button onClick={()=>calcAmount("minus")}><i className="uil uil-minus"></i></button>
                        <div>{p.amount}</div>
                        <button onClick={()=>calcAmount("sum")}><i className="uil uil-plus"></i></button>
                    </div>
                </div>
                <div className="Icon"><i class="uil uil-multiply"></i></div>
            </Product>
        </li>
    );
};

const Product = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid rgb(0, 0, 0, 40%);
    margin-bottom: 50px;
    position: relative;
    img{
        height: 100%;
    }
    p{
        font-size: 10px;
    }
    .description{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
        >div div{display:flex;align-items:end;}
        h4{
            font-size: 18px;
            font-weight: 600;
            color: #313131;
        }
        h5{
            font-size: 16px;
            font-weight: 400;
        }
        h6{
            font-size: 12px;
            font-weight:400;
        }
    }
    .theAmount{
        display: flex;
        flex-direction: column;
        justify-content: end;
        div{
            display: flex;
            justify-content: flex-end;
            button{
                display: flex;
                align-items: center;
                justify-content:center;
                height:26px;
                width: 23px;
                border-radius: 8px;
                border: none;
                background-color: #158a8a;
                color:white;
            }
            div{
                display: flex;
                align-items: center;
                justify-content:center;
                width:31px;
                height: 26px;
                background-color: #e3e3e3;
                border-radius: 8px;
                margin: 0 3px;
            }
        }
    }
    .Icon{
        position: absolute;
        top: 0;
        right:0;
        color:rgb(0, 0, 0, 40%);
    }
`