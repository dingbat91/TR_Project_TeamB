import React from "react";

interface AddToWatchlistProps {
  onClickHandler: () => void;
  isAdded?: boolean;
}

const AddToWatchlist: React.FC<AddToWatchlistProps> = ({
  onClickHandler,
  isAdded,
}) => {
  return (
    <>
      <button onClick={onClickHandler}>
        {isAdded ? "Watchlisted" : "Add To WatchList"}
      </button>
    </>
  );
};

export default AddToWatchlist;
