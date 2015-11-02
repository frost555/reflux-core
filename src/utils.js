export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function callbackName(string, prefix) {
    prefix = prefix || "on";
    return prefix + exports.capitalize(string);
}

/*
 * isObject, extend, isFunction, isArguments are taken from undescore/lodash in
 * order to remove the dependency
 */

export function isObject(obj) {
    const type = typeof obj;
    return type === "function" || type === "object" && !!obj;
}

var lodashAssign = require('lodash.assign');

export function extend(obj) {
    return lodashAssign(arguments);
}

export function isFunction(value) {
    return typeof value === "function";
}

exports.EventEmitter = require("eventemitter3");

exports.nextTick = function(callback) {
    setTimeout(callback, 0);
};

export function object(keys, vals){
    var o = {}, i = 0;
    for(;i < keys.length; i++){
        o[keys[i]] = vals[i];
    }
    return o;
}

export function isArguments(value) {
    return typeof value === "object" && ("callee" in value) && typeof value.length === "number";
}

export function throwIf(val, msg){
    if (val){
        throw Error(msg || val);
    }
}
