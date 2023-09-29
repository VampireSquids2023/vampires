import '../src/App.css'
import Logo from './imgs/logo.png'
import Screen1 from './imgs/screen1.png'
import Screen2 from './imgs/screen2.png'
import Screen3 from './imgs/screen3.png'

function WhatsInSeason() {
  return (<div className="pl-44 pr-44 pb-44 pt-22">
    <div className={"text-gray-400 container text-center "}>
      <img src={Logo} width={200} className={"mx-auto"}/>
      <div className={"text-3xl text-gray-700"}>What's in Season?</div>
    </div>
      <div className={'mt-6 text-gray-400 container text-center'}>
        Ever wonder what fruit and veggies are in season right now? Is it really worth to spend the extra $$$ on organic? When is my favorite fruit actually in season?
      </div>

      <div className="flex justify-center mt-8">

      <img src={Screen1} width={200} className="mr-2"/>
      <img src={Screen2} width={200} className="ml-2"/>

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

export default WhatsInSeason
