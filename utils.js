function multiplyMatrix(matrixA, matrixB)
{
    let result = new Array(); 

   
    numColsRows=2;
    
    
    for (let i = 0; i < numColsRows; i++) 
    {
        
        for (let j = 0; j < numColsRows; j++) 
        { 
            let matrixRow = new Array();//declare an array
            let rrr = new Array();
            let resu = new Array();
            
            for (let k = 0; k < numColsRows; k++) 
            {
                rrr.push(parseInt(matrixA[i][k])*parseInt(matrixB[k][j]));
            }//for 3
            resu.push(parseInt(rrr[i])+parseInt(rrr[i+1]));

            result.push(resu);
            //result.push(matrixRow);
        }//for 2
    }//for 1
    return result;
}// function multiplyMatrix
