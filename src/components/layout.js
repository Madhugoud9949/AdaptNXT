import './layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faLanguage, faBell } from '@fortawesome/free-solid-svg-icons';
import OrdersDashboard from './OrdersDashboard';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <div className="topbar">
        <div className="left-section">
          <img className='avatar' src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1708319041~exp=1708319641~hmac=427f982eb378f3ccb594df3eddb476f95542a8e0cbf7b268d1f2b8588923b660" alt="Avatar" />
        </div>
        <div className="right-section">
          <div className="options">
            <button className="option"><FontAwesomeIcon icon={faMoon} /></button>
            <button className="option"><FontAwesomeIcon icon={faLanguage} /></button>
            <button className="option"><FontAwesomeIcon icon={faBell} /></button>
            <img className='avatar' src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1708319041~exp=1708319641~hmac=427f982eb378f3ccb594df3eddb476f95542a8e0cbf7b268d1f2b8588923b660" alt="Avatar" />
          </div>
        </div>
      </div>
      <div className="main">
        {children}
        <OrdersDashboard></OrdersDashboard>
      </div>
    </div>
  );
};

export default Layout;
