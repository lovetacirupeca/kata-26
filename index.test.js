const {
    isInlineSimpleComment,
    isBlockSimpleComment,
    isBlockComment,
    removeSimpleComment,
    removeBlockComment,
    removeBreakLine,
    cleanCode
} = require("./index");

it("The string is a comment: `// This is a comment`", () => {
    const str = `// This is a comment`;
    expect(isInlineSimpleComment(str)).toBe(true);
});

it("The string is not a comment: `/ This is a comment`", () => {
    const str = `/ This is a comment`;
    expect(isInlineSimpleComment(str)).toBe(false);
});

it("This string have simple block comments", () => {
    const str = `/* Lorem ipsum */`;
    expect(isBlockSimpleComment(str)).toBe(true);
});

it("This string haven't simple block comments", () => {
    const str = `Lorem ipsum`;
    expect(isBlockSimpleComment(str)).toBe(false);
});

it("This string have block comments", () => {
    const str = `/* Lorem ipsum
    has become the industry */`;
    expect(isBlockComment(str)).toBe(true);
});

it("This string haven't block comments", () => {
    const str = `Lorem ipsum
    has become the industry`;
    expect(isBlockComment(str)).toBe(false);
});

it("Should remove simple comments: `int countLines(File inFile); // not the real signature`", () => {
    const str = `int countLines(File inFile); // not the real signature`;
    expect(removeSimpleComment(str)).toEqual(`int countLines(File inFile); `);
});

it("Should remove block comments", () => {
    const str = `/**
     * count the number of lines in a file
     */int countLines(File inFile); // not the real signature`;
    expect(removeBlockComment(str)).toEqual(`int countLines(File inFile); // not the real signature`);
});

it("Should remove empty lines", () => {
    const str = `A\n\n\n\n\nH`;
    expect(removeBreakLine(str)).toEqual(`AH`);
});

it("Should remove comments and empty lines", () => {
    const str = `//This file contains 3 lines of code

public interface Dave {
/**
 * count the number of lines in a file
 */
int countLines(File inFile); // not the real signature
}`
    expect(cleanCode(str)).toEqual(`public interface Dave {
    int countLines(File inFile);
}`);
});