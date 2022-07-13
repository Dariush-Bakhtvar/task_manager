import style from './Content.module.scss';
import { RiUserFill } from 'react-icons/ri'
import { IoFilter } from 'react-icons/io5';
import { RiMoreFill } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa'
import { useState, useRef } from 'react';
import { useTask, useTaskAction } from '../Provider/Provider';
const Content = () => {
  const [isOpen, setIsOpen] = useState(false);
  const getListName = useRef("");
  const Tasks = useTask();
  const dispatch = useTaskAction();
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
      <section className={style.TasksContainer}>
        <div className={style.createList}>
          <button className={style.createListBtn} onClick={() => setIsOpen(true)}>
            Add List
          </button>
          {
            isOpen && <div className={style.ListNamePopUp}>
              <input type="text" placeholder='Insert List Name' ref={getListName} />
              <button onClick={() => dispatch({ type: 'addList', value: getListName.current.value })}>Add</button>
              <span onClick={() => setIsOpen(false)}><FaTimes /></span>
            </div>
          }
        </div>
      </section>
    </section>
  )
}

export default Content