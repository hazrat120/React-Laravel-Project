import AttenCreated from "../components/AttenCreated";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import PageTitle from "../components/PageTitle";
import ProfileCard from "../components/ProfileCard";

function Profile() {
  return (
    <>
      <Header />
      <Menu />
      <PageTitle />

      <div className="content-body">
        <div className="container">
          {/* <div class="row"> */}
          {/* <div class="col-xl-12"> */}
          {/* Modal */}
          <div className="event-modal event-profile">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="row">
                  <ProfileCard />

                  <AttenCreated />
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
