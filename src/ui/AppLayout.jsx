import Header from "./Header";
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function Applayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === 'Loading';
    return (
        <div className="layout">
            <Header />
            {isLoading && <Loader />}

            <main>
              <Outlet />  
            </main>

            <CartOverview />
            </div>
    );
}

export default Applayout;
