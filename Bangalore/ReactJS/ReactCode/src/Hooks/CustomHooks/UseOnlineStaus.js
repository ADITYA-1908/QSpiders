import { useEffect, useState } from "react";

function UseOnlineStatus() {
    const [status, setStatus] = useState(navigator.onLine);

    useEffect(() => {

        window.addEventListener("online", () => {
            setStatus(true)
        });
        window.addEventListener("offline", () => {
            setStatus(false)
        });

    }, []);

    return status;
}

export default UseOnlineStatus;
