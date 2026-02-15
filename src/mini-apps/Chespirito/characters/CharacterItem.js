import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='chespirito-card'>
      <div className='chespirito-card-inner'>
        <div className='chespirito-card-front'>
          <img src={`${process.env.PUBLIC_URL}${item.img}`} alt='' />
        </div>
        <div className='chespirito-card-back'>
          <h3>{item.name}</h3>
          <ul>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Actor:</strong> {item.actor}
            </li>
            <li>
              <strong>Show:</strong> {item.show}
            </li>
          </ul>
          {item.catchphrase && (
            <p className='catchphrase'>"{item.catchphrase}"</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
