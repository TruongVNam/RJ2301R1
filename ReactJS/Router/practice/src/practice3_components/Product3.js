import { useParams } from "react-router-dom"

const Product3=()=>{
    let {categoryId}= useParams();
    return (
        <div>
            <h3>ID select {categoryId}</h3>
        </div>
    )
};

export default Product3;