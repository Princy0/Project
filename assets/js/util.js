function doValidate_frmLandlord(){
    var form = $("#frmLandlord");
    form.validate({
        rules:{
            txtFirstName:{
                required:true
            },
            txtLastName:{
                required:true
            },
            txtEmail:{
                required:true
                // emailcheck:true
            },
            buildingName:{
                required:true
            },
            streetAddress:{
                required: true
            },
            inputCity:{
                required: true
            },
            // cmbState:{
            //     // required:false
            //
            // },
            postalCode:{
                required: true
                // postcheck:true
            }
        },
        messages:{
            txtFirstName: {
                required:"Please enter First Name"
            },
            txtLastName: {
                required:"Please enter last Name"
            },
            txtEmail: {
                required:"Please enter your email"
                // emailcheck: "Please enter valid Email"
            },
            buildingName: {
                required: "Please enter Building Name"
            },
            streetAddress: {
                required : "Please enter Street Address"
            },
            inputCity: {
                required: "Please enter City name"
            },
            // cmbState: {
            //     // required: "Please enter state"
            // },
            postalCode: {
                required: "Please enter Postal Code"
                // postcheck: "Please Enter valid Postal Code"
            }
        }
    });
    return form.valid();
}
// jQuery.validator.addMethod("emailcheck",
//     function (value, element){
//         var  EmailRegex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//         return EmailRegex.test(value) ;
//     });
//
// jQuery.validator.addMethod("postcheck",
//     function (value,elements){
//         var postRegex= /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/;
//         return postRegex.test(value);
//     });