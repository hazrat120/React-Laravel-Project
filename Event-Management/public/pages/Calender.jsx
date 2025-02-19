import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import PageTitle from "../components/PageTitle";

function Calender() {
  return (
    <>
      <Header />
      <Menu />
      <PageTitle />

      <div className="content-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h4>Calendar</h4>
                  </div>
                  <div className="row">
                    <div className="col-lg-3">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#add-category"
                        className="btn btn-primary btn-block calendar-btn"
                      >
                        <i className="ti-plus f-s-12 m-r-5" /> Create New
                      </a>
                      <div id="external-events" className="m-t-20">
                        <p>Drag and drop your event or click in the calendar</p>
                        <div
                          className="external-event bg-primary"
                          data-class="bg-primary"
                        >
                          <i className="fa fa-move" />
                          New Theme Release
                        </div>
                        <div
                          className="external-event bg-success"
                          data-class="bg-success"
                        >
                          <i className="fa fa-move" />
                          My Event
                        </div>
                        <div
                          className="external-event bg-warning"
                          data-class="bg-warning"
                        >
                          <i className="fa fa-move" />
                          Meet manager
                        </div>
                        <div
                          className="external-event bg-dark"
                          data-class="bg-dark"
                        >
                          <i className="fa fa-move" />
                          Create New theme
                        </div>
                      </div>
                      {/* checkbox */}
                      <div className="checkbox m-t-40">
                        <input id="drop-remove" type="checkbox" />
                        <label htmlFor="drop-remove">Remove after drop</label>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="card-box">
                        <div id="calendar" />
                      </div>
                    </div>
                    {/* end col */}
                    {/* BEGIN MODAL */}
                    <div className="modal fade none-border" id="event-modal">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title">
                              <strong>Add New Event</strong>
                            </h4>
                          </div>
                          <div className="modal-body" />
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-default waves-effect"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-success save-event waves-effect waves-light"
                            >
                              Create event
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger delete-event waves-effect waves-light"
                              data-dismiss="modal"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal Add Category */}
                    <div className="modal fade none-border" id="add-category">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title">
                              <strong>Add a category</strong>
                            </h4>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="row">
                                <div className="col-md-6">
                                  <label className="control-label">
                                    Category Name
                                  </label>
                                  <input
                                    className="form-control form-white"
                                    placeholder="Enter name"
                                    type="text"
                                    name="category-name"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label className="control-label">
                                    Choose Category Color
                                  </label>
                                  <select
                                    className="form-control form-white"
                                    data-placeholder="Choose a color..."
                                    name="category-color"
                                  >
                                    <option value="success">Success</option>
                                    <option value="danger">Danger</option>
                                    <option value="info">Info</option>
                                    <option value="pink">Pink</option>
                                    <option value="primary">Primary</option>
                                    <option value="warning">Warning</option>
                                  </select>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-default waves-effect"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger waves-effect waves-light save-category"
                              data-dismiss="modal"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END MODAL */}
                  </div>
                </div>
              </div>
              {/* /# card */}
            </div>
            {/* /# column */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Calender;
