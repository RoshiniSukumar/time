import React from "react";
import Class_hooks from "../hooks/class_hooks";
function Generating_timetable(props) {
  var { day, hrs } = props;
  var { data, isLoading } = Class_hooks();

  if (isLoading) {
    return <div>loading</div>;
  }
  var arr = data.data[0].arr;
  console.log("====================================");
  console.log(arr);
  console.log("====================================");
  var cla = [];
  arr.map((da) => cla.push({ teacher: da.tea, class: da.clas }));
  var timetable = [];
  console.log("====================================");
  console.log(cla);
  console.log("====================================");

  var t_class = () => {
    for (let i = cla.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [cla[i], cla[j]] = [cla[j], cla[i]];
    }

    return cla;
  };
  t_class();
  console.log("====================================");
  console.log("cla change", cla);
  console.log("====================================");
  var tt = 0;

  for (let i = 0; i < cla.length; i++) {
    var dayss = [];
    for (let j = 0; j < 5; j++) {
      dayss.push(cla[tt]);
      ++tt;
      if (tt == 5) {
        tt = 0;
        cla = t_class();
      }
    }
    timetable.push(dayss);
  }
  console.log("====================================");
  console.log(timetable);
  console.log("====================================");

  return <div></div>;
}

export default Generating_timetable;
