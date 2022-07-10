import React from 'react';
import style from './sidebar.module.scss';
import { MdLayers } from 'react-icons/md'
import { MdAccessTimeFilled } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri'
import { BsFillBellFill } from 'react-icons/bs';
import { IoCalendarNumberSharp } from 'react-icons/io5';
import { RiDashboardFill } from 'react-icons/ri';
import { RiUserFill } from 'react-icons/ri';


const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <div className={style.Logo}>
        <MdLayers />
        <span>Boards</span>
      </div>
      <div className={style.search}>
        <RiSearchLine />
        <input type="text" placeholder='Search' />
      </div>
      <ul className={style.taskBarMenu}>
        <li>
          <RiDashboardFill />
          <span>Task Board</span>
        </li>
        <li>
          <IoCalendarNumberSharp />
          <span>Calender</span>
        </li>
        <li>
          <RiUserFill />
          <span>User</span>
        </li>
        <li>
          <MdAccessTimeFilled />
          <span>Resent</span>
        </li>
        <li>
          <BsFillBellFill />
          <span>Notifications</span>
        </li>
      </ul>
      <div className={style.profile}>
        <img src={require('../../asset/Img/Profile.jpg')} alt="Profile" />
        <div>
          <p>Dariush Bakhtvar</p>
          <p>Front-end Developer</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar