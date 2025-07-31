const config = require('./wdio.shared.conf').config;
config.capabilities = [
    {browserName: 'chrome'},
    {browserName: 'firefox'},
    {browserName: 'safari'}
];
config.services.push('devtools');
exports.config= config;

