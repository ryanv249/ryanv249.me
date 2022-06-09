export default function handler(req, res){
    // only expecting GET requests, not handling others
    const {g} = req.query
    res.end(`Post: ${g}`)
}