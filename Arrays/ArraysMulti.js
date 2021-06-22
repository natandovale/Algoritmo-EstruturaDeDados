var month = []
var firstWeeks = []
var lastWeeks = []

var avgTempWeek1 = [23, 35.2, 19, 17, 33.4, 41.6, 25]
var avgTempWeek2 = [11, 39, 23, 31.2, 19.5, 17, 33.8]

var avgTempWeek3 = [23, 25.2, 19, 27, 13.4, 21.6, 35]
var avgTempWeek4 = [21, 39, 23, 31.2, 29.5, 37, 13.8]

firstWeeks = [avgTempWeek1, avgTempWeek2]
lastWeeks = [avgTempWeek3, avgTempWeek4]

month = [firstWeeks, lastWeeks]

for(var x = 0; x < month.length; x++){
  for(var y = 0; y < month[x].length; y++){
    for(var z = 0; z< month[x][y].length; z++){
      console.log(month[x][y][z])
    }
  }
}