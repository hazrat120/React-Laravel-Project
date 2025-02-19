function OnlineSellsReport() {
  return (
    <>
      <div className="col-xl-3">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Online Sells</h4>
            <div className="row">
              <div className="col">
                <h6>Rough Cost</h6>
                <h4 className="color-primary">$5500.00</h4>
              </div>
            </div>
            <div
              id="simple-line-chart2"
              className="ct-chart ct-golden-section"
            />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">EMAIL COMPAIGN</h4>
            <div className="campaign-progress">
              <p className="m-t-15 m-b-5">
                Send Emails <span className="pull-right">+165</span>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-danger wow animated progress-animated"
                  style={{ width: "85%", height: 4 }}
                  role="progressbar"
                >
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
              <p className="m-t-15 m-b-5">
                Clicks <span className="pull-right">+355</span>
              </p>
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
      </div>
    </>
  );
}

export default OnlineSellsReport;
