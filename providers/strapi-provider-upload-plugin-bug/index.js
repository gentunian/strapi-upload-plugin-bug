module.exports = {
    init(config) {
        const upload = (file) => {
            return Promise.reject(new Error('This is an Error'));
        }
        return {
            checkFileSize(file, options) {
            },
            uploadStream(file, a) {
                return upload(file);
            },
            upload(file) {
                return upload(file);
            },
            delete(file) {
            },
        };
    },
};