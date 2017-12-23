import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../actions/auth'

const Header = ({ startLogout }) => (
	<header className="header">
		<div className="content-container">
			<div className="header__content">
				<NavLink
					className="header__title"
					to="/dashboard"
					activeClassName="is-active"
					exact={true}
				>
					<h1>React App</h1>
				</NavLink>
				<button className="button button--link" onClick={startLogout}>
					Logout
				</button>
			</div>
		</div>
	</header>
)

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
