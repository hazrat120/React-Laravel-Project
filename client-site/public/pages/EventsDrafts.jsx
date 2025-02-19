import EventsDraft from "../components/EventsDraft";
import Header from "../components/Header";
import Menu from "../components/Menu";
import PageTitle from "../components/PageTitle";
import Sponser from "../components/Sponser";
import Footer from "../components/Footer";

function EventsDrafts() {
  return (
    <>
      <Header />
      <Menu />
      <PageTitle />
      <div className="content-body">
        <div className="container">
          <div className="row justify-content-between">
            <EventsDraft />
            <Sponser />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventsDrafts;
