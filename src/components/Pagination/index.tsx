import React, {FC, useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate';


interface Iprop {
    users: any
}


const Users: FC<Iprop> = ({users}) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffSet, setItemOffSet] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
        const endOffset = itemOffSet + itemsPerPage;
        setCurrentItems(users.slice(itemOffSet, endOffset))
        setPageCount(Math.ceil(users.length / itemsPerPage))

    }, [itemOffSet, itemsPerPage, users])

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % users.length;
    }
  return (
    <div>
       
    </div>
  )
}

export default  Users