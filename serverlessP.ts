import { stat, fstat } from "fs";

console.log("Hellow there! 哈喽呀~ \n This is a Serverless tutorial.")

//Lambda Function.

export const myHalder= async (event:any ={}): Promise<any> => {

    console.log("Hello World");
    const response = JSON.stringify(event, null, 2);
    return response;

}
{
    // TO DO



  //  callback(Error error, Object results);
    
}




