(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){t.exports=a(20)},18:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(8),l=a.n(i),s=a(6),c=a(9),r=a(1),d=a(2),u=a(4),m=a(3),h=a(5),f=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(m.a)(e).call(this,t))).state={isGoing:!0},a}return Object(h.a)(e,t),Object(d.a)(e,[{key:"handleInputChange",value:function(t){console.log("in handle",t),this.props.editTodoList(t)}},{key:"render",value:function(){var t=this,e=this.props.todoListData.map(function(e,a){return e.done?o.a.createElement("li",{key:a,className:"done-items"},o.a.createElement("i",{className:"material-icons"},"done")," "+e.title," ",o.a.createElement("button",{type:"button",onClick:function(){t.props.deleteTodoList(e.id)},className:"remove-item"},o.a.createElement("i",{className:"material-icons"},"close"))):o.a.createElement("li",{key:a,className:"ui-state-default"},o.a.createElement("div",{className:"checkbox"},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",name:"checkbox"+a,onChange:function(){return t.handleInputChange(a)}}),e.title)),o.a.createElement("button",{type:"button",onClick:function(){t.props.deleteTodoList(e.id)},className:"remove-item"},o.a.createElement("i",{className:"material-icons"},"close")))});return o.a.createElement("ul",{id:"sortable",className:"list-unstyled"},e)}}]),e}(o.a.Component),b=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(m.a)(e).call(this,t))).handleChange=function(t){var e=t.target.value,n=a.props.id;console.log("id ",n),a.setState({id:n,title:e,done:!1})},a.initialState={title:""},a.state=a.initialState,a}return Object(h.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("form",null,o.a.createElement("input",{type:"text",className:"form-control add-todo",placeholder:"Add todo",name:"todoText",onChange:this.handleChange,value:this.state.title}),o.a.createElement("br",null),o.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){t.state.title&&""!==t.state.title&&t.props.addTotodoList(t.state),t.setState(Object(s.a)({},t.initialState))}},"add To-Do"))}}]),e}(n.Component),p=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(m.a)(e).call(this,t))).handleSubmit=function(t){a.setState({data:[].concat(Object(c.a)(a.state.data),[t])},function(){localStorage.setItem("dataList",JSON.stringify(a.state.data))})},a.editTodoList=function(t){var e=a.state.data;e[t]=Object(s.a)({},e[t],{done:!0}),a.setState({data:e},function(){localStorage.setItem("dataList",JSON.stringify(a.state.data)),console.log("om main ",a.state.data)})},a.deleteEntryFromTodo=function(t){var e=a.state.data.filter(function(e){return e.id!==t});a.setState({data:e},function(){localStorage.setItem("dataList",JSON.stringify(e)),console.log("on main delete ",a.state.data)})},a.state={data:JSON.parse(localStorage.getItem("dataList"))||[]},a}return Object(h.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.state.data;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"todolist not-done"},o.a.createElement("h1",null,"Todos"),o.a.createElement(b,{id:t.length,addTotodoList:this.handleSubmit}),o.a.createElement("hr",null),o.a.createElement(f,{todoListData:t,editTodoList:this.editTodoList,deleteTodoList:this.deleteEntryFromTodo}),o.a.createElement("div",{className:"todo-footer"},o.a.createElement("strong",null,o.a.createElement("span",{className:"count-todos"}," ",t.filter(function(t){return!t.done}).length))," Task left undone.")))))}}]),e}(o.a.Component);a(16),a(18);l.a.render(o.a.createElement(p,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.9cfeab49.chunk.js.map