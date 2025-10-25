import { useEffect, useState } from "react";

function UseFetchApi() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setItems(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return [items, setItems];
}

export default UseFetchApi;
