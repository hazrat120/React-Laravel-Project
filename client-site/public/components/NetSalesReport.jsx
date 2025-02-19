function NetSales() {
  return (
    <>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Net Sales</h4>
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
            <div
              id="simple-line-chart"
              className="ct-chart ct-golden-section m-t-15"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NetSales;
