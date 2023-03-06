import { useState } from 'react';

export default function useIncrement (step){
    const [count, setCount] = useState(0);
    const increment=()=>{
        const newCount = count + step;
        return setCount(newCount);
    }
    return [count, increment];
}