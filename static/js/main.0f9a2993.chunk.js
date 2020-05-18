(this["webpackJsonpreact-async-component-hoc-example"]=this["webpackJsonpreact-async-component-hoc-example"]||[]).push([[0],{294:function(e,t,n){"use strict";n.r(t);n(84);var a=n(1),r=n.n(a),o=n(10),i=n.n(o),c=(n(91),n(338)),l=n(336),s=n(342),m=n(330),u=n(331),p=n(332),d=n(11),h=n.n(d),f=n(14),v=r.a.createContext(null);var E=function(){function e(e,t){void 0===e&&(e=50);var n=(void 0===t?{}:t).maxAge;this.size=e,this.maxAge=n,this.map=new Map,this.head=null,this.tail=null}var t=e.prototype;return t._putAtTop=function(e){e===this.tail&&(this.tail=e.prev),e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e.prev=null,e.next=this.head,e.time=Date.now(),this.head=e},t.set=function(e,t){var n=this.map.get(e);n?this._putAtTop(n):(n={prev:null,next:this.head,key:e,time:Date.now()},this.tail||(this.tail=n),this.head=n),n.value=t,this.map.set(e,n),this.map.size>this.size&&(this.map.delete(this.tail.key),this.tail&&this.tail.prev&&(this.tail.prev.next=null),this.tail=this.tail.prev)},t.get=function(e){var t=this.map.get(e);if(this.maxAge&&Date.now()-t.time>this.maxAge){for(var n=t.prev,a=t;a;)this.map.delete(a.key),a=a.next;return n&&(n.next=null),void(this.tail=n)}if(t)return this._putAtTop(t),t.value},e}();function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var x={width:"100%"};function b(e){var t=e.$parts,n=Object.entries(t);return n.sort((function(e,t){return isNaN(+e[0])?e[0].localeCompare(""+t[0]):+e[0]-+t[0]})),r.a.createElement("div",{style:x},n.map((function(e){var t=e[0],n=e[1];return r.a.createElement(a.Fragment,{key:t},n)})))}var g=new E(100);function w(e,t){var n;t||(t=e,e=b);var o=function(){return"standard"},i=function(i){var c=i.renderKey,l=this,s=Object(a.useRef)(),m=Object(a.useContext)(v);n&&!c&&(c=n.call(l,i)),c&&"string"!==typeof c&&(c=JSON.stringify(c));var u=Object(a.useState)((function(){return c&&g.get(c)||{0:m}})),p=u[0],d=u[1],h=Object(a.useRef)(),f=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)(),r=Object(a.useState)(e),o=r[0],i=r[1];return t.current=i,n.current=o,[o,function(e){return t.current(e)},function(){return n.current}]}(0),E=f[0],x=f[1],b=f[2];h.current=p;var w,C=Object(a.useRef)(),A=JSON.stringify([o(),E]);if(s.current&&s.current(),C.current!==A){C.current=A;var L=(w=A,function(e,t){if(w!==C.current)throw new Error("Cancel");var n;t?d(h.current=y(y({},h.current),{},((n={})[e]=t,n))):e&&("object"===typeof e?e.$$typeof?d(h.current={0:e}):d(h.current=y(y({},h.current),e)):d(h.current={0:e}))}),I=t.call(l,y(y({},i),{},{resolve:L,restart:k}));"function"!==typeof I||I.then||(s.current=function(){return t.call(l,y(y({},i),{},{resolve:L,restart:k}))},I=I()),I.then((function(e){e&&L(e)})).catch((function(e){if("Cancel"!==e.message)throw e}))}return c&&g.set(c,p),r.a.createElement(e,y({},i,{$parts:p}));function k(){x(b()+1)}};return i.keyFn=function(e){return n=e,i},i.refreshFn=function(e){return o=e,i},i}function C(e){return r.a.createElement("div",y({},e,{style:y({background:"#444",width:e.width||"100%",height:e.height},e.style)}))}function A(e){var t=e.fill,n=e.Skeleton,o=void 0===n?C:n,i=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["fill","Skeleton"]),c=Object(a.useState)((function(){return function(e,t){var n;return function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];clearTimeout(n),n=setTimeout((function(){return e.apply(void 0,r)}),t)}}(v,50)}))[0],l=Object(a.useState)(t)[0],s=Object(a.useState)({opacity:0,height:0,overflow:"hidden",width:"100%"}),m=s[0],u=s[1],p=Object(a.useState)(!1),d=p[0],h=p[1],f=Object(a.useRef)(!1);return Object(a.useEffect)((function(){t&&!d&&(f.current=!0,c())})),l?t:r.a.createElement(a.Fragment,null,!d&&r.a.createElement("div",null,r.a.createElement(o,i)),!!t&&r.a.createElement("div",{style:m},t));function v(){u({}),h(!0),f.current=!1}}var L=n(348),I=n(323),k=n(324),j=n(325),O=n(346),S=n(326),T=n(327),$=n(322),G=Object($.a)((function(e){return{icon:{backgroundColor:e.palette.primary.main}}})),R=w((function(e){var t=e.lat,n=e.lon,a=G();return Object(f.a)(h.a.mark((function e(){var o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(n,"&units=metric&appid=").concat("79ba901022c6291b872ce2dba7955595"));case 2:return o=e.sent,e.next=5,o.json();case 5:return i=e.sent,e.abrupt("return",r.a.createElement(I.a,null,r.a.createElement(L.a,null,r.a.createElement(k.a,{primary:i.current.weather[0].main,secondary:i.timezone})),r.a.createElement(L.a,null,r.a.createElement(j.a,null,r.a.createElement(O.a,{className:a.icon},r.a.createElement(S.a,null))),r.a.createElement(k.a,{primary:"".concat(i.current.temp," C"),secondary:"Temperature"})),r.a.createElement(L.a,null,r.a.createElement(j.a,null,r.a.createElement(O.a,{className:a.icon},r.a.createElement(T.a,null))),r.a.createElement(k.a,{primary:"".concat(i.current.humidity,"%"),secondary:"Humidity"}))));case 7:case"end":return e.stop()}}),e)})))})),F=w(function(){var e=Object(f.a)(h.a.mark((function e(t){var n,a,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.resolve,a=t.restart,n(r.a.createElement("h4",null,"Ready")),e.next=4,new Promise((function(e){return setTimeout(e,1e3)}));case 4:o=0;case 5:if(!(o<101)){e.next=12;break}return e.next=8,new Promise((function(e){return setTimeout(e,50)}));case 8:n(r.a.createElement("div",{style:{width:"100%",background:"#888"}},r.a.createElement("div",{style:{width:"".concat(1*o,"%"),background:"#9f54da",padding:16}},o),r.a.createElement("div",{onClick:function(){return a()},style:{cursor:"pointer",padding:7,color:"white"}},"Click to restart")));case 9:o++,e.next=5;break;case 12:return e.abrupt("return",r.a.createElement("h4",null,"Done"));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=n(328),W=w(function(){var e=Object(f.a)(h.a.mark((function e(t){var n,a,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.resolve,a=[10,7,4,1,2,8,6,9,3,5],o=0;case 3:if(!(o<10)){e.next=12;break}return i=a[o],n(i,r.a.createElement(s.a,{p:1},"I am item index ",i," - rendered in sequence ",o+1)),o<9&&n(a[o+1],r.a.createElement(s.a,{ml:1},r.a.createElement(P.a,{color:"secondary",size:20}))),e.next=9,new Promise((function(e){return setTimeout(e,1500)}));case 9:o++,e.next=3;break;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=n(329),z=n(334),D=n(333),_=Object($.a)((function(e){return{icon:{backgroundColor:e.palette.primary.main}}})),H=w((function(e){var t=e.$parts;return r.a.createElement(N.a,{container:!0,spacing:3},r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement(m.a,{variant:"outlined"},r.a.createElement(u.a,{title:"Weather",subheader:"Will be rendered as soon as possible, before the location search"}),r.a.createElement(p.a,null,r.a.createElement(A,{fill:t.weather,height:150})))),r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement(m.a,{variant:"outlined"},r.a.createElement(u.a,{title:"Where shall we go?",subheader:"Searches for restaurants if the temperature is < 16C, otherwise parks"}),r.a.createElement(p.a,null,r.a.createElement(A,{fill:t.location,Skeleton:D.a,animation:"wave",variant:"rect",height:600})))))}),(function(e){var t=e.resolve,n=e.lat,a=e.lon,o=_();return Object(f.a)(h.a.mark((function e(){var i,c,l,s,m;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(n,"&lon=").concat(a,"&units=metric&appid=").concat("79ba901022c6291b872ce2dba7955595"));case 2:return i=e.sent,e.next=5,i.json();case 5:return c=e.sent,t("weather",r.a.createElement(I.a,null,r.a.createElement(L.a,null,r.a.createElement(k.a,{primary:c.current.weather[0].main,secondary:c.timezone})),r.a.createElement(L.a,null,r.a.createElement(j.a,null,r.a.createElement(O.a,{className:o.icon},r.a.createElement(S.a,null))),r.a.createElement(k.a,{primary:"".concat(c.current.temp," C"),secondary:"Temperature"})),r.a.createElement(L.a,null,r.a.createElement(j.a,null,r.a.createElement(O.a,{className:o.icon},r.a.createElement(T.a,null))),r.a.createElement(k.a,{primary:"".concat(c.current.humidity,"%"),secondary:"Humidity"})))),l=c.current.temp<16?"restaurant":"park",e.next=10,fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=".concat("AIzaSyA1FojG9QXGGhsDC0lyAqt48A7csv7XO3s","&location=").concat(n,",").concat(a,"&radius=60000&type=").concat(l),{method:"get",headers:{Accept:"application/json","Access-Control-Allow-Origin":"*"}});case 10:return s=e.sent,e.next=13,new Promise((function(e){return setTimeout(e,2e3)}));case 13:return e.next=15,s.json();case 15:m=e.sent,t("location",r.a.createElement(I.a,null,r.a.createElement(z.a,null,"Searching for ",l,"s"),m.results.map((function(e,t){return r.a.createElement(L.a,{key:t},r.a.createElement(k.a,{primary:e.name,secondary:e.vicinity}))}))));case 17:case"end":return e.stop()}}),e)})))})),B=n(335),K=n(20),Y=n(337),q=n(339),M=n(343),J=n(340),X=n(345),Q=n(347),U=n(341),V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null),r.a.createElement(l.a,null,r.a.createElement(Y.a,null,r.a.createElement(K.a,{variant:"h6"},"react-async-component-hoc"),r.a.createElement(s.a,{ml:3},"Examples"))),r.a.createElement(s.a,{mt:10},r.a.createElement(c.a,null,r.a.createElement(m.a,null,r.a.createElement(u.a,{title:"Weather",subheader:"Simple Api Call"}),r.a.createElement(p.a,null,r.a.createElement(R,{lat:-34.397,lon:150.644})),r.a.createElement(q.a,null,r.a.createElement(s.a,{width:1},r.a.createElement(M.a,{elevation:0},r.a.createElement(Q.a,{expandIcon:r.a.createElement(J.a,null)},"Code"),r.a.createElement(U.a,null,r.a.createElement(X.a,{language:"jsx"},"import React from 'react'\nimport {createAsyncComponent} from 'react-async-component-hoc'\nimport ListItem from '@material-ui/core/ListItem'\nimport List from '@material-ui/core/List'\nimport ListItemText from '@material-ui/core/ListItemText'\nimport ListItemAvatar from '@material-ui/core/ListItemAvatar'\nimport Avatar from '@material-ui/core/Avatar'\nimport {FaThermometerFull, GiWaterDrop} from 'react-icons/all'\nimport {makeStyles} from '@material-ui/core/styles'\n\nconst API_KEY = '79ba901022c6291b872ce2dba7955595'\n\nconst useStyles = makeStyles(theme=>{\n    return {\n        icon: {\n            backgroundColor: theme.palette.primary.main\n        }\n    }\n})\n\nexport const ExampleComponent1 = createAsyncComponent(function Weather({\n    lat,\n    lon\n}) {\n    const classes = useStyles()\n    return async ()=> {\n        const response = await fetch(\n            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`\n        )\n        const data = await response.json()\n        return <List>\n            <ListItem>\n                <ListItemText primary={data.current.weather[0].main} secondary={data.timezone}/>\n            </ListItem>\n            <ListItem>\n                <ListItemAvatar>\n                    <Avatar className={classes.icon}>\n                        <FaThermometerFull/>\n                    </Avatar>\n                </ListItemAvatar>\n                <ListItemText primary={`${data.current.temp} C`} secondary={\"Temperature\"}/>\n            </ListItem>\n            <ListItem>\n                <ListItemAvatar>\n                    <Avatar className={classes.icon}>\n                        <GiWaterDrop/>\n                    </Avatar>\n                </ListItemAvatar>\n                <ListItemText primary={`${data.current.humidity}%`} secondary={\"Humidity\"}/>\n            </ListItem>\n        </List>\n    }\n})\n")))))),r.a.createElement(s.a,{mt:2},r.a.createElement(m.a,null,r.a.createElement(u.a,{title:"Progress",subheader:"Repeated render / progress example"}),r.a.createElement(p.a,null,r.a.createElement(F,null)),r.a.createElement(q.a,null,r.a.createElement(s.a,{width:1},r.a.createElement(M.a,{elevation:0},r.a.createElement(Q.a,{expandIcon:r.a.createElement(J.a,null)},"Code"),r.a.createElement(U.a,null,r.a.createElement(X.a,{language:"jsx"},"import React from 'react'\nimport { createAsyncComponent } from 'react-async-component-hoc'\n\nexport const ExampleComponent2 = createAsyncComponent(\n    async function MyComponent({ resolve, restart }) {\n        resolve(<h4>Ready</h4>)\n        await new Promise((resolve) => setTimeout(resolve, 1000))\n        for (let i = 0; i < 101; i++) {\n            await new Promise((resolve) => setTimeout(resolve, 50))\n            resolve(\n                <div style={{ width: '100%', background: '#888' }}>\n                    <div\n                        style={{\n                            width: `${i * 1}%`,\n                            background: '#9f54da',\n                            padding: 16\n                        }}\n                    >\n                        {i}\n                    </div>\n                    <div\n                        onClick={() => restart()}\n                        style={{\n                            cursor: 'pointer',\n                            padding: 7,\n                            color: 'white'\n                        }}\n                    >\n                        Click to restart\n                    </div>\n                </div>\n            )\n        }\n        return <h4>Done</h4>\n    }\n)\n"))))))),r.a.createElement(s.a,{mt:2},r.a.createElement(m.a,null,r.a.createElement(u.a,{title:"Out of sequence",subheader:"Multipart render using the built in template"}),r.a.createElement(p.a,null,r.a.createElement(W,null)),r.a.createElement(q.a,null,r.a.createElement(s.a,{width:1},r.a.createElement(M.a,{elevation:0},r.a.createElement(Q.a,{expandIcon:r.a.createElement(J.a,null)},"Code"),r.a.createElement(U.a,null,r.a.createElement(X.a,{language:"jsx"},"import React from 'react'\nimport { createAsyncComponent } from 'react-async-component-hoc'\nimport Box from '@material-ui/core/Box'\nimport CircularProgress from '@material-ui/core/CircularProgress'\n\nexport const ExampleComponent3 = createAsyncComponent(\n    async function MyComponent({ resolve }) {\n        const order = [10, 7, 4, 1, 2, 8, 6, 9, 3, 5]\n        for (let i = 0; i < 10; i++) {\n            let item = order[i]\n            resolve(\n                item,\n                <Box p={1}>\n                    I am item index {item} - rendered in sequence {i + 1}\n                </Box>\n            )\n\n            if (i < 9) {\n                resolve(order[i + 1], <Box ml={1}><CircularProgress color={\"secondary\"} size={20}/></Box>)\n            }\n            await new Promise((resolve) => setTimeout(resolve, 1500))\n        }\n    }\n)\n"))))))),r.a.createElement(s.a,{mt:2},r.a.createElement(m.a,null,r.a.createElement(u.a,{title:"Render partial results",subheader:"Renders some of the results as soon as possible inside a programmer supplied template"}),r.a.createElement(p.a,null,r.a.createElement(H,{lat:-34.397,lon:150.644})),r.a.createElement(q.a,null,r.a.createElement(s.a,{width:1},r.a.createElement(M.a,{elevation:0},r.a.createElement(Q.a,{expandIcon:r.a.createElement(J.a,null)},"Code"),r.a.createElement(U.a,null,r.a.createElement(X.a,{language:"jsx"},"import React from 'react'\nimport {createAsyncComponent, Slot} from 'react-async-component-hoc'\nimport Grid from '@material-ui/core/Grid'\nimport Card from '@material-ui/core/Card'\nimport CardHeader from '@material-ui/core/CardHeader'\nimport CardContent from '@material-ui/core/CardContent'\nimport {makeStyles} from '@material-ui/core/styles'\nimport ListItem from '@material-ui/core/ListItem'\nimport ListItemText from '@material-ui/core/ListItemText'\nimport ListItemAvatar from '@material-ui/core/ListItemAvatar'\nimport Avatar from '@material-ui/core/Avatar'\nimport {FaThermometerFull, GiWaterDrop} from 'react-icons/all'\nimport List from '@material-ui/core/List'\nimport ListSubheader from '@material-ui/core/ListSubheader'\nimport Skeleton from '@material-ui/lab/Skeleton'\n\nconst WEATHER_API_KEY = '79ba901022c6291b872ce2dba7955595'\nconst GOOGLE_KEY = 'AIzaSyA1FojG9QXGGhsDC0lyAqt48A7csv7XO3s'\n\nconst useStyles = makeStyles((theme) => {\n    return {\n        icon: {\n            backgroundColor: theme.palette.primary.main\n        }\n    }\n})\n\nexport const ExampleComponent4 = createAsyncComponent(\n    function Template({ $parts }) {\n        return (\n            <Grid container spacing={3}>\n                <Grid item xs={6}>\n                    <Card variant={\"outlined\"}>\n                        <CardHeader title={'Weather'} subheader={\"Will be rendered as soon as possible, before the location search\"}/>\n                        <CardContent>\n                            <Slot fill={$parts.weather} height={150}/>\n                        </CardContent>\n                    </Card>\n                </Grid>\n                <Grid item xs={6}>\n                    <Card variant={\"outlined\"}>\n                        <CardHeader title={'Where shall we go?'} subheader={\"Searches for restaurants if the temperature is < 16C, otherwise parks\"}/>\n                        <CardContent>\n                            <Slot fill={$parts.location} Skeleton={Skeleton} animation=\"wave\" variant=\"rect\" height={600}/>\n                        </CardContent>\n                    </Card>\n                </Grid>\n            </Grid>\n        )\n    },\n    function MyComponent({ resolve, lat, lon }) {\n        const classes = useStyles()\n        return async () => {\n            const response = await fetch(\n                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`\n            )\n            const data = await response.json()\n            resolve(\n                'weather',\n                <List>\n\n                    <ListItem>\n                        <ListItemText\n                            primary={data.current.weather[0].main}\n                            secondary={data.timezone}\n                        />\n                    </ListItem>\n                    <ListItem>\n                        <ListItemAvatar>\n                            <Avatar className={classes.icon}>\n                                <FaThermometerFull />\n                            </Avatar>\n                        </ListItemAvatar>\n                        <ListItemText\n                            primary={`${data.current.temp} C`}\n                            secondary={'Temperature'}\n                        />\n                    </ListItem>\n                    <ListItem>\n                        <ListItemAvatar>\n                            <Avatar className={classes.icon}>\n                                <GiWaterDrop />\n                            </Avatar>\n                        </ListItemAvatar>\n                        <ListItemText\n                            primary={`${data.current.humidity}%`}\n                            secondary={'Humidity'}\n                        />\n                    </ListItem>\n                </List>\n            )\n            const searchFor = data.current.temp < 16 ? 'restaurant' : 'park'\n            const googleResponse = await fetch(\n                `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${GOOGLE_KEY}&location=${lat},${lon}&radius=60000&type=${searchFor}`,\n                {method: 'get', headers: {'Accept': 'application/json', 'Access-Control-Allow-Origin': '*'}}\n            )\n            await new Promise(resolve=>setTimeout(resolve, 2000))\n            const places = await googleResponse.json()\n            resolve(\n                'location',\n\n                <List>\n                    <ListSubheader>Searching for {searchFor}s</ListSubheader>\n                    {places.results.map((candidate, index) => {\n                        return (\n                            <ListItem key={index}>\n                                <ListItemText\n                                    primary={candidate.name}\n                                    secondary={candidate.vicinity}\n                                />\n                            </ListItem>\n                        )\n                    })}\n                </List>\n            )\n        }\n    }\n)\n"))))))))))};i.a.render(r.a.createElement(V,null),document.getElementById("root"))},83:function(e,t,n){e.exports=n(294)},84:function(e,t,n){},91:function(e,t,n){}},[[83,1,2]]]);
//# sourceMappingURL=main.0f9a2993.chunk.js.map