var config = {};

config.app = {};

config.app.port = 3000;
config.api = {};

config.api.base_url = 'https://api.sandbox.inbloom.org';
config.api.client_id = '**PutYourSlcClientIdHere**';
config.api.client_secret = '**PutYourSlcClientSecretHere**';
config.api.oauth_uri = 'http://127.0.0.1:3000/oauth';
config.api.api_version = "v1";

module.exports = config;
