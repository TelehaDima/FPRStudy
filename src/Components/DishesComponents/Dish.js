import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";



const Dish = ({ dish }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    return (<div>
        <img src={`./${dish.img}.jpg`} alt="pict" />

        <div className="containerDish">
        <h2>{dish.name}</h2>
        </div>     

        <div className="containerDish">
        <p>${dish.price}</p>
        </div>

        <div>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
        </div>  
        <div className="buttoncontainer">
        <button onClick={() => {
                dispatch(addItemToCart({ dish, quantity }));
            }} className="addbutton">Add to cart</button>
        </div>
        
    </div>
    );
}
export default Dish;