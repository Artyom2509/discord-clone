import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import userStore from 'stores/userStore';

export default function AuthRoute({ component: Component, ...otherProps }) {
	const { current } = userStore();
	const storage = JSON.parse(localStorage.getItem('user-storage'));

	return (
		<Route
			{...otherProps}
			render={(props) =>
				current || storage?.state?.current ? (
					<Component {...props} />
				) : (
					<Redirect to="/login" />
				)
			}
		/>
	);
}
