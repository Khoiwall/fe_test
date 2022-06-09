import React, { useState } from 'react';
import prize from '../asset/img/prize.jpg';
import { Slider } from '@mui/material';


import { transactionIcon, ovals_icon, transactionIcon1 } from '../contant/iconFigma'

function LayoutOne() {
    const [name, setName] = useState('Katie');
    const [moneyPrize, setMoneyPrize] = useState(48.9);
    const [percent, setPercent] = useState(78);

    return (
        <div className="grid grid-cols-3 gap-7">
            <div>
                <div className="prize bg-white rounded-md mb-6">
                    <div className="pl-6 pt-5">
                        <div className="flex">
                            <div className="w-f">
                                <div className="mb-5">
                                    <h2 className="text-gray-prize-1 font-thin text-sm italic mb-1">Congratulations {name}!</h2>
                                    <p className="text-gray-prize-2 text-sm">Best seller of the month</p>
                                </div>
                                <div className="mb-2.5">
                                    <h2 className="text-color-default italic font-thin text-2xl">${moneyPrize}k</h2>
                                    <p className="text-gray-prize-3 text-sm">78% of target</p>
                                </div>
                                <div className="mb-5 bg-default rounded inline-block py-2 px-4 pointer text-white">
                                    <span>View Sales</span>
                                </div>
                            </div>
                            <div className="flex prize_img flex-align-end flex-justify-end w-f pr-8">
                                <img src={prize} alt="prize" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 prize_gap">
                    <div className="bg-white rounded-md pt-5 pl-5 relative">
                        <div className="icon_dots absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>
                        <div className="mb-4" dangerouslySetInnerHTML={{ __html: transactionIcon }}>
                        </div>
                        <div className="mb-3">
                            <h2 className="text-gray-prize-2 font-semibold text-sm">Order</h2>
                            <h2 className="text-gray-prize-3 text-xl italic font-thin">$1,286</h2>
                        </div>
                        <div className="flex flex-align-center mb-4">
                            <div className="icon_arrow_down flex flex-align-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                            <div className="ml-1.5 flex flex-align-center">
                                <span className="text-sm uppercase font-medium text-red-600">-13.24%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white pt-3.5 pl-5 rounded-md ">
                        <div className="mb-2">
                            <h2 className="text-base text-gray-prize-2 font-semibold">Sales</h2>
                        </div>
                        <div className="mb-1.5">
                            <h2 className="text-2xl text-gray-prize-4 italic font-thin">428k</h2>
                        </div>
                        <div className="mb-4 prize_badge rounded-sm">
                            <div className="py-px px-2">
                                +34%
                            </div>
                        </div>
                        <div className="mb-4">
                            <div>
                                <p className=" prize_mb_3 text-gray-prize-3 text-sm">Sales Target</p>
                                <div className="flex flex-align-center">
                                    <Slider
                                        className="prize_slider"
                                        defaultValue={percent}
                                        valueLabelDisplay="auto"
                                    />
                                    <p className="ml-2 mb-0 text-gray-prize-2 text-sm">{percent}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white pt-3.5 pl-5 rounded-md relative">
                        <div className="mb-3">
                            <h2 className="text-base text-gray-prize-2 font-semibold">Expenses</h2>
                        </div>
                    </div>
                    <div className="bg-white rounded-md pt-5 pl-5 relative">
                        <div className="icon_dots absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>
                        <div className="mb-4" dangerouslySetInnerHTML={{ __html: transactionIcon1 }}>
                        </div>
                        <div className="mb-3">
                            <h2 className="text-gray-prize-2 font-semibold text-sm">Transactions</h2>
                            <h2 className="text-gray-prize-3 text-xl italic font-thin">$14,854</h2>
                        </div>
                        <div className="flex flex-align-center mb-4">
                            <div className="icon_arrow_down flex flex-align-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </div>
                            <div className="ml-1.5 flex flex-align-center">
                                <span className="text-sm uppercase font-medium text-emerald-300">+28.14%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>1</div>
            <div>1</div>
        </div>
    )
}

export default LayoutOne;