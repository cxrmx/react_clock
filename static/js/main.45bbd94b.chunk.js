(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),m=(n(12),n(13),n(0)),b=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={time:(new Date).toLocaleTimeString(),timerId:setTimeout((function(){}),0),name:t.props.name},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({timerId:setInterval((function(){var e=new Date;console.log(e.toLocaleTimeString()),t.setState({time:(new Date).toLocaleTimeString()})}),1e3)})}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timerId)}},{key:"render",value:function(){var t=this.state,e=t.time,n=t.name;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{className:"name",children:["Clock name:",n]}),Object(m.jsxs)("p",{className:"clock",children:["current time:"," ",e]})]})}}]),n}(u.a.Component);function j(){return(100*Math.random()).toFixed(6)}var h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={visibleClock:!0,name:j()},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.visibleClock,c=e.name;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"App__title",children:"React clock"}),Object(m.jsx)("div",{children:n&&Object(m.jsx)(b,{name:c})}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{type:"button",onClick:function(){t.setState({visibleClock:!0})},children:"Show Clock"}),Object(m.jsx)("button",{type:"button",onClick:function(){t.setState({visibleClock:!1})},children:"Hide Clock"}),Object(m.jsx)("button",{type:"button",onClick:function(){t.setState({name:j()})},children:"Set random name"})]})]})}}]),n}(u.a.Component);a.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.45bbd94b.chunk.js.map