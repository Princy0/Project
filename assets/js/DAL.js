var CustomLandlord={
    insert: function(objLandlord) {
        db.transaction(function(tx){
            var sql="INSERT INTO landlord(firstName, lastName, eMail, buildName, unitNumber, streetAdd, city,squareFootage,postalCode,priceRent,bedRoom,bathRoom,parking,petFriendly) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
            var options = [objLandlord.firstName, objLandlord.lastName, objLandlord.eMail,objLandlord.buildName, objLandlord.unitNumber, objLandlord.streetAdd, objLandlord.city, objLandlord.squareFootage,objLandlord.postalCode,objLandlord.priceRent,objLandlord.bedRoom,objLandlord.bathRoom,objLandlord.parking,objLandlord.petFriendly];
            function successTransaction(){
                console.info("Success: Insert transaction successful");
            }
            tx.executeSql(sql, options, successTransaction, errorHandler);
        });
    },
};
//
// var States = {
//
//     insert: function (stateObj) {
//         db.transaction(function (tx){
//
//             var sql = "INSERT INTO state VALUES(?);";
//
//             var options = [stateObj.name];
//
//             function successTransaction(){
//                 console.info("Success: Insert transaction successful");
//             }
//
//             tx.executeSql(sql, options, successTransaction, errorHandler);
//         });
//     },
//     selectAll: function(options, callback){
//         db.transaction(function(tx){
//             var sql = "SELECT * FROM state;";
//
//             tx.executeSql(sql, options, callback, errorHandler);
//         });
//     }
// };