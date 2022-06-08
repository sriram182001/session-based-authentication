const Connection =require('../dbconfig/dbconnect');
const { DataTypes }=require('sequelize');
const session=require('./session')

const dbConnection=Connection.connect;

const userInfo=dbConnection.define('userinfo',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    passcode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mailid:{
        type:DataTypes.STRING,
    },
    uid:{
        type:DataTypes.STRING,
        primaryKey:true
    },
},
    {
        freezeTableName: true,
        timestamps: false
    }
)
userInfo.hasMany(session.STable,{foreignKey:'uid'})
dbConnection.sync();
module.exports.createUser=async function(name,passcode,mailid,uid){
    await userInfo.create({name,passcode,mailid,uid}).then((data)=>{
        console.log(data.toJSON(),"added");
    });
}
module.exports.UserTable=userInfo;