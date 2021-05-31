import { useEffect } from "react";

const useCloseComponent = (ref, closeHandler) => {
    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current && ref.current.contains(event.target)) {
                return;
            }
            closeHandler(false);
        }

        document.body.addEventListener("click", onBodyClick);
        return () => {
            document.body.removeEventListener("click", onBodyClick);
        }
    }, [])
}

export default useCloseComponent;