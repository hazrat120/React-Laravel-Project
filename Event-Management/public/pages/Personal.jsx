import Header from "../components/Header";
import Menu from "../components/Menu";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import PersonalForm from "../components/PersonalForm";
import Interest from "../components/Interest";

function Personal() {
  return (
    <>
      <Header />
      <Menu />
      <PageTitle />

      <div className="content-body">
        <div className="container">
          <div className="row">
            <PersonalForm />

            <Interest />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Personal;
