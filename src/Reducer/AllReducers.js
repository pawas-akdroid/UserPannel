import { combineReducers } from 'redux'

const { default: tokenReducer } = require("./TokenReducers");
const { default: userReducer } = require("./UserReducer");
const { default: siteReducer } = require("./SiteReducers");

const allReducers = combineReducers({
    authToken: tokenReducer,
    site: siteReducer
})
export default allReducers