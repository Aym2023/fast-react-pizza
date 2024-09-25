import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/userName";

function Header() {
    return (
        <header className="border-b border-stone-200 px-4 py-3  bg-yellow-500 uppercase sm:px-6"  >
            <Link to='/' className="tracking-widest" >fast react pizza Co.</Link>

            <SearchOrder />
            <UserName />
            </header>

    );
}

export default Header;

