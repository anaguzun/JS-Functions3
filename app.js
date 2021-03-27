const getSleepHours = day => {
switch(day){
  case 'monday': 
  return 8;
  case 'tuesday': 
  return 6;
  case 'wednesday': 
  return 7;
  case 'thursday': 
  return 7;
  case 'friday':
  return 5;
  case 'saturday': 
  return 7;
  case 'sunday': 
  return 7;
}
};



const getActualSleepHours = () => {
  return (getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'));
};



const getIdealSleepHours = () => {
const idealHours = 8;
return idealHours * 7;
};



const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep!');
  }else if(actualSleepHours > idealSleepHours){
    console.log('You got more sleep that you need! You have extra!');
  }else if(actualSleepHours < idealSleepHours){
    console.log(`You should get some rest and sleep more!`);
  }
  };
  calculateSleepDebt();















