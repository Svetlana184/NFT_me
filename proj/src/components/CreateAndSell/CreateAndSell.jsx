import {create_and_sell} from '../../data.js'
import circle_image from '../../assets/circle_image.svg'
import './CreateAndSell.scss'

const CreateAndSell = () => {
  const cards = create_and_sell.map(item => <li className='create_card' key={Math.random()}>
    <div>
        <img src={circle_image} alt="" />
        <h4>{item.title}</h4>
        <p>{item.text}</p>
    </div>
  </li>)
  return (
    <section className='create_sec'>
      <h2>Create and sell NFTs</h2>
      <ul>
        {cards}
      </ul>
    </section>
  )
}

export default CreateAndSell