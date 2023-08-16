import { useEffect, useState } from "react";
import { IoReturnUpForward } from "react-icons/io5";
import { PiXBold } from "react-icons/pi";

// recoil
import { useRecoilValue, useRecoilState } from 'recoil';
import { cartState, totalPriceSelector, discountPriceState } from '../recoil/atom';

import { ICartProduct, IOption, ICoupons } from "../commonTypes";
import QuantityButton from "./QuantityButton";
import Recipt from "./Recipt";

export default function CartHistory({ handleShowStatus }: { handleShowStatus: () => void }) {
    const cart = useRecoilValue(cartState);
    const totalPrice = useRecoilValue(totalPriceSelector);
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div>
            <div className="fixed top-0 right-0 h-full w-1/4 text-black rounded-l-3xl shadow-2xl z-10">
                <div className="h-4/5 flex flex-col bg-white rounded-tl-3xl">

                    {/* Cart Banner */}
                    <div className="flex justify-between items-center mt-7 mx-8">
                        <div className="sm:text-xl lg:text-4xl">주문 내역</div>
                        <button onClick={handleShowStatus} className="flex items-center sm:text-md lg:text-2xl">
                            뒤로 <IoReturnUpForward className="mx-4 text-2xl" />
                        </button>
                    </div>
                    <div className="ml-7 my-2 h-full overflow-y-scroll overflow-x-hidden">

                        {/* Selected Products */}
                        {cart.map((product, index) => (
                            <SelectedProduct key={`cart_${product.name}_${index}`} selectedProduct={product} />
                        ))}
                    </div>
                </div>
                <div className="relative h-1/5 flex flex-col justify-end rounded-bl-3xl custom-pay-color">
                    <div className="ml-7 flex justify-between items-center h-full">
                        총 합계
                        <div className="sm:text-xl lg:text-3xl mr-7">
                            {totalPrice.toLocaleString()}원
                        </div>
                    </div>
                    <button onClick={handleModal} className="mx-7 mb-5 mt-3 custom-button flex justify-center">결제</button>
                    {showModal && (
                        <Pay totalPrice={totalPrice} handleModal={handleModal} />
                    )}
                </div>
            </div>
        </div>
    );
}


// Selected Products
function SelectedProduct({ selectedProduct }: { selectedProduct: ICartProduct }) {
    const [myList, setMyList] = useRecoilState(cartState);

    // recoil Delete
    const handleDelete = () => {
        const updatedList = myList.filter(product => product !== selectedProduct);
        setMyList(updatedList);
    };

    // Recoil Change
    const handleQuantityChange = (newQuantity: number) => {
        const updatedCart = myList.map(cartProduct =>
            cartProduct.name === selectedProduct.name
                ? { ...cartProduct, quantity: newQuantity, subTotal: selectedProduct.price * newQuantity + newQuantity * calculateOptionTotal(selectedProduct.option || []) }
                : cartProduct
        );

        setMyList(updatedCart);
    };

    const calculateOptionTotal = (options: IOption[]) => {
        return options.reduce((total, option) => total + (option.price || 0), 0);
    };

    return (
        <>
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-4 lg:gap-x-8">
                <div className="sm:col-span-8 lg:col-span-7">
                    <section aria-labelledby="options-heading" className="mt-10">
                        <div>
                            <div className="sm:flex-1 sm:justify-between">
                                <fieldset>
                                    <div className="mt-1 mb-1 grid gap-2">
                                        <div className="relative grid grid-cols-2 gap-2 items-center">
                                            <p className="text-xl font-semibold">{selectedProduct.name}</p>
                                            <div className="relative grid grid-cols-2">
                                                <p className="text-xl font-semibold text-right">{(selectedProduct.price * selectedProduct.quantity).toLocaleString()}원</p>
                                                <button onClick={handleDelete} className="flex justify-end mr-8 text-3xl text-gray-400 hover:text-gray-700"><PiXBold /></button>
                                            </div>
                                        </div>
                                        {selectedProduct.option?.map((op) => (
                                            <div className="relative grid grid-cols-2 gap-2 items-center">
                                                <p className="text-lg">{op.name}</p>
                                                <div className="relative grid grid-cols-2 items-center">
                                                    {op.price ? (
                                                        <p className="text-lg text-right">{`${(op.price * selectedProduct.quantity).toLocaleString()}원`}</p>
                                                    ) : <p className="text-lg text-right">0원</p>}
                                                </div>
                                            </div>
                                        ))}
                                        <div className="relative grid grid-cols-2 gap-2">
                                            <QuantityButton
                                                handleIncProp={() => handleQuantityChange(selectedProduct.quantity + 1)}
                                                handleDecProp={() => handleQuantityChange(selectedProduct.quantity - 1)}
                                                quantityProp={selectedProduct.quantity}
                                            />

                                            <div className="relative grid grid-cols-2 items-center">
                                                <p className="text-2xl font-semibold text-right whitespace-nowrap">{selectedProduct.subTotal.toLocaleString()}원</p>
                                            </div>
                                        </div>
                                    </div>

                                </fieldset>
                            </div>

                            <div className="grid grid-col-2 gap-2 border-b-2">

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>

    );
}

