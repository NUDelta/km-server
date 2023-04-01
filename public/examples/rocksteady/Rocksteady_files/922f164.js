(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{290:function(t,e,r){"use strict";var l=r(121),n=r(120),o={name:"PatternSpacerBlockPart",components:{PatternSpacerThree:l.a,PatternSpacerFour:n.a},props:{block:{type:Object,default:function(){return{}}}},data:function(){return{onscreen:!1}},computed:{pattern:function(){return"patternOne"===this.block.pattern||"patternTwo"===this.block.pattern?"/images/".concat(this.block.pattern,".jpg"):"patternThree"===this.block.pattern?"animatedPatternOne":"patternFour"===this.block.pattern?"animatedPatternTwo":null}}},c=r(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative col-span-1 row-span-1 aspect-square overflow-hidden"},[t.block&&t.block.pattern?r("div",{staticClass:"parts-patternSpacer h-full w-full"},[r("div",{staticClass:"fadeIn h-full w-full"},[!t.pattern||"patternOne"!==t.block.pattern&&"patternTwo"!==t.block.pattern?t._e():r("nuxt-picture",{attrs:{src:t.pattern,size:"small",width:"410",height:"","img-attrs":{role:"presentation",loading:"lazy",sizes:"3xl:410w xl:20vw lg:20vw md:33.33vw sm:33.33vw"}}}),t._v(" "),t.pattern&&"patternThree"===t.block.pattern?r("PatternSpacerThree",{staticClass:"text-bloodRed"}):t._e(),t._v(" "),t.pattern&&"patternFour"===t.block.pattern?r("PatternSpacerFour",{staticClass:"text-bloodRed"}):t._e()],1)]):t._e()])}),[],!1,null,null,null);e.a=component.exports},312:function(t,e,r){"use strict";r(188);var l={name:"ShortTextBlockPart",props:{heading:{type:String,default:""},headingHighlight:{type:String,default:""},description:{type:String,default:""},index:{type:Number,default:null},highlight:{type:Boolean,default:!1}},computed:{variantBgClass:function(){return this.highlight?"bg-bloodRed":"bg-black"},variantTextClasses:function(){return this.highlight?{text:"text-white",highlight:"text-black"}:{text:"text-white",highlight:"text-bloodRed"}},decoratedIndex:function(){return this.index&&this.index<10?"0".concat(this.index,"_"):this.index&&this.index>=10?"".concat(this.index,"_"):""}},mounted:function(){this.$splitText(this.$refs.headingRef)}},n=r(2),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"parts-perk relative z-10 col-span-1 row-span-1 flex aspect-square flex-col overflow-hidden px-15 pt-10 pb-20"},[t.decoratedIndex?r("h5",{staticClass:"brixton-xs fadeRight relative z-10 delay-500",class:t.variantTextClasses.text,domProps:{textContent:t._s(t.decoratedIndex)}}):t._e(),t._v(" "),t.description?r("p",{staticClass:"copy-xs fadeUp relative z-10 mb-auto text-white delay-700",domProps:{textContent:t._s(t.description)}}):t._e(),t._v(" "),t.heading?r("h3",{ref:"headingRef",staticClass:"brixton fadeUpLines relative z-10",staticStyle:{"--line-delay":"900ms"}},[r("span",{staticClass:"block",class:t.variantTextClasses.text,domProps:{textContent:t._s(t.heading)}}),t._v(" "),r("span",{staticClass:"block",class:t.variantTextClasses.highlight,domProps:{textContent:t._s(t.headingHighlight)}})]):t._e(),t._v(" "),r("div",{staticClass:"swipeReveal pointer-events-none absolute inset-0 h-full w-full"},[r("div",{staticClass:"swipeReveal__inner h-full w-full",class:t.variantBgClass}),t._v(" "),t.highlight?r("nuxt-picture",{staticClass:"fadeIn absolute inset-0 h-full w-full mix-blend-darken delay-500",attrs:{src:"/images/backgroundTexture.png",size:"small","img-attrs":{class:"h-full w-full object-cover",role:"presentation",loading:"lazy"}}}):t._e()],1)])}),[],!1,null,null,null);e.a=component.exports},410:function(t,e,r){"use strict";r.r(e);var l=r(312),n=r(290),o={name:"PerksLayoutOne",components:{PerkBlock:l.a,PatternSpacerBlock:n.a},props:{section:{type:Object,default:function(){return{}}}}},c=r(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.section?r("section",{staticClass:"perks-layoutOne",attrs:{id:t.section.tag}},[r("div",{staticClass:"container"},[t.section.perkOne&&t.section.perkOne.image2x1?r("div",{staticClass:"perk-image col-span-2 col-start-1 row-span-1 row-start-1 aspect-2/1"},[r("WebImage",{staticClass:"swipeReveal h-full w-full",attrs:{image:t.section.perkOne.image2x1,"img-classes":"object-cover w-full h-full swipeReveal__inner"}})],1):t._e(),t._v(" "),r("PerkBlock",{staticClass:"col-start-2 row-start-2 sm:col-start-3 sm:row-start-1",attrs:{heading:t.section.perkOne.heading,"heading-highlight":t.section.perkOne.headingHighlight,description:t.section.perkOne.description,highlight:t.section.perkOne.highlight,index:t.section.perkOne.perkIndex}}),t._v(" "),t.section.perkOne&&t.section.perkOne.image2x2?r("div",{staticClass:"perk-image hidden sm:col-span-2 sm:col-start-2 sm:row-span-2 sm:row-start-2 sm:block sm:aspect-square lg:col-start-4 lg:row-start-1"},[r("WebImage",{staticClass:"swipeReveal h-full w-full",attrs:{image:t.section.perkOne.image2x2,"img-classes":"swipeReveal__inner object-cover w-full h-full"}})],1):t._e(),t._v(" "),r("PerkBlock",{staticClass:"col-start-1 row-start-3 sm:row-start-2",attrs:{heading:t.section.perkTwo.heading,"heading-highlight":t.section.perkTwo.headingHighlight,description:t.section.perkTwo.description,highlight:t.section.perkTwo.highlight,index:t.section.perkTwo.perkIndex}}),t._v(" "),t.section.perkTwo&&t.section.perkTwo.image1x2?r("div",{staticClass:"perk-image col-span-1 col-start-2 row-span-2 row-start-3 aspect-1/2 sm:col-start-1"},[r("WebImage",{staticClass:"swipeReveal h-full w-full",attrs:{image:t.section.perkTwo.image1x2,"img-classes":"swipeReveal__inner w-full h-full object-cover"}})],1):t._e(),t._v(" "),r("PerkBlock",{staticClass:"col-start-2 row-start-5 sm:col-start-3 sm:row-start-4 lg:col-start-3 lg:row-start-3",attrs:{heading:t.section.perkThree.heading,"heading-highlight":t.section.perkThree.headingHighlight,description:t.section.perkThree.description,highlight:t.section.perkThree.highlight,index:t.section.perkThree.perkIndex}}),t._v(" "),t.section.perkThree&&t.section.perkThree.image1x1?r("div",{staticClass:"perk-image col-span-1 col-start-1 row-span-1 row-start-5 aspect-square sm:col-start-3 lg:col-start-4 lg:row-start-3"},[r("WebImage",{staticClass:"swipeReveal h-full w-full",attrs:{image:t.section.perkThree.image1x1,"img-classes":"swipeReveal__inner w-full h-full object-cover"}})],1):t._e(),t._v(" "),r("PerkBlock",{staticClass:"col-start-1 row-start-6 sm:row-start-5 lg:col-start-5 lg:row-start-3",attrs:{heading:t.section.perkFour.heading,"heading-highlight":t.section.perkFour.headingHighlight,description:t.section.perkFour.description,highlight:t.section.perkFour.highlight,index:t.section.perkFour.perkIndex}}),t._v(" "),r("PerkBlock",{staticClass:"col-start-2 row-start-6 sm:col-start-1 lg:col-start-2 lg:row-start-4",attrs:{heading:t.section.perkFive.heading,"heading-highlight":t.section.perkFive.headingHighlight,description:t.section.perkFive.description,highlight:t.section.perkFive.highlight,index:t.section.perkFive.perkIndex}}),t._v(" "),t.section.perkFive&&t.section.perkFive.image2x2?r("div",{staticClass:"perk-image col-span-2 col-start-1 row-span-2 row-start-7 aspect-square sm:col-start-2 sm:row-start-6 lg:col-start-3 lg:row-start-4"},[r("WebImage",{staticClass:"swipeReveal h-full w-full",attrs:{image:t.section.perkFive.image2x2,"img-classes":"swipeReveal__inner w-full h-full object-cover"}})],1):t._e(),t._v(" "),r("PerkBlock",{staticClass:"col-start-1 row-start-9 sm:row-start-8 lg:col-start-2 lg:row-start-5",attrs:{heading:t.section.perkSix.heading,"heading-highlight":t.section.perkSix.headingHighlight,description:t.section.perkSix.description,highlight:t.section.perkSix.highlight,index:t.section.perkSix.perkIndex}}),t._v(" "),r("PerkBlock",{staticClass:"col-start-2 row-start-10 sm:col-start-3 sm:row-start-8 lg:row-start-6",attrs:{heading:t.section.perkSeven.heading,"heading-highlight":t.section.perkSeven.headingHighlight,description:t.section.perkSeven.description,highlight:t.section.perkSeven.highlight,index:t.section.perkSeven.perkIndex}}),t._v(" "),t.section.perkSeven&&t.section.perkSeven.image2x1?r("div",{staticClass:"perk-image col-span-2 col-start-1 row-span-1 row-start-11 aspect-2/1 sm:col-start-2 sm:row-start-9 lg:col-start-1 lg:row-start-6"},[r("WebImage",{staticClass:"swipeReveal h-full w-full",attrs:{image:t.section.perkSeven.image2x1,"img-classes":"swipeReveal__inner w-full h-full object-cover"}})],1):t._e(),t._v(" "),r("PerkBlock",{staticClass:"col-start-1 row-start-12 sm:row-start-10 lg:col-start-5 lg:row-start-6",attrs:{heading:t.section.perkEight.heading,"heading-highlight":t.section.perkEight.headingHighlight,description:t.section.perkEight.description,highlight:t.section.perkEight.highlight,index:t.section.perkEight.perkIndex}}),t._v(" "),t.section.perkEight&&t.section.perkEight.image1x1?r("div",{staticClass:"perk-image col-span-1 col-start-2 row-span-1 row-start-12 aspect-square sm:col-start-1 sm:row-start-9 lg:col-start-5 lg:row-start-5"},[r("WebImage",{staticClass:"swipeReveal h-full w-full",attrs:{image:t.section.perkEight.image1x1,"img-classes":"swipeReveal__inner w-full h-full object-cover"}})],1):t._e(),t._v(" "),t.section.patternSpacers1x1&&t.section.patternSpacers1x1[0]?r("PatternSpacerBlock",{staticClass:"col-start-1 row-start-4 sm:col-start-2 lg:row-start-2",attrs:{block:t.section.patternSpacers1x1[0]}}):t._e(),t._v(" "),t.section.patternSpacers1x1&&t.section.patternSpacers1x1[1]?r("PatternSpacerBlock",{staticClass:"col-start-2 row-start-9 sm:col-start-1 sm:row-start-7 lg:row-start-5",attrs:{block:t.section.patternSpacers1x1[1]}}):t._e(),t._v(" "),t.section.patternSpacers1x1&&t.section.patternSpacers1x1[2]?r("PatternSpacerBlock",{staticClass:"col-start-1 row-start-10 sm:col-start-2 sm:row-start-10 lg:col-start-4 lg:row-start-6",attrs:{block:t.section.patternSpacers1x1[2]}}):t._e()],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);