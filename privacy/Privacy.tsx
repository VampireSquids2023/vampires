import '../src/App.css'

function Privacy() {
  return (<div className="pl-44 pr-44 pb-44 pt-22">
    <div className={"text-gray-400 container text-center "}>
      <div className={"text-3xl text-gray-700"}>Privacy</div>
    </div>
      <div className={'mt-6 text-gray-400 container text-center'}>
        <b>What's in Season</b> has no network functionality and the only information stored locally on the device is
        user preference data.<br /><br />
        <b>ReviewIt</b> is integrated with ChatGPT to generate reviews and the only information stored locally on the
        device is user review data. VampireSquids, LCC does not store or collect any user data.<br /><br />
        <b>Ruby Rhythm</b> has no network functionality and the only information stored locally on the device is
        user preference data.<br /><br />
      </div>
    </div>
  )
}

export default Privacy
