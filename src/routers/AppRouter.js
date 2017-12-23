import React from 'react'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import Header from '../components/Header'
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={LoginPage} exact={true} />
				<Route path="/dashboard" component={DashboardPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
)

export default AppRouter
