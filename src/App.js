import './App.css';
import Profile from './components/profile';

function App() {
  function repeater() { 
    window.location.reload()
   }
  return (
    <>
    <Profile/>
    <p className='nextbutton' onClick={repeater}>New Profile {'>>'}</p>
    <div className='atagholder'>
    <a href='https://www.linkedin.com/in/haseebqureshiishere' className='credits'>Developers Profile  &lt; / &gt;</a>
    </div>
    </>
  );
}

export default App;
