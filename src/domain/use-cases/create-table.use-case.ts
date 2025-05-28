
export interface CreateTableUseCase {
    execute: ( options: CreaTableOptions) => string;
}


export interface CreaTableOptions{
    base: number;
    limit?: number
}

export class CreateTable implements CreateTableUseCase{

    constructor(){

    }


    execute({ base, limit = 10 }: CreaTableOptions){
        let output = '';
        for (let i = 1; i <= limit; i++) {
            output += `${base} X ${i} = ${ base * i} \n`;
        }

        return output;
    }
}


