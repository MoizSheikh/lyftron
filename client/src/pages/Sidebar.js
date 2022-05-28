import React,{useContext} from 'react';
import { DataContext } from '../App';

const Sidebar = (props) => {
    const {setToggleSideBar,paramsData,pipeData} = useContext(DataContext)
    const {pipeline_name,load_status,target_table_action,natural_key,load_action,delta_fields} = {...pipeData}
    function handletoggle (){
        setToggleSideBar(false)
    }
       return (
            <div className="sidebar">
                <div className="row1"><button onClick={handletoggle}><img src="29-cross-outline.gif" alt="" srcset="" /></button></div>
                <div className="row2">
                    <h3>{pipeline_name}</h3>
                </div>
                <div className="row3">
                    <span><span className='labelHeading'>LoadAction:</span> <h4 className='ValueHeading'>{load_action}</h4></span>
                    <span><span className='labelHeading'>LoadStatus:</span> <h4 className='ValueHeading'>{load_status}</h4></span>
                    <span><span className='labelHeading'>key:</span> <h4 className='ValueHeading'>{natural_key}</h4></span>
                    <span><span className='labelHeading'>deltaFields:</span> <h4 className='ValueHeading'>{delta_fields}</h4></span>
                    <span><span className='labelHeading'>TargetAction:</span> <h4 className='ValueHeading'>{target_table_action}</h4></span>
                    
                </div>
                <hr/>
                <h3>Params:</h3>
                <div className="row4">
                    {paramsData.map((data,i)=>{
                        return  <div key={i}>

                        <h4 className='main'>{data.value && data.value}</h4>
                        <span><span className='labelHeading'>Group: </span> <h5 className='ValueHeading'> {data.group}</h5></span>
                        <span><span className='labelHeading'>Param: </span> <h5 className='ValueHeading'> {data.param}</h5></span>
                        <span><span className='labelHeading'>Table: </span> <h5 className='ValueHeading'> {data.table}</h5></span>
                        <hr/>
                    </div> 
                    })}
                </div>
            </div>
    );
}

export default Sidebar;
