import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { SideBarDataClient } from '../../components/SideBar/SideBarData'

const UserPage = () => {
    console.log(SideBarDataClient)
  return (
    <>
    <SideBar sidebarData = {SideBarDataClient}/>
    <div>UserPage</div>
    </>
  )
}

export default UserPage