export function fillArray(value, len) {
    return Array.from({length: len}).map(() => value);
}

export function fillColorArray(len) {
    const randomHexColor = require('random-hex-color');
    return Array.from({length: len}).map(() => randomHexColor());
}

export const randomHexColor = require('random-hex-color');