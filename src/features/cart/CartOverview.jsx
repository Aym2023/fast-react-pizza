import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartQuantitiy, getCartPrice  } from "./cartSlice";
import { formatCurrency } from '../../utilites/helpers';

function CartOverview() {
  const totlCartQuantitiy = useSelector(getCartQuantitiy);

  const totlCartPrice = useSelector(getCartPrice);

  if(!totlCartQuantitiy) return null;

  return (
    <div className= " flex items-center justify-between bg-stone-800 text-stone-200 uppercase text-sm px-4 py-4 sm:p-6  md:text -base">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6 ">"
        <span>{totlCartQuantitiy} pizzas</span>
        <span>{formatCurrency(totlCartPrice)}</span>
      </p>
      <Link to="/cart" >Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
