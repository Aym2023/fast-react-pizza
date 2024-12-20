import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from './UpdateItemQuantity';
import  { formatCurrency }  from "../../utilites/helpers";
import { useSelector } from 'react-redux';
import { getTotalCartPrice, getCurrentQuantityById  } from "./cartSlice";


function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const totalCartPrice = useSelector(getTotalCartPrice);

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));


  return (
    <li className="py-3 sm:flex sm:justify-between sm:items-center">
      <p className="mb-1 sm:mb-0 ">
        {quantity}&times; {name}
      </p>
      <div className='flex items-center  justify-between  sm:gap-6'>
        <p className="font-bold text-sm">{formatCurrency(totalCartPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentItemQuantity={currentQuantity}/>
        <DeleteItem  pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
