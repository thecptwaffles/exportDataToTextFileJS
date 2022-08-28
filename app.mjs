import { exportFile } from 'fs-browsers';


function cool() {
    
    exportFile("this string will be exported to txt file", { fileName: 'hello.txt' });

}
