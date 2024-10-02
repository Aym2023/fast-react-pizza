import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/userName";

function Header() {
    return (
        <header className=" flex justify-between border-b border-stone-200 px-4 py-3  bg-pizza uppercase sm:px-6n  text-sm"  
         >
            <Link to='/' className="tracking-widest" >fast react pizza Co.</Link>

            <SearchOrder />
            <UserName />
            </header>

    );
}

export default Header;

