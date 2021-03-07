import logo from './logo.svg';
import './App.css';

import FacebookLogin from 'react-facebook-login';

function App() {
  const responseFacebook = (response) => {
    console.log(response);
  }
  return (
    <div className="App">
      <header className="App-header">
        <FacebookLogin
          appId="717389648955367"
          autoLoad={true}
          fields="name,email,picture"
          scope="pages_show_list,instagram_basic,ads_management,business_management,instagram_content_publish,pages_read_engagement"
          // onClick={componentClicked}
          callback={responseFacebook} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
