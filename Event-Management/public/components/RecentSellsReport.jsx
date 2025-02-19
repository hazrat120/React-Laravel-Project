

export default function RecentSells() {
  return (
    <>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title m-b-15">RECENT SELLS</h4>
            <div className="upcoming-events">
              <div className="row">
                <div className="col-xl-4">
                  <h6>This Week</h6>
                  <h4 className="color-primary">$5500.00</h4>
                </div>
                <div className="col-xl-4">
                  <h6>Previous Week</h6>
                  <h4 className="color-primary">$6550.00</h4>
                </div>
              </div>
              <div className="table-responsive m-t-15">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <img src="./src/assets/images/thumb/1.png" alt />
                      </td>
                      <td>
                        John Doe
                        <a href="#"> Event Name Here</a>
                      </td>
                      <td>X1</td>
                      <td>165</td>
                      <td>
                        <div className="dropdown custom-dropdown">
                          <div data-toggle="dropdown">
                            <i className="fa fa-ellipsis-v" />
                          </div>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="./src/assets/images/thumb/1.png" alt />
                      </td>
                      <td>
                        John Doe
                        <a href="#"> Event Name Here</a>
                      </td>
                      <td>X1</td>
                      <td>165</td>
                      <td>
                        <div className="dropdown custom-dropdown">
                          <div data-toggle="dropdown">
                            <i className="fa fa-ellipsis-v" />
                          </div>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="./src/assets/images/thumb/1.png" alt />
                      </td>
                      <td>
                        John Doe
                        <a href="#"> Event Name Here</a>
                      </td>
                      <td>X1</td>
                      <td>165</td>
                      <td>
                        <div className="dropdown custom-dropdown">
                          <div data-toggle="dropdown">
                            <i className="fa fa-ellipsis-v" />
                          </div>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="./src/assets/images/thumb/1.png" alt />
                      </td>
                      <td>
                        John Doe
                        <a href="#"> Event Name Here</a>
                      </td>
                      <td>X1</td>
                      <td>165</td>
                      <td>
                        <div className="dropdown custom-dropdown">
                          <div data-toggle="dropdown">
                            <i className="fa fa-ellipsis-v" />
                          </div>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
