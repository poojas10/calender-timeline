import React,{useRef,useEffect,useState} from 'react'

const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export default function Header({date,dispatch}) {
    const navBar = useRef(false)
    const [toggleBtn,setBtn] = useState(false)

useEffect(() => {
   if(toggleBtn){
       navBar.current.style.maxHeight="300px"
   }else{
       navBar.current.style.maxHeight="0"
   }
}, [toggleBtn])

  const endDate=String(date[5].getDate()).padStart(2,"0")
  const month= months[+String(date[5].getMonth() + 1).padStart(2, '0')] //January is 0!
  const year = date[5].getFullYear()
const dateRange= `${String(date[0].getDate()).padStart(2,"0")}- ${endDate} ${month} ${year}`
    function nextDate(){
        dispatch({ type: "TOGGLEDATE", payload: { content: "next" } });
    }
    function prevDate(){
        dispatch({ type: "TOGGLEDATE", payload: { content: "prev" } });
    }
    return (
        <header>
        <h2 id="logo">Timeline</h2>
        <nav ref={navBar}>
        <button className="week-dropdown">
            week 
            <i className="fas fa-chevron-down"></i>
        </button>
        <div className="date">{dateRange}</div>
        <div className="date-controls">
            <button className={`${date[0].getDate() >6 ? 'visible' :'prev'}`} onClick={prevDate}>
            <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={nextDate}>
            <i className="fas fa-chevron-right"></i>
            </button>
        </div>
        </nav>
              <button className='toggle-btn' onClick={()=>setBtn(prev=>!prev)}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="2em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                  </button>
        </header>
    )
}
