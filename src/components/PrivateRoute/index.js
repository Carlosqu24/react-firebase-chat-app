import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext';

export const PrivateRoute = ({component: Component, ...rest}) => {

      let auth = false;

      const { user } = useContext(AuthContext);

      console.log(user)
      console.log(user.emailVerified)

      return (
            <Route {...rest}>
                  {
                        user ? <Component />
                             : <Redirect to="signin" />
                  }
            </Route>
      )
}
