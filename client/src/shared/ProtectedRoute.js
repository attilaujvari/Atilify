import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import ErrorBoundary from '../shared/ErrorBoundary.js'


const ProtectedRoute = props => {
    const { path, redirectTo,  component: Component, ...rest } = props
    return (
        props.token
            ? <Route path={path} render={rProps =>
                    <Component {...rProps} {...rest}/>
            } />
            : <Redirect to={redirectTo} />
    )
}


export default ProtectedRoute