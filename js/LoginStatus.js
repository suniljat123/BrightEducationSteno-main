let logoutTimer;

// Reset timer on user activity
function resetLogoutTimer() {
  clearTimeout(logoutTimer);
  startLogoutTimer();
}

// Start the inactivity timer
function startLogoutTimer() {
  console.log('startLogoutTimer called');
  logoutTimer = setTimeout(() => {
    alert('You have been logged out due to 15 minutes of inactivity.');
    localStorage.removeItem("SPR_StudentPhone"); // clear localStorage if needed
    location.href = "index.html"; // Redirect to login page
  }, 15 * 60 * 1000); // 15 minutes
}

// Detect tab visibility change
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === 'visible') {
    resetLogoutTimer();
  }
});

// Reset timer on user activity
window.addEventListener("mousemove", resetLogoutTimer);
window.addEventListener("keypress", resetLogoutTimer);

// Start the timer when page loads
startLogoutTimer();