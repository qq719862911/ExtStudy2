
Ext.define('User',{
    extend:'Ext.data.Model',
    fields:[
        {name:'username'},
        {name:'realname'},
        {name:'hiredate'},
        {name:'phone'},
        {name:'state'}
    ]
});
//var myStore = 
var myStore = Ext.create('Ext.data.Store', {
    model: 'User',
    pageSize: 10,
   // storeId: 'myStore',//这个被应用时这样写 store: Ext.data.StoreManager.lookup('simpsonsStore'),   
    /*   */
      proxy:{//发送请求
           type:'ajax',
           url:'./json/user_list.json',
           // type: 'memory',
            reader:{//请求完成后返回的东西
                type:'json',//返回的类型
                root:'result',//返回的数据的节点的名称(ajax请求时用propertyRoot会有问题)
            },
    },
   
   /* 
    data:  {
       "total":12,
        "result":[
            {"id":1,"username":"wang1","realname":"王1","hiredate":"2018-01-01","phone":"13512341231","state":true}
        ,   {"id":2,"username":"wang2","realname":"王2","hiredate":"2018-02-02","phone":"13512341232","state":false}
        ,   {"id":3,"username":"wang3","realname":"王3","hiredate":"2018-03-03","phone":"13512341233","state":true}
        ,   {"id":4,"username":"wang4","realname":"王4","hiredate":"2018-04-04","phone":"13512341234","state":false}
        ,   {"id":5,"username":"wang5","realname":"王5","hiredate":"2018-05-05","phone":"13512341235","state":true}
        ,   {"id":6,"username":"wang6","realname":"王6","hiredate":"2018-06-06","phone":"13512341236","state":false}
        ,   {"id":7,"username":"wang7","realname":"王7","hiredate":"2018-07-07","phone":"13512341237","state":true}
        ,   {"id":8,"username":"wang8","realname":"王8","hiredate":"2018-08-08","phone":"13512341238","state":false}
        ,   {"id":9,"username":"wang9","realname":"王9","hiredate":"2018-09-09","phone":"13512341239","state":true}
        ,   {"id":10,"username":"wang10","realname":"王10","hiredate":"2018-10-10","phone":"13512340110","state":false}
        ,   {"id":11,"username":"wang11","realname":"王11","hiredate":"2018-11-11","phone":"13512341211","state":true}
        ,   {"id":12,"username":"wang12","realname":"王12","hiredate":"2018-12-12","phone":"13512341212","state":true}
         ]
       }, */
    autoLoad:true//自动加载数据
});