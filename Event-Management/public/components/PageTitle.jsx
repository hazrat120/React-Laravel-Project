

function PageTitle() {
  return (
    <>
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <h1>Elements</h1>
            </div>
            <div className="col-7">
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Elements
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageTitle;
