import * as XLSX from "xlsx";

// extract data from csv file
export const extractData = (csv: File) => {
    return new Promise<unknown[]>((resolve, reject) => {
        let arrayBuffer: any;
        let fileReader = new FileReader();
    
        try {
            fileReader.readAsArrayBuffer(csv);
        
            fileReader.onload = (e) => {
                arrayBuffer = fileReader.result;
                let data = new Uint8Array(arrayBuffer);
        
                let arr = new Array();
        
                for (let i = 0; i < data.length; i++)
                    arr[i] = String.fromCharCode(data[i]);
        
                let bstr = arr.join("");
                let workbook = XLSX.read(bstr, { type: "binary" });
                let first_sheet_name = workbook.SheetNames[0];
                let worksheet = workbook.Sheets[first_sheet_name];
                let arrayList =  XLSX.utils.sheet_to_json(worksheet, { raw: true });
                arrayList = shuffleData(arrayList);
                return resolve(arrayList);
            };
        } catch (error) {
            return reject(error);
        }
    })
};

// shuffle array data
export const shuffleData = (array: unknown[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}