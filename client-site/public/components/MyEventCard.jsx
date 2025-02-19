function MyEventCard() {
  return (
    <>
      <div className="col-xl-8">
        <div className="row">
          <div className="col-xl-6">
            <div className="card event-card">
              <div className="card-header">
                <div className="media">
                  <img
                    className="mr-3 img-fluid"
                    src="../../src/assets/images/events/event-head.png"
                    alt="placeholder image"
                  />
                  <div className="media-body">
                    <h3 className="mt-0">By John Doe</h3>
                    <p>5 min ago</p>
                  </div>
                  <div className="dropdown custom-dropdown">
                    <div data-toggle="dropdown">
                      <i className="fa fa-ellipsis-v" />
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
              <div className="event-card-img">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/events/event-main.jpg"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#evemt-view"
                />
                <h4>Event Name</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-auto">
                    <h5>Date</h5>
                    <p>June 16, 2018</p>
                  </div>
                  <div className="col-auto">
                    <h5>Location</h5>
                    <p>New York</p>
                  </div>
                  <div className="col-auto">
                    <h5>Tickets</h5>
                    <p>Avilable 26/ 100</p>
                  </div>
                </div>
              </div>
              <div className="card-sponsor">
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <h4>Sponsor by</h4>
                    <div className="card-sponsor-img">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="../../src/assets/images/events/card-foot1.png"
                          alt="placeholder image"
                        />
                      </a>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="../../src/assets/images/events/card-foot2.png"
                          alt="placeholder image"
                        />
                      </a>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="../../src/assets/images/events/card-foot3.png"
                          alt="placeholder image"
                        />
                      </a>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="../../src/assets/images/events/card-foot4.png"
                          alt="placeholder image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-auto">
                    <p>Free</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart" />
                      126
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-comment" />
                      03
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-sign-out" />
                    </a>
                  </li>
                </ul>
                <div className="pull-right">
                  <a href="#">
                    <i className="fa fa-bar-chart" />
                    Insights
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card event-card">
              <div className="card-header">
                <div className="media">
                  <img
                    className="mr-3 img-fluid"
                    src="../../src/assets/images/events/event-head2.png"
                    alt="placeholder image"
                  />
                  <div className="media-body">
                    <h3 className="mt-0">By John Doe</h3>
                    <p>5 min ago</p>
                  </div>
                  <div className="dropdown custom-dropdown">
                    <div data-toggle="dropdown">
                      <i className="fa fa-ellipsis-v" />
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
              <div className="event-card-img">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/events/event-main2.jpg"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#evemt-view"
                />
                <h4>Event Name</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-auto">
                    <h5>Date</h5>
                    <p>June 16, 2018</p>
                  </div>
                  <div className="col-auto">
                    <h5>Location</h5>
                    <p>New York</p>
                  </div>
                  <div className="col-auto">
                    <h5>Tickets</h5>
                    <p>Avilable 26/ 100</p>
                  </div>
                </div>
              </div>
              <div className="card-sponsor">
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <h4>Sponsor by</h4>
                    <div className="card-sponsor-img">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="../../src/assets/images/events/card-foot1.png"
                          alt="placeholder image"
                        />
                      </a>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="../../src/assets/images/events/card-foot2.png"
                          alt="placeholder image"
                        />
                      </a>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="../../src/assets/images/events/card-foot3.png"
                          alt="placeholder image"
                        />
                      </a>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="../../src/assets/images/events/card-foot4.png"
                          alt="placeholder image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-auto">
                    <p>Free</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart" />
                      126
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-comment" />
                      03
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-sign-out" />
                    </a>
                  </li>
                </ul>
                <div className="pull-right">
                  <a href="#">
                    <i className="fa fa-bar-chart" />
                    Insights
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyEventCard;
