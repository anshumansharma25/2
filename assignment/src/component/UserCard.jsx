import React from 'react'
import UserDetails from './UserDetails'

export default function UserCard(props) {
  return (
    <div>
      <UserDetails
        name={props.userData.name}
        age={props.userData.age}
        city={props.userData.city}
        email={props.userData.email}
      />
    </div>
  );
}
