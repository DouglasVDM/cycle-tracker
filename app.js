// create constants for the form and the form controls
const newPeriodForm = document.getElementsByTagName("form")[0];
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");

// Listen to form submissions
newPeriodForm.addEventListener("submit", (event) => {
  // Prevent the form from submitting to the server
  // since everything is client-side
  event.preventDefault();

  //   Get the start and end dates from the form
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;

  //   Check if dates are invalid
  if (checkDatesInvalid(startDate, endDate)) {
    // If the dates are invalid, exit
    return;
  }
  //   Refresh the UI
  renderPastPeriods();

  // Reset the form
  newPeriodForm.reset();
});

function checkDatesInvalid(startDate, endDate) {
  // Check that end date is after start date and neither is null
  if (!startDate || !endDate || startDate > endDate) {
    // To make the validation robust we could:
    // add error messaging based on error type
    // alert assistive technology users about the error
    // move focus to the error location
    // instead, for now, we clear the dates if either
    // or both are invalid
    newPeriodForm.reset();
// as dates are invalid, we return true
    return true;
  }
  //   else
  return false;
}
