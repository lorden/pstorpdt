function pstOrPdt(timestamp) {
   let pdtRanges = [];
   let start = 1394359200;
   let end = 1414918800;
   let leap = 3;
   let regularSeconds = 31449600;
   let leapSeconds = 32054400;
   for(let i=0;i<100;i++) {
       if (leap == 4) {
           start = start + leapSeconds;
           end = end + leapSeconds;
           leap = 0;
       } else {
           start = start + regularSeconds;
           end = end + regularSeconds;
           leap += 1;
       }
       pdtRanges.push([start, end]);
    }


    for (i in pdtRanges) {
        if (timestamp >= pdtRanges[i][0] && timestamp < pdtRanges[i][1]) {
            return 'pdt';
        }
    }

    return 'pst';

}

var currentTimestamp = parseInt(Date.now() / 1000);
var timezone = pstOrPdt(currentTimestamp);

var caption = 'Now and until the first Sunday in November.'
if (timezone == 'pst') {
    caption = 'Now and until the second Sunday in March.'
}
document.getElementById('timezone').innerHTML = timezone + '.';
document.getElementById('caption').innerHTML = caption;
