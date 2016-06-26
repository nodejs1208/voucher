var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teacherSchema =new Schema({
//   선생님 아이디 string
// * 비밀번호 password string
// * 비밀번호확인 password
// * 선생님 이름 string
// * 선생님 이메일 string
// * 선생님 연락처 number
// * 기관명 : select  약 15~20개
//
// * 고용형태 select
// * 상주/재가 select
// * 근무타입 seclect
// * 경력 string
// * 선생님 최종학력 string
// 자격증 1 string

teacher_id : String,
password : String,
name :String,
email:String,
phone:String,
organization:String, //나중에 기관 회원가입에서 참조해야함
work_position:String, //룰로 변경
residentORhome:String,//룰로 변경
career:String,
academic_background:String,
certificate:String

});

mongoose.model('Teacher',teacherSchema);
