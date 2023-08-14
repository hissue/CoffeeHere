import React from 'react';

type TextProps = {
    text: string;
}

const Button: React.FC<TextProps> = ({ text }) => {
    return (
        <button>
            <span className="m-3 inline-flex items-center rounded-2xl shadow-md bg-gray-50 px-10 py-1 text-lg font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{text}</span>
        </button>
    );
}

export default Button;