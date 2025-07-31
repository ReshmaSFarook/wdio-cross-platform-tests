const config = require('./wdio.shared.conf').config;
config.capabilities = [
    {browserName: 'chrome'},
    {browserName: 'firefox'},
    {browserName: 'safari'}
];
config.services.push([
    'screener',
    {
    projectName: 'WDIO Visual Tests',
    apiKey: process.env.SCREENER_API_KEY,
    resolution: '1024x768', // Can adjust per your baseline
    failOnNewStates: false,
    alwaysAcceptBaseBranch: true
    }
]);
config.services.push('devtools');

exports.config= config;

