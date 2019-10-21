import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Menu,Icon} from 'antd'
import { MenuItem } from 'rc-menu';
let navData=[
    {name:'首页',path:'/home'},
    {name:'设置',path:'/setting'},
    {name:'用户管理',
    path:'/user',
    children:[
        {name:'用户列表',path:'/user/list'},
        {name:'用户删除',
        path:'/user/del',
        children:[
            {name:'用户删除1',path:'/user/list'},
            {name:'用户山除2',
            path:'/user/list',
            children:[
                {name:'用户删除1',path:'/user/list'},
                {name:'用户山除2',path:'/user/list'},
            ]
        },
        ]
    },
    ]
    },
    ]
const {SubMenu} = Menu
class CustomeNav extends Component{
    renderItem(data){
        return data.map((item,index)=>{
            if(item.children){
                // 多级
                return(
                    <SubMenu title={item.name}>
                        {this.renderItem(item.children)}
                    </SubMenu>
                )
            }else{
                return <Menu.Item>{item.name}</Menu.Item>
            }
        })
    }
   render(){
       console.log(this,'自定义导航')
    return(
        <div className='login'>
        <Menu style={{ width: 256 }} mode="vertical">
        {this.renderItem(navData)}
                {/* <Menu.Item >首页</Menu.Item>
                <Menu.Item >设置</Menu.Item>
                <SubMenu title='用户管理'>
                <Menu.Item >用户列表</Menu.Item>
                <Menu.Item >用户删除</Menu.Item>
                </SubMenu>
                <SubMenu title='权限管理'>
                <Menu.Item >权限列表</Menu.Item>
                <Menu.Item >权限删除</Menu.Item>
                </SubMenu> */}
                {/* { navData.map((item,index)=>{
                    if(item.children){
                        // 有二级

                    }
                    return(
                        <Menu.Item>{item.name}</Menu.Item>
                    )
                })

                }
              */}
                
                
            </Menu>,
        </div>
    )
    } 
}
export default withRouter( CustomeNav)