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

import styles from "./SearchResultScreen.css";
import lgulogo from "/img/logo.png"


const SearchResultScreen = ({
  title,
  partner,
  moveNextStep,
  movePrevStep,
}) => {

  return (
    <div className={styles.SearchResultScreen}>
      <div className={styles.SearchResultScreen__search}>
        <img src={lgulogo} alt="lgu logo" className={styles.SearchResultScreen__search__img} />
        <input type="text" className={styles.SearchResultScreen__search__input} placeholder=" Search.. " />
        <button type="button" className={styles.SearchResultScreen__search__button} onClick={() => setMode("search")}><span aria-hidden="true"></span>Find Profile</button>
      </div>
      <p className={styles.SearchResultScreen__p}>4 profile results</p>
      <div className={styles.SearchResultScreen__result}>
        <div className={styles.SearchResultScreen__result__SearchFilter}>
          <p>Searched: <i>Mason</i></p>
          <p> Sorted by: <br /><span><b>Surname</b> - Alphabetically</span></p>
          <p><strong>Job Titles</strong></p>
          <div className={styles.SearchResultScreen__result__SearchFilter__JobTitles}>
            <p><a href="#">PROGRAMMER</a><span>(2)</span></p>
            <p><a href="#">CASHIER</a><span>(12)</span></p>
            <p><a href="#">DRIVER</a><span>(21)</span></p>
          </div>
        </div>

        <div className={styles.SearchResultScreen__result__ProfileResult}>
          <div className={styles.SearchResultScreen__result__ProfileResult__Profile}>
            <p>Canonoy, Jason Delle</p>
            <p>Mason</p>
            <p>Work Experience: 5 years</p>
            <p><a href="#">Request Profile</a></p>
          </div>
          <div className={styles.SearchResultScreen__result__ProfileResult__Profile}>
            <p>Canonoy, Jason Delle</p>
            <p>Mason</p>
            <p>Work Experience: 5 years</p>
            <p><a href="#">Request Profile</a></p>
          </div>
          <div className={styles.SearchResultScreen__result__ProfileResult__Profile}>
            <p>Canonoy, Jason Delle</p>
            <p>Mason</p>
            <p>Work Experience: 5 years</p>
            <p><a href="#">Request Profile</a></p>
          </div>
          <div className={styles.SearchResultScreen__result__ProfileResult__Profile}>
            <p>Canonoy, Jason Delle</p>
            <p>Mason</p>
            <p>Work Experience: 5 years</p>
            <p><a href="#">Request Profile</a></p>
          </div>
        </div>


      </div>

    </div>
  )
}

export default SearchResultScreen
