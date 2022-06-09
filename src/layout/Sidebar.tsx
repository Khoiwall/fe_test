import React, { useState } from 'react';
import Logo from '../asset/img/logo.jpg'
import MenuItem from '../component/MenuItem';
import SidebarItem from '../component/SideBarItem';

import { dashboards, tab } from '../contant/tab';

function SideBar() {
    const [menuActive, setMenuActive] = useState('Dashboards');
    return (
        <div className="bg-white">
            <div className="sidebar_logo_padding mb-6">
                <div className="flex relative sidebar_logo_before">
                    <div className="sidebar_logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="sidebar_logo_text">
                        <h2>Masmas</h2>
                    </div>
                    <div className="sidebar_logo_btn">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    </div>
                </div>
            </div>
            <div className="sidebar_padding mb-11">
                {
                    dashboards.map((item: any, index: number) => {
                        return (
                            <>
                                {
                                    item.child === null ?
                                        <MenuItem item={item} menuActive={menuActive} />
                                        :
                                        <>
                                            <MenuItem item={item} menuActive={menuActive} />
                                            <div className="menu_item_child">
                                                {

                                                    item.child.map((itemChild: any, index: number) => {
                                                        return (
                                                            <MenuItem item={itemChild} menuActive={menuActive} />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </>
                                }
                            </>
                        )
                    })
                }
            </div>
            {
                tab.map((tabItem: any, index: number) => {
                    return (
                        <SidebarItem tabItem={tabItem} menuActive={menuActive} />
                    )
                })
            }
        </div>
    )
}

export default SideBar;