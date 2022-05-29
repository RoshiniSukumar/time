import { timetableGen } from "./timetable"

/**
 * @function getFixClass 
 * @param {*} data 
 * @notes:
 * 
 * 
 */


export const getFixClass = (data, teacher, cla) => {
    // var timetable = timetabe;
    var timetable = [
        { subject: null }, { subject: null }, { subject: null }, { subject: null }, { subject: null },
        { subject: null }, { subject: null }, { subject: null }, { subject: null }, { subject: null },
        { subject: null }, { subject: null }, { subject: null }, { subject: null }, { subject: null },
        { subject: null }, { subject: null }, { subject: null }, { subject: null }, { subject: null },
        { subject: null }, { subject: null }, { subject: null }, { subject: null }, { subject: null },
        { subject: null }, { subject: null }, { subject: null }, { subject: null }, { subject: null }
    ]
    console.log("tt1", timetable);
    var fixdata = data

    var _3a = fixdata.filter((val) => val.className === cla)
    console.log("_3a", _3a);

    _3a.map((data) => {
        data.fixHrs.map((num) => {
            teacher.map((val) => data.subject.staffName.map((value) => {
                if (value.toLowerCase() === val.name.toLowerCase()) {
                    console.log("data", data);
                    var da = {
                        className: data.className,
                        subjectName: data.subject.subjectName,
                        hrs: num
                    }
                    val.hrs_alot.push(da);
                    // val.hrs_alot = [...val.hrs_alot, ...num]
                }
            }))
            timetable[num] = { subject: data.subject.subjectName }
        })
    })
    return timetable;
}

export const classs = (data, teacher, cla, timetable, ttg) => {
    var t = [];
    // var timetable = ttk;
    var fixdata = data;
    var _3a = fixdata.filter((val) => val.className === cla)

    var teach = timetableGen(_3a, teacher, timetable, ttg)
    console.log(t, "tt");
    console.log("te", teach);
    return teach;
}