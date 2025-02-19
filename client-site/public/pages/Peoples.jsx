import Header from "../components/Header";
import Menu from "../components/Menu";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import LetterSearch from "../components/LetterSearch";
import People from "../components/People";
import Sponser from "../components/Sponser";

function Peoples() {
  return (
    <>
      <Header />
      <Menu />
      <PageTitle />

      <div className="content-body">
        <div className="container">
          <div className="row justify-content-between">
            <LetterSearch />

            <People />

            <Sponser />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Peoples;
