import React, { useState } from 'react';
import ChoiceCoffee from './components/ChoiceCoffee';
import Button from './components/Button';
import { IoReturnUpBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Pay() {

    return (
        <div className="w-full h-full m-7">
            <div className="mb-6">
                <Link to="/" className="flex items-center sm:text-md lg:text-xl">
                    <IoReturnUpBack className="mr-3 text-3xl" />뒤로
                </Link>
            </div>
            <div className="flex justify-center">
                <div className="w-1/2 ml-8">
                    <div className="text-3xl mb-9">주문 내역</div>
                    <div className="mx-12 m-6 max-h-[70vh] overflow-y-scroll">
                        <ChoiceCoffee />
                        <ChoiceCoffee />
                        <ChoiceCoffee />
                        <ChoiceCoffee />
                        <ChoiceCoffee />
                    </div>
                </div>

                <div className="bg-green-300 w-1/2 flex flex-col justify-between">
                    <div>
                        <div className="text-3xl mb-5">할인 선택</div>
                        <div className="mb-10">
                            <Button text="금액 할인" />
                            <Button text="비율 할인" />
                        </div>
                    </div>
                    <div>
                        <div className="text-3xl mb-5">결제 금액</div>
                        <div className="border-b-2 text-2xl m-5">
                            구매 금액 10000
                        </div>
                        <div className="border-b-2 text-2xl">
                            할인 금액 10000
                        </div>
                        <div className="border-b-2 text-2xl">
                            최종 금액 10000
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <Button text="결제 완료" />
                    </div>
                </div>
            </div>

        </div>
    );
}

