 document.addEventListener('DOMContentLoaded', function () {
            // Get current day of the week
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDate = new Date();
            const currentDay = daysOfWeek[currentDate.getUTCDay()];
            document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDay}`;

            // Get current UTC time in milliseconds and update automatically
            function updateUTCTime() {
                const currentUTCTime = Date.now();
                document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time (ms): ${currentUTCTime}`;
            }
            // Initial update
            updateUTCTime();

            // Update every 100 milliseconds
            setInterval(updateUTCTime, 1000);
        });

