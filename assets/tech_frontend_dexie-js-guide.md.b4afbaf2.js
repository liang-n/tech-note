import{_ as s,c as n,o as a,l as p}from"./app.6eef0e32.js";const A=JSON.parse('{"title":"indexedDB","description":"","frontmatter":{"tags":["indexedDB","javascript","typescript","nodejs"]},"headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB","link":"#\u7B80\u4ECB","children":[]},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":2,"title":"\u5FEB\u901F\u5F00\u59CB","slug":"\u5FEB\u901F\u5F00\u59CB","link":"#\u5FEB\u901F\u5F00\u59CB","children":[{"level":3,"title":"JavaScript","slug":"javascript","link":"#javascript","children":[]},{"level":3,"title":"TypeScript","slug":"typescript","link":"#typescript","children":[]},{"level":3,"title":"Node.js","slug":"node-js","link":"#node-js","children":[]}]}],"relativePath":"tech/frontend/dexie-js-guide.md","lastUpdated":1680361861000}'),l={name:"tech/frontend/dexie-js-guide.md"},o=p(`<h1 id="indexeddb" tabindex="-1">indexedDB <a class="header-anchor" href="#indexeddb" aria-hidden="true">#</a></h1><h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>Dexie.js \u662F\u4E00\u6B3E\u6D41\u884C\u7684\u5BA2\u6237\u7AEF JavaScript \u5E93\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u5355\u800C\u4F18\u96C5\u7684 API\uFF0C\u7528\u4E8E\u64CD\u4F5C indexedDB\uFF0C\u4E00\u79CD\u5F3A\u5927\u7684\u57FA\u4E8E\u6D4F\u89C8\u5668\u7684\u6570\u636E\u5E93\u7CFB\u7EDF\u3002\u4F7F\u7528 Dexie.js\uFF0C\u60A8\u53EF\u4EE5\u8F7B\u677E\u5B58\u50A8\u548C\u68C0\u7D22\u6570\u636E\uFF0C\u800C\u65E0\u9700\u76F4\u63A5\u5904\u7406 indexedDB \u7684\u590D\u6742\u6027\u3002</p><p>\u672C\u6559\u7A0B\u5C06\u4ECB\u7ECD\u4F7F\u7528 Dexie.js \u7684\u57FA\u7840\u77E5\u8BC6\uFF0C\u5305\u62EC\u5B89\u88C5\u3001\u521B\u5EFA\u6570\u636E\u5E93\u5B9E\u4F8B\u3001\u5B9A\u4E49\u5BF9\u8C61\u5B58\u50A8\u533A\u548C\u7D22\u5F15\u3001\u5411\u6570\u636E\u5E93\u6DFB\u52A0\u6570\u636E\u3001\u66F4\u65B0\u6570\u636E\u3001\u67E5\u8BE2\u6570\u636E\u548C\u5220\u9664\u6570\u636E\u3002</p><p>\u5982\u679C\u4F60\u60F3\u5148\u4E86\u89E3 indexedDB \u57FA\u7840\u53EF\u4EE5\u5B66\u4E60 <a href="https://www.tangshuang.net/3735.html" target="_blank" rel="noreferrer">IndexedDB \u4E2D\u6587\u6559\u7A0B</a>\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u8BE6\u7EC6\u4ECB\u7ECD\u4E86 IndexedDB \u7684\u57FA\u7840\u77E5\u8BC6\u548C\u539F\u751F API \u4F7F\u7528\u65B9\u6CD5\uFF0C\u975E\u5E38\u63A8\u8350\uFF01</p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u60A8\u53EF\u4EE5\u4F7F\u7528 npm \u6216 yarn \u5B89\u88C5 Dexie.js\uFF1A</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install dexie</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn add dexie</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h2><h3 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u5BFC\u5165</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Dexie </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dexie</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u521B\u5EFA\u5E76\u8FDE\u63A5\u6570\u636E\u5E93\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> db </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Dexie</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myDatabase</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6307\u5B9A\u7248\u672C\uFF0C\u521B\u5EFA\u5BF9\u8C61\u4ED3\u5E93\u548C\u7D22\u5F15</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">version</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stores</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">friends</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name, age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u7B2C\u4E00\u4E2A\u7D22\u5F15\u5C06\u88AB\u4F5C\u4E3A\u4E3B\u952E</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u589E\u52A0</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">friends</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Liang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">friends</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Liang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5F53\u4E3B\u952E\u5B58\u5728\u65F6\uFF0C\u5C06\u66F4\u65B0\u6570\u636E\uFF0C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u67E5\u8BE2</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">friends</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Liang</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">friends</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Liang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h3><blockquote><p>\u6B64\u65B9\u6CD5\u6765\u81EA <a href="https://dexie.org/docs/Typescript" target="_blank" rel="noreferrer">\u5B98\u65B9\u6587\u6863 &gt; TypeScript</a></p></blockquote><p>\u5728 TypeScript \u4E2D\uFF0C\u5F53\u4F60\u5B9A\u4E49\u4E86 <code>friends</code> \u5BF9\u8C61\u4ED3\u5E93\u540E\uFF0C\u5E76\u4E0D\u80FD\u76F4\u63A5\u50CF\u5728 JavaScrip \u4E2D\u4E00\u6837\u76F4\u63A5\u64CD\u4F5C\u5BF9\u8C61\u4ED3\u5E93\u8FDB\u884C\u589E\u5220\u6539\u67E5\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">friends</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u62A5\u9519\uFF1A\u7C7B\u578B \u201CDexie\u201D \u4E0A\u4E0D\u5B58\u5728\u5C5E\u6027 \u201Cfriends\u201D</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Liang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u56E0\u4E3A TypeScript \u65E0\u6CD5\u68C0\u6D4B\u5230\u9690\u5F0F\u5B9A\u4E49\u7684\u5BF9\u8C61\uFF0C\u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528 <code>Dexie.table()</code> \u65B9\u6CD5\u89E3\u51B3\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">table</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">friends</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Liang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u4F46\u662F\uFF0C\u8FD9\u4E0D\u4EC5\u9EBB\u70E6\uFF0C\u800C\u4E14\u4E22\u5931\u4E86 TypeScript \u7279\u6027\uFF1A\u667A\u80FD\u4EE3\u7801\u8865\u5168\u548C\u7C7B\u578B\u5B89\u5168\u6821\u9A8C\u3002</p><p>\u6B64\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6269\u5C55\u4E00\u4E2A <code>Dexie</code> \u5B50\u7C7B\uFF0C\u5E76\u5728\u5B50\u7C7B\u4E2D\u5B9A\u4E49\u5176\u8FD0\u884C\u65F6\u624D\u5B58\u5728 <code>Table</code> \u5C5E\u6027\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u5BFC\u5165</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Dexie </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dexie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5B9A\u4E49 friends \u7C7B\u578B\u63A5\u53E3</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IFriends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HappyDB</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dexie</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u58F0\u660E friends \u5BF9\u8C61\u5E76\u6307\u5B9A\u5176\u7C7B\u578B\u63A5\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">friends</span><span style="color:#89DDFF;">!:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dexie</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Table</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IFriends</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">databaseName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">databaseName</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">version</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stores</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      friends</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name, age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p><code>!</code> \u662F TypeScript \u4E2D\u7684\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26\uFF0C\u7528\u4E8E\u544A\u8BC9\u7F16\u8BD1\u5668\u5F53\u524D\u53D8\u91CF\u80AF\u5B9A\u662F\u975E\u7A7A\u7684\uFF0C\u4ECE\u800C\u907F\u514D\u51FA\u73B0\u7A7A\u503C\u5F02\u5E38\u3002</p></blockquote><blockquote><p><code>super()</code>\xA0\u662F\u5728\u5B50\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u8C03\u7528\u5176\u7236\u7C7B\u6784\u9020\u51FD\u6570\u7684\u5173\u952E\u5B57\uFF0C\u7528\u4E8E\u5B9E\u73B0\u7EE7\u627F\u3002\u5F53\u5B50\u7C7B\u8C03\u7528\xA0<code>super()</code>\xA0\u65F6\uFF0C\u5B83\u4F1A\u6267\u884C\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\uFF0C\u4EE5\u4FBF\u5BF9\u7236\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u8FDB\u884C\u521D\u59CB\u5316\u3002</p></blockquote><p>\u73B0\u5728\u4F60\u53EA\u9700\u8981\u50CF\u4E0A\u9762 JavaScrip \u4E2D\u4E00\u6837\u4F7F\u7528\u5B83\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> db </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HappyDB</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">HappyDatabase</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">version</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stores</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">friends</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name, age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u2026\u2026</span></span>
<span class="line"></span></code></pre></div><h3 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-hidden="true">#</a></h3><p>\u5F53\u4F60\u5728 Node.js \u73AF\u5883\u4E2D\u4F7F\u7528 Dexie.js \u7684\u65F6\u5019\uFF0C\u4F1A\u63D0\u793A\u7F3A\u5C11 indexedDB API\uFF1A</p><blockquote><p>DexieError [DatabaseClosedError]: MissingAPIError \u7F3A\u5C11 IndexedDB API\u3002\u8BF7\u8BBF\u95EE <a href="https://tinyurl.com/y2uuvskb" target="_blank" rel="noreferrer">https://tinyurl.com/y2uuvskb</a> \u3002</p></blockquote><p>\u8FD9\u662F\u56E0\u4E3A indexedDB \u662F\u524D\u7AEF\u6D4F\u89C8\u5668\u4E2D\u7684\u672C\u5730\u6570\u636E\u5E93\uFF0C\u6302\u8F7D\u5728 window \u4E0A\u7684\u5168\u5C40\u5BF9\u8C61\uFF0C\u5728 Node.js \u4E2D\u662F\u6CA1\u6709\u7684\u8FD9\u4E2A\u6570\u636E\u5E93\u548C API \u7684\u3002</p><p>\u5728 Dexie.js \u62A5\u9519\u4FE1\u606F\u63D0\u793A\u7684\u5B98\u65B9\u6587\u6863\u4E2D\uFF0C\u63D0\u4F9B\u4E86\u89E3\u51B3\u65B9\u6848\uFF1A</p><ul><li><a href="https://github.com/dumbmatter/fakeIndexedDB#with-dexie-and-other-indexeddb-api-wrappers" target="_blank" rel="noreferrer">\u5C06 Dexie \u4E0E fakeIndexedDB \u4E00\u8D77\u4F7F\u7528</a></li><li><a href="https://github.com/indexeddbshim/IndexedDBShim#node-set-up" target="_blank" rel="noreferrer">\u5C06 Dexie \u4E0E IndexedDBShim \u4E00\u8D77\u4F7F\u7528</a></li></ul><p><code>fakeIndexedDB</code> \u662F\u901A\u8FC7\u7EAF JS \u5185\u5B58\u5B9E\u73B0\u7684 IndexedDB API\uFF0C\u5B83\u7684\u4E3B\u8981\u7528\u9014\u662F\u5728 Node.js \u4E2D\u6D4B\u8BD5\u4F9D\u8D56 IndexedDB \u7684\u4EE3\u7801\u3002</p><p><code>IndexedDBShim</code> \u662F\u4E00\u4E2A\u53EF\u4EE5\u5728\u6240\u6709\u684C\u9762\u548C\u79FB\u52A8\u6D4F\u89C8\u5668\u4EE5\u53CA Node.js \u4E2D\u4F7F\u7528\u7684 indexedDB API\u3002</p>`,33),e=[o];function c(t,r,D,y,F,i){return a(),n("div",null,e)}const d=s(l,[["render",c]]);export{A as __pageData,d as default};