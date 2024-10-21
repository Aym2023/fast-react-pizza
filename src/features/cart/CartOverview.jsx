import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartQuantitiy, getTotalCartPrice  } from "./cartSlice";
import { formatCurrency } from '../../utilites/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getCartQuantitiy);

  const totalCartPrice = useSelector(getTotalCartPrice);

  if(!totalCartQuantity) return null;

  return (
    <div className= " flex items-center justify-between bg-stone-800 text-stone-200 uppercase text-sm px-4 py-4 sm:p-6  md:text -base">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6 ">"
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" >Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
