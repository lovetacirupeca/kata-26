const inlineSimpleComment = /\/\/.*/
const blockSimpleComment = /\*.*\*/
const blockComment = /\/\*(.|\n+)*\*\//
const breakLine = /\n+/
const cleanAll = /(\/\/.*)|(\/\*(.|\n+)*\*\/)|(\n+)/g

function isInlineSimpleComment(str) {
    return str.search(inlineSimpleComment) > -1;
}

function isBlockSimpleComment(str) {
    return str.search(blockSimpleComment) > -1;
}

function isBlockComment(str) {
    return str.search(blockComment) > -1;
}

function removeSimpleComment(str) {
    return str.replace(inlineSimpleComment, "");
}

function removeBlockComment(str) {
    return str.replace(blockComment, "");
}

function removeBreakLine(str) {
    return str.replace(breakLine, "");
}

function cleanCode(str) {
    return str.replace(cleanAll, "");
}

module.exports = {
    isInlineSimpleComment,
    isBlockSimpleComment,
    isBlockComment,
    removeSimpleComment,
    removeBlockComment,
    removeBreakLine,
    cleanCode
};