import React from 'react'
import beef from '../../images/card-images/beef.png'

const MenuCard = () => {
  return (
    <div className="card-hover overflow-hidden bg-white hover:bg-orange hover:text-white shadow-xl transition-all ease-linear duration-150 rounded-sm text-center grid justify-center">
      <h4 className="text-red">$12.00</h4>
      <h3>Spicy Beef Ramen</h3>
      <img src={beef} alt="spicy beef ramen" className="bezier" />
    </div>
  )
}

export default MenuCard
