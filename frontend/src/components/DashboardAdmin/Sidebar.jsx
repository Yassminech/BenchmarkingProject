import React from 'react';
import { BsMenuButtonWideFill, BsFillGearFill, BsPeopleFill, BsPersonFill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <button>
            <BsMenuButtonWideFill className='icon' /> Dashboard
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button>
            <BsPeopleFill className='icon' /> Customers
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button>
            <BsPersonFill className='icon' /> Employees
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button>
            <BsFillGearFill className='icon' /> Setting
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;