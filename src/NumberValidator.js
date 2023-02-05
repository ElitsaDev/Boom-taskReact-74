import { useState, useMemo } from "react";

const checkInputIfIsNumber = (text) => {
    let onlyDigits = new RegExp(/^[0-9]*$/gm);
    return onlyDigits.test(text);
}

export default function NumberValidator() {
    const [text, setText] = useState("");

    const isValidNumber = useMemo(() => checkInputIfIsNumber(text), [text]);

    return (
        <>
            <input
                className="input is-large"
                type="text"
                placeholder="Enter number..."
                value={text}
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />
            <span className="icon is-small is-right">
                <i className={`fas ${isValidNumber ? "fa-check" : "fa-times"}`} />
            </span>
        </>
    );
}