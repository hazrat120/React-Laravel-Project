function Conversasion() {
  return (
    <>
      <div className="col-xl-8">
        <div className="event-chat-ryt">
          <ul className="list-group">
            <li className="list-group-item">
              <div className="media">
                <div className="media-img">
                  <img
                    className="mr-3 img-fluid"
                    src="../../src/assets/images/message/msgr2.png"
                    alt="placeholder image"
                  />
                </div>
                <div className="media-body">
                  <h3 className="mb-0">Jassica</h3>
                  <p>Online</p>
                </div>
                <div className="dropdown custom-dropdown">
                  <div data-toggle="dropdown">
                    <i className="fa fa-ellipsis-v msg-btn" />
                  </div>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      Option 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Option 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Option 3
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="char-area">
                <div className="chat-reciver">
                  <h4>Hey How are you?</h4>
                  <p>8.00 PM</p>
                </div>
                <div className="chat-sender">
                  <h4>Hey I am fine. you?</h4>
                  <p>8.05 PM</p>
                </div>
                <div className="chat-reciver">
                  <h4>
                    Sed elementum libero mattis velit pulvinar, ut sodale ex
                    euismod. In in imperdiet purus, a molestie ante. Nullam a
                    vestibulum diam, et commodo quam.
                  </h4>
                  <p>8.10 PM</p>
                </div>
                <div className="chat-sender">
                  <h4>ok Sir</h4>
                  <p>8.20 PM</p>
                </div>
              </div>
              <div className="char-type">
                <form
                  className="d-flex justify-content-center"
                  action="#"
                  method="post"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Here..."
                  />
                  <button className="btn btn-danger">SEND</button>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Conversasion;
