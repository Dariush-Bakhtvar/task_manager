import style from './Content.module.scss';
import { RiUserFill } from 'react-icons/ri'
import { IoFilter } from 'react-icons/io5';
import { RiMoreFill } from 'react-icons/ri';
const Content = () => {
  return (
    <section className={style.TaskContent}>
      <nav className={style.TaskContentMenu}>
        <span className={style.TaskContentTitle} >Task Board</span>
        <ul>
          <li>
            <RiUserFill />
            <span>Pepole</span>
          </li>
          <li>
            <IoFilter />
            <span>Filter</span>
          </li>
          <li>
            <RiMoreFill />
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Content