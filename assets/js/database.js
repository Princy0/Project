var db;

function errorHandler(error){
    console.error("SQL error: "+error.message);
}

var DB={
    createDatabase: function (){
        var shortName="RentGuideDB";
        var version= "1.0";
        var displayName="DB for RentGuide app";
        var dbSize= 2*1024*1024;

        function dbcreateSucess(){
            console.info("Success: Database created successfully");
        }
        db=openDatabase(
            shortName,version,displayName,dbSize,dbcreateSucess
        );
    },
    createTables:function (){
        db.transaction(function (tx){
            var createStateTable= "CREATE TABLE IF NOT EXISTS state("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";

            var insertStateValue = "INSERT INTO state(name) VALUES('Ontario'),('Alberta'),('British Columbia')," +
                "('Nova Scotia'),('Manitoba');"
            var dropStateTable = "DROP TABLE state";
            var options=[];
            function  successcallback(){
                console.info("Success: Drop table: state  successful");
            }
            function  successcallback2(){
                console.info("Success:  States Insert transaction  successfull");

            }
            tx.executeSql(dropStateTable,options,successcallback,errorHandler);
            tx.executeSql(createStateTable,options,successcallback1,errorHandler);
            tx.executeSql(insertStateValue,options,successcallback2,errorHandler);
            var createLandlordTable="CREATE TABLE IF NOT EXISTS landlord("+
                "id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
                "firstName VARCHAR(20) NOT NULL,"+
                "lastName VARCHAR(20),"+
                "eMail VARCHAR(30),"+
                "buildName VARCHAR(50) NOT NULL,"+
                "unitNumber INTEGER,"+
                "streetAdd VARCHAR(100) NOT NULL,"+
                "city VARCHAR(20) NOT NULL,"+
                "postalCode VARCHAR(10),"+
                // "stateId INTEGER NOT NULL,"+
                "priceRent INTEGER,"+
                "squareFootage INTEGER,"+
                "bedRoom INTEGER,"+
                "bathRoom INTEGER,"+
                "parKing VARCHAR(10),"+
                "petFriendly VARCHAR(10),"+
                "FOREIGN KEY(stateId) REFERENCES state(id));";
            var options=[];
            function  successcallback1(){
                console.info("Success: Create tables... review and state \nsuccessful");
            }
            tx.executeSql(createLandlordTable,options,successcallback1,errorHandler);
        });
    },
    dropTables:function (){
        function successCallback3(){
            console.info("Drop Table: review and state successful");
        }
        db.transaction(function (tx){
            var options=[];
            var dropReviewTable="DROP TABLE IF EXISTS review;";
            var dropStateTable = "DROP TABLE IF EXISTS state;";
            tx.executeSql(dropReviewTable,options,successCallback3,errorHandler);
            tx.executeSql(dropStateTable,options,successCallback3,errorHandler);
        });
    }
};