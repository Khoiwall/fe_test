import React from 'react';

interface MenuItem {
    item: any,
    menuActive: string
}

function MenuItem({
    item,
    menuActive
}: MenuItem) {
    return (
        <div
            className={menuActive === item.name
                ? "py-2 px-3 pointer active menu_item rounded-lg relative"
                : "py-2 px-3 pointer menu_item rounded-lg relative"}
        >
            <div className="flex flex-justify-sb relative">
                <div className="flex flex-align-center">
                    <div className="menu_item_margin flex flex-align-center menu_item_logo text-gray-400" dangerouslySetInnerHTML={{ __html: item.icon }}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg> */}
                    </div>
                    <div className="menu_item_text text-gray-500">{item.name}</div>
                </div>
                {
                    item.announcement === undefined ? null
                        :
                        <div className="announcement">
                            <p className="uppercase">4</p>
                        </div>
                }
                {
                    item.child === null
                        ? null
                        :
                        <div className="menu_item_arrow text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                }
            </div>
        </div >
    )
}

export default MenuItem;