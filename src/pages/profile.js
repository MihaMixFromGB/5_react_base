import { useDispatch, useSelector } from "react-redux";
import { updateProfile, toggleVisibleProfile } from "../store/profile";

export function ProfilePage() {
    const dispatch = useDispatch();
    const { isVisibleProfile, firstName, lastName } = useSelector(
        (state) => state.profile
    );
    
    return (
        <div>
            <h2>My Profile</h2>
            <button onClick={() => dispatch(toggleVisibleProfile())}>СКРЫТЬ/ПОКАЗАТЬ ПРОФИЛЬ</button>
            {
                isVisibleProfile &&  (
                <>
                    <div>{firstName}</div>
                    <div>{lastName}</div>
                </>
            )}
        </div>
    );
}