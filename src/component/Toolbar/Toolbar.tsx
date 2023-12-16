import reactLogo from '../../images/ic-react.png';
import {Link} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle ps-5 pe-5 pt-2 pb-2 d-flex justify-content-between">
      <div className="d-flex align-items-center justify-content-between">
        <div className="p-2">
          <img className="w-50 h-50" src={reactLogo} alt="React Logo"/>
        </div>
        <div className="d-flex align-items-center flex-column">
          <span>Home work 68</span>
          <strong>Application TASK list</strong>
        </div>
      </div>
      <ul className="navbar-nav mr-auto flex-row flex-nowrap align-items-center justify-content-center gap-3">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/todoform" className="nav-link">Task List form</Link>
        </li>
       </ul>
    </nav>
);
};

export default Toolbar;