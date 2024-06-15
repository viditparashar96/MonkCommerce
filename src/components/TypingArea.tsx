import Attach from '../assets/Attach.png'
import Voice from "../assets/Voice (1).png"
import Send from "../assets/send.png"
function TypingArea() {
  return (
    <div className='w-11/12 h-[10%] mt-auto  mx-auto flex items-center	'>
        <img className='w-10 h-109 ml-2' src={Attach} alt="" />
        <img className='w-10 h-10 ml-2' src={Voice} alt="" />
        
        <input className='w-11/12 mx-2 p-3 trabsparent h-10 border border-gray rounded-full active-none'></input>
        <img  src={Send} alt="" />


    </div>
  )
}

export default TypingArea