import { FETCH_SITE_BEGIN, FETCH_SITE_SUCCESS, FETCH_SITE_FAILURE } from '../action/SiteSetting'

const initialState = {
    site: null,
    loading: false,
}

const siteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SITE_BEGIN:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SITE_SUCCESS:
            return {
                ...state,
                loading: false,
                site: action.payload.site
            }
        case FETCH_SITE_FAILURE:
            return {
                ...state,
                loading: false,
                site: null,
                error: action.payload
            }
        default:
            return state
    }
}

export default siteReducer