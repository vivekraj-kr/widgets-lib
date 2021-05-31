import React, { useState } from "react";

const Accordion = ({accordionItems}) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const accordionClickHandler = (index) => {
        setActiveIndex(index);
    }

    return(
        <div className="ui styled accordion">
            {accordionItems.map((item, index) => {
                const active = index === activeIndex? "active": "";
                return (
                    <React.Fragment key={item.title}>
                        <div className={`title ${active}`} onClick={() => { accordionClickHandler(index) }}>
                            <i className="dropdown icon"></i>
                            {item.title}
                        </div>
                        <div className={`content ${active}`}>
                            <p className="transition">
                                {item.content}
                            </p>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Accordion;


