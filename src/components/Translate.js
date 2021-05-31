import React, {useState, useEffect} from 'react';
import Dropdown from "./Dropdown";
import Convert  from "./Convert";

const dropDownOptions = [
    {
        label: "Afrikaans",
        value: "af"
    },
    { 
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    }
]

const Translate = () => {
    const [text, setText] = useState("");
    const [language, setLanguage] = useState(dropDownOptions[0])
    const [debounceText, setDebounceText] = useState(text);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceText(text); 
        }, 500)
        return () => {
            clearTimeout(timerId);
        }
    },[text])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label> Enter text </label>
                    <input type="text" value={text} onChange={(e) => {setText(e.target.value)}}/>
                </div>
            </div>
            <Dropdown label={"Select language"} selected={language} setSelected={setLanguage} options={dropDownOptions}/>
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={debounceText}/>
        </div>
    )
}

export default Translate;