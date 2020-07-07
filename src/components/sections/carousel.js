import React from 'react'
import NumberOfItems from '../pieces/number-of-items'
import AddToCart from '../pieces/add-to-cart'
import beef from '../../images/full-images/beef-ramen.jpg'

const Carousel = () => {
  return (
    <div className="px-0 py-5 sm:p-10">
      <div className="p-10 flex justify-between gap-5 shadow-xl">
        <div className="w-full xl:w-1/2">
          <h2>Spicy Beef<br />Ramen</h2>
          <p>Bean sprouts bamboo slices Tokyo kamaboko Kumamoto toasted sesame seeds Nagoya leek bean sprouts scallions leek minced garlic curry bean sprouts ginger. Yokohama soy milk soy milk seasoned egg ground black pepper chopped onions roasted pork slices spinach seasoned egg kamaboko chicken stock pork bones sesame oil chicken stock Hakata minced garlic Wakayama ramen burger toasted sesame seeds. Abura soba abura soba butter Hakata ramen burger Hakata Kumamoto tsukemen curry Asahikawa. Soy milk Kagoshima yuzu butter salt Nissin instant cup ramen Wakayama soy sauce chicken stock Hakata toasted sesame seeds ramen burger flavoured oil. Seasoned egg Tokushima Sapporo butter ramen burger minced garlic Tokyo wood ear mushroom soy milk bamboo slices Asahikawa Nagoya pork bones Kagoshima leek vinegar Kagoshima Tokyo leek. Kagoshima lard Asahikawa mustard greens Sapporo yuzu fish broth wood ear mushroom Wakayama tsukemen soy milk yuzu nori yuzu curry Tokyo bean sprouts Kagoshima corn. Soy sauce pork bones fish broth Tokushima chilli vinegar vinegar nori vinegar soy sauce.</p>
          <h2 className="text-red">$12</h2>
          <div className="flex gap-5 items-center">
            <NumberOfItems />
            <AddToCart />
          </div>
        </div>
        <div className="hidden xl:flex w-1/2 justify-center">
          <img src={beef} alt="Spicy Beef Ramen" className="h-full object-cover object-center" />
        </div>
      </div>
    </div>
  )
}

export default Carousel
