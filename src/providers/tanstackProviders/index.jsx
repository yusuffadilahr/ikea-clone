'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
const query = new QueryClient

const TanstackProviders = ({ children }) => {
    return (
        <QueryClientProvider client={query}>
            {children}
        </QueryClientProvider>
    )
}

export default TanstackProviders