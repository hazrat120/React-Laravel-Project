import Header from "../components/Header";
import Menu from "../components/Menu";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import InboxMessage from "../components/InboxMessage";
import QuickChat from "../components/QuickChat";

function Inbox() {
  return (
    <>
      <Header />
      <Menu />
      <PageTitle />

      <div className="content-body">
        <div className="container">
          <div className="row justify-content-between">
            <InboxMessage />

            <QuickChat />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Inbox;
