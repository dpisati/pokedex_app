(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/spinner.09ced8ac.gif"},37:function(e,a,t){e.exports=t.p+"static/media/pokedex_logo.6f1fd446.png"},44:function(e,a,t){e.exports=t(75)},49:function(e,a,t){},57:function(e,a,t){e.exports=t.p+"static/media/pokedex_backgroup.ae5a1cb9.png"},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(36),c=t.n(r),l=(t(49),t(2)),o=t(3),i=t(5),m=t(4),u=t(6),d=t(17),p=t(12),h=(t(50),t(37)),v=t.n(h),g=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"pokedex"},s.a.createElement("div",{className:"back_bar"}),s.a.createElement("a",{href:"http://localhost:3000/#/"},s.a.createElement("img",{src:v.a,alt:"pokedex_logo",className:"pokedex_logo",onClick:function(){return console.log("pokemon click")}}))))}}]),a}(n.Component),E=t(11),f=t.n(E),k=t(13),b=t(14),N=t(20),y=t.n(N);function w(){var e=Object(k.a)(["\n  text-decoration: none;\n  color: black;\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]);return w=function(){return e},e}function x(){var e=Object(k.a)(["\n  box-shadow: 01px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n  cursor: pointer;\n  -moz-user-select: none;\n  -website-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n"]);return x=function(){return e},e}function O(){var e=Object(k.a)(["\n  width: 5em;\n  height: 5em;\n  display: none;\n"]);return O=function(){return e},e}var j=b.a.img(O()),C=b.a.div(x()),_=Object(b.a)(d.b)(w()),A=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={name:"",imageUrl:"",pokemonIndex:"",imageLoading:!0,toManyRequests:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.name,t=e.url,n=t.split("/")[t.split("/").length-2],s="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(n,".png?raw=true");this.setState({name:a,imageUrl:s,pokemonIndex:n})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-md-3 col-sm-6 mb-5"},s.a.createElement(_,{to:"pokemon/".concat(this.state.pokemonIndex)},s.a.createElement(C,{className:"card"},s.a.createElement("h5",{className:"card-header"},this.state.pokemonIndex),s.a.createElement("div",{className:"card-body mx-auto"},this.state.imageLoading?s.a.createElement("img",{alt:"spinner",src:y.a,style:{width:"2em",height:"2em"},className:"card-img-top rounded mx-auto d-block mt-2 m-4"}):null,s.a.createElement(j,{className:"card-img-top rounded mx-auto mt-2",onLoad:function(){return e.setState({imageLoading:!1})},onError:function(){return e.setState({toManyRequests:!0})},src:this.state.imageUrl,alt:this.state.id,style:this.state.toManyRequests?{display:"none"}:this.state.imageLoading?null:{display:"block"}}),this.state.toManyRequests?s.a.createElement("h6",{className:"mx-auto"},s.a.createElement("span",{className:"badge badge-danger mt-2"},"To many requests...")):null,s.a.createElement("h6",{className:"card-title"},this.state.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))))))}}]),a}(n.Component);function P(){var e=Object(k.a)(["\n  text-decoration: none;\n  color: black;\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]);return P=function(){return e},e}function S(){var e=Object(k.a)(["\n  cursor: pointer;\n  -moz-user-select: none;\n  -website-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n"]);return S=function(){return e},e}function U(){var e=Object(k.a)(["\n  width: 10em;\n  height: 10em;\n  display: none;\n"]);return U=function(){return e},e}var R=b.a.img(U()),L=b.a.div(S()),M=Object(b.a)(d.b)(P()),D=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={name:"",imageUrl:"",pokemonIndex:"",imageLoading:!0,toManyRequests:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.name,t=e.url,n=t.split("/")[t.split("/").length-2],s="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(n,".png?raw=true");this.setState({name:a,imageUrl:s,pokemonIndex:n})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"result"},s.a.createElement(M,{to:"pokemon/".concat(this.state.pokemonIndex)},s.a.createElement(L,{className:""},s.a.createElement("div",{className:"spinner_div"},this.state.imageLoading?s.a.createElement("img",{alt:"spinner",src:y.a,style:{width:"2em",height:"2em"},className:""}):null,s.a.createElement(R,{className:"onepokemon_img",onLoad:function(){return e.setState({imageLoading:!1})},onError:function(){return e.setState({toManyRequests:!0})},src:this.state.imageUrl,alt:this.state.id,style:this.state.toManyRequests?{display:"none"}:this.state.imageLoading?null:{display:"block"}}),this.state.toManyRequests?s.a.createElement("h6",{className:"mx-auto"},s.a.createElement("span",{className:""},"To many requests...")):null))))}}]),a}(n.Component),I=(t(57),t(18)),F=t.n(I),B=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={url:"https://pokeapi.co/api/v2/pokemon/?limit=20",oneUrl:"",pokemon:null,pokemonOn:!1,onePokemon:null,onePokeUrl:"",input:""},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"resetState",value:function(){this.setState({url:"https://pokeapi.co/api/v2/pokemon/?limit=20",oneUrl:"",pokemon:null,pokemonOn:!1,onePokemon:null,onePokeUrl:"",input:""})}},{key:"pokemonOn",value:function(){var e;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(F.a.get(this.state.url));case 2:e=a.sent,this.setState({pokemon:e.data.results}),this.setState({pokemonOn:!0});case 5:case"end":return a.stop()}}),null,this)}},{key:"getPokemon",value:function(){return this.state.pokemon?s.a.createElement("div",{className:"row"},this.state.pokemon.map((function(e){return s.a.createElement(A,{key:e.name,name:e.name,url:e.url})}))):s.a.createElement("div",{className:"loading_div"},s.a.createElement("h1",{className:"loading"},"Loading Pokemon..."))}},{key:"inputChange",value:function(e){var a=e.target.value.toLowerCase(),t="https://pokeapi.co/api/v2/pokemon/".concat(a,"/");this.setState({oneUrl:t})}},{key:"searchPokemon",value:function(){var e;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(F.a.get(this.state.oneUrl));case 2:e=a.sent,this.setState({onePokemon:e.data,onePokeUrl:"https://pokeapi.co/api/v2/pokemon/".concat(e.data.id,"/")});case 4:case"end":return a.stop()}}),null,this)}},{key:"getOnePokemon",value:function(){return this.state.onePokemon?s.a.createElement("div",{className:"pokemon_result"},s.a.createElement(D,{key:this.state.onePokemon.name,name:this.state.onePokemon.name,url:this.state.onePokeUrl})):s.a.createElement("div",{className:"loading_div"})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"pokedex_div"},s.a.createElement("div",{className:"pokedex_background",alt:"pokedex_background"}),s.a.createElement("div",null,this.getOnePokemon()),s.a.createElement("div",{className:"input_div"},s.a.createElement("input",{type:"text",onChange:this.inputChange.bind(this),placeholder:"Search...",className:"input_pokemon"}),s.a.createElement("button",{className:"input_button",onClick:this.searchPokemon.bind(this)},"Submit"))),s.a.createElement("button",{className:"pokemonOn_btn",onClick:this.pokemonOn.bind(this)},"Get Pokemons"),s.a.createElement("div",{className:this.state.pokemonOn?"loads":"loads_off"},this.getPokemon()))}}]),a}(n.Component),q=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row main"},s.a.createElement("div",{className:"col"},s.a.createElement(B,null)))}}]),a}(n.Component),G={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6"},z=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={name:"",pokemonIndex:"",imageUrl:"",types:[],description:"",stats:{hp:"",attack:"",defense:"",speed:"",specialAttack:"",specialDefense:""},height:"",weight:"",eggGroup:"",abilities:"",genderRatioMale:"",genderRatioFemale:"",evs:"",hatchSteps:""},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e,a,t,n,s,r,c,l,o,i,m,u,d,p,h,v,g,E=this;return f.a.async((function(k){for(;;)switch(k.prev=k.next){case 0:return e=this.props.match.params.pokemonIndex,a="https://pokeapi.co/api/v2/pokemon/".concat(e,"/"),t="https://pokeapi.co/api/v2/pokemon-species/".concat(e,"/"),k.next=5,f.a.awrap(F.a.get(a));case 5:return n=k.sent,s=n.data.name,r=n.data.sprites.front_default,"",c="".hp,l="".attack,o="".defense,i="".speed,m="".specialAttack,u="".specialDefense,n.data.stats.map((function(e){switch(e.stat.name){case"hp":c=e.base_stat;break;case"attack":l=e.base_stat;break;case"defense":o=e.base_stat;break;case"speed":i=e.base_stat;break;case"special-attack":m=e.base_stat;break;case"special-defense":u=e.base_stat;break;default:return}})),d=Math.round(100*(1*n.data.height+1e-4))/100,p=Math.round(100*(.22462*n.data.weight+1e-4))/100,h=n.data.types.map((function(e){return e.type.name})),v=n.data.abilities.map((function(e){return e.ability.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})),g=n.data.stats.filter((function(e){return e.effort>0})).map((function(e){return"".concat(e.effort," ").concat(e.stat.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))})).join(", "),k.next=17,f.a.awrap(F.a.get(t).then((function(e){var a="";e.data.flavor_text_entries.some((function(e){return"en"===e.language.name?void(a=e.flavor_text):void 0}));var t=e.data.gender_rate,n=12.5*t,s=12.5*(8-t),r=Math.round(100/255*e.data.capture_rate),c=e.data.egg_groups.map((function(e){return e.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})).join(", "),l=255*(e.data.hatch_counter+1);E.setState({description:a,genderRatioFemale:n,genderRatioMale:s,catchRate:r,hatchSteps:l,eggGroups:c})})));case 17:this.setState({imageUrl:r,pokemonIndex:e,name:s,types:h,stats:{hp:c,attack:l,defense:o,specialAttack:m,specialDefense:u,speed:i},height:d,weight:p,abilities:v,evs:g});case 18:case"end":return k.stop()}}),null,this)}},{key:"render",value:function(){return s.a.createElement("div",{className:"col main_pokemon"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-5"},s.a.createElement("h5",null,this.state.pokemonIndex)),s.a.createElement("div",{className:"col-7"},s.a.createElement("div",{className:"float-right"},this.state.types.map((function(e){return s.a.createElement("span",{key:e,className:"badge badge-pill mr-1",style:{backgroundColor:"#".concat(G[e]),color:"white"}},e.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))})))))),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-md-3"},s.a.createElement("img",{alt:this.state.pokemonIndex,src:this.state.imageUrl,className:"card-img-top rounded mx-auto mt-2"})),s.a.createElement("div",{className:"col-md-9"},s.a.createElement("h4",{className:"mx-auto"},this.state.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")),s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-12 col-md-3"},"HP"),s.a.createElement("div",{className:"col-12 col-md-9"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.stats.hp,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},s.a.createElement("small",null,this.state.stats.hp))))),s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-12 col-md-3"},"Attack"),s.a.createElement("div",{className:"col-12 col-md-9"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.stats.attack,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},s.a.createElement("small",null,this.state.stats.attack))))),s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-12 col-md-3"},"Defense"),s.a.createElement("div",{className:"col-12 col-md-9"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.stats.defense,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},s.a.createElement("small",null,this.state.stats.defense))))),s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-12 col-md-3"},"Speed"),s.a.createElement("div",{className:"col-12 col-md-9"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.stats.speed,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},s.a.createElement("small",null,this.state.stats.speed))))),s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-12 col-md-3"},"Special Attack"),s.a.createElement("div",{className:"col-12 col-md-9"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.stats.specialAttack,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},s.a.createElement("small",null,this.state.stats.specialAttack))))),s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-12 col-md-3"},"Special Defense"),s.a.createElement("div",{className:"col-12 col-md-9"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.stats.specialDefense,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},s.a.createElement("small",null,this.state.stats.specialDefense)))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("p",{className:"p-2"},this.state.description))))),s.a.createElement("hr",null),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title text-center"},"Profile"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Height:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.height," ft.")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Weight:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.weight," lbs")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Catch Rate:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.catchRate,"%")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Gender Ratio:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.genderRatioFemale,"%"),backgroundColor:"#c2185b"},"aria-valuenow":"15","aria-valuemin":"0","aria-valuemax":"100"},s.a.createElement("small",null,this.state.genderRatioFemale)),s.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.genderRatioMale,"%"),backgroundColor:"#1976d2"},"aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"},s.a.createElement("small",null,this.state.genderRatioMale)))))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Egg Groups:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.eggGroups," ")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Hatch Steps:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.hatchSteps)),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Abilities:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.abilities)),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"EVs:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.evs)))))),s.a.createElement("div",{className:"card-footer text-muted"},"Data From"," ",s.a.createElement("a",{href:"https://pokeapi.co/",target:"_blank",className:"card-link",rel:"noopener noreferrer"},"PokeAPI.co"))))}}]),a}(n.Component),H=(t(74),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(g,null),s.a.createElement("div",{className:"container"},s.a.createElement(p.c,null,s.a.createElement(p.a,{exact:!0,path:"/",component:q}),s.a.createElement(p.a,{exact:!0,path:"/pokemon/:pokemonIndex",component:z})))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.f824dec3.chunk.js.map