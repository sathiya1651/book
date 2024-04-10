const Book = require('../BookModel/bookmodel')

// exports.createBook = async(req,res)=>{
//     try{
//         const book = await Book.create(req.body);
//         res.status(201).json(book)
//     }catch(err){
//         res.status(500).json({message:"err"})

//     }
// };


exports.createBook= (req,res)=>{
    Book.create(req.body)
    .then((book)=>{
        res.status(201).json(book)
    }).catch((err)=>{
        res.status(500).json({message:"err"})
    })
}



exports.allbook = async(req,res)=>{
    try{
        const allbooks = await Book.find();
        res.status(201).json(allbooks)
    }catch(err){
        res.status(500).json({message:"err"})
    }
}

exports.getidbook = async(req,res)=>{
    try{
        const getbooks = await Book.findOne({bookid:req.params.id});
        if (!getbooks) {
            return res.status(404).json({ message: 'No book' });
          }
          res.status(200).json(getbooks);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      };

exports.updatebook = async(req,res)=>{
    try{
        const updatebook = await Book.findOneAndUpdate({bookid:req.params.id},req.body,{new:true});
        if(!updatebook){
            return res.status(404).json({message:"No book available"})
        }
        res.status(200).json(updatebook)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

exports.deletebook = async(req,res)=>{
    try{
        const deletebook=await Book.findOneAndDelete({bookid:req.params.id})
        if(!deletebook){
            return res.status(404).json({message:"No book delete"})
        }
        res.status(200).json(deletebook)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

exports.deleteall = async(req,res)=>{
    try{
         await Book.deleteMany({})
        res.status(200).json({message:"Delete all record"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}