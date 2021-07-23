import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
 
import Main from '../components/template/Main'
import UserCrud from '../components/user/UserCrud'
 
export default props =>
   <Switch>
       <Route exact path='/' component={Main} />
       <Route path='/users' component={UserCrud} />
       <Redirect from='*' to='/' />
   </Switch>