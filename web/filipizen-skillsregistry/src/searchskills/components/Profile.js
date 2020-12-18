import React from 'react'
import styles from './Profile.css'

const Profile = ({
  name,
  jobtitle,
  experience
}) => {
  return (
    <div className={styles.SearchResultScreen__Profile}>
      <p>{name}</p>
      <p>{jobtitle}</p>
      <p>{experience}</p>
      <p>
        <a href='#'>Request Profile</a>
      </p>
    </div>
  )
}

export default Profile
