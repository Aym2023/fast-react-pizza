import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function OrderUdate () {
    const fetcher = useFetcher()

return (
    <fetcher.Form  method='PATCH'
    className='text-right'>
    <Button type='primary' >Make Priority</Button>
    </fetcher.Form>
) 
};

export default OrderUdate;

export async function action ({ request, params}) {
    const data = { priority: true};
    updateOrder(params.orderId, data);
return null;
}