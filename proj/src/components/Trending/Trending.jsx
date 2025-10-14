import './Trending.scss'
import btn_pic from '../../assets/trending_btn.svg'
import {trending} from '../../data.js'
import watermark from '../../assets/watermark.png'

const Trending = () => {
  const trend_pics = trending.map((item) => 
  <li key={Math.random()} className='trend_card'>
    <div>
      <h5>{item.title}</h5>
      <div>
        <p>{item.text}</p>
        <p>{item.cost}</p>
      </div>
    </div>
    <div>
      <img src={item.image} alt="" />
      <img src={watermark} alt="" />
    </div>
  </li>)
  return (
    <section className='trend_sec'>
      <div className='trend_title'>
        <h2>Trending this week</h2>
        <p>Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      {/* <ul>{trend_pics}</ul> */}
      <button>
        <img src={btn_pic} alt="" />
        <p>View marketplace</p>
      </button>
    </section>
  )
}

export default Trending