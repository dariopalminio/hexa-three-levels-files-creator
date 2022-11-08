#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { generateContentDTO } from './templates/dto.js';
import { generateContentSchema } from './templates/schema.js';
import { generateContentEntity } from './templates/entity.js';
import { generateContentRepository } from './templates/repository.js';
import { generateContentIService } from './templates/service.interface.js';
import { generateContentService } from './templates/service.js';
import { generateContentController } from './templates/controller.js';

const RegexUpperCamelCase = /^([A-Z][a-z0-9]+)((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/;

const questionsEntityName = [
    {
        name: "entityName",
        type: "input",
        message: "What is the entity name?",
        validate: function (input) {
            if (RegexUpperCamelCase.test(input)) {
                return true;
            }
            return 'Bad name syntax error';
        }
    }
];

const TYPE_OPTIONS = ["string", "number", "boolean", "Date", "any"];

const questionsAttr = [
    {
        name: "attributeName",
        type: "input",
        message: "What attribute name do you want to include?"
    },
    {
        name: "attributeType",
        type: "list",
        message: "What is the type of the attribute?",
        choices: TYPE_OPTIONS
    },
    {
        name: "more",
        type: "confirm",
        message: "Want to add another attribute?"
    }
];

const createFilesContent = (outputDirName, fileName, contents) => {
    const currentDir = process.cwd();
    const writePath = path.join(currentDir, outputDirName, fileName);
    fs.writeFileSync(writePath, contents, 'utf-8');
    console.log(`CREATE File ${writePath}`);
};

const createDirIfNotExists = (dirName) => {
    const currentDir = process.cwd();
    const writePath = path.join(currentDir, dirName);
    const exists = fs.existsSync(writePath);
    if (!exists) {
        fs.mkdirSync(writePath);
        console.log(`CREATE Folder ${writePath}`);
    }
};

const execPromptInput = async (questions) => {
    return await inquirer.prompt(questions);
}

const main = async () => {
    const entityNameResponse = await execPromptInput(questionsEntityName);
    const entityName = entityNameResponse.entityName;

    const attributesArray = [];
    let more = true;
    while (more) {
        const attribute = await execPromptInput(questionsAttr);
        more = attribute.more;
        attributesArray.push({ "name": attribute.attributeName, "type": attribute.attributeType });
    };

    console.log("Entity core:", entityName);
    console.log("Entity attributes array:", attributesArray);

    const contentsDTO = generateContentDTO(entityName, attributesArray);
    const contentsSchema = generateContentSchema(entityName, attributesArray);
    const contensEntity = generateContentEntity(entityName, attributesArray);
    const contensRepository = generateContentRepository(entityName);
    const contensIService = generateContentIService(entityName);
    const contensService = generateContentService(entityName);
    const contensController = generateContentController(entityName);

    createDirIfNotExists('application');
    createDirIfNotExists('domain');
    createDirIfNotExists('infrastructure');

    createFilesContent('application', `${entityName}.dto.ts`, contentsDTO);
    createFilesContent('application', `${entityName}.controller.ts`, contensController);
    createFilesContent('domain', `${entityName}.service.interface.ts`, contensIService);
    createFilesContent('domain', `${entityName}.service.ts`, contensService);
    createFilesContent('domain', `${entityName}.entity.ts`, contensEntity);
    createFilesContent('infrastructure', `${entityName}.schema.ts`, contentsSchema);
    createFilesContent('infrastructure', `${entityName}.repository.ts`, contensRepository);
};

main();