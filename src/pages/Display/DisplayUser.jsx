import React,{useEffect} from 'react'
import { connect } from 'react-redux'
const DisplayUser = ({getUsers:{name,email,address}}) => {


  return (
    <>
           <h1>{name}</h1>
           <h2>{email}</h2>
           <h2>{address}</h2>
    </>
  )
}

const mapStateToProps = state =>({
  getUsers: state.signIn.users
})

export default connect(mapStateToProps,null) (DisplayUser)