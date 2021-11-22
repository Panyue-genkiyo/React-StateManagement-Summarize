import { useContext } from 'react';
import storeContext from "../../context/storeContext";

const useStore = () => useContext(storeContext);

export default useStore;