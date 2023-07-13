import './App.css'
import Squid from './assets/squid.png'
function App() {
  return (
    <div className={"text-gray-400 container text-center"}>

      <img src={Squid} width={300} className={"mx-auto"}/>

      <div className="text-xl">Vampire Squids, LLC</div>
      <span className="text-gray-400"> app development and general tech consulting services available<br/></span>
      <a href="#" onClick={() => {
        window.location.href= `mailto:info@vampiresquids.ink`;
      }}>
        contact us
      </a>
    </div>
  )
}

export default App
