import React,{useState} from 'react';
import HomepageCardExtend from './Homepage_card_extend'


const HomepageCard = ({id,name,source,target,status,created_by,pipeline,created_at,lastExecuteAt,nextExecuteAt,endAt,frequency}) => {
    const [toggle,setToggle] = useState(false)
    const handleToggle = () =>{
        setToggle(!toggle)
    }
    function convertFromStringToDate(responseDate) {
        let newresponseDate = responseDate.substring(0, responseDate.length - 1);
        let dateComponents = newresponseDate.split('T');
        let datePieces = dateComponents[0].split("-");
        let timePieces = dateComponents[1].split(":");
        return(new Date(datePieces[0], (datePieces[1] - 1), datePieces[2], timePieces[0], timePieces[1], timePieces[2]))
    }
    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    let createddate = convertFromStringToDate(created_at);
    createddate = createddate.toString().slice(3,16) + formatAMPM(createddate)
    let lastDate = convertFromStringToDate(lastExecuteAt);
    lastDate = lastDate.toString().slice(3,16) + formatAMPM(lastDate)
    let nextData = convertFromStringToDate(nextExecuteAt);
    nextData = nextData.toString().slice(3,16) + formatAMPM(nextData)
    let endDate = convertFromStringToDate(endAt);
    endDate = endDate.toString().slice(3,16) + formatAMPM(endDate)
    
    return (
        <>
        <div className='homepageCard'>
            <div className="row1">
                <div><h3>{id}. {name}</h3>  | {created_by.first_name} {created_by.last_name}</div>
                <span>{status}<img src="clock.gif" alt="" srcset="" /></span>  
            </div>
            <div className="row2">
                 <span>
                     <img src="truck.png" alt="truck" srcset="" />Source : 
                     <h4>{source.name}</h4> 
                 </span>          
                 <span>
                     <img src="container.png" alt="truck" srcset="" /> Target :
                     <h4>{target.name}</h4> 
                 </span>
            </div>
            <div className="row3">
                <div className="date1"><div>Created</div><span>{createddate}</span></div>
                <div className="date1"><div>Previous</div><span>{lastDate}</span></div>
                <div className="date1"><div> Frequency</div><span>{frequency}</span></div>
                <div className="date1"><div>Next</div><span>{nextData}</span></div>
                <div className="date1"><div>End</div><span>{endDate}</span></div>
            </div>
            <div className="row4">

            <button onClick={handleToggle}>
                Show Pipeline
                
                <img src="arrowdown2.gif" alt="" srcset="" />
            </button>
            </div>
        </div>
        {toggle ?  
            <div className="homepageCardExtendCon">
                {pipeline.map((data,i)=>{
                    return <HomepageCardExtend key={i} {...data}/>
                })}
            </div>
            :  <></>
        }
       
        </>
    );
}

export default HomepageCard;
