import React from 'react'
import { connect } from 'react-redux'
import './App.scss'
import Navigation from './Navigation'
import Bills from './Bills'
import People from './People'
import Button from './Button'
import { loadScript } from '../GoogleAuth'
import { requestSignIn } from '../store/actions'
import actions from '../store/actions'

loadScript()

const App = ({ session, dispatch }) => (
  <div className="app">
    {session.token
    ? <div className="wrapper">
        <Navigation />
          <Bills />
        <People />
      </div>
    : <div className="center">
        <Button
          light
          loading={session.waiting}
          onClick={() => dispatch(actions.requestSignIn())}
          title="Sign in with Google"
        />
      </div>}
  </div>
)

export default connect(
  ({ session }) => ({ session }),
)(App)