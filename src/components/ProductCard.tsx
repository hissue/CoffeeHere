import React, { useState } from 'react';
import image from '../assets/image/coffee.jpg';
import { IProduct, IOption, ICartProduct } from "../commonTypes";
import QuantityButton from './QuantityButton';

// recoil
import { useRecoilState } from 'recoil';
import { cartState } from '../recoil/atom';

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
            <div className="rounded-2xl border-2 shadow-xl bg-white hover:ring-4 hover:ring-indigo-500 hover:ring-offset-4 hover:ring-offset-gray-50 focus:ring-4 " onClick={handleOpenModal}>
                <img
                    src={image}
                    alt="target"
                    onError={handleImgError}
                    className="rounded-3xl p-5"
                />
                <div className='flex justify-between'>
                    <h3 className="text-2xl font-semibold text-gray-600 px-6 pb-4">
                        {product.name}
                    </h3>
                    <h3 className="text-2xl font-semibold text-gray-600 px-6 pb-4">
                        {product.price.toLocaleString()}원
                    </h3>
                </div>

                {/* Option Modal */}
                {openOptionModal && (
                    <ProductOption options={product.option || []} product={product} handleModal={handleCloseModal} />
                )}
            </div>
        </li>
    );
}


// Option Modal
function ProductOption({ options, product, handleModal }: { options: IOption[], product: IProduct, handleModal: () => void }) {
    const [selectedOptions, setSelectedOptions] = useState<IOption[]>([]);
    const [quantity, setQuantity] = useState(0);

    // recoil
    const [cart, setCart] = useRecoilState<ICartProduct[]>(cartState);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) { // 0 이상까지만 감소 가능하도록
            setQuantity(quantity - 1);
        }
    };

    const handleOptionSelect = (option: IOption) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(prevOptions => prevOptions.filter(selectedOption => selectedOption !== option));
        } else {
            setSelectedOptions(prevOptions => [...prevOptions, option]);
        }

    }

    const handleCloseModal = (e: any) => {
        e.stopPropagation();
        handleModal();
    };

    const addToCart = () => {
        const subTotal = product.price * quantity + quantity * selectedOptions.reduce((total, option) => total + (option.price || 0), 0);
        const newProduct: ICartProduct = {
            name: product.name,
            price: product.price,
            quantity: quantity,
            option: selectedOptions,
            subTotal: subTotal
        };

        setCart([...cart, newProduct]);
    };

    console.log(cart);

    return (
        <div className="relative z-10" role="dialog" aria-modal="true">
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">

                    <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                        <div className="relative flex w-full items-center rounded-2xl overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">

                            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                <div className="sm:col-span-4 lg:col-span-5">
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                                        <img src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-03-detail.jpg" alt="Interior of light green canvas bag with padded laptop sleeve and internal organization pouch." className="object-cover object-center" />
                                    </div>
                                </div>
                                <div className="sm:col-span-8 lg:col-span-7">
                                    <h2 className="text-3xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                                    <section aria-labelledby="information-heading" className="mt-4">
                                        <h3 id="information-heading" className="sr-only">Product information</h3>
                                        <div className="flex items-center justify-end">
                                            <p className="lg:text-3xl text-gray-900 sm:text-xl">{product.price.toLocaleString()}원</p>
                                        </div>
                                    </section>

                                    <section aria-labelledby="options-heading" className="mt-6">
                                        <h3 id="options-heading" className="sr-only">Product options</h3>
                                        <div>
                                            <div className="sm:flex-1 sm:justify-between">
                                                {options.map((option, index) => (
                                                    <fieldset key={index}>
                                                        <legend className="block mb-3 text-xl font-bold text-gray-700">옵션 {index + 1}</legend>
                                                        <div className="mt-1 mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                            {/* Select */}
                                                            <div
                                                                className={`relative block cursor-pointer rounded-lg border ${selectedOptions.some(selectedOption => selectedOption.name === option.name) ? "bg-gray-200" : ""
                                                                    } p-4 focus:outline-none`}
                                                                onClick={() => handleOptionSelect(option)}
                                                            >
                                                                <p className="text-xl font-semibold ">{option.name}</p>
                                                                {option.price && (
                                                                    <p className="mt-1 text-lg">+ {option.price.toLocaleString()}원</p>
                                                                )}
                                                                <div className="pointer-events-none absolute -inset-px rounded-lg" aria-hidden="true"></div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                ))}
                                            </div>
                                            <QuantityButton handleIncProp={handleIncrement} handleDecProp={handleDecrement} quantityProp={quantity} />
                                            <div className="mt-6 flex justify-between ">
                                                <button onClick={handleCloseModal} className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 m-3 text-lg font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">취소</button>
                                                <button onClick={(e) => { handleCloseModal(e); addToCart(); }} className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 m-3 text-lg font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">선택</button>
                                            </div>
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

