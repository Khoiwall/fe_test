import React from 'react';

interface ProductItem {
    item: any;
}

function ProductItem({
    item
}: ProductItem) {
    return (
        <div className="pl-6 product_item">
            <div className="grid grid-cols-5">
                <div className="product flex flex-align-center">
                    <div className="mr-2.5">
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div>
                        <p className="text-gray-prize-2 font-semibold">{item.name}</p>
                        <span className="text-gray-prize-3 font-normal">{item.platform}</span>
                    </div>
                </div>
                <div className="category flex flex-align-center">
                    <div className="mr-2" dangerouslySetInnerHTML={{ __html: item.icon }}>
                    </div>
                    <p className="text-gray-prize-2 font-normal">{item.category}</p>
                </div>
                <div className="payment flex flex-align-center">
                    <div>
                        <div className="flex money">
                            {
                                item.orderStatus === 2 ?
                                    <span className="text-gray-prize-3">0</span>
                                    : <p className="text-color-default font-semibold">${item.payment}</p>
                            }
                            {
                                item.money === null ? null : <span className="text-gray-prize-3">/{item.money}</span>
                            }
                        </div>
                        <p className="text-gray-prize-3">Partially Paid</p>
                    </div>
                </div>
                <div className="order_status flex flex-align-center">
                    {
                        item.orderStatus === 0
                            ?
                            <div className="py-0.5 px-2 bg-default-opacity rounded status">
                                <p className="text-color-default uppercase font-medium text-center">Confirmed</p>
                            </div>
                            : item.orderStatus === 1 ?
                                <div className="py-0.5 px-2 bg-green-1 rounded status">
                                    <p className="text-color-green-1 uppercase font-medium text-center">Completed</p>
                                </div>
                                :
                                <div className="py-0.5 px-2 bg-red-1 rounded status">
                                    <p className="text-color-red-1 uppercase font-medium text-center">Cancelled</p>
                                </div>
                    }
                </div>
                <div className="actions flex flex-align-center">
                    <div className="icon_dots text-gray-prize-3 text-center pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;