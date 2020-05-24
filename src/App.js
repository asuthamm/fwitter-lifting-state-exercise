import React from 'react'
import DarkModeWrapper from './DarkModeWrapper'
import Header from './Header'
import TweetsContainer from './TweetsContainer'

class App extends React.Component{
  state = {
    darkMode: false
  }

  toggleDarkMode = () => {
    this.setState(prevState => {return {darkMode: !prevState.darkMode}})
  }

  render(){
    return (
    <DarkModeWrapper darkMode={this.state.darkMode}>
      <Header toggleDarkMode = {this.toggleDarkMode} darkMode = {this.state.darkMode} />
      <TweetsContainer />
    </DarkModeWrapper>
  )}
}

export default App