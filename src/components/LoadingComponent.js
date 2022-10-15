import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getLoadingFlag, getError} from "../redux/selectors";
import getServerDataThunk from "../redux/thunk/getServerData";

const LoadingComponent = () => {
    const dispatch = useDispatch();
    const loadingFlag = useSelector(getLoadingFlag);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(getServerDataThunk());
    }, []);


    if (loadingFlag) {
        return (
            <div className={'loading-screen'}>
                Идет загрузка...
            </div>
        );
    }

    if (error) {
        return (
            <div className={'loading-screen error'}>
                {error}
                <button onClick={ () => dispatch(getServerDataThunk()) }>Reload</button>
            </div>
        );
    }

    return (
        <div style={{display: 'none'}}>
        </div>
    );
};

export default LoadingComponent;