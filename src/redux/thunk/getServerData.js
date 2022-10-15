import appConst from '../../data/constants';
import apiUrl from '../../data/apiUrl';

const getServerDataThunk = () => async (dispatch, getState) => {
    dispatch({type: appConst.RESET_ERROR});
    dispatch({type: appConst.SET_LOADING_FLAG});
    try {
        const result = await fetch(apiUrl.CONTACTS);
        if (!result.ok) {
            throw new Error(`Request failed with status ${result.status}`);
        }
        const contacts = await result.json();
        dispatch({type: appConst.SET_ALL_CONTACTS, payload: contacts});

        const result2 = await fetch(apiUrl.POSTS);
        if (!result2.ok) {
            throw new Error(`Request failed with status ${result2.status}`);
        }
        const messages = await result2.json();
        dispatch({
            type: appConst.SET_ALL_MESSAGES,
            payload: { messages,  contacts }
        });
    } catch (error) {

        dispatch({type: appConst.SET_ERROR, payload: 'Ошибка запроса'});

    } finally {

        setTimeout(() => dispatch({type: appConst.RESET_LOADING_FLAG}), 2000);

    }
    // console.log('state', getState());
}

export default getServerDataThunk;