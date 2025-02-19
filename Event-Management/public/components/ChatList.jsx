function ChatList() {
  return (
    <>
      <div className="col-xl-4">
        <div className="event-msg-left">
          <ul className="list-group">
            <li className="list-group-item msg-single">
              <div className="event-sideber-search">
                <form action="#" method="post">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Location"
                  />
                  <i className="fa fa-search" />
                </form>
              </div>
            </li>
            <li className="list-group-item msg-single active">
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr2.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">Jassica</h3>
                  <p>Sed elementum libero...</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                  <span className="bg-danger">2</span>
                </div>
              </div>
            </li>
            <li className="list-group-item msg-single">
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr3.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">Anamika</h3>
                  <p>Cras sed orci sodales...</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                </div>
              </div>
            </li>
            <li className="list-group-item msg-single">
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr4.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">Rock</h3>
                  <p>Hey, how are you!</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                </div>
              </div>
            </li>
            <li className="list-group-item msg-single">
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr5.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">Johnson</h3>
                  <p>Sed elementum libero...</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                </div>
              </div>
            </li>
            <li className="list-group-item msg-single">
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr6.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">Arrohi</h3>
                  <p>Cras sed orci sodales en...</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                </div>
              </div>
            </li>
            <li className="list-group-item msg-single">
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr7.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">Andy William</h3>
                  <p>Sed elementum libero...</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                </div>
              </div>
            </li>
            <li className="list-group-item msg-single">
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr8.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">Akash</h3>
                  <p>Cras sed sodales enim...</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ChatList;
