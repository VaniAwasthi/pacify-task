import './App.css';

import Header from "./Components/Header/Header"
import NatureOrganic from "./Components/NatureOrganic/NatureOrganic"
import WelcomeNature from "./Components/WelcomNature/WelcomeNature"
import ProudlyPresented from "./Components/ProudlyPresented/ProudlyPresented"
import NewsLetter from "./Components/NewsLetter/NewsLetter"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="container">
     <Header/>
     <NatureOrganic/>
     <WelcomeNature/>
     <ProudlyPresented/>
     <NewsLetter/>
     <Footer/>
    </div>
  );
}

export default App;
