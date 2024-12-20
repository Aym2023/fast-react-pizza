// Test ID: IIDSAT
import { useLoaderData, useFetcher} from "react-router-dom";
import { useEffect } from "react";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilites/helpers";
import OrderItem from "./OrderItem";
import OrderUpdate from "./OrderUpdate";


function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(
    function () {
    if (!fetcher.data && fetcher.state === 'idle') 
      fetcher.load('/menu');
   }, 
   [fetcher]
  );

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-6 px-6  space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-xl font-semibold"> order# ${id} Status</h2>

        <div className="space-x-2">
          {priority && <span className="bg-red-500
          text-sm rounded-full px-3 py-1 uppercase font-semibold text-red-50 tracking-wide
          ">Priority</span>}
          <span className="bg-green-500
          text-sm rounded-full px-3 py-1 uppercase font-semibold text-green-50 tracking-wide">{status} order</span>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-2 px-6 py-5 bg-stone-200">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
        <OrderItem 
        item={item} 
        key={item.pizzaId}
        isLoadingIngredients={fetcher.state === 'loading'} 
        ingredients={
          fetcher?.date?.find((el) => el.id === item.pizzaId)?.ingredients ?? []
      }
      />
      ))}
      </ul>

      <div className='px-6 py-5 space-y-2 bg-stone-200
      '>
        <p className='text-sm text-stone-600 font-semibold'>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className='text-sm text-stone-600 font-semibold'>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className='text-sm text-stone-600 font-bold'>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      {!priority && <OrderUpdate order={order} />}
    </div>
  );
}

export async function loader ({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}


export default Order;


