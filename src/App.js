import Calculator from "./components/Calculator";
import logo from "./images/logo.svg";
function App() {
  return (
    <main className='main'>
      <div className='main__logo'>
        <img src={logo} alt='logo' />
      </div>
      <Calculator />
    </main>
  );
}

export default App;
