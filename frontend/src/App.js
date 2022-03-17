import './App.css';
import  { useState, useEffect } from 'react';
import logoBtc from './images/bitcoin.png'
import logoEth from './images/ethereum.png'

const reloadTime = 30000;

function App() {
  var [[ethValue, btcValue], setEthBtc] = useState(["", ""]);
  var [first, setFirst] = useState(true);

  const setCrypto = () => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/ether")
      .then(res => res.json())
      .then(eth => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/bitcoin")
        .then(res => res.json())
        .then(btc => {
          setEthBtc([eth, btc]);
        });
      });
  }
  
  const changeState = () => {
    setFirst(false);
  }

  useEffect(() => {
    if (first) {
      changeState();
      setCrypto();
    }
    const interval = setInterval(() => {
      setCrypto();
    }, reloadTime);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <div className='crypto'>
        <br/>
        <div className='title'>
          <h1>Crypto values</h1>
          <p>Values are reloaded every {reloadTime / 1000} secondes</p>
        </div>
        <table className='table'>
          <tbody>
            <tr>
              <th>
                <div className='center'>
                  <img alt='ethereum icon' width={25} src={logoEth}></img><p className='title'>Ethereum :</p>
                </div>
              </th>
              <th>
                <div className='center'>
                  <img alt='bitcoin icon' width={30} src={logoBtc}></img><p className='title'>Bitcoin :</p>
                </div>
              </th>
            </tr>
            <tr>
              <td>
                <div className='body'>
                  {ethValue}
                </div>
              </td>
              <td>
                <div className='body'>
                  {btcValue}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
