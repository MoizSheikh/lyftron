import React,{useState} from 'react';
import {APIDATA} from './../pages/Data'
import HomepageCard from './Homepage_card';

const Homepage = (props) => {
    const[search,setSearch]=useState(APIDATA);
    function handleSearch(e){
        e = e.toLowerCase()
        if(e===''){
            setSearch(APIDATA)
        }
        else{
            let str = APIDATA.filter((ele)=>{return ele.name.toLowerCase().includes(e) || ele.id.toString().startsWith(e)})
            setSearch(str)
        }
        
    }
    return (
        <div className='homepage '>
            <h2>PROCESS MANAGEMENT SYSTEM</h2>
            <div className="inputDiv">
                            <input onChange={e=>handleSearch(e.target.value)}
                            type="search"
                            placeholder="Search By Name or ID"
                            aria-label="Search"
                            />
            </div>
            <hr/>
            <div className="homepageCon">

                {search.length ? search.map((data)=>{
                    return <HomepageCard key={data.id} {...data}/>
                }) : <h3>NO DATA</h3>}
            </div>

         
        </div>
    );
}

export default Homepage;
