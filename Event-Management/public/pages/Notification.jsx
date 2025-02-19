import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import PageTitle from "../components/PageTitle";
import Sponser from "../components/Sponser";
import NotificationDraft from "../components/NotificationDraft";

function Notification() {
  return (
    <>
      <Header />
      <Menu />
      <PageTitle />

      <div className="content-body">
        <div className="container">
          <div className="row justify-content-between">
            <NotificationDraft />

            <Sponser />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Notification;
