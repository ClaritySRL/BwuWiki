"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[1452],{72664:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>h,toc:()=>m});var s=i(17624),r=i(4552),t=(i(11504),i(23940)),l=i(99188),o=i(9510);i(61462);const a=JSON.parse('[{"date":"2024-07-29","title":"v1.3","items":["Fixed split soul not been conditonal allowing the script to not work for people without curses.","Fixed bank after 2nd boss double tp issue,","Fixed broken logic causing issues at boss 2 & 3 with high view distance","Slight optimisations"," Added lots of toggles to save runes."]},{"date":"2024-07-25","title":"v1.0.1","items":["Regular prayers added.","QP1 = Melee QP2 = Range QP3 = Mage QP4 = Mage < quick prayer setup needed for normal prayers.","Toggle for using t95 equipment. (Allows lower tiers to be used.)","Toggle for using Zuk cape.","Lord of bones added.","Vengeance added.","Can disable vuln on the boss 2 obelisks and boss 3 dogs to save bombs.","Added Ritual shard support.","Fixed Worldhop.","Fixed missing variables on the lootchest for boss1&2.","Fixed defensive overlap if using disrupt shield.","Option to bank after 2nd boss (For low level accounts that need more food)."]},{"date":"2024-07-24","title":"v1.0.0","items":["Release"]}]'),c={title:"SanctumWithUs [Normal]",description:"Kills Sanctum of Rebirth on normal mode.",slug:"/SanctumWithUs-Normal"},d=void 0,h={id:"Scripts/Combat/Boss Scripts/SanctumWithUs [Normal]/index",title:"SanctumWithUs [Normal]",description:"Kills Sanctum of Rebirth on normal mode.",source:"@site/docs/Scripts/Combat/Boss Scripts/SanctumWithUs [Normal]/index.md",sourceDirName:"Scripts/Combat/Boss Scripts/SanctumWithUs [Normal]",slug:"/SanctumWithUs-Normal",permalink:"/SanctumWithUs-Normal",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SanctumWithUs [Normal]",description:"Kills Sanctum of Rebirth on normal mode.",slug:"/SanctumWithUs-Normal"},sidebar:"mainSidebar",previous:{title:"SanctumWithUs [Hard]",permalink:"/SanctumWithUs-Hard"},next:{title:"Stack Tzkal Zuk NM",permalink:"/Stack-Tzkal-Zuk"}},u={},m=[{value:"Cost",id:"cost",level:2},{value:"Features",id:"features",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Changelog",id:"changelog",level:2}];function x(e){const n={admonition:"admonition",blockquote:"blockquote",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components},{Details:c}=n;return c||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.c,{title:"SanctumWithUs [Normal] ",version:"v1.3",author:"Pizzanova",skill:"Necromancy"}),"\n",(0,s.jsx)(n.admonition,{type:"hidden",children:(0,s.jsx)(n.h2,{id:"cost",children:"Cost"})}),"\n",(0,s.jsxs)(l.c,{title:"Cost",children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"$60 USD / month (not including client access)"}),"\n"]}),"\n"]}),(0,s.jsx)(n.admonition,{title:"Limitations",type:"danger",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Sanctum of Rebirth is still very new, So any GP/H Claims are very volitale."})}),"\n"]})})]}),"\n",(0,s.jsx)(n.admonition,{type:"hidden",children:(0,s.jsx)(n.h2,{id:"features",children:"Features"})}),"\n",(0,s.jsxs)(l.c,{title:"Features",children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SanctumWithUs Script"}),": Completes runescapes newest boss dungeon Sanctum of Rebirth on normal mode!"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Customizable Settings"}),": Many settings to try and get it perfect for your account."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Safety Features"}),": Various failsafes to ensure you don't get stuck. (If you found ur account logged out and cant find why read list below.)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Current GP Rates"}),": Since Sanctum of Rebirth is new, no droprates have been released yet, and current item prices are very volitale so i dont feel comftable giving a GP Estimate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Average Kill Times"}),": Averaging around 8 Min dungeon complete time on Bis charcters currently."]}),"\n"]}),"\n"]}),(0,s.jsxs)(c,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("strong",{children:"Safety Features Details"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Teleport to Wars and logout if any of these conditions become true:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you run out of Divine Charges."}),"\n",(0,s.jsx)(n.li,{children:"If your preset is missing items."}),"\n",(0,s.jsx)(n.li,{children:"If your missing Runes OR ectoplasm"}),"\n",(0,s.jsx)(n.li,{children:"If you have an unbankable item in your invent"}),"\n"]}),"\n"]}),"\n"]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"hidden",children:(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"})}),"\n",(0,s.jsxs)(l.c,{title:"Requirements",children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"The requirements here are required to take it on, make sure you meet those listed."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"T90+ Necromancy Weapons"}),"\n",(0,s.jsx)(n.li,{children:"Dive ability unlocked."}),"\n",(0,s.jsx)(n.li,{children:"99+ Necromancy and all necromancy abilities and incantations unlocked from the well of Souls."}),"\n",(0,s.jsx)(n.li,{children:"Overloads potions i would not recommened anything lower."}),"\n",(0,s.jsx)(n.li,{children:"Plenty of PVM supplys. (Blubbers,Brews,Overloads,Adrenpots,Prayer,Runes)"}),"\n"]}),"\n"]}),(0,s.jsx)(l.c,{title:"Optional Requirements",children:(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Having all Possible requirements ticked off will ensure a much better kill and result from this script"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Please note rotations with pre t95 Rotations are not fully optimal expect slightly slower results then advertised."}),"\n",(0,s.jsx)(n.li,{children:"Zuk Cape"}),"\n",(0,s.jsx)(n.li,{children:"Essence of Finalty with the Death Grasp Ability added."}),"\n",(0,s.jsx)(n.li,{children:"Vulnerability bomb."}),"\n",(0,s.jsx)(n.li,{children:"Disruption shield and lunar spellbook swap."}),"\n",(0,s.jsx)(n.li,{children:"Smoke cloud ."}),"\n",(0,s.jsx)(n.li,{children:"Good invention perks on your gear."}),"\n",(0,s.jsx)(n.li,{children:"Good archeolgy relics."}),"\n"]}),"\n"]})})]}),"\n",(0,s.jsx)(n.admonition,{type:"hidden",children:(0,s.jsx)(n.h2,{id:"setup",children:"Setup"})}),"\n",(0,s.jsxs)(l.c,{title:"Setup",children:[(0,s.jsxs)(c,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("strong",{children:"Action Bar Setup"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"actionbar",src:i(21208).c+"",width:"752",height:"121"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check the Script console when running to see missing abiltys..."}),"\n",(0,s.jsx)(n.li,{children:"Make sure to resave abiltys after changing script settings."}),"\n",(0,s.jsx)(n.li,{children:"Please make sure all mandatory abiltys are on your bar."}),"\n",(0,s.jsx)(n.li,{children:"Please make sure any abiltys you opt in for is also on your bar."}),"\n"]}),"\n"]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CURSES_________"}),"\n",(0,s.jsx)(n.li,{children:"Quick Prayers 1 set to Protect from melee and T95/T99 Prayer"}),"\n",(0,s.jsx)(n.li,{children:"Quick Prayers 2 set to Protect from range and T95/T99 Prayer"}),"\n",(0,s.jsx)(n.li,{children:"Quick Prayers 3 set to Protect from magic and T95/T99 Prayer"}),"\n",(0,s.jsx)(n.li,{children:"Quick Prayers 4 set to Soulsplit and T95/T99 Prayer"}),"\n"]}),"\n"]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"STANDERD PRAYERS_________"}),"\n",(0,s.jsx)(n.li,{children:"Quick Prayers 1 set to Protect from melee and offensive Prayer"}),"\n"]}),"\n"]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Quick Prayers 2 set to Protect from range and offensive Prayer"}),"\n",(0,s.jsx)(n.li,{children:"Quick Prayers 3 set to Protect from magic and offensive Prayer"}),"\n",(0,s.jsx)(n.li,{children:"Quick Prayers 4 set to Protect from magic and offensive Prayer"}),"\n"]}),"\n"]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Quick Prayers 2 set to Protect from range and T95/T99 Prayer"}),"\n",(0,s.jsx)(n.li,{children:"Quick Prayers 3 set to Protect from magic and T95/T99 Prayer"}),"\n",(0,s.jsx)(n.li,{children:"Quick Prayers 4 set to Soulsplit and T95/T99 Prayer"}),"\n"]}),"\n"]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Your offensive prayer should ideally be Sancity && the new prayer Divine Rage (Its cheap buy it.)"}),"\n"]}),"\n"]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Below if ur confused on how to do"}),"\n"]}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"quickprayer",src:i(96088).c+"",width:"1920",height:"1040"})})]}),(0,s.jsxs)(c,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("strong",{children:"Inventory Setup"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Preset",src:i(66468).c+"",width:"205",height:"538"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Make sure your preset contains the following..."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"An overload (any)."}),"\n",(0,s.jsx)(n.li,{children:"An Adrenline potion, Any works but renewals are recommended."}),"\n",(0,s.jsx)(n.li,{children:"Essence of Finalty."}),"\n",(0,s.jsx)(n.li,{children:'Something to restore prayer, it will support anything with "Prayer" or "Restore" in the name.'}),"\n",(0,s.jsx)(n.li,{children:"Vuln bombs, they are not required but make sure to have them in your inventory if uve toggled the option."}),"\n",(0,s.jsx)(n.li,{children:"Brews and jellyfish, try to have a even ratio of 3 jellys to 1 brew."}),"\n",(0,s.jsx)(n.li,{children:"Runepouchs / Nexus make sure you have all runes that you need for every incantation and spells that need to be cast."}),"\n",(0,s.jsx)(n.li,{children:"Excalibur."}),"\n",(0,s.jsx)(n.li,{children:"Ur familer, every ancient familer is supported."}),"\n",(0,s.jsx)(n.li,{children:"Expensive Spices."}),"\n",(0,s.jsx)(n.li,{children:"Script is in early days, please expermient with gear to see what gets you the best results."}),"\n"]}),"\n"]})]}),(0,s.jsxs)(c,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("strong",{children:"Misc Setup"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Make sure you have the following conditons true"})}),"\n"]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Turn walk markers on."}),"\n",(0,s.jsx)(n.li,{children:"Turn auto-retaliate off."}),"\n",(0,s.jsx)(n.li,{children:"Full manual on, ability queuing off, auto necro basic attack off."}),"\n",(0,s.jsx)(n.li,{children:"Draw distance to medium or lower."}),"\n",(0,s.jsx)(n.li,{children:"Set boss portal to left portal."}),"\n",(0,s.jsx)(n.li,{children:"Make sure you have plenty of divine charges, book charges, runes, and other items to run for a long time."}),"\n",(0,s.jsx)(n.li,{children:"If you are using a reaver, set the autofire rate for healing."}),"\n",(0,s.jsx)(n.li,{children:"If using auras, make sure your aura management is not in list view."}),"\n"]}),"\n"]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"hidden",children:(0,s.jsx)(n.h2,{id:"changelog",children:"Changelog"})}),"\n",(0,s.jsx)(o.c,{changes:a})]})}function j(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},66468:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/Preset-dfeee23b6d4c77fc6b6b3a4d4ca65785.png"},21208:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/actionbar-0f4a7c1b1a9e39f873bdd709e10d5d4d.png"},96088:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/quickprayer-51715fd61e66632bd52acd4815a32623.gif"}}]);