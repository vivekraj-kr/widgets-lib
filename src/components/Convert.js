import React, { useState, useEffect } from 'react';
import { translateAPI } from "./apiClient";

const Convert = ({language, text}) => {
    const [result, setResult] = useState("");
    useEffect(() => {
        translateAPI(language, text).then((response) => {
           setResult(response.data.translations[0].translatedText)
        })
    },[text, language])
    return(
        <div>{result}</div>
    );
}

export default Convert;