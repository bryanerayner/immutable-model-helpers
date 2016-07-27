import {
    TypedRecord
} from './typed-record.type';

import {
    Record
} from 'immutable';


export function generateTypedRecord<TModelSignature> (defaultValues:TModelSignature, name?:string): TypedRecord<TModelSignature> {
    const typedRecord = Record(defaultValues, name) as any as TypedRecord<TModelSignature>;
    return typedRecord;     
}