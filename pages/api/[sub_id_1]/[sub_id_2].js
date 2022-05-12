export default function handler(req,res){
    const {sub_id_1,sub_id_2} =  req.query
    res.status(200).json({id1:sub_id_1,id2:sub_id_2})
}