(()=>{var e=[{id:1,name:"Airush Lithium V11",brand:"Airush Kites",model:"Lithium V11"},{id:2,name:"Cabrinha Switchblade",brand:"Cabrinha",model:"Switchblade"},{id:3,name:"Duotone Rebel",brand:"Duotone Kiteboarding",model:"Rebel"},{id:4,name:"Duotone Vegas",brand:"Duotone Kiteboarding",model:"Vegas"},{id:5,name:"Naish Pivot",brand:"Naish Kites",model:"Pivot"}];document.getElementById("inputField").addEventListener("input",(function(n){var t=n.target.value;const o=document.getElementById("dropdownChosenCategory").innerHTML;((e,n,t)=>{const o=((e,n,t)=>{let o=0,i=[];for(const a of n){for(let n=0;n<e.length;n++)e[n].toLowerCase()===a[t][n].toLowerCase()&&o++;o>0&&i.push({numberOfMatchingChars:o,matchingProduct:a}),o=0}return i})(e,n,t);((e,n)=>{console.log(e),console.log(n),e.filter((e=>{if(e.numberOfMatchingChars===n.length)return e}))})(o,e)})(t,e,o)}))})();