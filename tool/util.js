const fs = require('fs');
const path = require('path');

class FileUtil {
    constructor() {
        this.fs = fs;
        this.path = path;
    }
    isExists(path) {
        return this.fs.existsSync(path);
    }
    getDir(path) {
        return this.fs.readdirSync(path);
    }
    isDirectory(path) {
        return this.fs.statSync(path).isDirectory()
    }
    forEachFolder(path, callback) {
        if (this.isExists(path)) {
            callback('folderBefore', path);
            const files = this.getDir(path)
            files.forEach((file) => {
                const curPath = this.path.join(path, file);
                if (this.isDirectory(curPath)) {
                    this.forEachFolder(curPath, callback);
                } else {
                    callback('file', curPath, file);
                }
            });
            callback('folderAfter', path);
        }
    }
    deleteFile(path) {
        this.fs.unlinkSync(path);
    }
    deleteFolder(path) {
        this.fs.rmdirSync(path);
    }
    deleteCatalog(path) {
        this.forEachFolder(path, (type, pathname, filename) => {
            if (type === 'file') {
                this.deleteFile(pathname);
            }
            if (type === 'folderAfter') {
                this.deleteFolder(pathname);
            }
        })
    }
    copyFile(src, tar) {
        let readable = fs.createReadStream(src);
        let writable = fs.createWriteStream(tar);
        readable.pipe(writable);
    }
    createFolder(path) {
        this.fs.mkdirSync(path);
    }
    copyCatalog(src, tar) {
        if (this.isExists(src)) {
            if (!this.isExists(tar)) {
                this.createFolder(tar);
            }
            const files = this.getDir(src)
            files.forEach((file) => {
                const srcPath = this.path.join(src, file);
                const tarPath = this.path.join(tar, file);
                if (this.isDirectory(srcPath)) {
                    this.copyCatalog(srcPath, tarPath);
                } else {
                    this.copyFile(srcPath, tarPath);
                }
            });
        }
    };
}

module.exports = new FileUtil();