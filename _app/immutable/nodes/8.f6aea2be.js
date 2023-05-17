import{S as _,i as g,s as A,y as $,z as y,A as C,g as b,d as k,B as v,O as w,k as B,q as I,a as P,e as p,l as F,m as j,r as T,h as E,c as q,n as m,b as D,G,u as x,R as z,U as J,J as L}from"../chunks/index.32f5b285.js";import{b as M,l as S}from"../chunks/stores.5db7a0c8.js";import{L as R}from"../chunks/Layout.c0af1861.js";function d(r,u,n){const e=r.slice();return e[4]=u[n],e}function h(r){let u,n;return{c(){u=B("img"),this.h()},l(e){u=F(e,"IMG",{class:!0,src:!0}),this.h()},h(){m(u,"class","w-100 my-10 rounded"),J(u.src,n=r[3](r[4]))||m(u,"src",n)},m(e,s){D(e,u,s)},p:L,d(e){e&&E(u)}}}function N(r){let u,n=r[1][r[0]].text1+"",e,s,c,l=r[2],a=[];for(let t=0;t<l.length;t+=1)a[t]=h(d(r,l,t));return{c(){u=B("p"),e=I(n),s=P();for(let t=0;t<a.length;t+=1)a[t].c();c=p(),this.h()},l(t){u=F(t,"P",{class:!0});var i=j(u);e=T(i,n),i.forEach(E),s=q(t);for(let o=0;o<a.length;o+=1)a[o].l(t);c=p(),this.h()},h(){m(u,"class","whitespace-pre-line my-10")},m(t,i){D(t,u,i),G(u,e),D(t,s,i);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(t,i);D(t,c,i)},p(t,i){if(i&1&&n!==(n=t[1][t[0]].text1+"")&&x(e,n),i&12){l=t[2];let o;for(o=0;o<l.length;o+=1){const f=d(t,l,o);a[o]?a[o].p(f,i):(a[o]=h(f),a[o].c(),a[o].m(c.parentNode,c))}for(;o<a.length;o+=1)a[o].d(1);a.length=l.length}},d(t){t&&E(u),t&&E(s),z(a,t),t&&E(c)}}}function O(r){let u,n;return u=new R({props:{id:r[1].projectId,$$slots:{default:[N]},$$scope:{ctx:r}}}),{c(){$(u.$$.fragment)},l(e){y(u.$$.fragment,e)},m(e,s){C(u,e,s),n=!0},p(e,[s]){const c={};s&129&&(c.$$scope={dirty:s,ctx:e}),u.$set(c)},i(e){n||(b(u.$$.fragment,e),n=!0)},o(e){k(u.$$.fragment,e),n=!1},d(e){v(u,e)}}}function U(r,u,n){let e;return w(r,S,a=>n(0,e=a)),M.set("#771111"),[e,{projectId:3,en:{text1:`
			IoT Device for russian goverment official to maintain balance.
			The Project is a joke. Localization of the Doomsday clock.
			
			The clock is build with:
			 - nodeMcu arduido chip
			 - real analog clock
			 - a tiny internet server

			It connects to internet and analyzes data from news, social media and other sources to predict how russian society is close to revolution. Arduino chip handle clock speed, from still to realtime. 00:00 is refered to revolution and end of current goverment.

			The basis for prediction fetched from internet:
			1. Sechin's salary
			2. Bread Prices
			3. Reputation of Police
			4. Frequency of new laws appearing

			Interesting fact: resistor was build of a pencil and clock worked only at certain temperatures, i had to heat them up with head dryer before presentation.
			`},ru:{text1:`
			Устройство IoT для государственного чиновника России для поддержания баланса.
         Проект — это шутка. Локализация часов Судного дня.
                                                                                                      
         Часы построены с:
          - чип nodeMcu arduido
          - настоящие аналоговые часы
          - крошечный интернет-сервер
                                                                                                      
         Он подключается к Интернету и анализирует данные из новостей, социальных сетей и других источников, чтобы предсказать, насколько российское общество близко к революции. Чип Arduino управляет тактовой частотой от неподвижного до реального времени. 00:00 означает революцию и конец нынешнего правительства.
                                                                                                      
         Основа для прогноза взята из интернета:
         1. Зарплата Сечина
         2. Цены на хлеб
         3. Репутация полиции
         4. Частота появления новых законов
                                                                                                                                                                              
         Интересный факт: резистор был сделан из карандаша, а часы работали только при определенных температурах, перед презентацией мне пришлось прогреть их феном.
		`}},["rc4.png","rc1.JPG","rc2.JPG","rc3.png"],a=>`/projects/revolution-clock/${a}`]}class V extends _{constructor(u){super(),g(this,u,U,O,A,{})}}export{V as component};
