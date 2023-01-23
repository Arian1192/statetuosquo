import Rrss from '../../../../models/rrssModel';
import User from '../../../../models/userModel';

export default async function handler(req, res) {
    const id = req.query.id;
    if (id) {
        const { twitterName, instagramName, twitchName } = req.body;
        const user = await User.findById(id)
        if (user.rrss) {
            const rrss = await Rrss.findByIdAndUpdate(user.rrss, { twitterName, instagramName, twitchName }, { new: true });
            user.rrss = rrss._id;
            await user.save();
            res.status(200).json(rrss);
        } else {
            const rrss = await Rrss.create({ twitterName, instagramName, twitchName });
            user.rrss = rrss._id;
            await user.save();
            res.status(200).json(rrss);
        }
    }
}

