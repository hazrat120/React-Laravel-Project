import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import PageTitle from "../components/PageTitle";

function Payment() {
  return (
    <>
      <Header />
      <Menu />
      <PageTitle />

      <div className="content-body">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="setting-billing">
                <div className="list-group">
                  <div className="list-group-item">
                    <div className="form-group row">
                      <label className="col-lg-4 col-form-label">NAME</label>
                      <div className="col-lg-8">
                        <input
                          type="text"
                          className="form-control"
                          name="val-username"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-4 col-form-label">COUNTRY</label>
                      <div className="col-lg-8">
                        <select className="form-control">
                          <option selected="selected">India</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-4 col-form-label">STATE</label>
                      <div className="col-lg-8">
                        <select className="form-control">
                          <option selected="selected">Delhi</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-4 col-form-label">
                        TOWN/CITY
                      </label>
                      <div className="col-lg-8">
                        <select className="form-control">
                          <option selected="selected">Noida</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-4 col-form-label">
                        STREET ADDRESS
                      </label>
                      <div className="col-lg-8">
                        <input
                          type="text"
                          className="form-control"
                          name="val-add"
                          placeholder="Street 2/45 House No. 120"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-4 col-form-label">
                        PHONE NUMBER
                      </label>
                      <div className="col-lg-8">
                        <input
                          type="text"
                          className="form-control"
                          name="val-no"
                          placeholder="+91 123 456 7890"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-4 col-form-label">
                        EMAIL ADDRESS
                      </label>
                      <div className="col-lg-8">
                        <input
                          type="text"
                          className="form-control"
                          name="val-username"
                          placeholder="Johndoe@gmail.com"
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
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Payment;
