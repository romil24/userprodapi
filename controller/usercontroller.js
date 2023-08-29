var user = require('../model/usermodel');

exports.add_user = async (req, res) => {

    var data = await user.create(req.body)

    res.status(200).json({
        status: "User Data Add",
        data
    }
    )
}

exports.select = async (req, res) => {

    var data = await user.find()

    res.status(200).json({
        status: "data selected",
        data
    })
}

//Get a single user
exports.get_sin = async (req, res) => {

    try {
        var firstName = req.params.firstName

        var data = await user.find(

            {
                // "$or" = > multiple string ni ander pan hoy shake
                "firstName": { $regex: firstName }
                // 👆           syntax che ae 
                // je filed serch kari vi hoy te 
            }
        )

        // or

        // ae method thi fix name lakhavuj pade pan upder nama one word hoy to pan avshe and  ? kari ne data pass karava pade 
        // 👇
        // var data = await user.find({firstName});

        res.status(200).json({
            status: "select",
            data
        })
    }
    catch (error) {
        res.status(200).json({
            error
        })
    }

};

// Search users (use ?)
exports.Search_users = async (req, res) => {

    var firstName = req.query.firstName

    var data = await user.find({ firstName });

    res.status(200).json({
        status: "select",
        data
    })
}

// Limit & Skip users

exports.Limit_Skip = async(req,res) =>{

        var limit = 5 ;
        
        var total_rec = await user.find().count()

        var  page_no = req.query.page_no;

        if(page_no == undefined ){
            page_no = 1 ;
        }

        var Skip  = (page_no -1 ) * limit 

        var data  = await user.find().limit(limit).skip(Skip)

        var page =Math.ceil(total_rec/limit);


        console.log(data);

        res.status(200).json({
            status:"ski",
            data,
            total_rec,
            page,
            page_no
            
        })

        
}

exports.Update = async(req,res)  =>{
    try{

        var id = req.query.id

        var data = await user.findByIdAndUpdate(id,req.body)

        res.status(200).json({
            status:"update...",
            data
        })
    }
    catch(error)
    {
        res.status(200).json({
            error
        })
    }
}

exports.Delete = async (req,res) => {
    try{    

        var id = req.params.id 

        var data = await user.findByIdAndDelete(id)

        res.status(200).json({
            status:"Deleted Record...",
            data 
        })

    }
    catch(error)
    {

    }
}