import React from 'react'
import './PageNotFoundCSS.css'
import Error from '../../../Assets/404error.jpg'
import BurguerMenu from '../../Menu/Burguer_Menu'

const PageNotFound: React.FC = () => {
  return (
    <div className='not-found-container'>
      <div>
        <BurguerMenu></BurguerMenu>
      </div>
      <div className='img-error-container'>
        <img className='Error404' src={Error} alt="Error404" />
      </div>
    </div>
  )
}

export default PageNotFound
