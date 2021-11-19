import React, {useEffect} from 'react';
import { useSharedState } from "../store";
//text组件
const Text = () => {
    const [globalState, setGlobalState] = useSharedState()

    useEffect(() => {
      console.log('Text Component Render!')
    });

    const handleTextChange = (e) => {
        setGlobalState((prev) => ({
            ...prev,
            text: e.target.value
        }));
    }

    return (
        <div>
            <input onChange={handleTextChange} type='text' value={globalState.text} />
        </div>
    );
};

export default Text;
