'use strict';
const { API } = require('prpr-lerna-core');
const axios = require('axios');

module.exports = fetch;

function fetch() {
    // TODO
}

const getPopularImg = () => axios.get(API)

module.exports = getPopularImg;
