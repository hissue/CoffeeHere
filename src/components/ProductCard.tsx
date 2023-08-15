import React, { useState } from 'react';
import image from '../assets/image/coffee.jpg';
import { IProduct, IOption } from "../commonTypes";

// Product Card
export default function ProductCard({ product }: { product: IProduct }) {
    const [openOptionModal, setOpenOptionModal] = useState<boolean>(false);

    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.src = "https://cdn-icons-png.flaticon.com/512/4062/4062340.png";
    };

    const handleOpenModal = () => {
        setOpenOptionModal(true);
    };

    const handleCloseModal = () => {
        setOpenOptionModal(false);
    };

    return (
        <li key={product.name} className="m-4">
            <div className="rounded-2xl border-2 border-yellow-500 shadow-xl bg-white " onClick={handleOpenModal}>
                <img
                    src={image}
                    alt="target"
                    onError={handleImgError}
                    className="rounded-3xl p-5"
                />
                <h3 className="text-2xl font-semibold text-gray-600 px-6 pb-4">
                    {product.name}
                </h3>

                {/* Option Modal */}
                {product.option ? (
                    openOptionModal && (
                        <ProductOption options={product.option} product={product} handleModal={handleCloseModal} />
                    )
                ) : <></>}

            </div>
        </li>
    );
}

// Option Modal
function ProductOption({ options, product, handleModal }: { options: IOption[], product: IProduct, handleModal: () => void }) {
    const handleCloseModal = () => {
        handleModal();
    };
    return (
        <div className="relative z-10" role="dialog" aria-modal="true">
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <div className="flex transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">

                            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-10 lg:gap-x-8">
                                <div className="sm:col-span-8 lg:col-span-7">
                                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">Basic Tee 6-Pack</h2>

                                    <section aria-labelledby="information-heading" className="mt-2">
                                        <h3 id="information-heading" className="sr-only">Product information</h3>

                                        <p className="text-2xl text-gray-900">$192</p>

                                        <div className="mt-6">
                                            <h4 className="sr-only">Reviews</h4>
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div className="h-5">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section aria-labelledby="options-heading" className="mt-10">
                                        <h3 id="options-heading" className="sr-only">Product options</h3>

                                        <div>
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-900">Color</h4>
                                                <div className="h-8">
                                                </div>
                                            </div>

                                            <div className="mt-10">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-sm font-medium text-gray-900">Size</h4>
                                                </div>

                                                <fieldset className="mt-4">
                                                    <legend className="sr-only">Choose a size</legend>
                                                    <div className="grid grid-cols-4 gap-4">
                                                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                                            <input type="radio" name="size-choice" value="XXS" className="sr-only" aria-labelledby="size-choice-0-label" />
                                                            <span id="size-choice-0-label">XXS</span>

                                                            <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                                        </label>
                                                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                                            <input type="radio" name="size-choice" value="XXS" className="sr-only" aria-labelledby="size-choice-0-label" />
                                                            <span id="size-choice-0-label">XXS</span>

                                                            <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                                        </label>
                                                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                                            <input type="radio" name="size-choice" value="XXS" className="sr-only" aria-labelledby="size-choice-0-label" />
                                                            <span id="size-choice-0-label">XXS</span>

                                                            <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                                        </label>
                                                        <div className="h-8">

                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <button onClick={handleCloseModal} className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">취소</button>
                                            <button type="submit" className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">선택</button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

{/* <div>
              <h3>Options:</h3>
              <ul>
                {options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    {option.name}
                    {option.price && ` (+$${option.price})`}
                  </li>
                ))}
              </ul>
            </div> */}