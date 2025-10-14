import {all_artists} from '../../data.js'

const AllSection = () => {
  const cards = all_artists.map(item=> <li key={Math.random()}>
      <img className='bg_pic' src={item.image} alt="" />
      <img className='profile_pic' src={item.profile_pic} alt="" />
      <p>
        {item.name_artist}
      </p>
      <button>Follow</button>
    </li>)
    return (
      <ul className='art_ul'>
        {cards}
      </ul>
    )
}

export default AllSection