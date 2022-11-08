

const camelize = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toUpperCase() : word.toLowerCase();
    }).replace(/\s+/g, '');
  }
  
export const generateContentEntity = (entityName, attributesArray) => {

    //generate attributes
    let attributesContent = ``;
    for (var i = 0; i < attributesArray.length; i++) {
        attributesContent += `${attributesArray[i].name}: ${attributesArray[i].type};` + "\n";
    }

    //generate arguments
    let argumentsList = ``;
    for (var i = 0; i < attributesArray.length; i++) {
        argumentsList += ` ${attributesArray[i].name}: ${attributesArray[i].type}`;
        argumentsList += (i === attributesArray.length - 1)? `` : `,`;
        }

    //generate getters and setters
    let getters = ``;
    let setters = ``;
    for (var i = 0; i < attributesArray.length; i++) {
        let n = attributesArray[i].name ;
        getters += `
public get${camelize(n)}(): ${attributesArray[i].type} {
    return this.${n};   
};`+ "\n";
        setters += `
public set${camelize(n)}(value: ${attributesArray[i].type}) {
    this.${n} = value;
};`+ "\n";
    }

    //generate seters into constructor
    let setts = ``;
    for (var i = 0; i < attributesArray.length; i++) {
        setts +=`           this.${attributesArray[i].name} = argumentsArray[${i+1}];`+ "\n";
        }

    //generate setFromAny content
    let setFromAny = ``;
    for (var i = 0; i < attributesArray.length; i++) {
        setFromAny +=`  this.${attributesArray[i].name} = unmarshalled.${attributesArray[i].name};`+ "\n";
        }

    //generate convertToAny content
    let convertToAny = ``;
    for (var i = 0; i < attributesArray.length; i++) {
        convertToAny +=`            ${attributesArray[i].name}: this.${attributesArray[i].name}`;
        convertToAny += (i === attributesArray.length - 1)? `\n` : `,\n`;
        }


    const content = `
import { Entity, IMarshable, IValidatable, IEntityFactory } from "hexa-three-levels";

export interface I${entityName} {
id?: string;
${attributesContent}
};
    
export class ${entityName}EntityFactory implements IEntityFactory<${entityName}> {
    createInstance(unmarshalled: any): ${entityName} {
        return new ${entityName}(unmarshalled);
    }
};
    
export class ${entityName} extends Entity implements IValidatable, IMarshable<${entityName}> {
    
    
${attributesContent}
    
public constructor(unmarshalled: any);
public constructor(id: string,${argumentsList});
public constructor(...argumentsArray: any[]) {
    if (argumentsArray.length > ${(attributesArray.length + 1).toString()}) {
        throw new Error('Number of constructor arguments exceeded');
    }
    if (argumentsArray.length === 0) {
        super();
    }
    if (argumentsArray.length === 1) {
        const id: string = argumentsArray[0]._id ? argumentsArray[0]._id.toString() : argumentsArray[0].id;
        super(id);
        this.setFromAny(argumentsArray[0]);
    }
    if (argumentsArray.length > 1) {
        super(argumentsArray[0]); //id
${setts}
    }
};
    
    
private setFromAny(unmarshalled: any) {
${setFromAny}};
    
createFromAny(unmarshalled: any): ${entityName} {
    return new ${entityName}(unmarshalled);
};
    
public convertToAny(): any {
    const unmarshalled: I${entityName} = {
        id: this.id,
${convertToAny}
    };
    return unmarshalled;
};
    
public validateFormat(): void {
            throw new Error('Method not implemented.');
};
    
${getters}
    
${setters}
    
};
`
    return content;
};