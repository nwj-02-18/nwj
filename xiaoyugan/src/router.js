import React,{Component} from 'react'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
import Login from './Component/login'
import Admin from './Component/admin'
import User from './Component/user'
import Home from './Component/home'
import CustomeNav from './Component/CustomNav'
class RootRouter extends Component{
   render(){
   return(
    <HashRouter>
    {/* 导航 */}
    <CustomeNav></CustomeNav>
    {/* 路由渲染 */}
    <Switch>
        <Redirect exact from='/' to='login'></Redirect>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' render={()=>{
            return(
                // 希望路由都在router.js里面，所以写嵌套路由
                <Admin>
                    <Route path='/admin/home' component={Home}></Route>
                    <Route path='/admin/user' component={User}></Route>
                </Admin>
            )
        }}></Route>
    </Switch>
</HashRouter>
   )
   } 
}
export default RootRouter