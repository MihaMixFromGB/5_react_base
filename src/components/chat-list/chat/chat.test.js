import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Chat } from "./chat";
// import { renderWithRedux } from "../../../utils/render-with-redux";

describe("chat component", () => {
    const TEST_CHAT_TITLE = "test chat";
    
    it("render chat with title", () => {
        // renderWithRedux(<Chat title={TEST_CHAT_TITLE} />, {});
        render(<Chat title={TEST_CHAT_TITLE} />);
        
        const element = screen.getByTestId("chat__container");
        expect(element.children.length).toBe(2);
        expect(element.children[0]).toHaveTextContent(TEST_CHAT_TITLE);
    });
});