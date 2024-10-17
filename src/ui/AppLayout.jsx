import Header from "./Header";
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === 'loading';
    return (
        <div className="grid h-screen  grid-rows-[auto_1Fr_auto]" >
            {isLoading && <Loader />}
            {/* {true && <Loader />} */}
            <Header />
           <div className="overflow-scroll">
           <main className="overflow-scroll max-w-3xl  mx-auto">
              <Outlet />  
            </main>

           </div>

            <CartOverview />
            </div>
    );
}

export default AppLayout;
