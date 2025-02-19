function InboxMessage() {
  return (
    <>
      <div className="col-xl-8">
        <div className="event-msg-left">
          <div className="msg-navigation">
            <div className="row justify-content-between">
              <div className="col-auto">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    SELECT ALL
                  </label>
                </div>
              </div>
              <div className="col-auto">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <label
                      className="event-msg-btn"
                      htmlFor="inputGroupSelect01"
                    >
                      ADD TO
                    </label>
                  </div>
                  <select className="msg-btn" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                  <button className="msg-btn">Delete</button>
                  <button className="msg-btn">Report</button>
                </div>
              </div>
              <div className="col-auto">
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
            </div>
          </div>
          {/* <div class="card-header"> */}
          <ul className="list-group">
            <li className="list-group-item msg-single">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck0"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck0"
                />
              </div>
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">John Doe</h3>
                  <p>Hey, how are you!</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                  <span className="bg-danger">1</span>
                </div>
              </div>
            </li>
            <li className="list-group-item msg-single">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck2"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck2"
                />
              </div>
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr2.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">Jassica</h3>
                  <p>Sed elementum libero mattis velit pulvinar...</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                  <span className="bg-danger">2</span>
                </div>
              </div>
            </li>
            <li className="list-group-item msg-single active">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck3"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck3"
                />
              </div>
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr3.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">Anamika</h3>
                  <p>Cras sed orci sodales enim porttitor feugiat...</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                </div>
              </div>
            </li>
            <li className="list-group-item msg-single">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck4"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck4"
                />
              </div>
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
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck5"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck5"
                />
              </div>
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr5.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">Johnson</h3>
                  <p>Sed elementum libero mattis velit pulvinar...</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                </div>
              </div>
            </li>
            <li className="list-group-item msg-single">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck6"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck6"
                />
              </div>
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr6.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">Arrohi</h3>
                  <p>Cras sed orci sodales enim porttitor feugiat...</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                </div>
              </div>
            </li>
            <li className="list-group-item msg-single">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck7"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck7"
                />
              </div>
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr7.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">Andy William</h3>
                  <p>Sed elementum libero mattis velit pulvinar...</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                </div>
              </div>
            </li>
            <li className="list-group-item msg-single">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck8"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck8"
                />
              </div>
              <div className="media">
                <img
                  className="mr-3 img-fluid"
                  src="../../src/assets/images/message/msgr8.png"
                  alt="placeholder image"
                />
                <div className="media-body">
                  <h3 className="mt-0">Akash</h3>
                  <p>Cras sed orci sodales enim porttitor feugiat...</p>
                </div>
                <div className="time">
                  <h5>07.50 PM</h5>
                </div>
              </div>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default InboxMessage;
