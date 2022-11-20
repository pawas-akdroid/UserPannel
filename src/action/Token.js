export const FETCH_TOKEN_BEGIN = 'FETCH_TOKEN_BEGIN';
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS';
export const FETCH_TOKEN_FAILURE = 'FETCH_TOKEN_FAILURE';

export const fetchTokenBegin = () => ({
    type: FETCH_TOKEN_BEGIN
});

export const fetchTokenSuccess = authToken => ({
    type: FETCH_TOKEN_SUCCESS,
    payload: { authToken }
});

export const fetchTokenFailure = error => ({
    type: FETCH_TOKEN_FAILURE,
    payload: { error }
});