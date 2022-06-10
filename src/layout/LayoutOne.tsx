import React, { useState } from 'react';
import prize from '../asset/img/prize.jpg';
import avatar from '../asset/img/avatar.jpg';
import macbook from '../asset/img/macbook.png';
import avatar1 from '../asset/img/avatar1.jpg';
import avatar2 from '../asset/img/avatar2.webp';
import avatar3 from '../asset/img/avatar3.jpg';
import avatar4 from '../asset/img/avatar4.jpg';
import { Slider } from '@mui/material';


import { transactionIcon, transactionIcon1 } from '../contant/iconFigma'

function LayoutOne() {
    const name = 'Katie';
    const moneyPrize = 48.9;
    const percent = 78;
    const contant = ['technical', 'account', 'excel']
    const users = [
        {
            name: 'user1',
            img: avatar
        },
        {
            name: 'user2',
            img: avatar1
        },
        {
            name: 'user3',
            img: avatar2
        },
        {
            name: 'user4',
            img: avatar3
        },
        {
            name: 'user5',
            img: avatar4
        }
    ]
    const options = [
        {
            name: 'Branding',
            money: 30
        },
        {
            name: "Marketing",
            money: 75
        },
        {
            name: "App Building",
            money: 125
        },
        {
            name: 'SEO',
            money: 49
        }
    ]
    const [option, setOption] = useState('Branding')
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
                        <div className="icon_dots absolute text-gray-prize-3">
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
                        <div></div>
                    </div>
                    <div className="bg-white rounded-md pt-5 pl-5 relative">
                        <div className="icon_dots absolute text-gray-prize-3">
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-color-green-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </div>
                            <div className="ml-1.5 flex flex-align-center">
                                <span className="text-sm uppercase font-medium text-color-green-1">+28.14%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-md">
                <div className="pt-5 pl-6 mb-4 mt-1.5">
                    <div className="flex flex-justify-sb none-items-center info">
                        <div className="flex items-center">
                            <div className="avatar mr-3.5">
                                <img src={avatar} className="circle" alt="avatar" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <div className="text-gray-prize-4 font-thin text-lg italic">Arash Shared Event</div>
                                <div className="text-gray-prize-3 text-sm">07 Sep 2021 at 10:30 AM</div>
                            </div>
                        </div>
                        <div className="mr-6 pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="macbook relative">
                    <div className="bg-white date flex flex-col flex-justify-center absolute rounded-lg py-2 px-3">
                        <h2 className="text-gray-prize-4 font-thin italic text-lg">21</h2>
                        <h3 className="text-color-default text-sm font-bold">May</h3>
                    </div>
                    <img src={macbook} alt="macbook" />
                </div>
                <div className="mb-9 pl-6">
                    <div className="mb-3">
                        <h2 className="text-gray-prize-4 font-thin text-lg italic">How To Excel In A Technical…</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        {
                            contant.map((item: string, index: number) => {
                                return (
                                    <div className="py-0.5 px-2 bg-default-opacity rounded-md pointer">
                                        <p className="text-sm text-color-default uppercase font-medium">{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="user mb-9 pl-7 flex">
                    <div className="avatars relative flex">
                        {
                            users.map((user, index) => {
                                return (
                                    <div className="avatar relative" style={{ zIndex: users.length - index }}>
                                        <img className="circle m-0.5" src={user.img} alt={user.name} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="py-2.5 px-5 bg-default rounded-md pointer btn">
                        <p className="text-white text-sm">Join Now</p>
                    </div>
                </div>
                <div className="px-6">
                    <div className="interactive text-gray-prize-3">
                        <div className="pt-4 flex flex-justify-sb">
                            <div className="flex">
                                <div className="flex mr-6">
                                    <div className="icon mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-base">236</p>
                                </div>
                                <div className="flex">
                                    <div className="icon mr-2 flex flex-align-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2 -1.52588e-05L1.8 -1.52588e-05C0.8073 -1.52588e-05 0 0.807285 0 1.79998L0 12.6C0 13.5927 0.8073 14.4 1.8 14.4H4.5V17.7903L10.1493 14.4H16.2C17.1927 14.4 18 13.5927 18 12.6V1.79998C18 0.807285 17.1927 -1.52588e-05 16.2 -1.52588e-05ZM16.2 12.6H9.6507L6.3 14.6097V12.6H1.8V1.79998L16.2 1.79998V12.6Z" fill="#435971" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2 -1.52588e-05L1.8 -1.52588e-05C0.8073 -1.52588e-05 0 0.807285 0 1.79998L0 12.6C0 13.5927 0.8073 14.4 1.8 14.4H4.5V17.7903L10.1493 14.4H16.2C17.1927 14.4 18 13.5927 18 12.6V1.79998C18 0.807285 17.1927 -1.52588e-05 16.2 -1.52588e-05ZM16.2 12.6H9.6507L6.3 14.6097V12.6H1.8V1.79998L16.2 1.79998V12.6Z" fill="white" fill-opacity="0.4" />
                                        </svg>

                                    </div>
                                    <p className="text-base">12</p>
                                </div>
                            </div>
                            <div className="text-gray-prize-3 pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 bg-white mr-6 rounded-md">
                <div className="mb-5 flex flex-justify-sb relative">
                    <h2 className="text-gray-prize-4 font-thin text-lg italic">For Business Sharks</h2>
                    <div className="text-gray-prize-3 pointer absolute" style={{ right: 0, top: 6 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </div>
                </div>
                <div className="mb-5">
                    <p className="text-base text-gray-prize-2">Here, i focus ona range of items and featured that we use in life without them</p>
                </div>
                <div className="mb-3">
                    <p className="text-sm text-gray-prize-4 font-thin italic">Basic price is $30</p>
                </div>
                <div className="mb-4">
                    <div className="select">
                        {
                            options.map((op, index) => {
                                return (
                                    <div className="py-4 px-3.5 option flex flex-justify-sb">
                                        <div className="flex">
                                            <div
                                                className={op.name === option ? "choosed mr-2 pointer mt-1" : "choose mr-2 pointer mt-1"}
                                                onClick={() => setOption(op.name)}
                                            >
                                                {
                                                    op.name === option ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        : null
                                                }
                                            </div>
                                            <div className="option_name">{op.name}</div>
                                        </div>
                                        <div
                                            className={op.name === option ? "py-px px-2 bg-default-opacity rounded flex" : "py-px px-2 bg-green-1 rounded flex"}
                                        >
                                            <p
                                                className={op.name === option ? "text-sm font-medium uppercase text-color-default" : "text-sm font-medium uppercase text-color-green-1"}
                                            >
                                                +${op.money}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="mb-1.5 flex flex-justify-sb">
                    <h2 className="text-gray-prize-2 font-semibold text-base">Vat Taxes</h2>
                    <p className="text-gray-prize-2 font-semibold text-base">$24</p>
                </div>
                <div className="mb-8 flex flex-justify-sb">
                    <h2 className="text-gray-prize-2 font-semibold text-base">Total Amount</h2>
                    <p className="text-color-default font-thin text-lg italic">$99</p>
                </div>
                <div className="flex py-2.5 flex-justify-center pointer bg-default rounded-md btn">
                    <p className="text-white text-sm">Purchase</p>
                </div>
            </div>
        </div>
    )
}

export default LayoutOne;