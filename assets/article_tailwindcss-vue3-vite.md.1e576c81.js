import{_ as s,c as a,o as n,a as l}from"./app.6fec3238.js";const C=JSON.parse('{"title":"\u5728 Vue 3 + Vite \u9879\u76EE\u4E2D\u5B89\u88C5 Tailwind CSS","description":"","frontmatter":{"tags":["vue3","vite","css","tailwindcss"]},"headers":[{"level":2,"title":"\u521D\u59CB\u5316\u9879\u76EE","slug":"\u521D\u59CB\u5316\u9879\u76EE","link":"#\u521D\u59CB\u5316\u9879\u76EE","children":[]},{"level":2,"title":"\u914D\u7F6E\u9879\u76EE\u6587\u4EF6","slug":"\u914D\u7F6E\u9879\u76EE\u6587\u4EF6","link":"#\u914D\u7F6E\u9879\u76EE\u6587\u4EF6","children":[]},{"level":2,"title":"IDE \u4EE3\u7801\u63D0\u793A","slug":"ide-\u4EE3\u7801\u63D0\u793A","link":"#ide-\u4EE3\u7801\u63D0\u793A","children":[]}],"relativePath":"article/tailwindcss-vue3-vite.md","lastUpdated":1669648022000}'),p={name:"article/tailwindcss-vue3-vite.md"},e=l(`<h1 id="\u5728-vue-3-vite-\u9879\u76EE\u4E2D\u5B89\u88C5-tailwind-css" tabindex="-1">\u5728 Vue 3 + Vite \u9879\u76EE\u4E2D\u5B89\u88C5 Tailwind CSS <a class="header-anchor" href="#\u5728-vue-3-vite-\u9879\u76EE\u4E2D\u5B89\u88C5-tailwind-css" aria-hidden="true">#</a></h1><h2 id="\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1">\u521D\u59CB\u5316\u9879\u76EE <a class="header-anchor" href="#\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a></h2><p>\u9996\u5148\uFF0C\u4F7F\u7528 NPM \u5B89\u88C5 Tailwind \u4EE5\u53CA\u5176\u5B83\u4F9D\u8D56\u9879:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install -D tailwindcss@latest postcss@latest autoprefixer@latest</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5\u540E\uFF0C\u4F7F\u7528 <code>npx</code> \u547D\u4EE4\u751F\u6210 <code>tailwind.config.js</code> \u548C <code>postcss.config.js</code> \u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npx tailwindcss init -p</span></span>
<span class="line"></span></code></pre></div><h2 id="\u914D\u7F6E\u9879\u76EE\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u9879\u76EE\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u9879\u76EE\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\uFF0C\u5148\u914D\u7F6E Tailwind \u6765\u79FB\u9664\u751F\u4EA7\u73AF\u5883\u4E0B\u6CA1\u6709\u4F7F\u7528\u5230\u7684\u6837\u5F0F\u58F0\u660E\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// tailwind.config.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/**/*.{vue,js,ts,jsx,tsx}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">extend</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>\u5728 <code>tailwind.config.js</code> \u6587\u4EF6\u4E2D\uFF0C\u914D\u7F6E <code>content</code> \u9009\u9879\u6307\u5B9A\u6240\u6709\u7684 <code>pages</code> \u548C <code>components</code> \u6587\u4EF6\uFF0C\u4F7F\u5F97 Tailwind \u53EF\u4EE5\u5728\u751F\u4EA7\u6784\u5EFA\u4E2D\u5BF9\u672A\u4F7F\u7528\u7684\u6837\u5F0F\u8FDB\u884C\u6447\u6811\u4F18\u5316\u3002</p><p>\u7136\u540E\uFF0C\u521B\u5EFA <code>./src/index.css</code> \u6587\u4EF6\u5E76\u586B\u5145\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/* ./src/index.css */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@tailwind</span><span style="color:#A6ACCD;"> base</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">@tailwind</span><span style="color:#A6ACCD;"> components</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">@tailwind</span><span style="color:#A6ACCD;"> utilities</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6700\u540E\uFF0C\u5C06 <code>./src/index.css</code> \u6587\u4EF6\u5BFC\u5165\u5230 <code>./src/main.js</code> \u6587\u4EF6\u4E2D\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// src/main.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./App.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u73B0\u5728\uFF0C\u8FD0\u884C <code>npm run dev</code>, Tailwind CSS \u5C31\u53EF\u4EE5\u5728\u60A8\u7684 Vue 3 and Vite \u9879\u76EE\u4E2D\u4F7F\u7528\u4E86\uFF0C\u5E76\u4E14\u8FD8\u4F1A\u5728\u6784\u5EFA\u65F6\u79FB\u9664\u672A\u4F7F\u7528\u7684 CSS\uFF0C\u4EE5\u83B7\u5F97\u6700\u4F73\u6027\u80FD\u3002</p><h2 id="ide-\u4EE3\u7801\u63D0\u793A" tabindex="-1">IDE \u4EE3\u7801\u63D0\u793A <a class="header-anchor" href="#ide-\u4EE3\u7801\u63D0\u793A" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u66F4\u52A0\u6D41\u7545\u7684\u4F7F\u7528\u4F53\u9A8C\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5728 VS Code \u4E2D\u518D\u5B89\u88C5 <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noreferrer">Tailwind CSS IntelliSense</a> \u63D2\u4EF6\u83B7\u5F97\u4E30\u5BCC\u7684 Tailwind CSS \u4EE3\u7801\u63D0\u793A\u3002</p>`,17),o=[e];function t(c,i,r,D,d,y){return n(),a("div",null,o)}const A=s(p,[["render",t]]);export{C as __pageData,A as default};
