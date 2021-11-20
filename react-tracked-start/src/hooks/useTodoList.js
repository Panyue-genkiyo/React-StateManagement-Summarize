//hook
import {useTrackedState} from "../store/tui";

export const useTodoList = () => {
    return useTrackedState().todos;
}
