import   { formatCurrency } from '../../utilites/helpers';
import Button from '../../ui/Button';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handelAddCart () {
        const newitem = {
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totlaPrice: unitPrice * 1,
           };

           dispatch(addItem(newitem));
  }

  return (
    <li className='flex gap-4 py-2'>
      <img src={imageUrl} alt={name} className={` h-24 ${soldOut ? 'grayscale opacity-70' : ''}`}
      />
      <div className='flex flex-col grow'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm italic capitalize text-stone-500'  >{ingredients.join(', ')}</p>
        <div className='mt-auto items-center justify-between flex pt-0.5'>
          {!soldOut ? <p className='text-sm'>{formatCurrency(unitPrice)}</p> 
          : <p className='text-sm uppercase text-stone-500 text-medium'>Sold out</p>}
         {isInCart && (
          <div className='flex gap-3 sm:gap-4 items-center'>
          <UpdateItemQuantity pizzaId={id} currentItemQuantity={currentQuantity}/>
          <DeleteItem pizzaId={id}/>
          </div>
          )}

          {!soldOut && !isInCart && (
            <Button type='small' onClick={handelAddCart}>Add To Cart</Button>
            )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
