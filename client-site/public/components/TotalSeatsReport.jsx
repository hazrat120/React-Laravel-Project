function TotalSeatsReport() {
  return (
    <>
      <div className="col-xl-3">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title m-b-15">Total Seats</h4>
            <div className="total-seats text-center m-t-50">
              <div className="position-relative d-inline-block m-b-50">
                <div id="circle1" />
                <div className="seat-content">
                  <h2>350</h2>
                  <span>Total Sells</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h6>Total Seats</h6>
                  <h4 className="color-primary">$5500.00</h4>
                </div>
                <div className="col-6">
                  <h6>Sold Seats</h6>
                  <h4 className="color-primary">$6550.00</h4>
                </div>
              </div>
            </div>
            <h5 className="m-t-30 m-b-15">
              Sold Seats <span className="pull-right">95</span>
            </h5>
            <div className="progress">
              <div
                className="progress-bar bg-danger wow animated progress-animated"
                style={{ width: "85%", height: 4 }}
                role="progressbar"
              >
                <span className="sr-only">60% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalSeatsReport;
