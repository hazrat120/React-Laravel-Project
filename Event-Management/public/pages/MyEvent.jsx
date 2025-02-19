import Header from "../components/Header";
import Menu from "../components/Menu";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import MyEventCard from "../components/MyEventCard";
import Sponser from "../components/Sponser";

function MyEvent() {
  return (
    <>
      <Header />
      <Menu />
      <PageTitle />

      <div className="content-body">
        <div className="container">
          <div className="row justify-content-between">
            <MyEventCard />

            <Sponser />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MyEvent;
