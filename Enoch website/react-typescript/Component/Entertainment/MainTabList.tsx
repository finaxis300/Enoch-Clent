import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";

const MainTabList = () => {
  const dispatch = useDispatch();
  const { current_entertainment_tab, current_entertainment_popular_tab } =
    bindActionCreators(actionCreators, dispatch);
  const current_entertainment_tab_value = useSelector(
    (state: State) => state.current_entertainment_tab
  );

  const current_entertainment_popular_tab_value = useSelector(
    (state: State) => state.current_entertainment_popular_tab
  );

  const stateObj = useSelector((state: State) => state);

  const changeTab = (tabName: string) => {
    console.log("clicked");
    current_entertainment_popular_tab(tabName);
  };

  console.log(stateObj);
  return (
    <div className="entertainment-tag-block">
      <div className="entertainment-tag-line1 flex-row-reverse">
        <div className="entertainment-tag-search">
          <span>
            <img
              src="/images/tagsearch.png"
              className="img-fluid"
              alt="search"
            />
          </span>
          <input type="text" placeholder="Search for the games" />
        </div>
        <ul>
          <li className="tag-active1">Popular</li>
          <li>Keno</li>
          <li>Slots</li>
          <li>Live Casino</li>
          <li>Lottery</li>
          <li>Roulette</li>
          <li>Promotions</li>
        </ul>
      </div>
      <div className="entertainment-tag-line2">
        {current_entertainment_tab_value === "popular" ? (
          <ul>
            <li
              onClick={() => changeTab("bonuses")}
              className={
                current_entertainment_popular_tab_value === "bonuses"
                  ? "tag-active2"
                  : ""
              }
            >
              Bonuses
            </li>
            <li
              className={
                current_entertainment_popular_tab_value === "keno"
                  ? "tag-active2"
                  : ""
              }
              onClick={() => changeTab("keno")}
            >
              Keno
            </li>
            <li
              className={
                current_entertainment_popular_tab_value === "poker"
                  ? "tag-active2"
                  : ""
              }
              onClick={() => changeTab("poker")}
            >
              Poker
            </li>
            <li
              className={
                current_entertainment_popular_tab_value === "roulette"
                  ? "tag-active2"
                  : ""
              }
              onClick={() => changeTab("roulette")}
            >
              Roulette
            </li>
            <li
              className={
                current_entertainment_popular_tab_value === "blackjack"
                  ? "tag-active2"
                  : ""
              }
              onClick={() => changeTab("blackjack")}
            >
              Blackjack
            </li>
            <li
              className={
                current_entertainment_popular_tab_value === "joker_poker"
                  ? "tag-active2"
                  : ""
              }
              onClick={() => changeTab("joker_poker")}
            >
              Joker Poker
            </li>
            <li
              className={
                current_entertainment_popular_tab_value === "slots"
                  ? "tag-active2"
                  : ""
              }
              onClick={() => changeTab("slots")}
            >
              Slots
            </li>
            <li
              className={
                current_entertainment_popular_tab_value === "baccarat"
                  ? "tag-active2"
                  : ""
              }
              onClick={() => changeTab("baccarat")}
            >
              Baccarat
            </li>
            <li
              className={
                current_entertainment_popular_tab_value === "blackjack_gold"
                  ? "tag-active2"
                  : ""
              }
              onClick={() => changeTab("blackjack_gold")}
            >
              Blackjack Gold
            </li>
            <li
              className={
                current_entertainment_popular_tab_value === "jackpot"
                  ? "tag-active2"
                  : ""
              }
              onClick={() => changeTab("jackpot")}
            >
              Jackpot
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MainTabList;
