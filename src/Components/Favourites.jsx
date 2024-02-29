 import React from 'react';
 import Photos from './Photos';

const Favourites = ({favouritePhotos,handleRemoveFavourite}) => {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar_logo'> InfiPics</div>
        <div className="navbar_links">
          <a href='/'>Home</a>
        </div>

      </nav>
      <main>
        <section className='photos'>
          {favouritePhotos.map((image,index) =>{
            return(
              <Photos
              key={index}
              {...image}
              isFavourie={true}
              onFavouriteClick={()=>handleRemoveFavourite(image)}>
                <span>Added To Favourite</span>
              </Photos>
            )
          })}
        </section>
      </main>
    </div>
  )
}

export default Favourites;
