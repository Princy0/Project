$(document).ready(function (){
    init();
    initDB();
});

function init(){
    $("#btnSubmits").on("click", btnSubmit_click);
    $("#landLordPage").on("pageshow",landLordPage_show);

}
function landLordPage_show(){
    // updateStatesDropdown();
}

function btnSubmit_click(){
    landlordValidation();


}

function initDB(){
    try
    {
        DB.createDatabase();
        if(db){
            console.info("Creating Tables...");
            DB.createTables();
        }
        else{
            console.error("Error: cannot create table : Database does not exist");
        }
    }catch (e)
    {
        console.error("Error(Fatal): Error in initDB. can not proceed");
    }
}