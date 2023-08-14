import React,{useState} from 'react';
import Option from '../components/modal/Option';

export default function Pay() {
    const [openModal,setOpenModal] = useState<boolean>(false);

    return (
        <div>
            <button onClick={() => setOpenModal(!openModal)}>hello</button>
            {openModal && <Option />}
        </div>
    );
}

