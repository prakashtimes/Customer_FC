import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/index"
import Challenges from "./components/ChallengeCards/main"
import PopularChallenges from "./components/ChallengeCards/popularChallenge"
import banner from "./assets/img/banner.png"
import banner2 from "./assets/img/banner2.png"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <img src={banner} style={{width: '100%'}}/> 
      <Challenges/>
      <PopularChallenges />
      <img src={banner2} style={{width: '100%'}}/>
    </div>
  );
}

export default App;
