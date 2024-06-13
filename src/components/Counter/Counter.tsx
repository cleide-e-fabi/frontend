import { useState } from "react";
import { CounterStyles } from "./CounterStyles.styles";

export default function Counter() {

    const [count, setCount] = useState<number>(1);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 1));
    };

    return (
        <>
            <CounterStyles>
                <h6 className="product-quantity">Quantidade:</h6>
                <button className="minus quantity-button" onClick={decrement}>-</button>
                <div className="quantity-value">{count}</div>
                <button className="plus quantity-button" onClick={increment}>+</button>
            </CounterStyles>
        </>
    );
}