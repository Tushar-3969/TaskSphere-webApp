import React from "react";
import { useState } from "react";
import { watchlist } from "../data/data";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchListActions(true);
  };

  const handleMouseExit = () => {
    setShowWatchListActions(false);
  };

  const handleBuyClick = (stockName) => {
    alert(`Buy order placed for ${stockName}!`);
    // You can add more functionality here like opening a buy modal, API calls, etc.
  };

  const handleSellClick = (stockName) => {
    alert(`Sell order placed for ${stockName}!`);
    // You can add more functionality here like opening a sell modal, API calls, etc.
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfos">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <i class="fa-solid fa-angle-down"></i>
          ) : (
            <i class="fa-solid fa-angle-up"></i>
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListAction uid={stock.name} onBuyClick={handleBuyClick} onSellClick={handleSellClick} />}
    </li>
  );
};

const WatchListAction = ({ uid, onBuyClick, onSellClick }) => {
  return (
    <div className="action">
      <span>
        <button className="buy" onClick={() => onBuyClick(uid)}>Buy</button>
        <button className="sell" onClick={() => onSellClick(uid)}>Sell</button>
        <button className="icon">
          <i className="fa-solid fa-chart-bar"></i>
        </button>
        <button className="icon">
          <i className="fa-solid fa-ellipsis"></i>
        </button>
      </span>
    </div>
  );
};