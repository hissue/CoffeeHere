import React from 'react';

export default function Recipt() {
    return (
        <div>
            <header>
                <div className="cust-num">
                    <svg height="42" width="42" viewBox="0 0 64 64">
                        <path className="path1" fill="rgb(0, 157, 223)" d="M58.125 19.288c-2.987 13.262-12.212 20.262-26.75 20.262h-4.837l-3.363 21.35h-4.050l-0.212 1.375c-0.137 0.913 0.563 1.725 1.475 1.725h10.35c1.225 0 2.263-0.888 2.462-2.1l0.1-0.525 1.95-12.362 0.125-0.675c0.188-1.212 1.237-2.1 2.462-2.1h1.538c10.025 0 17.875-4.075 20.175-15.85 0.862-4.475 0.538-8.275-1.425-11.1z"></path>
                        <path fill="rgb(0, 46, 135)" className="path2" d="M51.938 4.825c-2.962-3.375-8.325-4.825-15.175-4.825h-19.887c-1.4 0-2.6 1.012-2.813 2.4l-8.287 52.525c-0.162 1.038 0.638 1.975 1.688 1.975h12.287l3.087-19.563-0.1 0.612c0.212-1.388 1.4-2.4 2.8-2.4h5.837c11.462 0 20.438-4.65 23.063-18.125 0.075-0.4 0.15-0.788 0.2-1.163 0.775-4.975 0-8.375-2.7-11.438z"></path>
                    </svg>
                    <p>24.04.2016of-113</p>
                </div>

                <div className="cust-info">
                    <h3>Hi, John</h3>
                    <p>You've purchased (3) items in our store</p>
                </div>

            </header>

            <main>
                <h3 className="center">Cart :</h3>
                <ul>
                    <li><i>1</i> t-Shirt Locaste <span>$48.00</span></li>
                    <li><i>2</i> Sikers Nike <span>$124.00</span></li>
                    <li><i>3</i> All stars <span>$59.00</span></li>
                </ul>
                <div className="total">
                    <p>Total <span>$231.00</span></p>
                </div>
            </main>

            <footer>
                <svg x="0px" y="0px" viewBox="0 0 1001.8 261" xmlSpace="preserve">
                    <rect x="0.2" y="1" className="st0" width="30.8" height="216.7" />
                    <rect x="93.8" y="1" className="st0" width="31.3" height="216.7" />
                    <rect x="156.3" y="1" className="st0" width="31.3" height="216.7" />
                    <rect x="250" y="1" className="st0" width="31.3" height="216.7" />
                    <rect x="375" y="1" className="st0" width="31.3" height="216.7" />
                    <rect x="468.8" y="1" className="st0" width="31.3" height="216.7" />
                    <rect x="312.5" y="1" className="st0" width="15.6" height="216.7" />
                    <rect x="218.8" y="1" className="st0" width="15.6" height="216.7" />
                    <rect x="421.9" y="1" className="st0" width="15.6" height="216.7" />
                    <rect y="239.3" className="st0" width="31.3" height="21.7" />
                    <rect x="93.8" y="239.3" className="st0" width="31.3" height="21.7" />
                    <rect x="156.3" y="239.3" className="st0" width="31.3" height="21.7" />
                    <rect x="312.5" y="239.3" className="st0" width="31.3" height="21.7" />
                    <rect x="468.8" y="239.3" className="st0" width="31.3" height="21.7" />
                    <rect x="375" y="239.3" className="st0" width="62.5" height="21.7" />
                    <rect x="218.8" y="239.3" className="st0" width="62.5" height="21.7" />
                    <path className="st0" d="M524.1,0h40.1v217.5h-40.1V0z M595.5,0h31.3v217.5h-31.3V0z M658,0h31.3v217.5H658V0z M751.8,0H783v217.5h-31.3
	V0z M876.8,0H908v217.5h-31.3V0z M970.5,0h31.3v217.5h-31.3V0z M814.3,0h15.6v217.5h-15.6V0z M720.5,0h15.6v217.5h-15.6V0z M923.6,0
	h15.6v217.5h-15.6V0z M529.8,239.3H561V261h-31.3V239.3z M595.5,239.3h31.3V261h-31.3V239.3z M658,239.3h31.3V261H658V239.3z
	 M814.3,239.3h31.3V261h-31.3V239.3z M970.5,239.3h31.3V261h-31.3V239.3z M876.8,239.3h62.5V261h-62.5V239.3z M720.5,239.3H783V261
	h-62.5V239.3z"/>
                    <rect x="33.9" y="0.4" className="st0" width="8.8" height="216.7" />
                    <rect x="74.3" y="2" className="st0" width="14.4" height="216.7" />
                    <rect x="47" y="1.4" className="st0" width="10.3" height="216.7" />
                </svg>

            </footer>
        </div>
    );
}

