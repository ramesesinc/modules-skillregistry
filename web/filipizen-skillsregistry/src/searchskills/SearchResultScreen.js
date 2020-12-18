import React, { useState, useEffect } from 'react'
import {
  Title,
  Button,
  ActionBar,
  BackLink,
  useData,
  Text,
  Card,
  Service
} from 'rsi-react-web-components'

import styles from "./SearchResultScreen.css";
import lgulogo from "/img/logo.png";
import Profile from "./components/Profile";

const svc = Service.lookup("JobSearchService", "skills");

const initialSearchResults = [
  {
    name: "JASON",
    jobtitle: "MASON",
    experience: "5 years",
  },
  {
    name: "JUAN",
    jobtitle: "PROGRAMMER",
    experience: "2 years",
  },
  {
    name: "PETERSON",
    jobtitle: "ENGINEER",
    experience: "5 years",
  },
  {
    name: "SHARON",
    jobtitle: "WAITRESS",
    experience: "1 years",
  },
];

const initialJobTitles = [
  {title: "PROGRAMMER", count: 2},
  {title: "CASHIER", count: 5},
  {title: "DRIVER", count: 10},
]

const SearchResultScreen = ({
  searchText
}) => {

  const [error, setError] = useState();
  const [searchResults, setSearchResults] = useState(initialSearchResults);
  const [jobTitles, setJobTitles] = useState(initialJobTitles);

  return (
    <div className={styles.searchResult}>
      <div className={styles.SearchResultScreen__search}>
        <img src={lgulogo} alt="lgu logo" className={styles.SearchResultScreen__img} />
        <input type="text" className={styles.SearchResultScreen__input} placeholder=" Search.. " />
        <button type="button" className={`${styles.btn} ${styles.gradientBlue} ${styles.small}`} onClick={() => setMode("search")}><span aria-hidden="true"></span>Find Profile</button>
      </div>
      <p className={styles.SearchResultScreen__p}>4 profile results</p>
      <div className={styles.SearchResultScreen__result}>
        <div className={styles.SearchResultScreen__SearchFilter}>
          <p>Searched: <i>{searchText}</i></p>
          <p> Sorted by: <br /><span><b>Surname</b> - Alphabetically</span></p>
          <p><strong>Job Titles</strong></p>
          <div className={styles.SearchResultScreen__JobTitles}>
            {jobTitles.map( jobTitle => (
              <p><a href="#">{jobTitle.title}</a><span>({jobTitle.count})</span></p>
            ))}
          </div>
        </div>
        <div className={styles.SearchResultScreen__ProfileResult}>
          { searchResults.map(result =>  <Profile {...result} /> )}
        </div>
      </div>
    </div>
  )
}

export default SearchResultScreen
