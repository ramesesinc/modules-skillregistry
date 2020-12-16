import React from 'react'
import styles from './Profile.css'

const Profile = ({
  name,
  jobtitle,
  workexperience
}) => {
  return (
    <div >
      <p>{name}</p>
      <p>{jobtitle}</p>
      <p>{workexperience}</p>
      <p>
        <a href='#'>Request Profile</a>
      </p>
    </div>
  )
}

export default Profile
