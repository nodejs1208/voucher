var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var	crypto = require('crypto');
var teacherSchema = new Schema({
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

    teacher_id: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        validate:[
          function (password) {
            return password.length >=4;
          },'암호를 4자이상'
        ]
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,

        match: [/.+\@.+\..+/,'이메일형식']
    },
    phone: {
        type: String,
        trim: true,
 
    },
    organization: {
        type: String
    }, //나중에 기관 회원가입에서 참조해야함
    work_position: {
        type: String,
        enum: ['regular', 'temporary']
    }, //룰로 변경
    residentORhome: {
        type: String, enum: ['resident', 'home']
    }, //룰로 변경
    career: String,
    academic_background: String,
    certificate: String,
    salt:{
      type:String
    },
    provider:{
      type:String,
      required:'Provider 가 필요함'
    },
    providerId:String,
    providerData:{},
    created:{
      type:Date,
      default:Date.now
    }


});


teacherSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

teacherSchema.pre('save',function (next) {
if(this.password){
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
console.log(this.password);
	this.password = this.hashPassword(this.password);
}
next();
});

teacherSchema.methods.hashPassword = function(password) {

	return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

teacherSchema.methods.authenticate = function(password) {
 return this.password === this.hashPassword(password);
};
teacherSchema.statics.findUniqueTeacher_id = function(teacher_id,suffix,callback){
  var _this =this;
  var possibleTeacher_id = teacher_id +(suffix ||'');

  _this.findOne({
    teacher_id : possibleTeacher_id
  },function(err,teacher){

    if(!err){
      if(!teacher){
          callback(possibleTeacher_id);
      }else{
        return _this.findUniqueTeacher_id(teacher_id,(suffix ||0)+1,callback);
      }
    }else{
      callback(null);
    }
  });
};

teacherSchema.post('save',function(next){
  if(this.isNew){
    console.log('created');
  }else{
    console.log('updated');
  }
});



mongoose.model('Teacher', teacherSchema);
