(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),r=n("u9kb"),l=n("aOgs"),o=n("q1tI"),i=n.n(o),m=n("7ljp"),c=n("pD55"),p=n("8Aig"),b=n("ReZb"),s=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(r.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(r.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},h=n("gnlW"),O=n("mwnC"),j=n("/Rw0"),f=n("dVM4"),y=Object(a.f)(r.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return i.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(r.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(r.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var w=N,C=n("MfeC");function E(e){var t=C.a.getPath(e.location.pathname),n=C.a.getVariantAndPage(e.root,t);if(!n)return null;var a=C.a.getVariantsForPage(e.root,n.page),l=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),l.push(i.a.createElement(r.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(r.i,{overlay:e.overlay},i.a.createElement(r.i.Button,null,o.variant.title),i.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},l)))}E.Menu=Object(a.f)(r.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=E,x=Object(a.f)(r.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),k=Object(a.f)(r.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),z=Object(a.f)(r.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,N=o.description,E=o.status,T=o.source,D=o.additionalContributors,H=void 0===D?[]:D,A=C.a.getVariantRoot(a.pathname);return i.a.createElement(m.a,{components:{Index:b.a,Note:s.a,Prompt:d,PromptReply:g,Screenshot:h.a}},i.a.createElement(r.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:y,description:N}),i.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(r.e,{display:["none",null,null,"block"]},i.a.createElement(O.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),i.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(r.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(r.e,null,i.a.createElement(r.e,null,i.a.createElement(r.m,{as:"h1"},y),N))),null!=A?i.a.createElement(I,null,i.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),n.tableOfContents.items?i.a.createElement(z,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},i.a.createElement(r.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(w,{items:n.tableOfContents.items})):null,i.a.createElement(S,null,E||T?i.a.createElement(r.k,{mb:3,alignItems:"center"},E?i.a.createElement(f.a,{status:E}):null,i.a.createElement(r.e,{mx:"auto"}),T?i.a.createElement(j.a,{href:T}):null):null,n.tableOfContents.items?i.a.createElement(r.e,{display:["block",null,"none"],mb:3},i.a.createElement(r.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(r.r,{icon:l.b,mr:2}):i.a.createElement(r.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(r.e,{pt:1},i.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(H.map((function(e){return{login:e}})))}))))))}},"gy/g":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),l=n("O6H6"),o={},i={_frontmatter:o},m=l.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(m,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",null,"Synopsis"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm team create <scope:team>\nnpm team destroy <scope:team>\n\nnpm team add <scope:team> <user>\nnpm team rm <scope:team> <user>\n\nnpm team ls <scope>|<scope:team>\n")),Object(r.b)("p",null,"Note: This command is unaware of workspaces."),Object(r.b)("h3",null,"Description"),Object(r.b)("p",null,"Used to manage teams in organizations, and change team memberships. Does not\nhandle permissions for packages."),Object(r.b)("p",null,"Teams must always be fully qualified with the organization/scope they belong to\nwhen operating on them, separated by a colon (",Object(r.b)("inlineCode",{parentName:"p"},":"),"). That is, if you have a\n",Object(r.b)("inlineCode",{parentName:"p"},"newteam")," team in an ",Object(r.b)("inlineCode",{parentName:"p"},"org")," organization, you must always refer to that team\nas ",Object(r.b)("inlineCode",{parentName:"p"},"@org:newteam")," in these commands."),Object(r.b)("p",null,"If you have two-factor authentication enabled in ",Object(r.b)("inlineCode",{parentName:"p"},"auth-and-writes")," mode, then\nyou can provide a code from your authenticator with ",Object(r.b)("inlineCode",{parentName:"p"},"[--otp <otpcode>]"),".\nIf you don't include this then you will be prompted."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"create / destroy:\nCreate a new team, or destroy an existing one. Note: You cannot remove the\n",Object(r.b)("inlineCode",{parentName:"p"},"developers")," team, ",Object(r.b)("a",{href:"https://docs.npmjs.com/about-developers-team",target:"_blank"},"learn more.")),Object(r.b)("p",{parentName:"li"},"Here's how to create a new team ",Object(r.b)("inlineCode",{parentName:"p"},"newteam")," under the ",Object(r.b)("inlineCode",{parentName:"p"},"org")," org:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm team create @org:newteam\n")),Object(r.b)("p",{parentName:"li"},"You should see a confirming message such as: ",Object(r.b)("inlineCode",{parentName:"p"},"+@org:newteam")," once the new\nteam has been created.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"add:\nAdd a user to an existing team."),Object(r.b)("p",{parentName:"li"},"Adding a new user ",Object(r.b)("inlineCode",{parentName:"p"},"username")," to a team named ",Object(r.b)("inlineCode",{parentName:"p"},"newteam")," under the ",Object(r.b)("inlineCode",{parentName:"p"},"org")," org:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm team add @org:newteam username\n")),Object(r.b)("p",{parentName:"li"},"On success, you should see a message: ",Object(r.b)("inlineCode",{parentName:"p"},"username added to @org:newteam"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"rm:\nUsing ",Object(r.b)("inlineCode",{parentName:"p"},"npm team rm")," you can also remove users from a team they belong to."),Object(r.b)("p",{parentName:"li"},"Here's an example removing user ",Object(r.b)("inlineCode",{parentName:"p"},"username")," from ",Object(r.b)("inlineCode",{parentName:"p"},"newteam")," team\nin ",Object(r.b)("inlineCode",{parentName:"p"},"org")," organization:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm team rm @org:newteam username\n")),Object(r.b)("p",{parentName:"li"},"Once the user is removed a confirmation message is displayed:\n",Object(r.b)("inlineCode",{parentName:"p"},"username removed from @org:newteam"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"ls:\nIf performed on an organization name, will return a list of existing teams\nunder that organization. If performed on a team, it will instead return a list\nof all users belonging to that particular team."),Object(r.b)("p",{parentName:"li"},"Here's an example of how to list all teams from an org named ",Object(r.b)("inlineCode",{parentName:"p"},"org"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm team ls @org\n")),Object(r.b)("p",{parentName:"li"},"Example listing all members of a team named ",Object(r.b)("inlineCode",{parentName:"p"},"newteam"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm team ls @org:newteam\n")))),Object(r.b)("h3",null,"Details"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"npm team")," always operates directly on the current registry, configurable from\nthe command line using ",Object(r.b)("inlineCode",{parentName:"p"},"--registry=<registry url>"),"."),Object(r.b)("p",null,"You must be a ",Object(r.b)("em",{parentName:"p"},"team admin")," to create teams and manage team membership, under\nthe given organization. Listing teams and team memberships may be done by\nany member of the organization."),Object(r.b)("p",null,"Organization creation and management of team admins and ",Object(r.b)("em",{parentName:"p"},"organization")," members\nis done through the website, not the npm CLI."),Object(r.b)("p",null,"To use teams to manage permissions on packages belonging to your organization,\nuse the ",Object(r.b)("inlineCode",{parentName:"p"},"npm access")," command to grant or revoke the appropriate permissions."),Object(r.b)("h3",null,"Configuration"),Object(r.b)("h4",null,Object(r.b)("inlineCode",{parentName:"h4"},"registry")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Default: "',Object(r.b)("a",{parentName:"li",href:"https://registry.npmjs.org/%22"},'https://registry.npmjs.org/"')),Object(r.b)("li",{parentName:"ul"},"Type: URL")),Object(r.b)("p",null,"The base URL of the npm registry."),Object(r.b)("h4",null,Object(r.b)("inlineCode",{parentName:"h4"},"otp")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: null"),Object(r.b)("li",{parentName:"ul"},"Type: null or String")),Object(r.b)("p",null,"This is a one-time password from a two-factor authenticator. It's needed\nwhen publishing or changing package permissions with ",Object(r.b)("inlineCode",{parentName:"p"},"npm access"),"."),Object(r.b)("p",null,"If not set, and a registry response fails with a challenge for a one-time\npassword, npm will prompt on the command line for one."),Object(r.b)("h4",null,Object(r.b)("inlineCode",{parentName:"h4"},"parseable")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: false"),Object(r.b)("li",{parentName:"ul"},"Type: Boolean")),Object(r.b)("p",null,"Output parseable results from commands that write to standard output. For\n",Object(r.b)("inlineCode",{parentName:"p"},"npm search"),", this will be tab-separated table format."),Object(r.b)("h4",null,Object(r.b)("inlineCode",{parentName:"h4"},"json")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: false"),Object(r.b)("li",{parentName:"ul"},"Type: Boolean")),Object(r.b)("p",null,"Whether or not to output JSON data, rather than the normal output."),Object(r.b)("p",null,"Not supported by all npm commands."),Object(r.b)("h3",null,"See Also"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-access"},"npm access")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-config"},"npm config")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/cli/v7/using-npm/registry"},"npm registry"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-team-md-3a3d4efb92f389628228.js.map