import {
    TypedRecord,
    TypedRecordClass
} from './typed-record.type';

import {
    Record
} from 'immutable';


export function generateTypedRecord<TModelSignature> (defaultValues:TModelSignature, name?:string): TypedRecord<TModelSignature> {
    const typedRecord = Record(defaultValues, name) as any as TypedRecord<TModelSignature>;
    return typedRecord;     
}

export function generateTypedRecordClass<TModelSignature>(defaultValues:TModelSignature, name?:string): TypedRecordClass<TModelSignature> {
    return generateTypedRecord(defaultValues, name) as any;
} 

interface Test1Thing  {
    className:string;
};

const Test1 = generateTypedRecord<Test1Thing>({
    className:''
});
let test = new Test1({
    className:''
});

interface ITest1WithStuff extends Test1Thing {
    new(defaultValues?:Test1Thing): ITest1WithStuff;
}

class Test1WithStuff extends generateTypedRecordClass<Test1Thing>({
    className:'donkeys'
}) {
    constructor(val?:Test1Thing){
        super(val);
    }
}

let test2 = new Test1WithStuff({className:'shrek'});

test



class Test extends generateTypedRecord({}){

    constructor(){
        super();
    }
}