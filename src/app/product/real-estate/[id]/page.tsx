"use client";
import React, { useState } from "react";
import { Product } from "@/types/Product";
import MainAuctionPage from "@/components/ProductPage/MainAuctionPage";
import { useRouter } from "next/navigation";

import { products } from "mockProductData";

const page = ({ params }: any) => {
    const router = useRouter();
    const id = params["id"];
    console.log(id);

    // fetch the product data from the server or context api
    // const [products, setProducts] = useState<Product[] | null>(null);
    // const product = products.find((product) => product.id === id);
    // const moreProducts = products.filter((product) => product.id !== id);

    const product = products[2];
    const moreProducts = products;

    return (
        <div>
            <MainAuctionPage product={product} moreProducts={moreProducts} />
        </div>
    );
};

export default page;
