// import { useState  } from "react";
import { Form, redirect, useActionData, useNavigation } from  'react-router-dom';
import { useSelector } from "react-redux";
import store from '../../store';
import { getCart, clearItems, getTotalCartPrice } from '../cart/cartSlice';
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import EmptyCart from '../cart/EmptyCart';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


function CreateOrder() {
  const username = useSelector((state) => state.user.username);
  const navigation = useNavigation();
  const isSubmitting = navigation.state ===
  'submitting';

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priority = 0;
  const totalPrice = totalCartPrice + priority;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="py-6 px-4">
      <h2 className="text-xl mb-6 font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col sm:flex-grow  gap-2">
          <label className="sm:basis-10">First Name</label>
          <input 
          type="text"
          name="customer"
          lassName="input"
          defaultValue={username}

          required />
        </div>

        <div className="mb-5 flex flex-col sm:flex-grow  gap-2">
          <label className="sm:basis-10">Phone number</label>
          <div>
            <input type="tel" name="phone" required className="input"/>
          </div>
          {formErrors?.phone && <p className="mt-2 text-red-100 bg-red-700 rounded-md text-sm p-2">{formErrors.phone}</p>}
        </div>

        <div className="mb-5 flex flex-col sm:flex-grow  gap-2">
          <label className="sm:basis-10">Address</label>
          <div>
            <input 
            type="text" 
            name="address"
            required 
            className="input w-full"
             />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400  focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name= 'cart' value={JSON.stringify(cart)} />
          <Button type='primary' disabled={isSubmitting} 
          >
            {isSubmitting ? "Placing Order..."  : `Order Now from ${totalPrice}`}
            </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request}) {
const formData = await request.formData();
const data = Object.fromEntries(formData);

const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
};

const errors = {};
if (!isValidPhone(order.phone))
  errors.phone = 'pls give us your correct phone number. We might need it to contact you';

if (Object.keys(errors).length > 0 ) return errors;


// if every thing is okay,  create new order and new redirect
const newOrder = await createOrder(order);

store.dispatch(clearItems());

return redirect(`/order/${newOrder.id}`);
};

export default CreateOrder;
