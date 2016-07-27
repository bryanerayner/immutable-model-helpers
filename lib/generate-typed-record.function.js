"use strict";
var immutable_1 = require('immutable');
function generateTypedRecord(defaultValues, name) {
    var typedRecord = immutable_1.Record(defaultValues, name);
    return typedRecord;
}
exports.generateTypedRecord = generateTypedRecord;
