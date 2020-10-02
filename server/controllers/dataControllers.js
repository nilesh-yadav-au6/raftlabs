const User = require("../models/User")
const Relation = require("../models/Relations")


module.exports = {
    addUser : async (req, res) => {
        try{
            
            const { name } = req.body
            const user = await User.create({name})
            res.json({StatusCode: 201 , user})
            
        }catch(err){
            throw(err)
        }
    },
    addRelation : async (req,res) => {
        try{
            const { userName1 , userName2 , relation } = req.body
            const createdRelation = await Relation.create({userName1 ,userName2 , relation})
            res.json({StatusCode: 201 , createdRelation})
        }catch(err){
            throw(err)
        }
    },
    findDegree: async (req,res) => {
        try{
            const { userName1 , userName2} = req.body
            
            const relationlist1 = await Relation.find({ $or:[ { userName1 },{userName2:userName1}] })
            const relationlist2 = await Relation.find({ $or:[ {userName2} ,{userName1:userName2}] })

            if( relationlist1.length === 0 || relationlist2.length === 0) {return res.json({StatusCode:500 , message: "No relation Found"})}

            const arr1 = []
            const arr2 = []

            for(let i= 0; i<relationlist1.length; i++){
                if(relationlist1[i].userName1 == userName1){
                    arr1.push(relationlist1[i].userName2)
                }else{
                    arr1.push(relationlist1[i].userName1)
                }
            }
            for(let i= 0; i<relationlist2.length; i++){
                if(relationlist2[i].userName1 == userName2){
                    arr2.push(relationlist2[i].userName2)
                }else{
                    arr2.push(relationlist2[i].userName1)
                }
            }

             
            const result = arr1.filter(x => arr2.indexOf(x) !== -1)

            function removeItemAll(arr, value) {
                let i = 0;
                while (i < arr.length) {
                  if (arr[i] === value) {
                    arr.splice(i, 1);
                  } else {
                    ++i;
                  }
                }
                return arr;
              }

            const result1 = removeItemAll(arr1, result[0])
            const result2 = removeItemAll(arr2, result[0])

            let finalResult1 =[];
            finalResult1.push(userName1)
            if(result.length !== 0) {finalResult1.push(result[0])}
            finalResult1.push(userName2)

            let finalResult2 = [];

            finalResult2.push(userName1)
            finalResult2.push(result1[0])
            finalResult2.push(result2[0])
            finalResult2.push(userName2)
            res.json({StatusCode: 201 , finalResult1, finalResult2})
        }catch(err){
            throw(err)
        }
    },
    getUsers: async(req,res) => {
        try{

            const users = await User.find({})
            res.json({StatusCode: 201 , users})

        }catch(err){
            throw{err}
        }
    }
}