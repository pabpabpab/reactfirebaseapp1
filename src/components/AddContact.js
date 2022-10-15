import React from 'react';
import {useDispatch} from 'react-redux';
import appConst from '../data/constants';
import useInput from '../myHooks/useInput';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddContact = () => {
    const dispatch = useDispatch();

    // объект textInput
    const textInput = useInput('');

    // при нажатии на кнопку Add
    const doAddContact = (e) => {
        e.preventDefault();
        const userName = textInput.value;
        textInput.clear();
        dispatch({type: appConst.ADD_CONTACT, payload: userName});
    }

    return (
        <form onSubmit={doAddContact} className={'add-contact'}>
            <TextField
                {...textInput.bind}
                id="outlined-basic"
                variant="outlined"
                sx={{
                    backgroundColor: '#fff',
                }}/>
            <Button
                type="submit"
                variant="contained"
                size="small">
                Add
            </Button>
        </form>
    );

};

export default AddContact;

/*
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import appConst from '../data/constants';

import {db} from '../service/firebase';


const initialState = {
    name1: '',
    name2: ''
}

const AddContact = () => {
    const [contact, setContact] = useState(initialState);
    const dispatch = useDispatch();

    // при нажатии на кнопку Add
    const doAddContact = (e) => {
        e.preventDefault();
        if (!name1 || !name2) {
            console.log('Не заполнены поля');
            return;
        }
        //console.log('contact', contact);

        db.child("chats").push(contact, (e) => {
            e && console.log(e);
        });

        setContact({...contact, name1: '', name2: ''});
    }



    const {name1, name2} = contact;

    // обработчик на несколько текстовых полей
    const handleChange = (e) => {
        const {name, value} = e.target;
        setContact({...contact, [name]: value});
    }

    return (
        <form onSubmit={doAddContact} className={'add-contact'}>

            <label htmlFor={'name1'}>Имя1</label>
            <input id={'name1'} name={'name1'} onChange={handleChange} value={name1} className={'w-full p-1 border-black border-2'}/>
            <label htmlFor={'name2'}>Имя2</label>
            <input id={'name2'} name={'name2'} onChange={handleChange} value={name2} className={'w-full p-1 border-black border-2'}/>
            <button type="submit" className={'bg-gray-500 border-black border-2'}>
                Add
            </button>
        </form>
    );

};

export default AddContact;
 */