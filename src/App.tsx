import './App.css'
import clock from './assets/clock.svg'
import coffee from './assets/coffee.svg'
import donut from './assets/donut.svg'
import glass from './assets/glass.svg'
import hand from './assets/hand.svg'
import oranges from './assets/oranges.svg'
import pineapple from './assets/pineapple.svg'
import pop from './assets/pop.svg'
import skateboard from './assets/skateboard.svg'
import sliced from './assets/sliced.svg'
import speaker from './assets/speaker.svg'
import stairs from './assets/stairs.svg'
import tangerine from './assets/tangerine.svg'
import tea from './assets/tea.svg'
import telephone from './assets/telephone.svg'
import umbrella from './assets/umbrella.svg'

function App() {
  let imageArray = [telephone, coffee, skateboard, stairs, tea, donut, tangerine, glass, speaker, clock, pineapple, oranges, hand, pop, sliced, umbrella];

  return (
    <>
      <div className="wrapper flex md:flex-row flex-col justify-around md:pt-[67px] px-2">
        <div className="content max-w-[449px] md:mt-[102px]">
          <h1 className='text-[#FEC3C7]'>Design.</h1>
          <h1 className='text-[#9AD7F3]'>Create.</h1>
          <h1 className='text-[#6BDFDA]'>Inspire.</h1>
          <p className='text-2xl mt-6 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.</p>
          <button className='py-6 px-12 text-black bg-white rounded-[36px] mt-6'>Explore</button>
        </div>
        <div className="gallery md:w-1/2 flex flex-wrap pt-12 md:pt-0">
          {imageArray.map((image) => (
            <img src={image} alt="Image" className='pr-[18px] pb-2 md:w-[25%] w-[50%]' />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
