
import Rrss from '../../../../models/rrssModel';
import User from '../../../../models/userModel';
export default async function handler(req, res) {
    const id = req.query.id;
    try {
        if (id) {
            const user = await User.findById(id)
            if (user.rrss) {
                const rrss = await Rrss.findById(user.rrss);
                res.status(200).json(rrss);
            }
        }
    }
    catch (err) {
        console.log(err)
    }
}