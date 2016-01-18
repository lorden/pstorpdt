function pstOrPdt(timestamp) {
    var pdtRanges = [
        [1394359200, 1414918800],
        [1425808800, 1446368400],
        [1457863200, 1478422800],
        [1489312800, 1509872400],
        [1520762400, 1572771600],
    ];

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
