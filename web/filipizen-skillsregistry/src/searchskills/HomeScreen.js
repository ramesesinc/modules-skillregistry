import React, { useState } from 'react'
import {
  Title,
  Button,
  ActionBar,
  BackLink,
  useData,
  Text,
  Card
} from 'rsi-react-web-components'
import "rsi-react-web-components/dist/index.css";

import styles from "./HomeScreen.css";

import SearchResultScreen from "./SearchResultScreen";
import lgulogo from "/img/logo.png"


const HomeScreen = ({
  title,
  partner,
  moveNextStep,
  movePrevStep,
}) => {

  const [mode, setMode] = useState("init");
  const [searchText, setSearchText] = useState();

  const [ctx, dispatch] = useData();
  const { txntype } = ctx;

  if (mode === "search") {
    return <SearchResultScreen searchText={searchText}/>
  }


  return (
    <div className={styles.HomeScreen}>
      <div className={styles.HomeScreen__img}>
        <img src={lgulogo} alt="lgu logo"  />
      </div>
      <div className={styles.HomeScreen__searchbar} >
        <input type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className={styles.HomeScreen__input}
          placeholder=" job title, course, skill or training "
        />
        <button type="button"  className={`${styles.btn} ${styles.gradientBlue}` } onClick={() => setMode("search")}><span aria-hidden="true"></span>Find Profile</button>
      </div>
    </div>
  )
}

export default HomeScreen
