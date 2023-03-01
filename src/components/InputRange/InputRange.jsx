import { useState } from 'react';
import './InputRange.scss';

export default function InputRange({type, setVal}){

    const [value, setValue] = useState(100);
    
    return(
        <div className="inputRange">
            <div className="row">
                <p>{type}</p>
                <p>{value} GB</p>
            </div>
            <input type="range" defaultValue={100} min={0} max={1000} step={1} onChange={({target}) => {setValue(target.value); setVal(target.value)}} />
        </div>
    )
}