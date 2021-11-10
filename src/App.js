import React,{useEffect} from 'react'
import OneSignal from 'react-onesignal';
const App = () => {
 

  useEffect(() => {
    OneSignal.init({
      appId: "8699bee1-37be-46cd-99e7-11493c023549"
    });
  }, []);
  const onHandleTag=(tag)=>{
OneSignal.sendTag('tech',tag).then(()=>{
  console.log("Tagged")
})
  }

  return (
    <div>
      <h1>push notification</h1>
      <button onClick={()=>onHandleTag('react')}>react</button>
    </div>
  )
}

export default App
