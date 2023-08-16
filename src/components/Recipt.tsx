import { cartState, totalPriceSelector, discountPriceState } from '../recoil/atom';
import { useRecoilValue } from 'recoil';

export default function Recipt() {
    const cart = useRecoilValue(cartState);
    const discountPrice = useRecoilValue(discountPriceState);
    const totalPrice = useRecoilValue(totalPriceSelector);

    return (
        <div className="relative z-10" role="dialog" aria-modal="true">
            <div className="fixed inset-0 hidden bg-gray-500 md:block"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-3xl">

                        <div className="relative flex w-full items-center rounded-2xl overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                            <div className="grid w-full grid-cols-1 items-start gap-x-3 gap-y-8 sm:grid-cols-6 lg:gap-x-8">
                                <div className="sm:col-span-8 lg:col-span-7">

                                    <h2 className="text-5xl font-bold text-gray-900 sm:pr-12">영수증</h2>
                                    <section aria-labelledby="options-heading" className="mt-10">
                                        <h3 id="options-heading" className="sr-only">Product options</h3>
                                        <div>
                                            <div className="sm:flex-1 sm:justify-between">
                                                <fieldset>
                                                    {cart.map((product, index) => (
                                                        <div key={`product_${product.name}_${index}`} className="mt-1 mb-5 grid gap-4 grid-rows-2">
                                                            <div className="relative grid grid-cols-3 gap-4 items-center">
                                                                <p className="text-xl font-semibold">{product.name}</p>
                                                                <p className="text-xl font-semibold text-center">수량 : {product.quantity}</p>
                                                                <p className="text-xl text-right">{product.price * product.quantity} 원</p>
                                                            </div>
                                                            {product.option?.map((option, index) => (
                                                                <div key={`option_${option.name}_${index}`} className="relative grid grid-cols-2 gap-4 items-center">
                                                                    <p className="text-xl ">{option.name}</p>
                                                                    <p className="text-xl text-right">
                                                                        {option.price !== undefined ? option.price * product.quantity : 0}원
                                                                    </p>
                                                                </div>
                                                            ))}

                                                            <div className="relative grid grid-cols-2 gap-4 items-center">
                                                                <p className="text-xl " />
                                                                <p className="text-xl font-semibold text-right">총 {product.subTotal}원</p>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    <div className="border-t-2 mt-1 mb-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                        <div className="relative block cursor-pointer text-start py-4">
                                                            <p className="text-2xl font-semibold ">금액 할인</p>
                                                        </div>
                                                        <div className="relative block cursor-pointer text-start py-4">
                                                            <p className="text-2xl font-semibold text-right">- {discountPrice}원</p>
                                                        </div>
                                                    </div>
                                                    <div className="border-t-2 mt-1 mb-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                        <div className="relative block cursor-pointer text-start py-4">
                                                            <p className="text-3xl font-semibold">합계</p>
                                                        </div>
                                                        <div className="relative block cursor-pointer text-start py-4">
                                                            <p className="text-3xl font-semibold text-right">{totalPrice - discountPrice}원</p>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>

                                            <div className="pt-6 flex justify-between border-t-2">
                                                <button onClick={() => window.location.reload()}
                                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 m-3 text-lg font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">확인</button>
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

