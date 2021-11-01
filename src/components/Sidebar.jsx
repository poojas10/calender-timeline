import React,{useRef,useEffect} from 'react'

export default function Sidebar({formik,setForm,showForm,errorMessage}) {
  const sideBar = useRef(false) 
  useEffect(() => {
    if(showForm){
      sideBar.current.style.display="flex"
    }
    else{
      sideBar.current.style.display="none" 
    }
  }, [showForm])
  return (
        <aside ref={sideBar}>
        {/* <button className='toggle-btn' onClick={()=>setForm(prev=>!prev)}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="2em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                  </button> */}
               <div className="form-div">
               {showForm &&  <form onSubmit={formik.handleSubmit}>
                     <label htmlFor="select">Event time</label>
                 <div className="time-container">
                 <select
                    name="start"
                    onChange={formik.handleChange}
                    value={formik.values.start}
                  >
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                  </select>
                  <span>-</span>
                  <select
                    name="end"
                    onChange={formik.handleChange}
                    value={formik.values.end}
                  >
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                  </select>
                 </div>
                  <input
                    required
                    type="text"
                    name="event"
                    placeholder="event"
                    onChange={formik.handleChange}
                    value={formik.values.event}
                  />
                     <button type="submit" className="form-submit">add event</button>
                  {errorMessage && <h1 className="error-msg">{errorMessage}</h1>}
                </form>}
              </div>
        </aside>
    )
}
