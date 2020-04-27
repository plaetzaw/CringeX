sequelize model:generate --name user --attributes email:string,password:string,handle:string
sequelize model:generate --name videos --attributes videoUrl:string,userId:integer,userLikes:array,userDislikes:array
sequelize model:generate --name profileData --attributes name:string,bio:string,pictureUrl:string,userId:integer
sequelize model:generate --name comments --attributes comment:string,userId:integer,videoId:integer


