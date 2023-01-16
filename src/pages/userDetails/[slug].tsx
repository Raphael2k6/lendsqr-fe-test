import React, {useState, useEffect} from 'react'
import { IParams } from '../../utils/typescript';
import { useParams } from "react-router-dom";
import { getAPI } from '../../utils/Axios';
import Layout from '../../components/globals/layout';
import UserDetailsComponent from '../../components/UserDetailsComponent';
import Loader from '../../components/globals/loader/loader';

const UserDetails = () => {
    const id = useParams<IParams>().slug;
    const [userDetails, setUserDetails] = useState<any>();
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      if (!id) return;
      setLoading(true);
      getAPI(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`).then((res) => {
        setUserDetails(res.data);
        setLoading(false);
      }).catch((err) => {
          console.log(err)
          setLoading(false)
      })
      return () => setUserDetails(undefined)
    }, [id]);

    if(loading) return <Loader/>
    return (
      <Layout sidebar>
        {userDetails && <UserDetailsComponent userDetails={userDetails} id={id} />}
      </Layout>
    );
  };
  

export default UserDetails