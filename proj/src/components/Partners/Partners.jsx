import './Partners.scss'
import {partners} from '../../data.js'

const Partners = () => {
  const cards = partners.map(item=> 
  <li key={item.index} className={item.index === 0 ? "p_special" : "p_card"}>
    <img src={item.image} alt="" />
  </li>)
  return (
    <section className="partners_sec">
      <div className="partners_title">
        <div>
           <h2>Backed by the best</h2>
          <p>Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <ul className='partners_ul'>
          {cards}
        </ul>
        
      </div>
      <div>
          <h2>Never miss a drop</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <form>
            <input type="text" />
            <button type='submit'></button>
          </form>
        </div>
    </section>
  )
}

export default Partners