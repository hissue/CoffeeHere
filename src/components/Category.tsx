import React from 'react';

export default function Category() {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white m-4">
            <img
                src="https://www.coffeebeankorea.com/data/menu/%EC%B9%B4%ED%91%B8%EC%B9%98%EB%85%B8_1.jpg"
                alt=""
                className="rounded-2xl"
            />

            {/* 상품 이름 */}
            <div className="flex flex-1 flex-col space-y-2 p-4 ">
                <h3 className="text-lg text-gray-900">
                    Americano
                </h3>
            </div>
        </div>
    );
}

