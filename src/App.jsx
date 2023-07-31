import logo from './logo.svg';
import './App.css';
import Background from './background.jpg'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="left">
          <img src={logo} alt="logo" className='logo' />
          <ul className='nav-list'>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">For Teams</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <button className='button'>Try Free</button>
          <a href="">Buy Now</a>
          <div className='line'></div>
          <a href="">Login</a>
        </div>
      </div>
      <div className='main-bg'>
        <img src={Background} alt="background" className='bg-img' />
      </div>
      <div className="discription bg-blend-overlay">
        <div className='discription-head'>
          <h1>Move Work Forward</h1>
        </div>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button className='button-2'>Learn More</button>
      </div>
    </div>
  );
}

export default App;
