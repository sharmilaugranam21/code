import React from 'react'

export default function UseInfo(props) {
    console.log("props in userinfo",props);
    const {userData: {fullName}} = props;
  return (
    <div>Full Name is {fullName}</div>
  )
}
