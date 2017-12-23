// import './playground/play'
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { login, logout } from './actions/auth'
import './styles/styles.scss'

// airbnb datepicker css
import 'normalize.css/normalize.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import { firebase } from './firebase/firebase'
import LoadingPage from './components/LoadingPage'

const store = configureStore()

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

// Make sure rendering app once
let hasRendered = false
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById('app'))
		hasRendered = true
	}
}

renderApp()

// ReactDOM.render(<LoadingPage />, document.getElementById('app'))

// // firebase auth
// firebase.auth().onAuthStateChanged((user) => {
// 	if (user) {
// 		console.log('login', 'uid:', user.uid)
// 		store.dispatch(login(user.uid))
// 		renderApp()

// 		if (history.location.pathname === '/') {
// 			history.push('/dashboard')
// 		}
// 	} else {
// 		console.log('logout')
// 		store.dispatch(logout())
// 		renderApp()

// 		history.push('/')
// 	}
// })
