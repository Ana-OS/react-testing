import { capitalize } from '../string';

test('capitalize should handle null', () => {
    // expect and toBe is JEST defined
    expect(capitalize(null)).toBe(null); 
})

test('capitalize should handle empty string', () => {
    expect(capitalize("")).toBe("");
})

test('capitalize should handle one letter string a', () => {
    expect(capitalize("a")).toBe("A");
})

test('capitalize should handle one letter string A', () => {
    expect(capitalize("A")).toBe("A");
})


test('capitalize should handle work for boris', () => {
    expect(capitalize("boris")).toBe("Boris");
})

test('capitalize should handle work for Boris', () => {
    expect(capitalize("Boris")).toBe("Boris");
})

test('capitalize should handle work for BORIS', () => {
    expect(capitalize("BORIS")).toBe("Boris");
})

test('capitalize should handle work for bOrIs', () => {
    expect(capitalize("bOris")).toBe("Boris");
})
