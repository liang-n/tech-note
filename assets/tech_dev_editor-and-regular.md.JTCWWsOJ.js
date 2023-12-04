import{_ as o,c as a,o as l,R as i}from"./chunks/framework.sjnMwbWx.js";const d="/assets/多行同步插入.osFgIED_.gif",c="/assets/多行同步追加.Y0lkvOoz.gif",t="/assets/选中相同字符并同步替换.Buq9OF4y.gif",e="/assets/regular.coHsVFfW.png",q=JSON.parse('{"title":"代码编辑器和正则表达式","description":"","frontmatter":{"tags":["note","正则表达式","vscode"]},"headers":[],"relativePath":"tech/dev/editor-and-regular.md","filePath":"tech/dev/editor-and-regular.md","lastUpdated":1701662868000}'),r={name:"tech/dev/editor-and-regular.md"},s=i('<h1 id="代码编辑器和正则表达式" tabindex="-1">代码编辑器和正则表达式 <a class="header-anchor" href="#代码编辑器和正则表达式" aria-label="Permalink to &quot;代码编辑器和正则表达式&quot;">​</a></h1><h2 id="代码编辑器" tabindex="-1">代码编辑器 <a class="header-anchor" href="#代码编辑器" aria-label="Permalink to &quot;代码编辑器&quot;">​</a></h2><p>下列方法基于 Visual Studio Code 编辑器，以 macOS 的快捷键作为示例。</p><p>通常情况下，在 Windows 中的对应快捷键如下：</p><ul><li>Command → Ctrl</li><li>Option → Alt</li></ul><h3 id="多行编辑" tabindex="-1">多行编辑 <a class="header-anchor" href="#多行编辑" aria-label="Permalink to &quot;多行编辑&quot;">​</a></h3><p><strong>同步插入</strong></p><p>按住 <code>Option</code> 用鼠标点击任意行可插入多个光标，此时输入内容，多个光标会同步插入。</p><p><img src="'+d+'" alt="多行同步插入"></p><p><strong>同步追加</strong></p><p>选中多行文本，按下 <code>Option + Shift + I</code>，此时选中行行尾出现多个光标，输入内容，多个光标会同步追加。</p><p><img src="'+c+'" alt="多行同步追加"></p><p><strong>选中相同文本并同步替换／插入</strong></p><p>选中文本，按下 <code>Command + D</code> 会自动选中下一个相同文本并插入一个光标，输入内容，多个光标会同步插入。</p><p>按下方向键可以取消选中，此时输入内容不会替换选中的文本。</p><p><img src="'+t+'" alt="选中相同文本并同步替换／插入"></p><h3 id="大小写转换" tabindex="-1">大小写转换 <a class="header-anchor" href="#大小写转换" aria-label="Permalink to &quot;大小写转换&quot;">​</a></h3><p>选中需要转换的单词，按下 <code>Command + Shift + P</code> 弹出输入框，输入 <code>transform</code> 查看对应命令。</p><p>如果全局语言为中文，也可以输入 <code>转换</code> 查看对应命令。</p><p><img src="'+e+'" alt="大小写转换"></p><h3 id="查找替换" tabindex="-1">查找替换 <a class="header-anchor" href="#查找替换" aria-label="Permalink to &quot;查找替换&quot;">​</a></h3><p>方法一：简单查找／替换</p><ul><li><code>Command + F</code> ：查找</li><li><code>Command + Option + F</code> ：查找并替换</li></ul><p>方法二：正则表达式查找／替换</p><p>点击查找输入框右侧的第三个按钮或快捷键 <code>Command + Option + R</code> 开启正则表达式匹配。</p><p><img src="'+e+'" alt="开启正则匹配"></p><h2 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to &quot;正则表达式&quot;">​</a></h2><blockquote><p><a href="https://deerchao.cn/tutorials/regex/regex.htm" target="_blank" rel="noreferrer">正则表达式 30 分钟入门教程</a><br><a href="https://regex101.com/" target="_blank" rel="noreferrer">正则表达式测试工具 regular expressions 101</a></p></blockquote><h3 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h3><ul><li>支持正则的编辑器内进行查找／替换</li><li>各种编程语言内置正则相关库</li></ul><h3 id="基本匹配" tabindex="-1">基本匹配 <a class="header-anchor" href="#基本匹配" aria-label="Permalink to &quot;基本匹配&quot;">​</a></h3><ul><li><code>^</code>: 匹配字符串的开头</li><li><code>$</code>: 匹配字符串的结尾</li><li><code>.</code>: 匹配任意字符</li><li><code>\\d</code>: 匹配数字</li><li><code>\\D</code>: 匹配非数字</li><li><code>\\s</code>: 匹配空白字符</li><li><code>\\S</code>: 匹配非空白字符</li><li><code>\\w</code>: 匹配单词字符</li><li><code>\\W</code>: 匹配非单词字符</li><li><code>\\n</code>: 匹配换行符</li><li><code>\\t</code>: 匹配制表符</li><li><code>\\r</code>: 匹配回车符</li></ul><h3 id="字符多选" tabindex="-1">字符多选 <a class="header-anchor" href="#字符多选" aria-label="Permalink to &quot;字符多选&quot;">​</a></h3><ul><li><code>[...]</code>: 匹配任意一个字符</li><li><code>[^...]</code>: 匹配任意一个不在 [...] 中的字符</li><li><code>[a-z]</code>: 匹配任意一个小写字母</li><li><code>[A-Z]</code>: 匹配任意一个大写字母</li><li><code>[0-9]</code>: 匹配任意一个数字</li><li><code>[a-zA-Z]</code>: 匹配任意一个字母</li><li><code>[a-zA-Z0-9]</code>: 匹配任意一个字母或数字</li><li><code>[a-zA-Z0-9_]</code>: 匹配任意一个字母或数字或下划线</li><li><code>[a-zA-Z0-9_\\s]</code>: 匹配任意一个字母或数字或下划线或空格</li><li><code>[a-zA-Z0-9_\\s\\u4e00-\\u9fa5]</code>: 匹配任意一个字母或数字或下划线或空格或中文</li><li><code>[a-zA-Z0-9_\\s\\u4e00-\\u9fa5\\.]</code>: 匹配任意一个字母或数字或下划线或空格或中文或点</li></ul><h3 id="重复选择" tabindex="-1">重复选择 <a class="header-anchor" href="#重复选择" aria-label="Permalink to &quot;重复选择&quot;">​</a></h3><ul><li><code>*</code>  重复零次或更多次</li><li><code>+</code>  重复一次或更多次</li><li><code>?</code>  重复零次或一次</li><li><code>{n}</code>  重复 n 次</li><li><code>{n,}</code>  重复 n 次或更多次</li><li><code>{n,m}</code>  重复 n 到 m 次</li><li><code>[a-zA-Z0-9_\\s\\u4e00-\\u9fa5\\.]+</code>：匹配任意一个字母或数字或下划线或空格或中文或点至少一个</li><li><code>[a-zA-Z0-9_\\s\\u4e00-\\u9fa5\\.]*</code>：匹配任意一个字母或数字或下划线或空格或中文或点至少 0 个</li><li><code>[a-zA-Z0-9_\\s\\u4e00-\\u9fa5\\.]?</code>：匹配任意一个字母或数字或下划线或空格或中文或点至少 1 个</li><li><code>[a-zA-Z0-9_\\s\\u4e00-\\u9fa5\\.]{2}</code>：匹配任意一个字母或数字或下划线或空格或中文或点至少 2 个</li><li><code>[a-zA-Z0-9_\\s\\u4e00-\\u9fa5\\.]{2,5}</code>：匹配任意一个字母或数字或下划线或空格或中文或点至少 2 个至 5 个</li></ul><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><ul><li>转义</li><li>分组</li><li>引用</li><li>断言</li><li>贪婪与懒惰</li></ul><h2 id="正则示例" tabindex="-1">正则示例 <a class="header-anchor" href="#正则示例" aria-label="Permalink to &quot;正则示例&quot;">​</a></h2><ul><li>匹配手机号：<code>^1\\d{10}$</code></li></ul>',40),n=[s];function h(u,p,m,_,f,b){return l(),a("div",null,n)}const k=o(r,[["render",h]]);export{q as __pageData,k as default};
