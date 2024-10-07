'use client'
import { persist, store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persist}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default ReduxProvider
