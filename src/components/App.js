import React, { useState } from "react";
import Accordion from "./Accordion";
import WikiSearch from "./WikiSearch";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Header from "./Header";
import Router from "./Router";

const accordionItems = [
    {
        title: "What is a dog?",
        content: "A dog is a type of domesticated animal."
    },
    {
        title: "What kinds of dogs are there?",
        content: "There are many breeds of dogs."
    },
    {
        title: "How do you acquire a dog?",
        content: "Three common ways for a prospective owner to acquire..."
    }
]

const dropDownOptions = [
    {
        label: "Red",
        value: "red"
    },
    {
        label: "Green",
        value: "green"
    },
    {
        label: "Blue",
        value: "blue"
    }
]

const App = () => {
    const [selected, setSelected] = useState(dropDownOptions[0]);

    return(
        <div className="ui container">
            <Header />
            <Router path="/">
                <Accordion accordionItems={accordionItems} />
            </Router>
            <Router path="/search">
                <WikiSearch />
            </Router>
            <Router path="/dropdown">
                <Dropdown label={"Select color"} selected={selected} setSelected={setSelected} options={dropDownOptions}/>
            </Router>
            <Router path="/translate">
                <Translate />
            </Router>
        </div>
    )
}

export default App;