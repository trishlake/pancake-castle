(function(e){function t(t){for(var n,s,i=t[0],o=t[1],l=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);c&&c(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,i=1;i<r.length;i++){var o=r[i];0!==a[o]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},u=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/pancake-castle/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=o;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"233c":function(e,t,r){"use strict";var n=r("c03b"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Argument",{attrs:{argument:e.selectedPhrase.subject,isSubject:!0,allNouns:e.allNouns},on:{argumentUpdate:e.subjectUpdated}}),r("Predicate",{attrs:{predicate:e.selectedPhrase.predicate,allVerbs:e.allVerbs},on:{predicateUpdate:e.predicateUpdated}}),e._v("\n  "+e._s(e.selectedPhrase)+"\n  "),r("hr"),e._v("\n  "+e._s(e.formPhrase)+"\n")],1)},u=[],s=(r("ac6a"),r("456d"),r("a481"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"argument"},[e.isSubject?r("h1",[e._v("Subject")]):e._e(),e.isSubject?e._e():r("h1",[e._v("Argument")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.nouns,expression:"nouns"}],attrs:{multiple:""},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.nouns=t.target.multiple?r:r[0]},e.argumentUpdate]}},e._l(e.allNouns,function(t){return r("option",{key:t.key,domProps:{value:t}},[e._v(e._s(t.value))])}),0)])}),i=[],o={name:"Argument",props:{allNouns:Array,isSubject:Boolean},data:function(){return{nouns:[]}},methods:{argumentUpdate:function(){this.$emit("argumentUpdate",this.nouns)}}},l=o,c=r("2877"),p=Object(c["a"])(l,s,i,!1,null,"621aa7ed",null),f=p.exports,d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"predicate"},[r("h1",[e._v("Predicate")]),r("h2",[e._v("Verb")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.verb,expression:"verb"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.verb=t.target.multiple?r:r[0]}}},e._l(e.allVerbs,function(t){return r("option",{key:t.key,domProps:{value:t}},[e._v(e._s(t.infinitive))])}),0),r("hr")])},v=[],h={name:"Predicate",props:{allVerbs:Array},data:function(){return{subjects:[],verb:void 0}},watch:{verb:function(e){this.$emit("predicateUpdate",e)}}},b=h,m=(r("233c"),Object(c["a"])(b,d,v,!1,null,"8fad7696",null)),g=m.exports,y=r("8805"),j=r("f6e6"),_={name:"app",data:function(){return{allNouns:y,allVerbs:j,phraseIndex:0,phrases:[{subject:[],predicate:{}}]}},methods:{formVerb:function(e,t){var r;if(e.regular){var n=e.infinitive.replace("to ",""),a=t.firstperson||t.secondperson||t.plural?"":e.endsWithSibilant?"es":"s";r=n+a}else{var u=e.presentTense.simple;r=t.firstperson?u.firstperson:t.secondperson?u.secondperson:t.plural?u.thirdperson.plural:u.thirdperson.singular}return r},formSubject:function(e,t){return this.andConcatinate(t.plural?e.map(function(e){return e.pluralSubjectForm||e.value}):e.map(function(e){return e.value}))},andConcatinate:function(e){var t=e.pop();return e.length>0?e.join(", ")+" and "+t:t},predicateUpdated:function(e){this.selectedPhrase.predicate=e},subjectUpdated:function(e){this.selectedPhrase.subject=e}},computed:{formPhrase:function(){var e="---",t=this.selectedPhrase;if(t.subject&&t.predicate&&t.subject.length>0&&Object.keys(t.predicate).length>0){var r=!!t.subject[0].firstperson&&1===t.subject.length,n=!!t.subject[0].secondperson&&1===t.subject.length,a=t.subject.length>1,u={plural:a,firstperson:r,secondperson:n},s=this.formSubject(t.subject,u),i=this.formVerb(t.predicate,u);e=s+" "+i}return e},selectedPhrase:function(){return this.phrases[this.phraseIndex]}},components:{Argument:f,Predicate:g}},P=_,k=(r("034f"),Object(c["a"])(P,a,u,!1,null,null,null)),S=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(S)}}).$mount("#app")},"64a9":function(e,t,r){},8805:function(e){e.exports=JSON.parse('[{"key":"I","value":"I","firstperson":true,"pluralSubjectForm":"Me"},{"key":"You","value":"You","secondperson":true},{"key":"Jeffrey","value":"Jeffrey"},{"key":"Trish","value":"Trish"},{"key":"Banana Tree","value":"Banana Tree"}]')},c03b:function(e,t,r){},f6e6:function(e){e.exports=JSON.parse('[{"key":"eat1","infinitive":"to eat","regular":true},{"key":"sing1","infinitive":"to sing","regular":true},{"key":"wash1","infinitive":"to wash","regular":true,"endsWithSibilant":true},{"key":"dance1","infinitive":"to dance","regular":true},{"key":"tobe1","infinitive":"to be","regular":false,"presentTense":{"simple":{"firstperson":"am","secondperson":"are","thirdperson":{"singular":"is","plural":"are"}}}}]')}});
//# sourceMappingURL=app.9e0c9a53.js.map