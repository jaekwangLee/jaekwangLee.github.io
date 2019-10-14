export function createReduxThunk(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return params => async dispatch => {
        if (!request) {
            return dispatch({ type });
        }
        try {
            const response = await request(params);
            console.log(response);
            dispatch({
                type: SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true,
            });
            throw e;
        }
    };
}
