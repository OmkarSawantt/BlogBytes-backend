const {Router} =require('express')
const {createPost,getPosts,getPost,getCatPosts,getUserPosts,editPost,deletePost,searchSugestion,searchResult}=require('../controllers/postControllers')
const router=Router()
const authorMiddelware=require('../middelware/authMiddelware')

router.post('/',authorMiddelware,createPost)
router.get('/',getPosts)
router.get('/:id',getPost)
router.get('/categories/:category',getCatPosts)
router.get('/users/:id',getUserPosts)
router.patch('/:id',authorMiddelware,editPost)
router.delete('/:id',authorMiddelware,deletePost)
router.get('/titles',searchSugestion)
router.post('/search',searchResult)

module.exports=router
