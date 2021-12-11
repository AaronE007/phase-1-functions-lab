const hq = 42
const feet = 264

function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup - hq)
}
function distanceFromHqInFeet (pickupinfeet) {
  if (pickupinfeet > hq) {
      return (pickupinfeet - hq) * feet; 
  } else if (pickupinfeet < hq) {
      return (hq - pickupinfeet) * feet;
 }

}
function distanceTravelledInFeet(a, b){
if (a > b){
return (a - b) * feet 
} else if (b > a){
    return (b - a) * feet
}

}

function calculatesFarePrice(start, destination){
    if (start < destination){
        if (((destination - start) * feet) < 400){
             return (0)
        } else if (((destination - start) * feet) < 2000){
             return (((destination - start) * feet - 400) * 0.02) 
        } else if (((destination - start) * feet) < 2500){
             return (25)
        } else if (((destination - start) * feet) >= 2500){
             return ('cannot travel that far')
}

    } else if (start > destination){
         if (((start - destination) * feet) < 400){
             return (0)
        } else if (((start - destination) * feet) < 2000)    {
             return (((start - destination) * feet - 400) * 0.02) 
        } else if (((start - destination) * feet) < 2500){
             return (25)
        } else if (((start - destination) * feet) >= 2500) {
             return ('cannot travel that far')
        }
    }
}
