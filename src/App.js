//feature change
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Cart from './components/Cart'
import Filter from './components/Filter'
import Products from './components/Products'
import store from './store/store'
class App extends Component{

  render(){
      return (
        <Provider store={store}>
    <div className="grid-container">
      <header>
        <a href="/">React Shopping App</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter />
             <Products/>
          </div>
          <div className="sidebar">
              <Cart />
          </div>

        </div>
      </main>
      <footer>
        All Rights are reserved
      </footer>
    </div>
    </Provider>
  );
  }
}
  


export default App;
