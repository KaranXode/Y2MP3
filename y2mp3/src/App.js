// import bg from '../src/Assets/Image/cool-background.png';
import "./App.css";
import Header from "./Components/Header/Header";
import Infomation from "./Components/Infomation/Infomation";
import Y2MP3 from "./Components/Y2/Y2MP3";
import bg from "../src/Assets/Image/cool-background.png";
import Footer from "./Components/Footer/Footer";
// import ConfRoute from "./Routes/ConfRoute";

function App() {
  return (
    <>
      {/* <ConfRoute/> */}
      <div className="app">
        <Header />
      
        <div>
          {/* <img
          src="https://designstripe-secure.imgix.net/scene-snapshots/05182df4-9a77-48f5-8b88-fb1b5baa7f15/1644076558451/default?auto=format&fit=clip&h=850&mark=%2Fwatermark.png&markfit=max&markalign=middle%2Ccenter&markw=1&markh=1&s=5f25ba350d619e9a8869f39f66801102"
          alt="bg"
       / > */}
        </div>
        <Y2MP3 />
        <Infomation />

        {/* <img src={bg}  alt="logo" /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
