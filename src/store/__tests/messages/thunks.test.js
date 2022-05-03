import {
    addMessageFb,
    addMessageFbStart,
    // addMessageFbSuccess,
    addMessageFbError
} from "../../messages";

const TEST_CHAT_ID = 1;
const TEST_MESSAGE = { author: "user",  text: "test message" };
const TEST_ERROR = { error: "test error" };

describe("messages thunks", () => {
    describe("add message to firebase", () => {
        it("success", async () => {
            const dispatch = jest.fn();
            const createMessageApi = jest.fn().mockResolvedValue(TEST_CHAT_ID, TEST_MESSAGE);

            const thunk = addMessageFb(TEST_CHAT_ID, TEST_MESSAGE);
            await thunk(dispatch, null, { createMessageApi });

            expect(dispatch).toBeCalledTimes(2);
            expect(dispatch).toHaveBeenNthCalledWith(1, addMessageFbStart());
        });
        it("error", async () => {
            const dispatch = jest.fn();
            const createMessageApi = jest.fn().mockRejectedValue(TEST_ERROR);

            const thunk = addMessageFb(TEST_CHAT_ID, TEST_MESSAGE);

            await thunk(dispatch, null, { createMessageApi });

            expect(dispatch).toBeCalledTimes(2);
            expect(dispatch).toHaveBeenNthCalledWith(1, addMessageFbStart());
            expect(dispatch).toHaveBeenNthCalledWith(2, addMessageFbError({error: TEST_ERROR}));
        });
    })
});