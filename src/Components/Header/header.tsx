import { SearchDetailsProvider } from "../../search_context";
import Search from "../Search/search";

const Header: React.FC = () => {
  return (
    <nav className="flex w-screen h-12 my-4">
      <div className="flex-1 flex justify-center mr-auto">
        <button className="mx-2">Logo</button>
      </div>

      <div className="flex-1 flex justify-center">
        <SearchDetailsProvider>
          <Search />
        </SearchDetailsProvider>
      </div>

      <div className="flex-1 flex justify-center ml-auto">
        <button className="mx-2">My Watchlist</button>
      </div>
    </nav>
  );
};

export default Header;
