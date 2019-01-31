/**
 * @type {[[type]]}
 * memo:메모가 저장될 타입 형태
 * v-model 로 지정한것은  this.memo.content 이런 형태로 접근이 가능하다  여기서 this  #app 이다.
 */
var app = new Vue({
  el:'#app',
  data:{
    mode:'list',
    memo:{
      id:null,
      content:null,
      regDate:null
    },
    memos:[]
  },
  methods: {
    back:function(){
      this.mode='list';
    },
    renew:function(val){        
      return JSON.parse( JSON.stringify(val) )
    },
    open:function(id){
      for(var i in this.memos){
        if(this.memos[i].id === id){
          this.memo = this.renew(this.memos[i]);
          break;
        };
      };
      this.mode = 'edit';
    },      
    write:function(){
      this.mode = 'write';
      this.memo.content=null;
    },
    cencle:function(){
      this.mode='list';
      //초기화
      this.memo={
        id:null,
        content:null,
        regDate:null
      }
    },
    save:function(){
      var id = this.memos.length + 1;

      if(this.mode === 'write'){
        this.memos.push({
          id:id,
          content:this.memo.content,
          regDate: new Date()
        });         
      }else if(this.mode === 'edit'){
        for(var i in this.memos){
          if(this.memos[i].id === this.memo.id){
            this.memos[i] = this.renew(this.memo);
            break;
          }
        }
      }        
      this.mode='list';        
      //console.log(JSON.stringify(this.memos));
      localStorage.setItem('memos' , JSON.stringify(this.memos) )

    },
    remove:function(){
      if(confirm('삭제하시겠습니까?')){
        for(var i in this.memos){
          if(this.memos[i].id === this.memo.id){
            this.memos.splice(i,1);
            break;
          }
        };
        this.mode='list'; 
        localStorage.setItem('memos' , JSON.stringify(this.memos) )
      }
    }
  },
  created:function(){
    console.log('start');
    //vue 실행, 생성 될때 자동으로 실행해주는 vue 메소드
    //뷰가 실행되었고 로컬스토리지에 메모에 대한 내용이 있다면 로드시키기
    var memos = localStorage.getItem('memos');
    if(memos){
      //스토리지에 저장된 memos 가 있다면 메모앱 this.memos 에 저장
      this.memos =  JSON.parse(memos)
    }
  }
})













