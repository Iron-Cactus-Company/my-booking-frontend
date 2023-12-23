import { ReactNode } from "react";
import { Provider } from "react-redux";
import {createReduxStore} from "@/shared/config/reduxConfig/store";
import { DeepPartial } from "@reduxjs/toolkit";
import {StateSchema} from "@/shared/config/reduxConfig/StateSchema";

interface StoreProviderProps {
    children?: ReactNode;
    // for testing purposes
    initialState?: DeepPartial<StateSchema>;
    // initialState?: any;
}


// export const store = createReduxStore();
export const { store, persistor, storage } = createReduxStore();

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children ,
        // initialState
    } = props;
    // const store = createReduxStore(initialState as StateSchema);
    return <Provider store={store}>{children}</Provider>;
};
