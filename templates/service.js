export const generateContentService = (entityName) => {

  const content = `
import { IRepository, GenericService } from "hexa-three-levels";
import { Injectable, Inject } from '@nestjs/common';
import { I${entityName}Service } from './${entityName}.service.interface';
import { ${entityName},I${entityName}, I${entityName}EntityFactory } from './${entityName}.entity';

@Injectable()
export class ${entityName}Service extends GenericService<I${entityName}, ${entityName}> implements I${entityName}Service<${entityName}> {

  constructor(
    @Inject('I${entityName}Repository')
    repository: IRepository<${entityName}>,
  ) { 
    super(repository, new ${entityName}EntityFactory());
  }

};
`
  return content;
};


