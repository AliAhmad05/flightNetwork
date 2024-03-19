/* Date and location variables
*  Date manipulation method
*/

export class Travel {
    public fromCity: string = "Athens";
    public toCity: string = "Thessaloniki";
    public fromDate: string = "Thu Mar 28 2024";
    public toDate: string = "Sun Mar 31 2024";
    public month: string = "March 2024";

    public static getDatePlusToday(numDays: number, formatPattern: string): string {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + numDays);
        return currentDate.toLocaleDateString('en-US', { 
            weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', 
            timeZone: 'UTC', formatMatcher: 'basic'
        });
    }
}