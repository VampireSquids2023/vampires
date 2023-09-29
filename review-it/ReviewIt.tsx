import '../src/App.css'
import Logo from './imgs/logo.png'
import Screen1 from './imgs/screen1.png'
import Screen2 from './imgs/screen2.png'
import Screen3 from './imgs/screen3.png'

import Screen4 from './imgs/screen4.png'

import Screen5 from './imgs/screen5.png'

function ReviewIt() {
  return (<div className="pl-44 pr-44 pb-44 pt-22">
    <div className={"text-gray-400 container text-center "}>
      <img src={Logo} width={200} className={"mx-auto"}/>
      <div className={"text-3xl text-gray-700"}>Review It</div>
    </div>
      <div className={'mt-6 text-gray-400 container text-center'}>
        Have strong opinions about the restaurants and places you visit? Don't keep them to yourself! <br/>
        Generate amazing reviews with your preferred tone in seconds by providing only a few words to describe your experience. Then post your reviews on your favorite review aggregation site.
      </div>

      <div className="flex justify-center mt-8">
        <img src={Screen1} width={200} className="mr-2"/>
        <img src={Screen2} width={200} className="ml-2"/>
        <img src={Screen3} width={200} className="mr-2"/>
        <img src={Screen4} width={200} className="ml-2"/>
        <img src={Screen5} width={200} className="ml-2"/>
      </div>

      <div className="mt-6">
        <a href="#" onClick={() => {
          window.location.href= `mailto:info@vampiresquids.ink`;
        }}>
          contact us for <span className={'text-blue-500'}>support</span>
        </a>
       </div>
  </div>
)
}

export default ReviewIt
