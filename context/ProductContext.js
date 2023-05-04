import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const [product, setProduct] = useState({});
    const [cars, setCars] = useState([]);
    const [bikes, setBikes] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const [realestates, setRealestates] = useState([]);
    const [laptops, setLaptops] = useState([]);


    const getCars = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get-cars`);
        const data = await res.json();
        if (data.success) setCars(data.message);
        console.log("cars")
    }

    const getBikes = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get-bikes`);
        const data = await res.json();
        if (data.success) setBikes(data.message);
    }

    const getMobiles = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get-mobiles`);
        const data = await res.json();
        if (data.success) setMobiles(data.message);
    }

    const getRealestates = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get-properties`);
        const data = await res.json();
        if (data.success) setRealestates(data.message);
    }

    const getLaptops = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get-laptops`);
        const data = await res.json();
        if (data.success) setLaptops(data.message);
    }

    const getAllProducts = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get`);
        const data = await res.json();
        if (data.success) setProducts(data.message);
        console.log("jfklae");
    }


    return (
        <ProductContext.Provider value={{
            cars,
            bikes,
            mobiles,
            realestates,
            laptops,
            products,
            setCars,
            setBikes,
            setMobiles,
            setRealestates,
            setLaptops,
            setProducts,
            getCars,
            getBikes,
            getMobiles,
            getRealestates,
            getLaptops,
            getAllProducts,

        }}>
            {children}
        </ProductContext.Provider>
    )
}