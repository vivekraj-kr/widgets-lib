import React, { useState, useEffect } from 'react';

const Router = ({path, children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener("popstate", onLocationChange);
        return () => {
            window.removeEventListener("popstate", onLocationChange);
        }
    }, []);

    return path === currentPath ? children :null;
}

export default Router;