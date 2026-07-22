import { useState } from "react";
export default function CurrencyConvertor() {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const euro = amount / 90;
        alert(
            `Converting to Euro Amount is ${euro.toFixed(2)}`
        );
    }

    return (
        <div>
            <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>

            <form onSubmit={handleSubmit}>

                <label>Amount :</label>

                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <br />
                <label>Currency :</label>

                <input
                    type="text"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                />
                <br /><br />
                <button type="submit">
                    Submit
                </button>

            </form>

        </div>

    );

}