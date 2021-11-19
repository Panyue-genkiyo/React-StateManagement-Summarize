import React, { useState } from 'react';

import { useTrackedState } from '../store/person';
import { useFlasher } from '../util';

const ShowPerson = () => {
    const state = useTrackedState();
    const [onlyFirstName, setOnlyFirstName] = useState(false);
    return (
        <div ref={useFlasher()}>
            <button type="button" onClick={() => setOnlyFirstName((s) => !s)}>
                {onlyFirstName ? 'Showing only first name' : 'Showing full name'}
            </button>
            {onlyFirstName ? (
                <div>First Name: {state.firstName}</div>
            ) : (
                <div>
                    Full Name: {state.firstName} {state.lastName}
                </div>
            )}
        </div>
    );
};

export default ShowPerson;
