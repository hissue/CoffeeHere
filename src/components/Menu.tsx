import React from 'react';
import image from '../assets/image/coffee.jpg';

export default function Menu() {
    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.src = "https://cdn-icons-png.flaticon.com/512/4062/4062340.png";
    };

    return (
        <div className="m-4">
            <div className="relative rounded-2xl border-2 border-yellow-500 shadow-xl bg-white">
                <img
                    src={image}
                    alt="target"
                    onError={handleImgError}
                    className="rounded-3xl p-5"
                />
                <h3 className="text-lg text-gray-900 px-6 pb-4">
                    Coffee Americano
                </h3>
            </div>
        </div>
    );
}
