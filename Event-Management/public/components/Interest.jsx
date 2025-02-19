function Interest() {
  return (
    <>
      <div className="col-xl-3">
        <div className="event-sideber">
          <h4>INTEREST</h4>
          <div className="event-sideber-search setting">
            <form action="#" method="post">
              <input
                type="text"
                className="form-control"
                placeholder="Search Location"
              />
              <i className="fa fa-search" />
            </form>
          </div>
          <div className="sideber-meta">
            <button className="btn btn-outline-secondary">FOOD</button>
            <button className="btn btn-outline-secondary">AWARDS</button>
            <button className="btn btn-outline-secondary">SCIENCE</button>
            <button className="btn btn-outline-secondary">TECHNOLOGY</button>
          </div>
          <h4>ADD SOCIAL ACCOUNT</h4>
          <div className="row form-material m-b-30">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                placeholder="Http://"
              />
            </div>
          </div>
          <button className="btn btn-secondary">ADD</button>
          <div className="sideber-social">
            <h4 className=" m-t-30">ADDED -</h4>
            <i className="fa fa-facebook" />
            <i className="fa fa-twitter" />
            <i className="fa fa-instagram" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Interest;
