import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions{
    base: number;
    limit: number;
    show: boolean;
    fileName: string;
    fileDestination: string;
}

export class ServerApp {

    static run({ base, limit, show, fileName, fileDestination }: RunOptions){
        console.log('running')
        //console.log(options);

        const table = new CreateTable().execute({base, limit });
        const wasCreated = new SaveFile().execute({ fileContent: table, destination: fileDestination, fileName});

        if (show) console.log(table);
    }
}