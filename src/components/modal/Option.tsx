import React from 'react';

export default function Option() {
    return (
<div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
    <div className="py-4 text-left px-6 bg-white rounded-xl shadow-lg w-2/5 h-3/4 flex flex-col justify-between">
        <div>
            <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">옵션 선택</p>
            </div>
            
            <div className="">
                <p>Modal content can go here</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
            </div>
        </div>
        
        <div className="mt-auto flex justify-end">
            <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">취소</button>
            <button className="px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">완료</button>
        </div>
    </div>
</div>


    );
}
