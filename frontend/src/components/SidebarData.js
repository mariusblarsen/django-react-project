import React from 'react';
import * as fa from 'react-icons/fa';
import * as ai from 'react-icons/ai';
import * as io from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <ai.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Market',
        path: '/market',
        icon: <ai.AiOutlineStock />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <io.IoIosPaper />,
        cName: 'nav-text'
    },
]