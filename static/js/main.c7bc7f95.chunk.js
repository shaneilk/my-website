(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{19:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(2),r=a.n(s),n=a(13),c=a.n(n),l=(a(19),a(20),a(12)),o=a(5),h=a(6),p=a(8),d=a(7),m=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onClick=function(){var t=e.props,a=t.label;(0,t.onClick)(a)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.activeTab,s=t.label,r="tab-list-item";return a===s&&(r+=" tab-list-active"),Object(i.jsx)("li",{style:{fontFamily:"Times New Roman"},className:r,onClick:e,children:s})}}]),a}(s.Component),j=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).onClickTabItem=function(e){i.setState({activeTab:e})},i.state={activeTab:i.props.children[0].props.label},i}return Object(h.a)(a,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,a=this.state.activeTab;return Object(i.jsxs)("div",{className:"tabs",children:[Object(i.jsx)("ol",{className:"tab-list",children:t.map((function(t){var s=t.props.label;return Object(i.jsx)(m,{activeTab:a,label:s,onClick:e},s)}))}),Object(i.jsx)("div",{className:"tab-content",children:t.map((function(e){if(e.props.label===a)return e.props.children}))})]})}}]),a}(s.Component),b=a.p+"static/media/shaneilProfile.e4aaa9a8.jpeg",x=a.p+"static/media/mainscreen.1e67f7df.jpeg",g=a.p+"static/media/instructions.2d0d26e7.jpeg",u=a.p+"static/media/smallboard.05e60ef4.jpeg",f=a.p+"static/media/bigboard.0203daf5.jpeg",v=a.p+"static/media/winscreen.1a7180b3.jpeg",y=a.p+"static/media/mainmenu.35aacb59.jpeg",O=a.p+"static/media/gamestart3images.15ce604d.jpeg",w=a.p+"static/media/gameduring3images.18dc3467.jpeg",k=a.p+"static/media/flickergallery.70d8c099.jpeg",T=a.p+"static/media/highscores.1325032d.jpeg";a(31);var N=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(j,{children:[Object(i.jsxs)("div",{label:"Personal Projects",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{style:{fontFamily:"Times New Roman"},children:"DaMatch:"}),Object(i.jsx)("p",{style:{fontFamily:"Times New Roman"},children:"This DaMatch, it is the game where the objective is to match a symbol from a card in the draw pile with one on the discard pile untill all matches are found. It was created as a part of a final group project in CMPT 276. Through three two-week iterations I worked with three other team members to create the base of the app, implement different modes, store high scores and customize images on the cards by taking images from a phones photo gallery as well as Flicker."}),Object(i.jsxs)("div",{href:"/",className:"avatar",children:[Object(i.jsx)("img",{alt:"avatar",src:y,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}}),Object(i.jsx)("img",{alt:"avatar",src:O,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}}),Object(i.jsx)("img",{alt:"avatar",src:w,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}})]}),Object(i.jsx)("div",{href:"/",className:"avatar"}),Object(i.jsxs)("div",{href:"/",className:"avatar",children:[Object(i.jsx)("img",{alt:"avatar",src:k,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}}),Object(i.jsx)("img",{alt:"avatar",src:T,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{style:{fontFamily:"Times New Roman"},children:"Asteroid Seeker:"}),Object(i.jsx)("p",{style:{fontFamily:"Times New Roman"},children:"This is the Asteroid Seeker, the objective of this game is to find all the asteroids hidden behind the squares in the least amount of scans with the help of squares that show how many asteroids are nearby. I created this app as a part of a assignment in CMPT 276 with a partner. For this assignment app we had different board sizes and asteroid numbers for different modes as well as a gameboard that stored the amound of times a square was clicked in order to check for asteroids near a square."}),Object(i.jsxs)("div",{href:"/",className:"avatar",children:[Object(i.jsx)("img",{alt:"avatar",src:x,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}}),Object(i.jsx)("img",{alt:"avatar",src:g,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}}),Object(i.jsx)("img",{alt:"avatar",src:u,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}})]}),Object(i.jsx)("div",{href:"/",className:"avatar"}),Object(i.jsxs)("div",{href:"/",className:"avatar",children:[Object(i.jsx)("img",{alt:"avatar",src:f,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}}),Object(i.jsx)("img",{alt:"avatar",src:v,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}})]})]})]}),Object(i.jsx)("div",{label:"About Me",children:Object(i.jsxs)("div",{href:"/",className:"avatar",children:[Object(i.jsx)("img",{alt:"avatar",src:b,width:"395",height:"400"}),Object(i.jsx)("p",{style:{fontFamily:"Times New Roman"},children:"Hello, my name is Shaneil and I am a third year Computing Science student at Simon Fraser University. I am passionate about Software Development, particularly Mobile and Web Development. Through software engineering courses I've created three Android Apps that are on display on the Personal Projects Tab. In addition to this I am learning React and Javascript concurrently, in fact this website was developed from scratch using React. I hope to develop more software in the future that I can share with you all, but in the meantime I hope you enjoy my currently existing projects."}),Object(i.jsx)(l.SocialIcon,{url:"https://github.com/shaneilk",style:{margin:"5px 5px 5px 5px"}}),Object(i.jsx)(l.SocialIcon,{url:"https://linkedin.com/in/shaneil-kapadia",style:{margin:"5px 5px 5px 5px"}})]})})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),r(e),n(e)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),I()}},[[32,1,2]]]);
//# sourceMappingURL=main.c7bc7f95.chunk.js.map