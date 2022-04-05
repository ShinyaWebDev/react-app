
import profileImage from './img/Shinya_Profile.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Shinya Yoshida</h2>
      <img src={profileImage} alt="profile-image" className='profileImg'/>
      
    </div>
  );
}

export default App;
