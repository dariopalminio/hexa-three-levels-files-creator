export const generateContentRepository = (entityName) => {

    const content = `
    import { Injectable } from '@nestjs/common';
    import { InjectModel } from '@nestjs/mongoose';
    import { Model } from 'mongoose';
    import { IRepository } from "hexa-three-levels";
    import { ${entityName}Document } from './${entityName}.schema';
    import { MongoGenericRepository } from "hexa-three-levels";
    import { ${entityName}, ${entityName}EntityFactory } from './../domain/${entityName}.entity';
    
    @Injectable()
    export class ${entityName}Repository extends MongoGenericRepository<${entityName}Document, ${entityName}> implements IRepository<${entityName}> {
    
        constructor(
            @InjectModel('${entityName}Model')
            model: Model<${entityName}Document>,
        ) { 
            super(model, new ${entityName}EntityFactory());
        }
    
    };
`
    return content;
};
