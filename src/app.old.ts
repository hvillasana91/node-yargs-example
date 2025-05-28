import yargs, {options} from 'yargs';
import { hideBin } from 'yargs/helpers';
import { yarg } from "./plugins/yargs.plugin";
import fs from 'fs';


const base = yarg.b;
let output = ``;
const limit = yarg.l;
const header = `

======================================================

                    Tabla del ${ base }

======================================================
`;


for (let i = 1; i <= limit; i++) {
    output += `${base} X ${i} = ${ base * i} \n`;
}

output = header + output;
if (yarg.s) {
    console.log(output)
}


const outputPath = 'outputs';

fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, output);