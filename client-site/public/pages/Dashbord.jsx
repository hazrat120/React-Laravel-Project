import Header from "../components/Header";
import Menu from "../components/Menu";
import NetSalesReport from "../components/NetSalesReport";
import SoldSeatsReport from "../components/SoldSeatsReport";
import UpcomingEventsReport from "../components/UpcomingEventsReport";
import RecentSellsReport from "../components/RecentSellsReport";
import TotalSeatsReport from "../components/TotalSeatsReport";
import OnlineSellsReport from "../components/OnlineSellsReport";
import Footer from "../components/Footer";

function Dashbord() {
  return (
    <>
      <Header />
      <Menu />
      <div className="content-body">
        <div className="container">
          <div className="row">
            <NetSalesReport />
            <SoldSeatsReport />
            <UpcomingEventsReport />
          </div>
          <div className="row">
            <RecentSellsReport />
            <TotalSeatsReport />
            <OnlineSellsReport />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashbord;
