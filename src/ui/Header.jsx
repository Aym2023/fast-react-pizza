import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/userName";

function Header() {
    return (
        <header className="bg-yellow-500 uppercase">
            <Link to='/' className="tracking-widest" >fast react pizza Co.</Link>

            <SearchOrder />
            <UserName />
            </header>

    );
}

export default Header;

