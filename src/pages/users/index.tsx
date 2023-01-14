import React, {useEffect} from 'react'
// import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Layout from '../../components/globals/layout';
import UsersComponent from '../../components/UsersComponent';
// import { rootStore } from '../../utils/TypeScript'

const Users = () => {
//   const {auth} = useSelector((state: rootStore) => state)
//   const history = useHistory()

//   useEffect(() => {
//     if(!auth.data?.token) history.push('/')
//   },[auth.data?.token, history])

  // useEffect(() => {
  //   if(!auth.access_token) history.push('/')
  // },[auth.access_token, history])
  return (
      <Layout sidebar>
          <UsersComponent />
      </Layout>
  )
}

export default Users;