import ChatList from "../components/ChatList";
import Conversasion from "../components/Conversasion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import PageTitle from "../components/PageTitle";

function Chat() {
  return (
    <>
      <Header />
      <Menu />
      <PageTitle />

      <div className="content-body">
        <div className="container">
          <div className="row">
            <ChatList />

            <Conversasion />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Chat;
