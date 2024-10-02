import   { formatCurrency } from '../../utilites/helpers';
import Button from '../../ui/Button';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className='flex gap-4 py-2'>
      <img src={imageUrl} alt={name} className={` 'h-24' ${soldOut ? 'grayscale opacity-70' : ''}`}
      />
      <div className='flex flex-col grow'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm italic capitalize text-stone-500'  >{ingredients.join(', ')}</p>
        <div className='mt-auto items-center justify-between flex pt-0.5'>
          {!soldOut ? <p className='text-sm'>{formatCurrency(unitPrice)}</p> 
          : <p className='text-sm uppercase text-stone-500 text-medium'>Sold out</p>}
          <Button type='small'>Add To Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
