import DeleteItem from "./DeleteItem";
import  { formatCurrency }  from "../../utilites/helpers";
import { useSelector } from 'react-redux';
import { getTotalCartPrice  } from "./cartSlice";


function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <li className="py-3 sm:flex sm:justify-between sm:items-center">
      <p className="mb-1 sm:mb-0 ">
        {quantity}&times; {name}
      </p>
      <div className='flex items-center  justify-between  sm:gap-6'>
        <p className="font-bold text-sm">{formatCurrency(totalCartPrice)}</p>
        <DeleteItem  pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
