export const generateContentSchema = (entityName, attributesArray) => {

    let attributesContent = ``;

    for (var i = 0; i < attributesArray.length; i++) {
        attributesContent += `@Prop()` + "\n";
        attributesContent += `${attributesArray[i].name}: ${attributesArray[i].type};` + "\n\n";
    }

    const content = `
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { I${entityName} } from './../domain/${entityName}.entity';
    
export type ${entityName}Document = ${entityName} & Document;
    
@Schema()
export class ${entityName} implements I${entityName}{
    
//@Prop({type: Types.ObjectId})
//_id: holds an ObjectId autogenerated. Iimplicitly has "index: true".
    
${attributesContent}
}
    
export const ${entityName}Schema = SchemaFactory.createForClass(${entityName});
`
    return content;
};
