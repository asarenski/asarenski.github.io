(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){"use strict";var r=a(33);t.__esModule=!0,t.withPrefix=A,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var i=r(a(140)),n=r(a(141)),s=r(a(7)),o=r(a(49)),l=r(a(51)),d=r(a(4)),c=r(a(0)),u=a(15),f=a(139);function A(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var p={activeClassName:d.default.string,activeStyle:d.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,l.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,n.default)({},a.props.style,a.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),a.state={IOSupported:r},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,r,i=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(i.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,r=t.getProps,s=void 0===r?this.defaultGetProps:r,o=t.onClick,l=t.onMouseEnter,d=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),p=t.replace,h=(0,i.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=A(a);return c.default.createElement(u.Link,(0,n.default)({to:g,state:d,getProps:s,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),m(a,{state:d,replace:p})),!0}},h))},t}(c.default.Component);h.propTypes=(0,n.default)({},p,{innerRef:d.default.func,onClick:d.default.func,to:d.default.string.isRequired,replace:d.default.bool});var g=h;t.default=g;var m=function(e,t){window.___navigate(A(e),t)};t.navigate=m;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(A(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(A(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},138:function(e,t,a){"use strict";t.a={header:"white",jumbotron:"rgba(174,203,255,0.4)",link:"#0984e3",border:"rgba(0,0,0,0.125)",card:"#E1E1E8"}},139:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return A});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(137),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(142),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(45);a.d(t,"parsePath",function(){return u.a});var f=i.a.createContext({}),A=function(e){return i.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}A.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},140:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}},141:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},a.apply(this,arguments)}e.exports=a},142:function(e,t,a){var r;e.exports=(r=a(145))&&r.default||r},143:function(e,t,a){"use strict";var r=a(144),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(139),d=a(138),c=function(e){var t=e.siteTitle;return n.a.createElement("div",{style:{background:d.a.header,borderBottom:"1px solid "+d.a.border}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:1024,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},t)))},u=a(146),f=a(147),A=a.n(f),p=function(e){var t=e.style;return n.a.createElement(l.StaticQuery,{query:"4243001590",render:function(e){return n.a.createElement(A.a,{style:t,fluid:e.placeholderImage.childImageSharp.fluid})},data:u})},h=function(){return n.a.createElement("div",{style:{background:d.a.jumbotron,margin:"0 -1.0875rem 1.45rem -1.0875rem",padding:"1.0875rem 1.45rem",borderBottom:"1px solid "+d.a.border}},n.a.createElement("div",{style:{maxWidth:"250px",paddingTop:"1.0875rem",paddingBottom:"1.0875rem",marginBottom:"1.45rem",margin:"0 auto"}},n.a.createElement(p,{style:{borderRadius:"50%",border:"1px solid "+d.a.border}})),n.a.createElement("div",{style:{textAlign:"center",fontSize:"22px"}},"A software engineer with experience in building web applications.",n.a.createElement("br",null),"A self-starter with a multidisciplinary background."))},g=function(e){var t=e.children;return n.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),n.a.createElement(h,null),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:r})};g.propTypes={children:o.a.node.isRequired};t.a=g},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Adam Sarenski"}}}}},145:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(70),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},146:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFAf/EABYBAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAAB382+E0XDJJhWmE//xAAcEAABBAMBAAAAAAAAAAAAAAABACExMgIEERT/2gAIAQEAAQUCT+hZngMhxs1FRH//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAdEAABBAIDAAAAAAAAAAAAAAABABARIQISMkFx/9oACAEBAAY/AlyMzV9PsC2PrBf/xAAeEAACAgEFAQAAAAAAAAAAAAAAAREhMRBBUXGhsf/aAAgBAQABPyEdk7eVF00aiMtwUSwsMaB8jRAfieI//9oADAMBAAIAAwAAABDE+IL/xAAYEQACAwAAAAAAAAAAAAAAAAAAARARQf/aAAgBAwEBPxBFGR//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QxhP/xAAeEAACAgICAwAAAAAAAAAAAAAAAREhUWExsXGRof/aAAgBAQABPxAoX3SUqJxCuJsaNiUwLb08lxn2aTJjGmacLXhnYPkdH//Z",aspectRatio:1.1214953271028036,src:"/static/headshot_white_small-c823092f52fc840815a51c52fe0a4c3f-53b4a.jpg",srcSet:"/static/headshot_white_small-c823092f52fc840815a51c52fe0a4c3f-bf99b.jpg 75w,\n/static/headshot_white_small-c823092f52fc840815a51c52fe0a4c3f-9d7df.jpg 150w,\n/static/headshot_white_small-c823092f52fc840815a51c52fe0a4c3f-53b4a.jpg 300w,\n/static/headshot_white_small-c823092f52fc840815a51c52fe0a4c3f-c99a2.jpg 360w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},147:function(e,t,a){"use strict";var r=a(33);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(49)),o=r(a(140)),l=r(a(141)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},A=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},p=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+o+l+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!0,n=!1,o=t.fadeIn,l=A(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,n=!0),"undefined"==typeof window&&(r=!1,i=!1),t.critical&&(r=!0,i=!1,n=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:i,IOSupported:n,fadeIn:o,hasNoScript:c,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.fluid,p=e.fixed,h=e.backgroundColor,y=e.Tag,b="boolean"==typeof h?"lightgray":h,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),w=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o);if(A){var E=A;return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(E.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&d.default.createElement(m,{alt:this.state.isVisible?"":a,title:t,src:E.base64,style:v}),E.tracedSVG&&d.default.createElement(m,{alt:this.state.isVisible?"":a,title:t,src:E.tracedSVG,style:v}),b&&d.default.createElement(y,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,E.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),d.default.createElement("source",{srcSet:E.srcSet,sizes:E.sizes}),d.default.createElement(m,{alt:a,title:t,src:E.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},E))}}))}if(p){var S=p,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},n);return"inherit"===n.display&&delete R.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(S.srcSet)},S.base64&&d.default.createElement(m,{alt:this.state.isVisible?"":a,title:t,src:S.base64,style:v}),S.tracedSVG&&d.default.createElement(m,{alt:this.state.isVisible?"":a,title:t,src:S.tracedSVG,style:v}),b&&d.default.createElement(y,{title:t,style:{backgroundColor:b,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&d.default.createElement("picture",null,S.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),d.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),d.default.createElement(m,{alt:a,title:t,width:S.width,height:S.height,src:S.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:S.width,height:S.height},S))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:b,sizes:v,fixed:b,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var w=y;t.default=w}}]);
//# sourceMappingURL=0-f0fa502959ac03eef3c3.js.map