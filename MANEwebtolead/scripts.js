function beforeSubmit() {
   let datePicker = document.getElementById('date-of-birth'); 
   let hiddenDate = document.getElementById('DOB_c')

   let formattedDate=new Date(datepicker.value).toLocaleDateString("en-US");
   hiddenDate.value = formattedDate;
}