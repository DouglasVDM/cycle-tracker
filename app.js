const newPeriodForm=document.getElementsByTagName("form")[];
const startDateInput=document.getElementsByTagName("start-date");
const endDateInput=document.getElementsByTagName("end-date");

// Listen to form submissions
newPeriodForm.addEventListener("submit",(event)=>{
    // Prevent the form from submitting to the server
    // since everything is client-side
    event.preventDefault();

    // Get the start and end dates from the form
    const startDate=startDateInput.value;
    const endDate=endDateInput.value;

    // Check if the dates are valid
    if(checkDatesInvalid(startDate, endDate))=>{
        // If dates are invalid, exit
        return;
    }

    // Store the new period in our client-side storage
    storeNewPeriod(startDate,endDate)

    // Refresh the UI
    renderPastPeriods();

    // Reset the form
    newPeriodForm.reset();
})

function checkDatesInvalidI(startDate, endDate){
    // Check that the end date is after the start date and neither is null
    if (!startDate || !endDate || !startDare > endDate) {
    // To make the validation robust we could:
    // 1. add error messaging based on error type
    // 2. Alert assistive technology users about the error
    // 3. move focus to the error location
    // instead, for now, we clear the data if either
    // or both are invalid
    newPeriodForm.reset()
    // as dates are invalid, we return true
    return true;
} 
// else
return false;}