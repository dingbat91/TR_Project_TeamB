import { useNavigate } from "react-router-dom";
import { SearchDetailsProvider } from "../../search_context";
import Search from "../Search/search";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex w-screen h-12 my-4">
      <div className="flex-1 flex justify-center mr-auto">
        <button
          className="mx-2"
          onClick={() => {
            navigate("/");
          }}
        >
          Logo
        </button>
      </div>

      <div className="flex-1 flex justify-center">
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
