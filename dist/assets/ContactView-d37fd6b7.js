import{d as u,f as _,o as n,c,a as e,w as o,v as l,u as m,b as i,g as f,h,i as v,r as y,F as b}from"./index-b98e0905.js";const g={class:"classic-section contact-section"},N={class:"classic-container contact-container"},x={class:"contact-form"},C={class:"cf-line"},V={class:"cf-group"},k=e("label",{class:"cf-label",for:"first-name"},"First Name :",-1),U={class:"cf-group"},w=e("label",{class:"cf-label",for:"last-name"},"Last Name :",-1),F={class:"cf-line"},M={class:"cf-group"},B=e("label",{class:"cf-label",for:"topic"},"Topic :",-1),T={class:"cf-line"},D={class:"cf-group"},H=e("label",{class:"cf-label",for:"message"},"Message :",-1),P={class:"cf-line __honey"},S={class:"cf-group__honey"},W=e("label",{class:"cf-label__honey",for:"honey"},"Are you honey ?",-1),j={key:0,class:"cf-button-container"},A=["href"],E=u({__name:"ContactFormComponent",setup(p){_(!1);let r="kimrobdev44@gmail.com";const t=_({firstName:"",lastName:"",topic:"",message:"",honey:void 0});return(d,s)=>(n(),c("section",g,[e("div",N,[e("form",x,[e("div",C,[e("div",V,[k,o(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=a=>t.value.firstName=a),class:"cf-input",id:"first-name",name:"first-name",placeholder:"Mathieu"},null,512),[[l,t.value.firstName]])]),e("div",U,[w,o(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=a=>t.value.lastName=a),class:"cf-input",id:"last-name",name:"last-name",placeholder:"Nebra"},null,512),[[l,t.value.lastName]])])]),e("div",F,[e("div",M,[B,o(e("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=a=>t.value.topic=a),class:"cf-input",id:"topic",name:"topic",placeholder:"Job proposal"},null,512),[[l,t.value.topic]])])]),e("div",T,[e("div",D,[H,o(e("textarea",{class:"cf-textarea","onUpdate:modelValue":s[3]||(s[3]=a=>t.value.message=a),placeholder:"Write your message here"},null,512),[[l,t.value.message]])])]),e("div",P,[e("div",S,[W,o(e("input",{type:"text",class:"cf-input __honey","onUpdate:modelValue":s[4]||(s[4]=a=>t.value.honey=a),name:"honey",placeholder:"Write your reply here"},null,512),[[l,t.value.honey]])])]),t.value.honey?v("",!0):(n(),c("div",j,[e("a",{href:"mailto:"+m(r)+"?subject="+t.value.topic+"%20---%20from%20"+t.value.lastName.toUpperCase()+"%20"+t.value.firstName+"&body="+t.value.message,target:"_blank",title:"Send your email to the website's owner",class:"cf-buttonlink"},[i(m(f),{class:"cfb-icon"}),h(" Send e-mail ")],8,A)]))])])]))}});const L=u({__name:"ContactView",setup(p){return(r,t)=>{const d=y("HeroParticle");return n(),c(b,null,[i(d,{title:"Contact Me !"}),i(E)],64)}}});export{L as default};