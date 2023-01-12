import React, {useEffect} from 'react'
// import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Layout from '../../components/globals/layout';
import DashboardComponent from '../../components/Dashboard';
// import { rootStore } from '../../utils/TypeScript'

const Dashboard = () => {
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
          <DashboardComponent />
      </Layout>
  )
}

export default Dashboard;