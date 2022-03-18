import './App.css';
import Profile from './components/profile';

function App() {
  function repeater() { 
    window.location.reload()
   }
  return (
    <>
    <Profile/>
    <p className='nextbutton' onClick={repeater}>New Profile</p>
    </>
  );
}

export default App;
