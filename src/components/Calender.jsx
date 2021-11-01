import React from 'react'

const eventColors=["pink","blue","green"]

export default function Calender({day,state,getDay,time}) {
    return (
        <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            {state.date.map((e, i) => {
              return (
                <th key={i}>
                  <div className={`dates`}>
                    <p>{day[e.getDay()].slice(0, 3)}</p>
                    <p>{e.getDate()}</p>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {time.map((e, j) => {
            return (
              <tr key={j}>
                <td className="time-label">{`${time[j]}:00 ${time[j] <12 ? 'AM' : 'PM'}`}</td>
                {state.date.map((el, index) => {
                  return (
                    <td
                      onClick={getDay}
                      key={index}
                      data-time={time[j]}
                      data-date={el.getDate()}
                    >
                      {state.userData.map((e, i, a) => {
                        if (
                          e.date == el.getDate() &&
                          e.startTime.slice(0, 2) === time[j]
                        ) {
                          return (
                            <div key={i} className={`event ${eventColors[i]}`}>
                              <h5>{state.events[i]}</h5>
                              <p>
                                {e.startTime}- {e.endTime}
                              </p>
                            </div>
                          );
                        }
                        else{
                          return (<div key={i}></div>)
                        }
                      })}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    )
}
