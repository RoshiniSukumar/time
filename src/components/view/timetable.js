export const timetableGen = (classes, teacher, timetable) => {

    console.log("datassssclasss", classes);

    var d_hr = timetable

    var staff = classes.map((val) => val.subject.staffNAme[0])

    // var staff = ["t1", "t2", "t3", "t4", "t5"]

    var t_class = () => {
        for (let i = staff.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [staff[i], staff[j]] = [staff[j], staff[i]]
        }

        return staff;
    }

    var tt_class = t_class()
    console.log(tt_class);
    var tt = 0;
    // for (let i = 0; i < day; i++) {
    //     for (let j = 0; j < hr; j++) {
    //         d_hr[i][j] = tt_class[tt];
    //         ++tt;
    //         if (tt == 5) {
    //             tt = 0;
    //             tt_class = t_class()
    //         }
    //     }
    // }
    console.log("steacher", teacher);
    console.log("timetable", timetable);
    for (let i = 0; i < timetable.length; i++) {
        var teacherArray = teacher.find((teach) => teach.name === tt_class[tt])
        var tArray = teacherArray.hrs_alot.find((v) => v === i + 1)
        if (timetable[i].subject === null && tArray === undefined) {
            var sub = classes.filter((va) => va.subject.staffNAme[0] === tt_class[tt])
            timetable[i].subject = sub[0].subject.subjectName
            teacherArray.hrs_alot.push(i + "");
            ++tt;
            if (tt == staff.length - 1) {
                tt = 0;
                tt_class = t_class()
            }
        }
    }
    console.log("teacher", teacher);
}