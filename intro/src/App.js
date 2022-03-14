import logo from './img/logo/logo.svg';
import logotitle from './img/logo/logotitle.svg';
import logoscrollup from './img/logo/logoscrollup.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import appStyle from './App.module.css';

function App() {
  return (
  <nav>
    <header  className={appStyle.hd+ ' container'}>
      <div className= 'd-flex align-items-center justify-content-between'>
        <h1 className={appStyle.logo+' d-flex py-3'}>
          <a href='/' className='' >
            <img src={logotitle}></img></a>
          <a href='/' className= ''>  
            <img src={logoscrollup}></img>
            <img src={logo}></img>
          </a>
        </h1> 
      <ul className={appStyle.d1ul + ' d-flex'}>
        <li><a href=''>ABOUT</a></li>
        <li><a href=''>PORTFOLIO</a></li>
        <li><a href=''>CONTACT</a></li>
      </ul>
    </div>
    </header>
  </nav>
  );
}

export default App;
