module.exports = {
  func: function() {

    mongo.connect(DBURL,function(err,db){
      if (err){
        console.log("Failed to connect to the database.");
        res.sendStatus(500);
        db.close();
      }else{
        db.collection("files").find({},{_id:1,name: 1, data:0},function(err,cursor){
          if(err){
            res.sendStatus(500);
          }else{
            var fileList = [];
            cursor.each(function(err,doc){
              if(err){
                res.sendStatus(500);
              }else if (doc === null){
                res.send({files:fileList});  //sending an object with the form {files: [name1, name2, ...]}
                db.close();
              }else{
                fileList.push([doc.name,doc._id]);
              }
            })
          }
        });
      }
    });
  },
  func2: function(){
  },
};
