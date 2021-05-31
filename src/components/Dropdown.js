import React, { useState, useRef, useEffect } from 'react';
import useCloseComponent from "../customHooks/useCloseComponent";

const Dropdown = ({label, options, selected, setSelected}) => {
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    useCloseComponent(ref, setIsOpen);

    const renderOptions = options.map((option) => {
        if(option.value === selected.value) { return null };
        return (
            <div key={option.value} className="item" onClick={() => { setSelected(option) }}>
                {option.label}
            </div>
        )
    })

    return(
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label"> {label} </label>
                <div className={`ui selection dropdown ${isOpen? "active visible": "" }`} onClick={() => {setIsOpen(!isOpen)}}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${isOpen? "visible transition": "" }`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;