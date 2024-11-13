"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[9422],{39686:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>x,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>h,toc:()=>u});var s=i(17624),t=i(4552),r=(i(11504),i(23940)),l=i(99188),o=i(9510);i(61462);const c=JSON.parse('[{"date":"2024-11-07","title":"v0.0.1","items":["Open Beta Release"]}]'),d={title:"UberMine",description:"Optimize your mining in game with precision and automation.",slug:"/UberMine"},a=void 0,h={id:"Scripts/Mining/UberMine/index",title:"UberMine",description:"Optimize your mining in game with precision and automation.",source:"@site/docs/Scripts/Mining/UberMine/index.md",sourceDirName:"Scripts/Mining/UberMine",slug:"/UberMine",permalink:"/UberMine",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"UberMine",description:"Optimize your mining in game with precision and automation.",slug:"/UberMine"},sidebar:"mainSidebar",previous:{title:"MineWithUs",permalink:"/MineWithUs"},next:{title:"Item Notifier",permalink:"/Item Notifier"}},x={},u=[{value:"Cost",id:"cost",level:2},{value:"Features",id:"features",level:2},{value:"Requirements",id:"requirements",level:2}];function j(n){const e={admonition:"admonition",blockquote:"blockquote",br:"br",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.c,{title:"UberMine",version:"v0.0.1",author:"Uberith",skill:"Mining"}),"\n",(0,s.jsx)(e.admonition,{type:"hidden",children:(0,s.jsx)(e.h2,{id:"cost",children:"Cost"})}),"\n",(0,s.jsxs)(l.c,{title:"Cost",children:[(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"BETA"}),": FREE / month (not including client access)"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Post-Beta"}),": TBD Coins / Month (not including client access)"]}),"\n"]}),(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Beta ends December 15th"})})]}),"\n",(0,s.jsx)(e.admonition,{type:"hidden",children:(0,s.jsx)(e.h2,{id:"features",children:"Features"})}),"\n",(0,s.jsxs)(l.c,{title:"Features",children:[(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Automatic Navigation:"}),(0,s.jsx)(e.br,{}),"\n","Automatically navigates to precise, coordinate-based locations, ensuring efficient movement to mining spots and nearby banks."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Persistent Settings:"}),(0,s.jsx)(e.br,{}),"\n","Saves user preferences across sessions, including:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Selected mining locations"}),"\n",(0,s.jsx)(e.li,{children:"Ore types"}),"\n",(0,s.jsx)(e.li,{children:"Inventory management options"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Human-like Random Delays:"}),(0,s.jsx)(e.br,{}),"\n","Implements fuzzy, randomized delays in interactions and navigation timings to simulate human behavior and enhance bot-detection resistance."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Intelligent Banking Automation:"}),(0,s.jsx)(e.br,{}),"\n","Detects when inventory is full, automatically navigates to the nearest bank, deposits ores, and resumes mining."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Statistics Page:"}),(0,s.jsx)(e.br,{}),"\n","Displays real-time statistics, including:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Total ores mined"}),"\n",(0,s.jsx)(e.li,{children:"Time elapsed"}),"\n",(0,s.jsx)(e.li,{children:"Experience gained"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Supported Mining Locations:"}),(0,s.jsx)(e.br,{}),"\n","Supports multiple mining locations, including:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Burthorpe"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Control Buttons:"}),(0,s.jsx)(e.br,{}),"\n","Start and stop the script easily using integrated controls."]}),"\n"]}),"\n"]}),(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"Example",src:i(71756).c+"",width:"394",height:"381"}),"\n",(0,s.jsx)(e.img,{alt:"Example",src:i(17584).c+"",width:"295",height:"378"})]})]}),"\n",(0,s.jsx)(l.c,{title:"Supported Locations/Ores",children:(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Location"}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:"Supported Ores"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Burthorpe"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Copper, Tin, Clay, Iron, Silver, Common gem rock"})]})})]})}),"\n",(0,s.jsx)(e.admonition,{type:"hidden",children:(0,s.jsx)(e.h2,{id:"requirements",children:"Requirements"})}),"\n",(0,s.jsx)(l.c,{title:"Requirements",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Must be equipped with a pickaxe appropriate for the selected ores."}),"\n",(0,s.jsx)(e.li,{children:"If using magic notepaper, ensure it\u2019s in the inventory."}),"\n"]})}),"\n",(0,s.jsx)(l.c,{title:"Product Roadmap",children:(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Player Suggestion:"})," Add secondary actions if mining high-level ores (e.g., Runite), such as teleporting to another location or switching to lower-level ores during respawn times."]}),"\n",(0,s.jsx)(e.li,{children:"Add support for lightform/crystallise on specific ores."}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Player Suggestions:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Add support for usage of Perfect Juju Potions and various mining boosts."}),"\n",(0,s.jsx)(e.li,{children:"Add support for mining familiar pouches (e.g., Lava Titan) for bonus XP."}),"\n",(0,s.jsx)(e.li,{children:"Add support for Incense Sticks and mining auras."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Implement anomaly detection for monitoring and adjusting script actions if they seem too consistent. Randomize actions, including:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Variations in movement speed"}),"\n",(0,s.jsx)(e.li,{children:"Occasional breaks or pauses"}),"\n",(0,s.jsx)(e.li,{children:"Random interactions with nearby game objects (like examining rocks or nearby items)."}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(e.p,{children:":::"}),"\n",(0,s.jsx)(o.c,{changes:c})]})}function p(n={}){const{wrapper:e}={...(0,t.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(j,{...n})}):j(n)}},71756:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/01UberMine-de0d227351c6fa29f77b78a4248b83e4.png"},17584:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/02UberMine-76e31e747a7f5e78c9a234d708a5c0bc.png"}}]);