"use client"
import React, {ReactNode} from "react";
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {persistor, store} from "@/shared/config/reduxConfig/StoreProvider";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ToastContainer />
                    {children}
            </PersistGate>
        </ReduxProvider>
    );
}
