import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'
import UsersList, { LoadData } from './components/UsersList'

export default [
    {
        ...Home,
        path: '/',
        exact: true
    },
    {
        path: '/RouteTest',
        component: () => 'SSR Route Success!'
    },
    {
        ...UsersList,
        path: '/users',
    }
]