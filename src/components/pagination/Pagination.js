import React, { useState } from 'react'
import { Pagination } from 'semantic-ui-react'

export default function PaginationCard ({ setActivepage, handlerPage }) {
  const [ page, setPage ] = useState(1)
  const handlePaginationChange = (e, { activePage }) => setPage({ activePage })

  const {activePage} = page

    return (
        <Pagination
          activePage={activePage}
          siblingRange={1}
          totalPages={10}
          onPageChange={handlePaginationChange}
          onClick={ (e) => {setActivepage(activePage);handlerPage() } }
    
        />
    )
}