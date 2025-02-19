import DashbordHome from "../public/pages/Dashbord";
import EventsActive from "../public/pages/EventsActive";
import EventsDrafts from "../public/pages/EventsDrafts";
import MyEvent from "../public/pages/MyEvent";
import Peoples from "../public/pages/Peoples";
import Inbox from "../public/pages/Inbox";
import Chat from "../public/pages/Chat";
import Calender from "../public/pages/Calender";
import Profile from "../public/pages/Profile";
import Payment from "../public/pages/Payment";
import Notification from "../public/pages/Notification";
import Personal from "../public/pages/Personal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashbordHome />} />
          <Route path="/active" element={<EventsActive />} />
          <Route path="/draft" element={<EventsDrafts />} />
          <Route path="/myevent" element={<MyEvent />} />
          <Route path="/peoples" element={<Peoples />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
