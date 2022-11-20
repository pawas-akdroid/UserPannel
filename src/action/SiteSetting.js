export const FETCH_SITE_BEGIN = 'FETCH_SITE_BEGIN';
export const FETCH_SITE_SUCCESS = 'FETCH_SITE_SUCCESS';
export const FETCH_SITE_FAILURE = 'FETCH_SITE_FAILURE';

export const fetchSiteBegin = () => ({
    type: FETCH_SITE_BEGIN
});

export const fetchSiteSuccess = site => ({
    type: FETCH_SITE_SUCCESS,
    payload: { site }
});

export const fetchSiteFailure = error => ({
    type: FETCH_SITE_FAILURE,
    payload: { error }
});