export const generateContentIService = (entityName) => {

    const content = `
    import { IPersistentAggregateService } from "hexa-three-levels";

    export interface I${entityName}Service<T> extends IPersistentAggregateService<T>{
    
    };
`
    return content;
};

