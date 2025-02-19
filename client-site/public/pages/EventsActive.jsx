import EventsCard from "../components/EventsCard";
import Header from "../components/Header";
import Menu from "../components/Menu";
import PageTitle from "../components/PageTitle";
import Sponser from "../components/Sponser";
import Footer from "../components/Footer";

function EventsActive() {
  return (
    <>
      <Header />
      <Menu />
      <PageTitle />

      <div className="content-body">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-8">
              <div className="row">
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
              </div>
            </div>
            <Sponser />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EventsActive;
