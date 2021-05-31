import React from 'react';

const Link = ({className, href, children}) => {
    const onClickHandler = (e) => {
        if(e.metaKey || e.ctrlKey) {
            return;
        }
        e.preventDefault();
        window.history.pushState({}, "", href)
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    }

    return(
       <a href={href} className={className} onClick={onClickHandler}>{children}</a>
    )
}

export default Link;