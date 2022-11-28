import{_ as s,c as n,o as a,a as l}from"./app.6fec3238.js";const A=JSON.parse('{"title":"YAML \u5165\u95E8\u6559\u7A0B","description":"","frontmatter":{"tags":["yaml","json"]},"headers":[{"level":2,"title":"\u5165\u95E8","slug":"\u5165\u95E8","link":"#\u5165\u95E8","children":[{"level":3,"title":"\u5BF9\u8C61","slug":"\u5BF9\u8C61","link":"#\u5BF9\u8C61","children":[]},{"level":3,"title":"\u6570\u7EC4","slug":"\u6570\u7EC4","link":"#\u6570\u7EC4","children":[]},{"level":3,"title":"\u7EAF\u91CF","slug":"\u7EAF\u91CF","link":"#\u7EAF\u91CF","children":[]}]},{"level":2,"title":"\u590D\u6742\u7ED3\u6784","slug":"\u590D\u6742\u7ED3\u6784","link":"#\u590D\u6742\u7ED3\u6784","children":[]}],"relativePath":"article/yaml.md","lastUpdated":1669648022000}'),p={name:"article/yaml.md"},o=l(`<h1 id="yaml-\u5165\u95E8\u6559\u7A0B" tabindex="-1">YAML \u5165\u95E8\u6559\u7A0B <a class="header-anchor" href="#yaml-\u5165\u95E8\u6559\u7A0B" aria-hidden="true">#</a></h1><blockquote><p>\u83DC\u9E1F\u6559\u7A0B\uFF1A<a href="https://www.runoob.com/w3cnote/yaml-intro.html" target="_blank" rel="noreferrer">https://www.runoob.com/w3cnote/yaml-intro.html</a><br> YAML \u8BED\u8A00\u6559\u7A0B\uFF1A<a href="https://www.ruanyifeng.com/blog/2016/07/yaml.html" target="_blank" rel="noreferrer">https://www.ruanyifeng.com/blog/2016/07/yaml.html</a><br> YAML \u5907\u5FD8\u6E05\u5355\uFF1A<a href="https://wangchujiang.com/reference/docs/yaml.html" target="_blank" rel="noreferrer">https://wangchujiang.com/reference/docs/yaml.html</a></p></blockquote><blockquote><p>JS-YAML \u5728\u7EBF\u89E3\u6790\u5668\uFF1A<a href="https://nodeca.github.io/js-yaml/" target="_blank" rel="noreferrer">https://nodeca.github.io/js-yaml/</a></p></blockquote><p>YAML \u662F\u4E00\u79CD\u6570\u636E\u5E8F\u5217\u5316\u8BED\u8A00\uFF0C\u7528\u4E8E\u65B9\u4FBF\u7684\u8BFB\u5199\u914D\u7F6E\u6587\u4EF6\uFF0C\u5C5E\u4E8E JSON \u7684\u8D85\u96C6\u3002</p><p>YAML \u8BED\u8A00\u89C4\u5219\u5982\u4E0B\uFF1A</p><ul><li>\u5927\u5C0F\u5199\u654F\u611F</li><li>\u952E\u503C\u4E4B\u95F4\uFF08\u5192\u53F7\u540E\uFF09\u5FC5\u987B\u6709\u81F3\u5C11\u4E00\u4E2A\u7A7A\u683C</li><li>\u4F7F\u7528\u7A7A\u683C\u7F29\u8FDB\u8868\u793A\u5C42\u7EA7\u5173\u7CFB\uFF0C\u4E0D\u5141\u8BB8\u4F7F\u7528\u5236\u8868\u7B26</li><li>\u7F29\u8FDB\u7684\u7A7A\u683C\u6570\u76EE\u4E0D\u91CD\u8981\uFF0C\u53EA\u8981\u76F8\u540C\u5C42\u7EA7\u7684\u5143\u7D20\u5DE6\u4FA7\u5BF9\u9F50\u5373\u53EF</li><li>\u6587\u4EF6\u4F7F\u7528 <code>.yaml</code> \u6216 <code>.yml</code> \u540E\u7F00\u7ED3\u5C3E</li><li>\u4F7F\u7528 <code>#</code> \u8868\u793A\u6CE8\u91CA</li></ul><h2 id="\u5165\u95E8" tabindex="-1">\u5165\u95E8 <a class="header-anchor" href="#\u5165\u95E8" aria-hidden="true">#</a></h2><p>YAML \u53EF\u4EE5\u5B8C\u5168\u66FF\u4EE3 JSON \u7528\u6765\u50A8\u5B58\u7B80\u5355\u590D\u6742\u5404\u79CD\u6570\u636E\u7ED3\u6784\uFF1A</p><h3 id="\u5BF9\u8C61" tabindex="-1">\u5BF9\u8C61 <a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a></h3><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Tom</span></span>
<span class="line"><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#676E95;"># or</span></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u2193 \u7B49\u540C\u4E8E JSON \u2193</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6570\u7EC4" tabindex="-1">\u6570\u7EC4 <a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a></h3><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">games</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lol</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ow2</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wow</span></span>
<span class="line"><span style="color:#676E95;"># or</span></span>
<span class="line"><span style="color:#F07178;">games</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">lol</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ow2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wow</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>\u2193 \u7B49\u540C\u4E8E \u2193</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">games</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lol</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ow2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u7EAF\u91CF" tabindex="-1">\u7EAF\u91CF <a class="header-anchor" href="#\u7EAF\u91CF" aria-hidden="true">#</a></h3><p>\u7EAF\u91CF\u662F\u6700\u57FA\u672C\u7684\u3001\u4E0D\u53EF\u518D\u5206\u7684\u503C\uFF0C\u5373\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B\uFF1A</p><ul><li>\u5B57\u7B26\u4E32</li><li>\u6574\u6570</li><li>\u6D6E\u70B9\u6570</li><li>\u5E03\u5C14\u503C</li><li>Null</li><li>\u65E5\u671F</li><li>\u65F6\u95F4</li></ul><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u5355\u884C\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Liang</span></span>
<span class="line"><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u53CC\u5F15\u53F7\u4E0D\u4F1A\u5BF9\u7279\u6B8A\u5B57\u7B26\u8F6C\u4E49</span></span>
<span class="line"><span style="color:#676E95;"># { &quot;s1&quot;:&quot;\u5185\u5BB9\\\\n\u5B57\u7B26\u4E32&quot;, &quot;s2&quot;:&quot;\u5185\u5BB9\\n\u5B57\u7B26\u4E32&quot; }</span></span>
<span class="line"><span style="color:#F07178;">s1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5185\u5BB9\\n\u5B57\u7B26\u4E32</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">s2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5185\u5BB9</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">\u5B57\u7B26\u4E32</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5B57\u7B26\u4E32\u6362\u884C\u4F1A\u8F6C\u6362\u6210 1 \u4E2A\u7A7A\u683C</span></span>
<span class="line"><span style="color:#676E95;"># { &quot;address&quot;:&quot;Shanghai, China&quot; }</span></span>
<span class="line"><span style="color:#F07178;">address</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Shanghai,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">China</span></span>
<span class="line"></span></code></pre></div><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u4FDD\u7559\u6362\u884C\u7B26</span></span>
<span class="line"><span style="color:#676E95;"># { &quot;say&quot;:&quot;I!\\nAM!\\nIRON MAN!\\n&quot; }</span></span>
<span class="line"><span style="color:#F07178;">say</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#C3E88D;">  I!</span></span>
<span class="line"><span style="color:#C3E88D;">  AM!</span></span>
<span class="line"><span style="color:#C3E88D;">  IRON MAN!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5FFD\u7565\u6587\u4E2D\u6362\u884C\uFF0C\u4FDD\u7559\u672B\u5C3E\u6362\u884C</span></span>
<span class="line"><span style="color:#676E95;"># { &quot;talk&quot;:&quot;Good morning! everyone!\\n&quot; }</span></span>
<span class="line"><span style="color:#F07178;">talk</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">  Good morning!</span></span>
<span class="line"><span style="color:#C3E88D;">  everyone!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># + \u4FDD\u7559\u672B\u5C3E\u6362\u884C\uFF0C- \u5220\u9664\u672B\u5C3E\u6362\u884C</span></span>
<span class="line"><span style="color:#676E95;"># { &quot;p1&quot;:&quot;Tom\\n&quot;, &quot;p2&quot;:&quot;Jerry\\n&quot;, &quot;p3&quot;:&quot;Spike&quot; }</span></span>
<span class="line"><span style="color:#F07178;">p1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#C3E88D;">  Tom</span></span>
<span class="line"><span style="color:#F07178;">p2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#C792EA;">+</span></span>
<span class="line"><span style="color:#C3E88D;">  Jerry</span></span>
<span class="line"><span style="color:#F07178;">p3</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#C792EA;">-</span></span>
<span class="line"><span style="color:#C3E88D;">  Spike</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u63D2\u5165 HTML \u6807\u8BB0</span></span>
<span class="line"><span style="color:#676E95;"># { &quot;html&quot;:&quot;&lt;p style=\\&quot;color: red\\&quot;&gt;\\n  line.\\n&lt;/p&gt;\\n&quot; }</span></span>
<span class="line"><span style="color:#F07178;">html</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#C3E88D;">  &lt;p style=&quot;color: red&quot;&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    line.</span></span>
<span class="line"><span style="color:#C3E88D;">  &lt;/p&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u6574\u6570/\u6D6E\u70B9\u6570</span></span>
<span class="line"><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.72</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5E03\u5C14\u503C</span></span>
<span class="line"><span style="color:#F07178;">live</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># TRUE/True</span></span>
<span class="line"><span style="color:#F07178;">sleep</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># FALSE/False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Null</span></span>
<span class="line"><span style="color:#F07178;">girlFriend</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">wife</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65E5\u671F/\u65F6\u95F4\uFF08ISO 8601 \u683C\u5F0F\uFF09</span></span>
<span class="line"><span style="color:#F07178;">date</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 2022-11-24</span></span>
<span class="line"><span style="color:#F07178;">datetime</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 2022-11-24T16:20:03.721Z</span></span>
<span class="line"></span></code></pre></div><h2 id="\u590D\u6742\u7ED3\u6784" tabindex="-1">\u590D\u6742\u7ED3\u6784 <a class="header-anchor" href="#\u590D\u6742\u7ED3\u6784" aria-hidden="true">#</a></h2><p>JSON \u53EF\u4EE5\u5B9E\u73B0\u7684\u6570\u636E\u7ED3\u6784 YAML \u90FD\u53EF\u4EE5\uFF0C\u4E14\u53EF\u4EE5\u589E\u52A0\u6CE8\u91CA\uFF0C\u5BF9\u975E\u5F00\u53D1\u4EBA\u5458\u66F4\u53CB\u597D\uFF1A</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Liang</span></span>
<span class="line"><span style="color:#F07178;">languages</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JavaScript</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CSS</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HTML</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">C#</span></span>
<span class="line"><span style="color:#F07178;">address</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u4E2D\u56FD \u4E0A\u6D77</span></span>
<span class="line"><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#C3E88D;">  \u5927\u5BB6\u597D\uFF01</span></span>
<span class="line"><span style="color:#C3E88D;">  \u6211\u662F\u7EC3\u4E60\u65F6\u957F\u4E24\u5E74\u534A\u7684\u4E2A\u4EBA\u7EC3\u4E60\u751F\uFF01</span></span>
<span class="line"><span style="color:#C3E88D;">  Music\uFF01</span></span>
<span class="line"><span style="color:#F07178;">friends</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Kiriya</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">address</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u4E2D\u56FD \u56DB\u5DDD</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u672F\u672F\u62C9\u62C9\u90A6\u90A6\u8D8A\u5171\u63A2\u5934.gif</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Li Zhenwang</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">address</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u4E2D\u56FD \u5E7F\u4E1C</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u8D44\u6DF1\u95F2\u9C7C\u6148\u5584\u5BB6</span></span>
<span class="line"></span></code></pre></div><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Liang</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">languages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">JavaScript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CSS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">HTML</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">C#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">address</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u4E2D\u56FD \u4E0A\u6D77</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5927\u5BB6\u597D\uFF01</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">\u6211\u662F\u7EC3\u4E60\u65F6\u957F\u4E24\u5E74\u534A\u7684\u4E2A\u4EBA\u7EC3\u4E60\u751F\uFF01</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">Music\uFF01</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">friends</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Kiriya</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">address</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u4E2D\u56FD \u56DB\u5DDD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u672F\u672F\u62C9\u62C9\u90A6\u90A6\u8D8A\u5171\u63A2\u5934.gif</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Li Zhenwang</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">address</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u4E2D\u56FD \u5E7F\u4E1C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8D44\u6DF1\u95F2\u9C7C\u6148\u5584\u5BB6</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,26),e=[o];function t(c,r,D,y,F,C){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};
