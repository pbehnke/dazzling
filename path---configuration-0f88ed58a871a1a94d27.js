webpackJsonp([65885448531877],{405:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Configuration",doc:2,section:1,type:"doc"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Getting Started",doc:1,section:1,type:"doc"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"React",doc:3,section:1,type:"doc"},fields:{slug:"/react"}}},{node:{frontmatter:{title:"Docs",doc:4,section:1,type:"doc"},fields:{slug:"/docs"}}}]},postBySlug:{html:'<p>Dazzling places your website configuration in <code class="language-text">site-config.js</code>. This is where you personalize all asprects of the Dazzling website, without taking advantage of building new features in React (we\'ll get to that!).</p>\n<p>In other words, if you want something quick, you can edit <code class="language-text">site-config.js</code> and be done with it.</p>\n<p>Here it is, with some extra content abbreviated:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> createConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'dazzling-components/lib/create-config\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> github <span class="token operator">=</span> <span class="token string">\'https://github.com/jondot/dazzling\'</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">createConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'Dazzling\'</span><span class="token punctuation">,</span>\n  pitch<span class="token punctuation">:</span> <span class="token string">\'An open source all-in-one project website generator based on Gatsby.\'</span><span class="token punctuation">,</span>\n  github<span class="token punctuation">,</span>\n  logo<span class="token punctuation">:</span> <span class="token string">\'logo.svg\'</span><span class="token punctuation">,</span>\n  siteUrl<span class="token punctuation">:</span> <span class="token string">\'http://www.dazzling.io\'</span><span class="token punctuation">,</span>\n  googleAnalyticsID<span class="token punctuation">:</span> <span class="token string">\'UA-FIX-ME-XXXXX\'</span><span class="token punctuation">,</span> <span class="token comment">// GA tracking ID.</span>\n\n  docsDir<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/../content`</span></span><span class="token punctuation">,</span>\n  sections<span class="token punctuation">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'../content/docs/sections.json\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>sections<span class="token punctuation">,</span>\n  googleFonts<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'Open Sans:400,700\'</span><span class="token punctuation">,</span> <span class="token string">\'Muli:300,900\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// algolia full text search</span>\n  docSearch<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    apiKey<span class="token punctuation">:</span> <span class="token string">\'xxxxxx\'</span><span class="token punctuation">,</span>\n    indexName<span class="token punctuation">:</span> <span class="token string">\'fixme\'</span><span class="token punctuation">,</span>\n    inputSelector<span class="token punctuation">:</span> <span class="token string">\'#algolia-doc-search\'</span><span class="token punctuation">,</span>\n    debug<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token comment">// Set debug to true if you want to inspect the dropdown</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  nav<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'Docs\'</span><span class="token punctuation">,</span>\n      to<span class="token punctuation">:</span> <span class="token string">\'getting-started\'</span><span class="token punctuation">,</span>\n      primary<span class="token punctuation">:</span> <span class="token string">\'Get Started\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  usedInText<span class="token punctuation">:</span> <span class="token string">\'Powered by Dazzling\'</span><span class="token punctuation">,</span>\n  usedIn<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      topTitle<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      image<span class="token punctuation">:</span> <span class="token string">\'hygen.svg\'</span><span class="token punctuation">,</span>\n      width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n      title<span class="token punctuation">:</span> <span class="token string">\'Hygen\'</span><span class="token punctuation">,</span>\n      link<span class="token punctuation">:</span> <span class="token string">\'https://www.hygen.io\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  featuresText<span class="token punctuation">:</span> <span class="token string">\'Build Dazzling Sites\'</span><span class="token punctuation">,</span>\n  features<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      image<span class="token punctuation">:</span> <span class="token string">\'simple.svg\'</span><span class="token punctuation">,</span>\n      title<span class="token punctuation">:</span> <span class="token string">\'Unlimited Creativity.\'</span><span class="token punctuation">,</span>\n      content<span class="token punctuation">:</span>\n        <span class="token string">\'Build with Dazzling components or make new ones with React and Styled Components.\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  copyright<span class="token punctuation">:</span> <span class="token string">\'Copyright © 2018. Dotan Nahum\'</span><span class="token punctuation">,</span>\n  theme<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// named colors:</span>\n    titleFontFamily<span class="token punctuation">:</span> <span class="token string">\'Muli\'</span><span class="token punctuation">,</span>\n    background<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n    brand<span class="token punctuation">:</span> <span class="token string">\'#408AFA\'</span><span class="token punctuation">,</span>\n    brandSecondary<span class="token punctuation">:</span> <span class="token string">\'#8b8f94\'</span><span class="token punctuation">,</span>\n    ink<span class="token punctuation">:</span> <span class="token string">\'#333\'</span><span class="token punctuation">,</span>\n    inkDark<span class="token punctuation">:</span> <span class="token string">\'#35495E\'</span><span class="token punctuation">,</span>\n    inkLight<span class="token punctuation">:</span> <span class="token string">\'#f9fbfd\'</span><span class="token punctuation">,</span>\n    inkSelected<span class="token punctuation">:</span> <span class="token string">\'#2097e4\'</span><span class="token punctuation">,</span>\n    <span class="token comment">// content width:</span>\n    contentWidthLaptop<span class="token punctuation">:</span> <span class="token string">\'680px\'</span><span class="token punctuation">,</span>\n    sitePadding<span class="token punctuation">:</span> <span class="token string">\'20px\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>We recommend experimenting with these settings and if any doubt, take a look <a href="">at the source</a></p>\n<p>The next step for customizing your website would be to <a href="react">take advantage of React and Gatsby</a>.</p>',timeToRead:1,excerpt:"Dazzling places your website configuration in  . This is where you personalize all asprects of the Dazzling website, without taking…",frontmatter:{title:"Configuration"},fields:{slug:"/configuration"}}},pathContext:{slug:"/configuration"}}}});
//# sourceMappingURL=path---configuration-0f88ed58a871a1a94d27.js.map