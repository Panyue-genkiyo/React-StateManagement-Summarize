import React, {useEffect, useState, useCallback} from 'react';
import { produce } from 'immer';

const PersonList = () => {
    const [persons, setPersons] = useState({
        p: [
            { id: 1, name:'panyue', job:'soft engineer' },
            { id: 2, name: 'jack', job: 'doctor' }
        ],
        count:0
    });

    const deletePersonById = useCallback((id) => {
        // setPersons(persons.p.filter(person => person.id !== id));
        // setPersons((prev) => {
        //     return produce(prev, draftState => {
        //         // const personIndex = draftState.p.findIndex(person => person.id === id);
        //         // draftState.p.splice(personIndex, 1);
        //          draftState.p.filter(person => person.id !== id);
        //     });
        // })
        setPersons(produce(draftState => {
             let index = draftState.p.findIndex(person => person.id === id);
             draftState.p.splice(index, 1);
        }));
    }, []);

    const addPerson = useCallback((person) => {
        setPersons(produce(draftState => {
            draftState.p.push(person);
        }));
    }, []);

    const plusOne = () => {
        setPersons(produce(draftState => {
            draftState.count++;
        }));
    }

    return (
        <>
            <p>
                count: {persons.count}
                <button onClick={plusOne}>click to plus one</button>
            </p>
            <ul>
                {persons.p.map(person => <Person key={person.id} id={person.id} job={person.job} name={person.name} deletePersonById={deletePersonById} />)}
            </ul>
            <NewPerson addPerson={addPerson}/>
        </>
    );
};

const Person = React.memo(({id ,job, name, deletePersonById}) => {

    useEffect(() => {
        console.log('person组件被渲染');
    });

    return (
        <li>
            {name} - {job}
            <button onClick={() => deletePersonById(id)}>delete this person</button>
        </li>
    )
});

let nextId = 3;

const NewPerson = React.memo(({ addPerson }) => {

    const [pInfo, setPInfo] = useState({
        name: '',
        job: ''
    });

    const handleAdd = () => {
        if( pInfo.job.trim() === '' || pInfo.name.trim() === '' ) {
            alert('请输入完整信息');
            return;
        }
        addPerson({
            id: nextId++,
            name: pInfo.name,
            job: pInfo.job
        });
        setPInfo({
            name: '',
            job: ''
        });
    }

    return <>
        <input placeholder={'add a new person name'} value={pInfo.name} onChange={(e) => setPInfo(produce(draftState => void (draftState.name = e.target.value)))}/>
        <input placeholder={'add a new person job'} value={pInfo.job} onChange={(e) => setPInfo(produce(draftState => void (draftState.job = e.target.value)))}/>
        <button onClick={handleAdd}>add person</button>
    </>
});

export default PersonList;
