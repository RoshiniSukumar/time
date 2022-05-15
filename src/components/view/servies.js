import { timetableGen } from "./timetable"

/**
 * @function getFixClass 
 * @param {*} data 
 * @notes:
 * 
 * 
 */
var timetable = [
    { subject: null }, { subject: null }, { subject: null }, { subject: null }, { subject: null },
    { subject: null }, { subject: null }, { subject: null }, { subject: null }, { subject: null },
    { subject: null }, { subject: null }, { subject: null }, { subject: null }, { subject: null },
    { subject: null }, { subject: null }, { subject: null }, { subject: null }, { subject: null },
    { subject: null }, { subject: null }, { subject: null }, { subject: null }, { subject: null },
    { subject: null }, { subject: null }, { subject: null }, { subject: null }, { subject: null }
]
export const getFixClass = (data, teacher, cla) => {


    var fixdata = data

    var _3a = fixdata.filter((val) => val.className === cla)
    console.log("_3a", _3a);

    _3a.map((data) => {
        data.fixHrs.map((num) => {
            teacher.map((val) => data.subject.staffName.map((value) => {
                if (value.toLowerCase() === val.name.toLowerCase()) {
                    val.hrs_alot.push(num);
                    // val.hrs_alot = [...val.hrs_alot, ...num]
                }
            }))
            timetable[num] = { subject: data.subject.subjectName }
        })
    })

}

export const classs = (data, teacher, cla) => {

    var fixdata = data

    var _3a = fixdata.filter((val) => val.className === cla)

    timetableGen(_3a, teacher, timetable)
}