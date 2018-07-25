var topic = [
    "高年級實習生",
    "今夜，在浪漫劇場與你相遇",
    "樂來樂愛你",
    "購物狂的異想世界",
    "職場求愛記",
    "我的初戀情人",
    "好想告訴你",
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(7,30);
