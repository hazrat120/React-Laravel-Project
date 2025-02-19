import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <div className="menu">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <nav className="topbar-nav">
                <ul className="metismenu" id="metismenu">
                  <li>
                    <Link to="/">
                      <span className="fa fa-tachometer" /> DASHBOARD
                    </Link>
                  </li>
                  <li>
                    <a
                      className="has-arrow nav-hover"
                      href="#"
                      aria-expanded="false"
                    >
                      <span className="fa fa-calendar-check-o" /> Events
                    </a>
                    <ul aria-expanded="false">
                      <li>
                        <Link to="/active">Active</Link>
                      </li>
                      <li>
                        <Link to="/draft">Draft</Link>
                      </li>
                      <li>
                        <Link to="/myevent">My Event</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/peoples">
                      <span className="fa fa-users" /> Peoples
                    </Link>
                  </li>
                  <li>
                    <a
                      className="has-arrow nav-hover"
                      href="#"
                      aria-expanded="false"
                    >
                      <span className="fa fa-envelope" /> Messages
                    </a>
                    <ul aria-expanded="false">
                      <li>
                        <Link to="/inbox">Inbox</Link>
                      </li>
                      <li>
                        <Link to="/chat">Chat</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/calender">
                      <span className="fa fa-calendar" /> Calender
                    </Link>
                  </li>
                  <li>
                    <a
                      className="has-arrow nav-hover"
                      href="#"
                      aria-expanded="false"
                    >
                      <span className="fa fa-cog" /> Settings
                    </a>
                    <ul aria-expanded="false">
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <Link to="/payment">Payment</Link>
                      </li>
                      <li>
                        <Link to="/notification">Notification</Link>
                      </li>
                      <li>
                        <Link to="/personal">Personal</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
