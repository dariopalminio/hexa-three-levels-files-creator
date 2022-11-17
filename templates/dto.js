
export const generateContentDTO = (entityName, attributesArray) => {

    let attributesContent = ``;

    for (var i = 0; i < attributesArray.length; i++) {
        attributesContent += `${attributesArray[i].name}: ${attributesArray[i].type};` + "\n";
    }

    const content = `
import { I${entityName} } from './../domain/I${entityName}.entity';

export class ${entityName}DTO  implements I${entityName}{

${attributesContent}
};
`
    return content;
};