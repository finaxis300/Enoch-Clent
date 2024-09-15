import React from "react";
import Header from "../onBoard/header";
import GamesListSection from "./GamesListSection";
import MainTabList from "./MainTabList";
import MoreGames from "./MoreGames";
import TermsLink from "./TermsLink";
import TopBanner from "./TopBanner";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";
import HeaderBanner from "./Keno/HeaderBanner";
import JackpotPrizeBanner from "./Keno/JackpotPrizeBanner";
import GamesSection from "./Keno/GamesSection";
import KenoTabList from "./Keno/KenoTabList";
import TournamentBlock from "./Keno/Tournament/TournamentBlock";
import { current_keno_tab } from "../../state/action-creators";
import WinnersBlock from "./Keno/Winners/WinnersBlock";
import ResultBlock from "./Keno/Result/ResultBlock";
import InfoBlock from "./Keno/Information/InfoBlock";

const HomePage = () => {
  const dispatch = useDispatch();
  const { current_entertainment_tab, current_entertainment_popular_tab } =
    bindActionCreators(actionCreators, dispatch);

  const current_entertainment_tab_value = useSelector(
    (state: State) => state.current_entertainment_tab
  );

  const current_entertainment_popular_tab_value = useSelector(
    (state: State) => state.current_entertainment_popular_tab
  );

  const current_keno_tab_value = useSelector(
    (state: State) => state.currentKenoTab
  );

  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <div className="row">
        <div className="ezl-dashboard-container">
          {current_entertainment_popular_tab_value === "bonuses" ? (
            <>
              <TopBanner />
              <MainTabList />
              <GamesListSection />
              <MoreGames />
              <TermsLink />{" "}
            </>
          ) : current_entertainment_popular_tab_value === "keno" ? (
            <>
              <HeaderBanner />
              <MainTabList />
              <div className="entertainment-Keno-contemt">
                <JackpotPrizeBanner />
                <GamesSection />
                <div className="Keno-Tabs-section">
                  <KenoTabList />
                  {current_keno_tab_value === "tournament" ? (
                    <TournamentBlock />
                  ) : current_keno_tab_value === "winners" ? (
                    <WinnersBlock />
                  ) : current_keno_tab_value === "result" ? (
                    <ResultBlock />
                  ) : (
                    <InfoBlock />
                  )}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
