import { useNavigate } from "react-router-dom";
import { SearchDetailsProvider } from "../../search_context";
import Search from "../Search/search";

import logo from "../../assets/images/popcorn-logo.png";
const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex w-screen h-20 my-4">
      <div className="flex-1 flex justify-center items-center mr-auto">
        <img
          onClick={() => {
            navigate("/");
          }}
          alt="Man Eating Popcorn"
          src={logo}
          className="h-20"
        />
        <span className="font-sans font-bold text-xl">Team Popcorn</span>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <SearchDetailsProvider>
          <Search />
        </SearchDetailsProvider>
      </div>

      <div className="flex-1 flex justify-center ml-auto">
        <button
          onClick={() => {
            navigate("/watchlist");
          }}
          className="mx-2"
        >
          My Watchlist
        </button>
      </div>
    </nav>
  );
};

export default Header;
