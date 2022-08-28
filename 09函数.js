"use strict";
function fn(hanshu) {
    hanshu('我就是zzl');
}
function myname(mz) {
    console.log(mz);
}
fn(myname);
//传入一个函数，并能够在get中调用这个函数
function get(thenum) {
    console.log(thenum(66), thenum.jiao);
}
function fuck(num) {
    console.log(num * 10);
    return num * 10;
}
fuck.jiao = 'laji';
get(fuck);
