module.exports = {
    response : (res, result, status, err) =>{
        let resultPrint = {}
        resultPrint.status = 'Succes';
        resultPrint.status_code = status;
        resultPrint.result= result;
        resultPrint.err = err || null 
        return res.json(resultPrint);
    }
}