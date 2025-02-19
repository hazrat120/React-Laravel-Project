function PersonalForm() {
  return (
    <>
      <div className="col-xl-9">
        <div className="setting-personal">
          <div className="list-group">
            <div className="list-group-item">
              <div className="form-group row">
                <label
                  className="col-lg-3 col-form-label"
                  htmlFor="val-username"
                >
                  NAME
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="val-username"
                    name="val-username"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row">
                <label className="col-lg-3 col-form-label">EMAIL</label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    name="val-email"
                    placeholder="Johndoe@gmail,com"
                  />
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row">
                <label className="col-lg-3 col-form-label">PASSWORD</label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    name="val-email"
                    placeholder="Enter new password"
                  />
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row">
                <label className="col-lg-3 col-form-label">ABOUT</label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    name="val-email"
                    placeholder="Describe your self here..."
                  />
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row">
                <label className="col-lg-3 col-form-label">LANGUAGE</label>
                <div className="col-lg-3">
                  <select id="inputState" className="form-control">
                    <option selected="selected">English</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row">
                <label className="col-lg-3 col-form-label">LOCATION</label>
                <div className="col-lg-6">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control b-r-0"
                      defaultValue="Search location"
                    />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-crosshairs" />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 text-center">
                  <button className="btn btn-secondary">EDIT</button>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row">
                <label className="col-lg-3 col-form-label">WEBSITE</label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    name="val-email"
                    placeholder="www.yoursite.com"
                  />
                </div>
              </div>
            </div>
            <div className="list-group-item text-center">
              <button className="btn btn-secondary">SAVE ADDRESS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalForm;
