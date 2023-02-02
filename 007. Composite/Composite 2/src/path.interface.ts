/**
 * In a file system, folders and files are both paths.
 * So this interface is implemented by both folders and files.
 * 
 * Every path has a size. `getSize()` returns the size of the path.
 */

export default interface IPath {
    /**
     * Size calculation is different for folders and files.
     * 
     * @returns {number} The size of the path in MB.
     */
    getSize(): number;
}