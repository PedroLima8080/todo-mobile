import React from 'react'
import { View, Text } from 'react-native'
import Swiper from 'react-native-swiper'

import Home from '../Home/index'
import Tasks from '../Tasks/index'
import CreateTask from '../CreateTask/index'

export default () => {
    return (
        <Swiper
            showsPagination={false}
            loop={false}
        >

            <Home />

            <Tasks />

            <CreateTask />
        </Swiper>
    )
}