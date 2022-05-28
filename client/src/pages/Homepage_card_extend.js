import React,{useContext,useEffect,useRef} from 'react';
import { DataContext } from '../App';

const HomepageCardExtend = ({pipeline_name,load_status,source_table,target_table,target_table_action,natural_key,load_action,delta_fields,params}) => {
    const {setToggleSideBar,paramsData,setParamsData,pipeData,setPipe} = useContext(DataContext)

    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
          }
        setToggleSideBar(true)

    }, [paramsData]);
    const handleToggle = () =>{
        setParamsData(params)
        setPipe({...pipeData,pipeline_name,load_status,source_table,target_table,target_table_action,natural_key,load_action,delta_fields})
    }
 
    return (
        <div className='homepageCardExtend'>
            <span className="name">
                <h4>{pipeline_name}</h4> 
            </span> 
            
            Source : {source_table} <br/>
            Target : {target_table}
            <br/>
            <button onClick={handleToggle}>
                Details
                <img src="161-trending-flat-outline.gif" alt="" srcset="" />
                
            </button>
        </div>
    );
}

export default HomepageCardExtend;
