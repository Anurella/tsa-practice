const users = [
  {
    id: 1,
    name: 'Employee #1',
    activatedOn: new Date('2019-01-01'),
    deactivatedOn: null,
    customerId: 1,
  },
  {
    id: 2,
    name: 'Employee #2',
    activatedOn: new Date('2019-01-01'),
    deactivatedOn: null,
    customerId: 1,
  },
];

const plan = {
  id: 1,
  customerId: 1,
  monthlyPriceInCents: 5000,
};


function monthlyCharge(month, subscription, users) {
   // calculate the monthly subscription based on active users

    
  let pricePerUser = subscription?.monthlyPriceInCents;
  let numOfUsers = users?.length;  
  
  if (numOfUsers > 0) {
    //   to check for active users 
    for(const element of users) {
        if(element.deactivatedOn) {
            if(element?.deactivatedOn.getMonth() > new Date(month).getMonth()) {
          return 0;
       } 
        }
       
    }
}
}


/**
 * Takes a Date instance and returns a Date which is the first day
 * of that month. For example:
 *
 * firstDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 1)
 *
 * Input type: Date
 * Output type: Date
**/
function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

/**
 * Takes a Date object and returns a Date which is the last day of that month.
 *
 * lastDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 31)
 *
 * Input type: Date
 * Output type: Date
**/
function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

/**
 * Takes a Date object and returns a Date which is the next day.
 * For example:
 *
 * nextDay(new Date(2022, 3, 17))  // => new Date(2022, 3, 18)
 * nextDay(new Date(2022, 3, 31))  // => new Date(2022, 4, 1)
 *
 * Input type: Date
 * Output type: Date
**/
function nextDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}

monthlyCharge('2020-12', plan, users);