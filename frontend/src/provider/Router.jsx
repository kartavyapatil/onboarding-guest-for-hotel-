import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Loginguest from '../Loginguest'
import Index from "../homepage/Index"
import Registerguest from '../Registerguest'
import Error from '../Error'
import Loginadmin from '../Loginadmin'
import Guestform from '../Guestform'
import ProtectedRoute from './ProtectedRoute'
import RegisterAdmin from '../RegisterAdmin'
export const Router=createBrowserRouter([
    {
        path:"/",
        Component:App,
        children:[
            {
                path:'/',
                Component:Index
                
            },{
                path:'/guestdtails',
                // Component:Guestform
                Component: () => (
                    <ProtectedRoute allowedRoles={['MainAdmin', 'GuestAdmin']}>
                      <Guestform/>
                    </ProtectedRoute>
                  ),
            },
        ]
    },{
        path:"/loginguest",
        Component:Loginguest
    },{
        path:'/registerguest',
        Component:Registerguest
    },{
        path:'*',
        Component:Error
    },{
        path:'/Loginadmin',
        Component:Loginadmin
    },{
        path:'/registeradmin',
        Component: () => (
            <ProtectedRoute allowedRoles={['MainAdmin', 'GuestAdmin']}>
              <RegisterAdmin/>
            </ProtectedRoute>
          ),
    }
])
