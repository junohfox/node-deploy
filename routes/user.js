const express = require('express');

const { isLoggedIn } = require('./middlewares');
const { addFollowing, removeFollowing } = require('../controllers/user');
// const User = require('../models/user');

const router = express.Router();

router.post('/:id/follow' , isLoggedIn, addFollowing);

// router.post('/:id/follow', isLoggedIn, async (req, res, next) => {
//     try {
//         const user = await User.findOne({ where: { id: req.user.id } });
//         if (user) {
//             await user.addFollowing(parseInt(req.params.id, 10));
//             res.send('success');
//         } else {
//             res.status(404).send('no user');
//         }
//     } catch (error) {
//         console.error(error);
//         next(error);
//     }
// });

//팔로잉 끊기 기능//

router.post('/:id/notfollow' , isLoggedIn, removeFollowing);


// router.post('/:id/notfollow', isLoggedIn, async (req, res, next) => {
//     try {
//         const user = await User.findOne({ where: {id: req.user.id } });
//         if (user) {
//             await user.removeFollowing(parseInt(req.params.id ,10));
//             res.send();
//         } else {
//             res.status(404).send();
//         }
//     } catch (error) {
//         console.error(error);
//         next(error);
//     }
// });




// router.delete('/:id/notfollow', isLoggedIn, async (req, res, next) => {
//     try {
//         await Follow.destroy({
//             where: {
//                 followerId: req.user.id,
//                 followingId: req.params.id
//             }
//         });
//         res.send('success');
//     } catch (error) {
//         console.error(error);
//         next(error);
//     }
// });

// router.patch('/:nick', isLoggedIn, async(req,res,next)=>{
//     try{
//         console.log(req.user.id, req.params.id);
//         const user = await User.update({nick : req.params.nick},{where: {id:req.user.id}});
//         res.send('success');
//     }catch(error){
//         console.error(error);
//         next(error);
//     }
// });


module.exports = router;
