import fs from 'fs';

export interface Options {
    fileContent: string;
    destination?: string;
    fileName?: string;
}

export interface SaveFileUseCase{
    execute: (options:Options) => boolean; 
}


export class SaveFile implements SaveFileUseCase{
    constructor(){}

    execute({
        fileContent,
        destination = 'outputs',
        fileName = 'table.txt'
    }: Options): boolean{
        
        try {
            fs.mkdirSync(destination, {recursive: true});
            fs.writeFileSync(`${destination}/${fileName}`, fileContent);
    
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }

}