function Pay({ totalPrice, handleModal }: { totalPrice: number, handleModal: () => void }) {
    const [coupons, setCoupons] = useState<ICoupons[]>([]);
    const [seletedCouponId, setSelectedCouponId] = useState<string>("");
    const [discountPrice, setDiscountPrice] = useRecoilState(discountPriceState);

    const [reciptModal, setReciptModal] = useState<boolean>(false);

    // Coupons Rest API
    const fetchCoupons = async () => {
        try {
            const response = await fetch("/coupons");
            const rawdata = await response.json();
            setCoupons(rawdata.data);
        } catch (error) {
            console.error('Error fetching coupons:', error);
        }
    }

    const handleCouponClick = (id: string) => {
        setSelectedCouponId(id);

        if (id === "notCoupon") {
            setDiscountPrice(0);
        } else {
            const selectedCoupon = coupons.find(coupon => coupon.id === id);
            if (selectedCoupon) {
                if (selectedCoupon.id === 'coupon_1') {
                    setDiscountPrice(Math.ceil(selectedCoupon.price));
                } else {
                    setDiscountPrice(Math.ceil(totalPrice / selectedCoupon.price));
                }
            }
        }
    };

    const handleReciptModal = () => {
        setReciptModal(!reciptModal);
    }

    useEffect(() => {
        fetchCoupons();
    }, []);

    return (
        <div className="relative z-10" role="dialog" aria-modal="true">
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 max-w-4xl">

                        <div className="relative flex w-full items-center rounded-2xl overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-6 lg:gap-x-8">
                                <div className="sm:col-span-8 lg:col-span-7">

                                    <h2 className="text-5xl font-bold text-gray-900 sm:pr-12">최종 결제</h2>
                                    <section aria-labelledby="options-heading" className="mt-10">
                                        <h3 id="options-heading" className="sr-only">Product options</h3>
                                        <div>
                                            <div className="sm:flex-1 sm:justify-between">
                                                <fieldset>
                                                    <legend className="block mb-3 text-3xl font-bold text-gray-700">할인 선택</legend>
                                                    <div className="mt-1 mb-5 grid gap-4 grid-cols-3 ">
                                                        {coupons.map((coupon) => (
                                                            <div key={coupon.id} className={`relative block cursor-pointer rounded-lg border text-center py-4 hover:border-gray-500 ${seletedCouponId === coupon.id ? 'bg-gray-200' : ''
                                                                }`} onClick={() => handleCouponClick(coupon.id)}>
                                                                <p className="text-2xl font-semibold ">{coupon.name}</p>
                                                                <p className="text-xl font-semibold ">{coupon.id === 'coupon_1' ? `${coupon.price.toLocaleString()}원` : `${coupon.price}%`}</p>
                                                                <div className="pointer-events-none absolute -inset-px rounded-lg" aria-hidden="true"></div>
                                                            </div>
                                                        ))}

                                                        <div key={"notCoupon"} className={`relative block cursor-pointer rounded-lg border text-center py-4 hover:border-gray-500 ${seletedCouponId === "notCoupon" ? 'bg-gray-200' : ''
                                                            }`} onClick={() => handleCouponClick("notCoupon")}>
                                                            <p className="text-2xl font-semibold">선택 안함</p>
                                                            <p className="text-xl font-semibold">0원</p>
                                                            <div className="pointer-events-none absolute -inset-px rounded-lg" aria-hidden="true"></div>
                                                        </div>
                                                    </div>
                                                </fieldset>

                                                <fieldset>
                                                    <legend className="block mb-5 text-3xl font-bold text-gray-700">결제 금액</legend>
                                                    <div className="mt-1 mb-5 grid gap-4 grid-rows-2">
                                                        <div className="relative grid grid-cols-2 gap-4 items-center">
                                                            <p className="text-xl font-semibold">구매 금액</p>
                                                            <p className="text-xl font-semibold text-right">{totalPrice.toLocaleString()}원</p>
                                                        </div>
                                                        <div className="relative grid grid-cols-2 gap-4 items-center">
                                                            <p className="text-xl font-semibold">할인 금액</p>
                                                            <p className="text-xl font-semibold text-right">- {discountPrice.toLocaleString()}원</p>
                                                        </div>
                                                    </div>

                                                    <div className="border-t-2 mt-1 mb-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                        <div className="relative block cursor-pointer text-start py-4">
                                                            <p className="text-4xl font-semibold">최종 결제 금액</p>
                                                        </div>
                                                        <div className="relative block cursor-pointer text-start py-4">
                                                            <p className="text-3xl font-semibold text-right">{(totalPrice - discountPrice).toLocaleString()}원</p>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>

                                            {/* Pay Button */}
                                            <div className="pt-6 flex justify-between border-t-2">
                                                <button onClick={handleModal} className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 m-3 text-lg font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">취소</button>
                                                <button onClick={handleReciptModal}
                                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 m-3 text-lg font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">결제</button>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {reciptModal && (
                <Recipt />
            )}
        </div>
    );
}