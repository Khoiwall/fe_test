import React from 'react';
import avatar from '../asset/img/avatar.jpg';
import avatar1 from '../asset/img/avatar1.jpg';
import avatar2 from '../asset/img/avatar2.webp';
import avatar3 from '../asset/img/avatar3.jpg';
import avatar4 from '../asset/img/avatar4.jpg';

import { Slider } from '@mui/material';
import { card_icon, chart } from '../contant/iconFigma';

function LayoutTwo() {
    const percent = 75;

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
    return (
        <div className="grid grid-cols-3 gap-7 mb-6">
            <div className="col-span-2 bg-white rounded-md">
                <div className="px-6 pt-6">
                    <div className="flex flex-justify-sb card_mb">
                        <div>
                            <h2 className="text-gray-prize-4 font-thin text-lg italic mb-2.5">Finance Summary</h2>
                            <p className="text-gray-prize-2 text-sm">Check out each column for more details</p>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: card_icon }}></div>
                    </div>
                    <div className="card_mb1">
                        <div className="flex">
                            <div className="card_text1">
                                <h2 className="text-gray-prize-2 text-sm mb-2.5">Annual Companies Taxes</h2>
                                <p className="italic font-thin text-gray-prize-4">$500,00</p>
                            </div>
                            <div>
                                <h2 className="text-gray-prize-2 text-sm mb-2.5">Next Tax Review Date</h2>
                                <p className="italic font-thin text-gray-prize-4">July 24,2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="card_mb">
                        <div className="flex">
                            <div className="card_text">
                                <h2 className="text-gray-prize-2 text-sm mb-2.5">Average Product Price</h2>
                                <p className="italic font-thin text-gray-prize-4">$89.90</p>
                            </div>
                            <div>
                                <h2 className="text-gray-prize-2 text-sm mb-2.5">Satisfaction Rate</h2>
                                <div className="flex flex-align-center">
                                    <div className="flex flex-align-center">
                                        <Slider
                                            className="slider_width"
                                            defaultValue={percent}
                                            valueLabelDisplay="auto"
                                        />
                                        <p className="ml-2 mb-0 text-gray-prize-2 text-sm">{percent}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-align-center mb-8">
                        <div className="avatars avatars_mr relative flex">
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
                        <div className="py-0.5 px-2.5 bg-default-opacity">
                            <p className="uppercase text-color-default text-sm">5 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white mr-6 rounded-md relative">
                <div className="pt-6 text-center">
                    <h4 className="text-gray-prize-2 text-sm mb-1.5">Your score is</h4>
                    <h2 className="text-gray-prize-4 text-2xl font-thin italic">Awesome</h2>
                    <div className="absolute" style={{ top: 110, left: 84 }} dangerouslySetInnerHTML={{ __html: chart }} />
                    <div className="score">
                        <div className="mb-1">
                            <h2 className="text-gray-prize-4">78</h2>
                        </div>
                        <p className="text-sm text-gray-prize-2">Out of 100</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-prize-3 text-sm mb-1.5">Your score is based on the last</p>
                        <p className="text-gray-prize-2 text-sm font-bold">287 Transactions</p>
                    </div>
                    <div className="py-2.5 text-center btn_view_account rounded-md bg-default btn pointer">
                        <p className="text-white text-xs">View my Account</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LayoutTwo