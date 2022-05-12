export default function handler(req,res){
    const {sub_id_1} =  req.query
    res.status(200).json({id1:sub_id_1})
}