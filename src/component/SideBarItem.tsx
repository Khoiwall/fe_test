import React from 'react';
import MenuItem from './MenuItem';

interface SideBarItem {
    tabItem: any;
    menuActive: string;
}

function SideBarItem({
    tabItem,
    menuActive
}: SideBarItem) {
    return (
        <div className="sidebar_padding mb-11 sidebar_item">
            <div className="sidebar_title">
                <h1 className="uppercase">{tabItem.name}</h1>
            </div>
            {
                tabItem.tabChild.map((item: any, index: number) => {
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
    )
}
export default SideBarItem;