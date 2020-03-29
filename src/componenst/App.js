import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from "../store"
import Count from './Count'
import Control from './control'

class App extends Component {
  render() {


    return (
      <Provider store={store}>
        <div className="App">
          <h1>Welcome to Redux tutorial</h1>
        </div>
        <Count />
        <Control />
      </Provider>
    )
  }
}

export default App


// Store => will hold the application's data/state

// Reducer : Store can not keep data directly. So need helper functions one or more.
// this helper function name is reducer

// A function who returns a specefic amount of state or data

// Actions: action means events occured. {type: 'something, payload: data}

// Dispatch: When data will update then reducer can work with the help of dispatch and through to store
// That means reducer will be called

// Subscriber means components. Each component will subscribe to store. As a result if store
// get any update then all child components will get update.


// TOdo
// 1. Create Reducer

// 2. Create store with the help of reducer

// 3. Now we can subscribe

// dispatch(actions)


// React will be responsible only view layer
// Redux will be responsible only data layer
// React-Redux communicated between with react and redux