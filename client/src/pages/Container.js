import React,{useContext} from 'react'
import Sidebar from './Sidebar'
import Homepage from './HomePage'
import { DataContext } from '../App';

export default function Container() {
    const {toggleSideBar} = useContext(DataContext)
    return (
        <div className='contain'>
            <Homepage/>
            {toggleSideBar ? 
            <Sidebar/>
            :
            <></>
        }
        </div>
    )
}
