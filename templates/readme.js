
export const generateContentReadme = (entityName) => {

    
    const content = `
    In NestJS you nust edit app.module file to dependency injection.

    Add Model in MongooseModule.forFeature:
    
    { name: '${entityName}Model', schema: ${entityName}Schema },
    
    Add Service in providers:
        {
          provide: 'I${entityName}Service',
          useClass: ${entityName}Service,
        },
    
    Add Repository in providers:
    
        {
          provide: 'I${entityName}Repository',
          useClass: ${entityName}Repository,
        },
    
};
`
    return content;
};

