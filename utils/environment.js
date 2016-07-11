// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: microgateway
// US Government Users Restricted Rights - Use, duplication or disclosure
// restricted by GSA ADP Schedule Contract with IBM Corp.

// ENV vars for gateway processing
var APIMANAGER='APIMANAGER';
var APIMANAGER_PORT='APIMANAGER_PORT';
var APIMANAGER_CATALOG='APIMANAGER_CATALOG';

var CONFIGDIR='CONFIG_DIR';
var DATASTORE_PORT='DATASTORE_PORT';

var LAPTOP_RATELIMIT='LAPTOP_RATELIMIT';
var RATELIMIT_REDIS='RATELIMIT_REDIS';
var CATALOG_HOST='CATALOG_HOST';

var OAUTH2_SESSION_REDIS='OAUTH2_SESSION_REDIS';
var OAUTH2_TOKEN_REDIS='OAUTH2_TOKEN_REDIS';

// returned after info loaded in GW
var LOADED='LOADED';

var KEYNAME='id_rsa';
var PASSWORD='gw_skel';
	
exports.APIMANAGER = APIMANAGER;
exports.APIMANAGER_PORT = APIMANAGER_PORT;
exports.APIMANAGER_CATALOG = APIMANAGER_CATALOG;

exports.CONFIGDIR = CONFIGDIR;
exports.DATASTORE_PORT = DATASTORE_PORT;

exports.LAPTOP_RATELIMIT = LAPTOP_RATELIMIT;
exports.RATELIMIT_REDIS = RATELIMIT_REDIS;
exports.CATALOG_HOST = CATALOG_HOST;

exports.OAUTH2_TOKEN_REDIS = OAUTH2_TOKEN_REDIS;
exports.OAUTH2_SESSION_REDIS = OAUTH2_SESSION_REDIS;

exports.LOADED = LOADED;

exports.KEYNAME = KEYNAME;
exports.PASSWORD = PASSWORD;
