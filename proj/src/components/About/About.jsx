import './About.scss'
import watermark from '../../assets/watermark.png'
import pic from '../../assets/about.png'
import play from '../../assets/play.png'

const About = () => {
  return (
    <section className='about_section'>
      <div className='about_text'>
        <div>
              <h1 className='h1_ab'>
              Discover rare digital art and collect NFT’s
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum.
            </p>
        </div>
            
             <button className='btn_watch'>
                <h2>Watch video</h2>
                <img src={play} alt="" />
             </button>
      </div>
      <img className='pic_about' src={pic} alt="" />
      <img className='watermark_about' src={watermark} alt="" />
      <div className='black_sq'></div>
      <div className='gray_sq'></div>
     
    </section>
  )
}

export default About