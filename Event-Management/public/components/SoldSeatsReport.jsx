function SoldSeats() {
  return (
    <>
      <div className="col-xl-3">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title m-b-15">TICKETS</h4>
            <div className="tickets text-center m-t-50">
              <div className="position-relative d-inline-block m-b-50">
                <div id="circle" />
                <div className="seat-content">
                  <h2>90</h2>
                  <span>Sold Seats</span>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default SoldSeats;
