import {
    messagesReducer,
    addMessageFbStart,
    addMessageFbSuccess,
    addMessageFbError
 } from "../../messages";

const TEST_CHAT_ID = 1;
const TEST_MESSAGE = { author: "user",  text: "test message" };
const ERROR_MESSAGE = "test error";

describe("messages reducer", () => {
    describe("add message", () => {
        it("start", () => {
            const state = messagesReducer({
                pending: false,
                error: ERROR_MESSAGE
            }, addMessageFbStart());
    
            expect(state.pending).toBeTruthy();
            expect(state.error).toBeNull();
        });
        it("success", () => {
            const state = messagesReducer({
                messages: {},
                pending: true,
                error: null
            }, addMessageFbSuccess(TEST_CHAT_ID, TEST_MESSAGE));

            expect(state.pending).toBeFalsy();
            expect(state.messages[TEST_CHAT_ID].length).toBe(1);
            expect(state.messages[TEST_CHAT_ID][0].author).toBe(TEST_MESSAGE.author);
            expect(state.messages[TEST_CHAT_ID][0].text).toBe(TEST_MESSAGE.text);
            expect(state.error).toBeNull();
        });
        it("error", () => {
            const state = messagesReducer({
                pending: true,
                error: null
            }, addMessageFbError(ERROR_MESSAGE));

            expect(state.pending).toBeFalsy();
            expect(state.error).toBe(ERROR_MESSAGE);
        });
    });
});