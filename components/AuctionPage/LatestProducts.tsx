import { Product } from "@/types/Product";
import React from "react";

type Props = {
    latestProducts: Product[];
};
const LatestProducts = (props: Props) => {
    return (
        <section className="p-10">
            {/* create a div with heading in the center as "Latest Products" */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                    Latest Products
                </h1>
                <div className="w-20 h-1 bg-indigo-500 rounded-full my-2"></div>
            </div>
            {/* create a div with flex layout and wrap the products in it */}
            <div className="justify-center items-center flex flex-row flex-1 flex-wrap gap-10">
                {props.latestProducts &&
                    props.latestProducts.map(
                        (product: Product, index: number) => {
                            return (
                                <div className="w-[440px] lg:flex">
                                    <div
                                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                        title="Mountain"
                                    >
                                        {product.images &&
                                            product.images[0] && (
                                                <>
                                                    <div className="relative">
                                                        <img
                                                            className="h-full"
                                                            src={
                                                                product
                                                                    .images[0]
                                                            }
                                                        />
                                                    </div>

                                                    <div className="absolute top-0 left-0 w-full bg-inherit h-full flex items-center justify-center transition-opacity duration-300 rounded-lg">
                                                        <span className="text-white font-bold text-3xl">
                                                            Cars
                                                        </span>
                                                    </div>
                                                </>
                                            )}
                                    </div>
                                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white dark:bg-gray-800 dark:lg:border-gray-700 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div className="mb-8">
                                            <div className="text-gray-900 font-bold text-xl mb-2 dark:text-white">
                                                {product.name}
                                            </div>
                                            <p className="text-gray-700 text-base dark:text-gray-200">
                                                {product.description}
                                            </p>
                                            <div className="py-2 flex flex-row">
                                                <button
                                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 border bg-purple-600 border-purple-700 rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                                    aria-label="Like"
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        aria-hidden="true"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                            clip-rule="evenodd"
                                                            fill-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </button>
                                                <div className="px-2">
                                                    <button
                                                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-full active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                                        aria-label="Edit"
                                                    >
                                                        <svg
                                                            className="w-5 h-5"
                                                            aria-hidden="true"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <img
                                                className="w-10 h-10 rounded-full mr-4"
                                                src={`https://avatars.dicebear.com/api/initials/Archit.svg`}
                                                alt="Avatar of Owner"
                                            />
                                            <div className="text-sm">
                                                <p className="text-gray-900 leading-none dark:text-gray-200">
                                                    Owner Name
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    )}
            </div>
        </section>
    );
};

export default LatestProducts;