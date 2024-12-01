import  dishesData  from "../../data/dataDishes";


const CartItem = ({ cartItem }) => {
    console.log(cartItem)
    const dishes = dishesData.find(item => item.id === cartItem.dishId);
   

    return (<div>
        <p>{dishes.name}</p>
        <p>{cartItem.quantity} portion(s)</p>
    </div>)
}
export default CartItem;