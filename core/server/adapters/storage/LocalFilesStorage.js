// # Local File System Video Storage module
// The (default) module for storing media, using the local file system
const config = require('../../../shared/config');
const constants = require('@tryghost/constants');
const LocalStorageBase = require('./LocalStorageBase');

class LocalFilesStorage extends LocalStorageBase {
    constructor() {
        super({
            storagePath: config.getContentPath('files'),
            staticFileURLPrefix: constants.STATIC_FILES_URL_PREFIX
        });
    }
}

module.exports = LocalFilesStorage;
