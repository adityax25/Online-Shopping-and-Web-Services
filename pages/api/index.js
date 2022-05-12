export default function handler(req,res){
    // let reques = req
    res.status(200).json({data:"My first API"});
    console.log(req)
}