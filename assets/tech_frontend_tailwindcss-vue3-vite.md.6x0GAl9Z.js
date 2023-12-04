import{_ as s,c as i,o as a,R as n}from"./chunks/framework.sjnMwbWx.js";const E=JSON.parse('{"title":"在 Vue 3 + Vite 项目中安装 Tailwind CSS","description":"","frontmatter":{"tags":["vue3","vite","css","tailwindcss"]},"headers":[],"relativePath":"tech/frontend/tailwindcss-vue3-vite.md","filePath":"tech/frontend/tailwindcss-vue3-vite.md","lastUpdated":1701662868000}'),e={name:"tech/frontend/tailwindcss-vue3-vite.md"},t=n(`<h1 id="在-vue-3-vite-项目中安装-tailwind-css" tabindex="-1">在 Vue 3 + Vite 项目中安装 Tailwind CSS <a class="header-anchor" href="#在-vue-3-vite-项目中安装-tailwind-css" aria-label="Permalink to &quot;在 Vue 3 + Vite 项目中安装 Tailwind CSS&quot;">​</a></h1><h2 id="初始化项目" tabindex="-1">初始化项目 <a class="header-anchor" href="#初始化项目" aria-label="Permalink to &quot;初始化项目&quot;">​</a></h2><p>首先，使用 NPM 安装 Tailwind 以及其它依赖项:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tailwindcss@latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postcss@latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autoprefixer@latest</span></span></code></pre></div><p>安装后，使用 <code>npx</code> 命令生成 <code>tailwind.config.js</code> 和 <code>postcss.config.js</code> 配置文件：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tailwindcss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span></span></code></pre></div><h2 id="配置项目文件" tabindex="-1">配置项目文件 <a class="header-anchor" href="#配置项目文件" aria-label="Permalink to &quot;配置项目文件&quot;">​</a></h2><p>接下来，先配置 Tailwind 来移除生产环境下没有使用到的样式声明：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// tailwind.config.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./index.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./src/**/*.{vue,js,ts,jsx,tsx}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  theme: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    extend: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在 <code>tailwind.config.js</code> 文件中，配置 <code>content</code> 选项指定所有的 <code>pages</code> 和 <code>components</code> 文件，使得 Tailwind 可以在生产构建中对未使用的样式进行摇树优化。</p><p>然后，创建 <code>./src/index.css</code> 文件并填充以下内容：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ./src/index.css */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@tailwind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> base;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@tailwind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> components;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@tailwind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utilities;</span></span></code></pre></div><p>最后，将 <code>./src/index.css</code> 文件导入到 <code>./src/main.js</code> 文件中：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// src/main.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> App </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./App.vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./index.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>现在，运行 <code>npm run dev</code>, Tailwind CSS 就可以在您的 Vue 3 and Vite 项目中使用了，并且还会在构建时移除未使用的 CSS，以获得最佳性能。</p><h2 id="ide-代码提示" tabindex="-1">IDE 代码提示 <a class="header-anchor" href="#ide-代码提示" aria-label="Permalink to &quot;IDE 代码提示&quot;">​</a></h2><p>为了更加流畅的使用体验，我们还需要在 VS Code 中再安装 <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noreferrer">Tailwind CSS IntelliSense</a> 插件获得丰富的 Tailwind CSS 代码提示。</p>`,17),l=[t];function p(h,d,k,c,r,o){return a(),i("div",null,l)}const F=s(e,[["render",p]]);export{E as __pageData,F as default};
