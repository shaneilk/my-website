(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{23:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(1),n=a.n(s),o=a(12),r=a.n(o),c=(a(23),a(14)),l=a(13),p=a.n(l),h=a(6),d=a(7),m=a(9),b=a(8),j=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).onClick=function(){var t=e.props,a=t.label;(0,t.onClick)(a)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.activeTab,s=t.label,n="tab-list-item";return a===s&&(n+=" tab-list-active"),Object(i.jsx)("li",{style:{fontFamily:"Times New Roman"},className:n,onClick:e,children:s})}}]),a}(s.Component),u=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(h.a)(this,a),(i=t.call(this,e)).onClickTabItem=function(e){i.setState({activeTab:e})},i.state={activeTab:i.props.children[0].props.label},i}return Object(d.a)(a,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,a=this.state.activeTab;return Object(i.jsxs)("div",{className:"tabs",children:[Object(i.jsx)("ol",{className:"tab-list",children:t.map((function(t){var s=t.props.label;return Object(i.jsx)(j,{activeTab:a,label:s,onClick:e},s)}))}),Object(i.jsx)("div",{className:"tab-content",children:t.map((function(e){if(e.props.label===a)return e.props.children}))})]})}}]),a}(s.Component),g=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{style:{fontFamily:"Times New Roman"},children:e.AppName}),Object(i.jsx)("p",{style:{fontFamily:"Times New Roman"},children:e.Description}),Object(i.jsxs)("div",{href:"/",className:"avatar",children:[Object(i.jsx)("img",{alt:"avatar",src:e.photo1,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}}),Object(i.jsx)("img",{alt:"avatar",src:e.photo2,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}}),Object(i.jsx)("img",{alt:"avatar",src:e.photo3,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}}),Object(i.jsx)("img",{alt:"avatar",src:e.photo4,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}}),Object(i.jsx)("img",{alt:"avatar",src:e.photo5,width:"500",height:"250",style:{margin:"10px 10px 10px 10px"}})]})]})},f=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{style:{fontFamily:"Times New Roman"},children:[e.AppName," ",Object(i.jsx)("br",{}),"(developed in C)"]}),Object(i.jsx)("p",{style:{fontFamily:"Times New Roman"},children:e.Description}),Object(i.jsx)(p.a,{url:e.VideoLink})]})},x=a.p+"static/media/shaneilProfile.e4aaa9a8.jpeg",v=a.p+"static/media/mainscreen.1e67f7df.jpeg",y=a.p+"static/media/instructions.2d0d26e7.jpeg",w=a.p+"static/media/smallboard.05e60ef4.jpeg",O=a.p+"static/media/bigboard.0203daf5.jpeg",k=a.p+"static/media/winscreen.1a7180b3.jpeg",T=a.p+"static/media/mainmenu.35aacb59.jpeg",I=a.p+"static/media/gamestart3images.15ce604d.jpeg",N=a.p+"static/media/gameduring3images.18dc3467.jpeg",C=a.p+"static/media/flickergallery.70d8c099.jpeg",S=a.p+"static/media/highscores.1325032d.jpeg";a(50);var A=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(u,{children:[Object(i.jsxs)("div",{label:"Personal Projects",children:[Object(i.jsx)("div",{children:Object(i.jsx)(f,{AppName:"cShell",Technologies:"Made in c",VideoLink:"https://www.youtube.com/watch?v=Ej_ueH1OqO8",Description:"This cShell was made using multitasking via child processes, it can perform UNIX commands,  change theme colours, log previous commands, store environment variables as well as print text and environment variables. It can be run in interactive mode where you can type in commands one by one or a script mode where you can give a list of commands for it to perform"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)(g,{AppName:"DaMatch (developed in Android Studios using Java)",Description:"This is DaMatch, the objective of this game is to match a symbol from a card in the draw pile with one  on the discard pile untill all matches are found. It was created as a part of a final group project in CMPT 276. Through  three two-week iterations I worked with three other team members to create the base of the app, implement different modes,  store high scores and customize images on the cards by taking images from a phones photo gallery as well as Flicker.",photo1:T,photo2:I,photo3:N,photo4:C,photo5:S}),Object(i.jsx)(g,{AppName:"Asteroid Seeker (developed in Android Studios using Java)",Description:"This is the Asteroid Seeker, the objective of this game is to find all the asteroids hidden behind the squares in the least  amount of scans with the help of squares that show how many asteroids are nearby. I created this app as a part of a assignment in CMPT 276 with a partner. For this assignment app we had  different board sizes and asteroid numbers for different modes as well as a gameboard that stored the amound of times a square was clicked in order to check for asteroids near a square.",photo1:v,photo2:y,photo3:w,photo4:O,photo5:k})]})]}),Object(i.jsx)("div",{label:"About Me",children:Object(i.jsxs)("div",{href:"/",className:"avatar",children:[Object(i.jsx)("img",{alt:"avatar",src:x,width:"395",height:"400"}),Object(i.jsx)("p",{style:{fontFamily:"Times New Roman"},children:"Hello, my name is Shaneil and I am a third year Computing Science student at Simon Fraser University. I am passionate about Software Development, particularly Mobile and Web Development. Through software engineering courses I've created three Android Apps that are on display on the Personal Projects Tab. In addition to this I am learning React and Javascript concurrently, in fact this website was developed from scratch using React. I hope to develop more software in the future that I can share with you all, but in the meantime I hope you enjoy my currently existing projects."}),Object(i.jsx)(c.SocialIcon,{url:"https://github.com/shaneilk",style:{margin:"5px 5px 5px 5px"}}),Object(i.jsx)(c.SocialIcon,{url:"https://linkedin.com/in/shaneil-kapadia",style:{margin:"5px 5px 5px 5px"}})]})})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),i(e),s(e),n(e),o(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(A,{})}),document.getElementById("root")),F()}},[[51,1,2]]]);
//# sourceMappingURL=main.4791aa9e.chunk.js.map