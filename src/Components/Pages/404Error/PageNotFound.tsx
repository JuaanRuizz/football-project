import React from 'react'
import './PageNotFoundCSS.css'
import Error from '../../../Assets/404error.jpg'

const PageNotFound: React.FC = () => {
  return (
    <div className='not-found-container'>
      <img src={Error} alt="Error404" />
    </div>
  )
}

export default PageNotFound
