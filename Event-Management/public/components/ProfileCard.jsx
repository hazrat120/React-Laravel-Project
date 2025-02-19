function ProfileCard() {
  return (
    <>
      <div className="col-xl-8 p-r-0">
        <div className="modal-right">
          <div className="media personal-profile">
            <img
              className="m-r-30 img-fluid"
              src="../../src/assets/images/peoples/ppl.png"
              alt="placeholder image"
            />
            <div className="media-body">
              <h3 className="mt-0">Anamika</h3>
              <p className="denger">
                <i className="fa fa-map-marker" />
                Location
              </p>
              <p className="denger">www.yoursite.com</p>
              <p>Language : English</p>
            </div>
            <button className="btn btn-secondary">EDIT</button>
          </div>
          <div className="modal-about-area">
            <h3>ABOUT</h3>
            <p>
              Cras sed orci sodales enim porttitor feugiat et eget mi. Donec
              lorem dolor, ornare eget magna id, finibus sollicitudin augue.
              Nunc eleifend ullamcorper enim, eget rhoncus leo malesuada sed.
              Nam orci metus, volutpat eget est posuere, egestas suscipit nisi.
              Proin non turpis mollis, fermentum urna in, ornare leo. Nunc
              sollicitudin eu metus eget posuere.
            </p>
            <i className="fa fa-facebook" />
            <i className="fa fa-twitter" />
            <i className="fa fa-instagram" />
          </div>
          <div className="modal-tags">
            <h3>INTEREST</h3>
            <button className="btn btn-outline-secondary btn-rounded">
              FOOD
            </button>
            <button className="btn btn-outline-secondary btn-rounded">
              MUSIC
            </button>
            <button className="btn btn-outline-secondary btn-rounded">
              TECHNOLOGY
            </button>
            <button className="btn btn-outline-secondary btn-rounded">
              AWARDS
            </button>
          </div>
          <div className="modal-footer-area">
            <div className="row justify-content-between">
              <div className="col-auto">
                <p>
                  <i className="fa fa-check-circle" />
                  ACTIVITY
                </p>
              </div>
              <div className="col-auto">
                <a href="#">
                  <i className="fa fa-exclamation-triangle" />
                </a>
                <a href="#">
                  <i className="fa fa-trash" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
