import { useDispatch ,useStore } from "../store";
import { useCallback } from "react";

export const useTheme = () => {
    const state = useStore();
    const dispatch = useDispatch();
    const getTheme = () => state.theme.darken;
    const toggleTheme = useCallback(() => {
         dispatch({
             type: "TOGGLE_THEME"
         });
    }, [dispatch]);

    return { getTheme, toggleTheme }
}
