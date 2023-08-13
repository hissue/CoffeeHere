import React from 'react';

export default function Category() {
    return (
        <li className="p-4">
            <a className="" href="">
                <svg viewBox="0 0 100 100">
                    <g transform="translate(10 5) scale(0.8 0.9)">
                        <path d="M 0 30 v 70 h 100 v -70 l -50 -30 z" stroke="currentColor" stroke-width="10" fill="none"
                            stroke-linejoin="round" stroke-linecap="round" />
                    </g>
                </svg>
                <span>
                    Home
                </span>
            </a>
        </li>
    );
}

