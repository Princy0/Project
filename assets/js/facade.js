function landlordValidation(){
    if(doValidate_frmLandlord()) {
        console.info("Landlord form is valid");
        var firstName = $("#txtFirstName").val();
        var lastName = $("#txtLastName").val();
        var eMail = $("#txtEmailId").val();
        var buildName = $("#buildingName").val();
        var unitNumber= $("#UnitNo").val();
        var streetAdd = $("#streetAddress").val();
        var city = $("#inputCity").val();
        // var stateId = $("#cmbState").val();
        var postalCode = $("#postalCode").val();
        var priceRent=$("#price").val();
        var squareFootage= $("#squareFootage").val();
        var bedRoom=$("#bedRooms").val();
        var bathRoom=$("#bathrooms").val();
        var parking=$("#parking").val();
        var petFriendly=$("#petFriendly").val();
        var objLandlord = new Event(firstName, lastName, eMail, buildName, unitNumber
            , streetAdd, city,postalCode,priceRent,squareFootage,bedRoom,bathRoom,parking,petFriendly);
        CustomLandlord.insert(objLandlord);
    }
    else{
        console.info("Landlord form is invalid");
    }


//
// function updateStatesDropdown(){
//     var options = [];
//
//     States.selectAll(options, callback);
//
//     function callback(tx, results) {
//
//         console.info("Success: States selected successfully");
//
//         var htmlCode = "";
//
//         for(var i = 0; i < results.rows.length; i++){
//             var state = results.rows[i];
//             var stateId = state['id'];
//             var stateName = state['name'];
//
//             if(stateName === "Ontario"){
//
//                 htmlCode += `<option selected value=${stateId}> ${stateName} </option>`;
//             }
//             else{
//                 htmlCode += `<option value=${stateId}> ${stateName} </option>`;
//             }
//         }
//
//         var cmbs = $("#cmbState");
//         cmbs = cmbs.html(htmlCode);
//         cmbs.selectmenu("refresh");
//     };
}