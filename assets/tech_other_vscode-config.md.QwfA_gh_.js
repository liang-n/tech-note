import{_ as e,c as o,o as a,R as d}from"./chunks/framework.sjnMwbWx.js";const f=JSON.parse('{"title":"Visual Studio Code 环境配置","description":"","frontmatter":{"tags":["vscode"]},"headers":[],"relativePath":"tech/other/vscode-config.md","filePath":"tech/other/vscode-config.md","lastUpdated":1701662868000}'),i={name:"tech/other/vscode-config.md"},c=d('<h1 id="visual-studio-code-环境配置" tabindex="-1">Visual Studio Code 环境配置 <a class="header-anchor" href="#visual-studio-code-环境配置" aria-label="Permalink to &quot;Visual Studio Code 环境配置&quot;">​</a></h1><p>此文章旨在安装后快速配置出相对顺手的 Visual Studio Code 使用环境。</p><h2 id="如何进入设置" tabindex="-1">如何进入设置 <a class="header-anchor" href="#如何进入设置" aria-label="Permalink to &quot;如何进入设置&quot;">​</a></h2><p>进入设置有两种方式：</p><ol><li>按下快捷键 <code>command + ,</code> 进入可视化设置界面。</li><li>按下快捷键 <code>command + shift + p</code> 输入 <code>settings json</code>，选择 <code>首选项：打开设置 (json)</code> 进入设置的 JSON 文件，或输入 <code>settings ui</code> 选择 <code>首选项：打开设置（ui）</code> 进入可视化设置界面。</li></ol><p>在可视化设置界面顶部有搜索框，可以快速检索需要的设置项（大部分功能都有中文说明，所以支持中文关键字搜索）；</p><p>在 JSON 文件中，使用 <code>command + f</code> 文本搜索功能检索。</p><h2 id="推荐设置" tabindex="-1">推荐设置 <a class="header-anchor" href="#推荐设置" aria-label="Permalink to &quot;推荐设置&quot;">​</a></h2><ul><li><code>file.autoSave</code> - 开启自动保存。 <ul><li><code>afterDelay</code> - 文档修改一秒钟后自动保存。</li><li><code>onFocusChange</code> - 编辑器失去焦点时自动保存。</li></ul></li><li><code>editor.guides.bracketPairs</code> - 开启彩色括号匹配。</li><li><code>editor.snippetSuggestions</code> - 选择 <code>top</code> 将代码片段置于代码提示首位。</li><li><code>editor.renderWhitespace</code> - 显示文档中的空白字符（空格/制表符）。 <ul><li><code>boundary</code> - 显示除了字词中单个空格外的所有空白字符。</li><li><code>all</code> - 显示所有空白字符。</li></ul></li><li><code>editor.cursorSmoothCaretAnimation</code> - 启用平滑插入动画，开启后在编辑器中输入文字或移动光标会有很舒服的动画。</li><li><code>minimap.Enabled</code> - 禁用滚动条缩略图。</li><li><code>window.autoDetectColorScheme</code> - 开启根据系统主题自动切换浅色／深色主题。 <ul><li><code>workbench.preferredDarkColor</code> - 设置深色模式主题。</li><li><code>themeWorkbench.preferredLightColorTheme</code> - 设置浅色模式主题。</li></ul></li><li><code>markdown.experimental.validate.enabled</code> - 开启 Markdown 引用链接有效性校验，链接失效时有下划曲线显示。</li><li><code>markdown.experimental.editor.pasteLinks.enabled</code> &amp; <code>editor.experimental.pasteActions.enabled</code> - 开启这两个选项时，复制文件粘贴到 Markdown 自动插入为链接／图片语法格式。</li></ul><h3 id="macos-配置" tabindex="-1">macOS 配置 <a class="header-anchor" href="#macos-配置" aria-label="Permalink to &quot;macOS 配置&quot;">​</a></h3><ul><li><code>workbench.action.openEditorAtIndex</code> - 配置切换标签页快捷键，默认为 <code>control + 1/2/3/……</code>，这与系统自带的切换桌面快捷键冲突，默认 <code>⌘ + 1/2/3/……</code> 是窗口分栏（没什么用），建议把切换标签页快捷键改成 <code>⌘</code>，更符合使用习惯。</li></ul><h2 id="字体" tabindex="-1">字体 <a class="header-anchor" href="#字体" aria-label="Permalink to &quot;字体&quot;">​</a></h2><ul><li><code>editor.fontFamily</code> - 输入字体名称设置显示的字体系列，需要电脑已安装对应字体，推荐几款免费开源的字体： <ul><li><a href="https://github.com/lxgw/LxgwWenKai" target="_blank" rel="noreferrer">霞鹜文楷</a> - 非常漂亮的开源中文字体，有等宽和非等宽两种字体格式。</li><li><a href="https://github.com/tonsky/FiraCode" target="_blank" rel="noreferrer">Fira Code</a> - 优秀的连字英文字体，对程序员的使用场景做了非常多优化。</li></ul></li><li><code>editor.fontLigatures</code> - 设置是否开启字体的连字功能，<a href="https://zhuanlan.zhihu.com/p/28134371" target="_blank" rel="noreferrer">了解什么是连字</a>。</li></ul>',13),t=[c];function l(r,n,s,h,u,m){return a(),o("div",null,t)}const _=e(i,[["render",l]]);export{f as __pageData,_ as default};
