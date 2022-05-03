import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../store";

export const renderWithRedux = (component, initialState) => {
    const store = createStore(rootReducer, initialState);

    return {
        store,
        ...render(<Provider store={store}>{component}</Provider>)
    };
};