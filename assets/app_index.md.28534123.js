import{d as h,o as s,c as n,a as t,t as c,b as d,F as p,r as A,e as l,_ as g,f as m,u,g as k}from"./app.e5e2f42e.js";const z={class:"root"},f=["href"],w=["src","alt"],b={class:"info"},x=["href"],v={class:"intro"},D={class:"tags"},G={class:"tag"},E={class:"tag"},M={key:0},O={key:1},Z={class:"tag"},y=h({__name:"AppItem",props:{item:null},setup(e){return(o,r)=>(s(),n("div",null,[t("div",z,[t("a",{href:e.item.link,target:"_blank"},[t("img",{class:"icon",src:e.item.icon,alt:e.item.name},null,8,w)],8,f),t("div",b,[t("span",null,c(e.item.updated),1),d(" | "),t("span",null,c(e.item.category),1)]),t("a",{class:"name",href:e.item.link,target:"_blank"},c(e.item.name),9,x),t("div",v,c(e.item.intro),1),t("div",D,[(s(!0),n(p,null,A(e.item.chip,(a,i)=>(s(),n("div",G,c(a),1))),256)),(s(!0),n(p,null,A({charge:e.item.charge,size:e.item.size},(a,i)=>(s(),n("div",E,[i==="size"?(s(),n("div",M,c(a),1)):l("",!0),i==="charge"?(s(),n("div",O,c(a),1)):l("",!0)]))),256)),(s(!0),n(p,null,A(e.item.tags,(a,i)=>(s(),n("div",Z,c(a),1))),256))])])]))}});const N=g(y,[["__scopeId","data-v-c47cccc2"]]),B={class:"root"},W={class:"title"},C={class:"tip"},I={class:"content"},J=h({__name:"appStore",props:{pageInfo:null,apps:null},setup(e){return(o,r)=>(s(),n("div",null,[t("div",B,[t("div",W,[t("h1",null,c(e.pageInfo.title),1),t("div",C,c(e.pageInfo.titleTemplate),1)]),t("div",I,[(s(!0),n(p,null,A(e.apps,a=>(s(),m(N,{item:a},null,8,["item"]))),256))])])]))}});const S=g(J,[["__scopeId","data-v-93ff0451"]]),V="data:image/webp;base64,UklGRroPAABXRUJQVlA4WAoAAAAQAAAA/wAA/wAAQUxQSHUHAAABoJxse+XI8kopKIPKwWCYVa8qB9MBdG97X4mYcgSTQG3ncmo2BmPwdAp2AobiE9x+qfT/ks7cIwKiJKthG5CeEELyM5JTp+0XbJqv//yXPz9Fab3b7V6eX5L1+c3h29vr26tEfdp2WqmCxcY+vwzH4/F0Or0n6en7bGbMuMT1ernaHr9e5nk+HOzUTpc4pOzYcLTpNusUd2PuAYeHWSQpLC7L/W5714sNfSrNoXcv9rCZ1Qov0zYunBvwMB6XNInwi/YS+fl6v1yKciht59t1M9SHl2K/txipGm7K/TofnrpCIp6PJ+vJUd3BMLExwaGud7XhnaqGZeCdh8LUXkl8gNoNp/eMT0Rp4vbZMyQ79csxnwU7x5SnzrjOr51kb+4PxDJVsFM/O2++lr4aIsRWcZERZeOuh1elJNa8XizECGJpzcKFecgz5lctcA3/ajlHQi11SWlLKO3WyCvOXbbjcpBVdoP1Zi4BLDlnSFNYUwmyX04cz3/hrXsNFWTql3dTY33YCYIuVGWBLTJc6vkTz12v+TxZUnlK1Psso+yO79LElCPmLuINVEdXF5xHqaUTESRHSvwZLCBG7Y6GS8BZhcU88fskCFZmOIGfML0etIgVaz6MmXWKYmwNqiEL7xT9fCqxlfgFhHWc83ZRjQ44G7VzL9z16SJ74Ry245xQRIMYASR//bgfNN87RwVaEezxmDvFtfJ3wwtyD1n2XYINVmzR9RCk0MgU5j0AfMG7T8xiLPKkOK8PKQ54qY6QscF8v24REIJYEmNUSGZRBn4vRpemg5yb4nWZfttm+AV0EmPZIAgQLBCnGNkF9q/fmkWO/LLqMaEJQN6P4+jNeAM8IwIEshfCKl6IMmIZULvvkgACxrhzcH1lGeEWH6n8wZ0G2k9vi09L8r7cXxVLpBSAgI8QtiFQBO4Hlb0oPRgBsCIVoLOKTAeJf2JpM42LTszkGjKylWPiB3ZxRkX0PjPIjlsMTF103jLAp7YAx4vHjl0qA2AAxS+16c5PHJ3WuFVpYOoD+aU50G8YhL9WB8oLaT2YBsDM7v4BhNaENBxgHmZhcrdEHzzQEllM++Hy9D9gWn6Z2yKth8fj0h43Ygzg++HHGSS5WyAJqQZtxWmF6AOTu35GBMg8G8Q5zk1wg0otDBUXy3XIhcLauxHOpRgk0AGxEsmOpMX13lm2gEAid+TRIumksUBoUAwqC0ggASqfDmkORG7DuFgvoFJJAJGmNIydKAP6c4baHooaxaaKgFjOEv0wUVoBGgQcko6tR6VqACJjVAppCqCs6A+gMMXRCyDtGFcF4mcm7axQbNZ8FNNxiO1FyLJGEOYHq1zwMhjjAUNvEc+9WlGFS5jLxOMVIYDstxL4V9wPHKJkQL5/ws7pQX5mKNENT72jkStBIFdyfNcQBk0wwpDiHOXD5RZQItlYl0CKQCqJgDpBB2nsKV6IkgOTW0AlMhZJ88oxx3X1diGNQUg5xhd+z7IoE8Kbz/IJEbcSGINAE+GGhPsguZQPsRwg0gs5hTSIfKc4sHK/kLSHcd4oE2KZXWFnIoTVPBFhhoSTiGLdkSRgZbZBJC85g3HWOZ9pGAdFCugcrNiF1anNkG947NckoVxgek9ChOwa6sj65lfm9460ly4kZRg5U8jqKNVdld/YssB/zFCZygM7EZ2KlEeZ0Pi/O9emFgnmhwJgfvABZbrR/v87av+0+kBpYvDDD7WRX3CA5oNpv/snMMw//WH+tQzf/sRwf/3BdP/2B9844OtfZqD/68+0bX7Z/mhC/9ufu2+/Oz9sf/yh+Qt1U1vkY37YdF8bIx2DvDVGtGq8DDo/6LbINwZRat+Wgb3KD+rDuSGyfOxZZGzLWhzSlIFldJH5J+5bE8nQ9F8b0t+zVNU1ZGDqFEvp2jGwDJpHVD+1Qs5uVZayHZsxe8skG/12Y7vT2rRuNlcztaGd+g2bdG+3RnznVGxF91MbWr1hbAbUX25DpzaMpQXNtGettrnV3ke0jIug7tWMvVc5h/fnupfz3q7CXcaqu27ulZNbdD+i4kFTb1v+Um/XAuvbBMq8IENBJVY4D55PQLMdb6h2UEwYX79tQW1hsZUKErDAVFtzsfbkgqSIXcCWuhqw1dlyjK6uZaGqNDOrsZRvd8QKYibs3XUq6FysF7cxsIWZ/Xi2BZVrnIXz2GtrSyzDGU4rVhbjvOfBr/LKRm/3/nWBOq3jWW6NbXRU1hXHs/VkC1/Ki/fC9p3eiFWlfKcfANTCWOx8Z5Fe0aWzS968uXBo49YmJYca1zPGxZEXoFkEJEIiAYWAtVWE1uC80tU5rRFmOzIdQS88l/4Blf6KQTwAt2mMeIVPGqZb0lySR2KG5Knb3yAutApR7YzRhmOF5D89BpxO3M7j0FsrWsVfzoafbzeD4r9g3c7TsCesogy9tY7RDblnsLjlvM9ZNzZ6nmCdwgzn6OyQDR2n6VyaTtM02lg71ulYfHHT3dB22/f9vjjtt1s7luAp9DJFqnJzmcdEfjNRtrfO78V581LiNilMVjDcNF//+S+/lcoGAFZQOCAeCAAAkDcAnQEqAAEAAT6RQp1LpacjJSWR2UjgEgljbtUXTuFFcR2iF42I6/1/Ned1zkYC3OnnZ9Hn519gD9Neol5nPNu6HTqg/QA6XTIVIfZhvCDTNs5egH0mfQi/Z0gBPySCUdBQR7qu7XfPxG378kclQyQpGyzGUqTe47TQSugUwT/dM9Bks6+bW+lt8kNb+R4Ls5djN8y5xZQZehtHufosdvCXszjS9p/6Q/X8ScXn+YAXLeAyiAW8fFDjkevjZD/LAVEzIxhclOT1ooMtQ+bPK7LAyG7uxJjDBqy9tdJzSkdBf9drjPTQWkEkPNY/4kSuBSPWv2Rn+uM7fOdGJTOH73vkkq0pA+PNO4qY6KqV38eWhNxL7JvFAyL/wTQK9gOMf+uE1KetH5lisi0nO/IKfPiqK74VdQqOnMtT5BuwJwEZwmIwdebMS7LJYQFj/xzbGVRJJgTUktCh0R3hMHojSRh6rzi04eLSZyDtZrtiABCS511XDvrYg/btEHYVzIXLmZ9QWoj9g3PfqRCcp+spz4CAvypDR8xlqsDvBXvay2W088cSfd3gM3G2TyNglzpMXN0U/2M/xDtZT/8Sbne/wNsz3R0AAP7tB38qMYRb/qXjEFmlzmYlAAAERjqe/Ef6NBGWZ75M99OrnxeG/XS6TiqEe+kMfNlV9zLAmf2prJVdDC/dr8fuuRps7EaoHv821HuZVopOIr3odCdCXUHG4wrRcO6V/g/03GVUViq2KFNTZ+K5Iegkb1/hTfUcAtaMqALxPAaHJXkX8H/FvFwZj0EOGPQzYJJILJs38QZpK12AKFejl+4pNf5cxymz4aX0bp53J479Par/PNzPnO1UAD4Tbgf3vvIpfpbyLVNiaTS5/zP9xgR4l4tV6uLf6S3KA+3ftSNosohx/8NaN4gJswQIPXcEV+XANpgSUxp24CMgDDTEzXbh/b5UNVjMBTKQuYaUG7xOIZBP1mVq0RiGDROv4w5hzqgYegiTTEZD5hOEZfR5CthJ0yZY+QWW/f41x8O2iV+OPimv9BSc5oYdQDZAh3/mZ+1sso0I3Ag4zAKERU8pHGGIEi3Stg78ZCAqm7fKmfb4NVyoOsMGuftMDnaj2dK3Gja7DIRbhEw1hDGeQWmjjuPC0UpC6GOE7DrLDFEJg4hrpFYXJxrXfd0XHUT1NDD573TVm97wEH90gw9z9c8G+uAWZyzhxSuoFiwpl1OwsnCkbNJ14xxkKRwxDOAK1mzqV9ckvP/xzXD87wD0kYDXWwkAuuIJ1oAXOvr6fISZXla/ujTQqgPxxU1k8m6iQjIG0HW16ZZH9a/dFvy/xNzhukkr39wrhnHy6s5OMyiXOIGNarPBgG1OnGz/UbhlX2xJ/kKr8GeYz/Z+NDCUTrnIKWHzv+rSXEVfz/1/4QYd7/Zp7ybet+5uAoDWquLmWoZDN0pWsGbMVWjEE2pV3hJb9c9MZddjQZ1kLO6n7Pq0CmrhqSxvQXAaIiLJ6UA8mJALRUSfBGHoDu0ym+2oNWqaUPZQ+cCjpoLLTBYKiyN1CwP8iWkvHwRPt3W1iAFDVQ7FMWDSZ67FiBraeuUbO8hnGuVyLg5MgVssXR+lvLP4tRiz5s6Qn4U9q17q/E7zCT+gqqqw47cyJzbjPkOrIDEMC4LkqK6hkBWysJJzimI3ZU0k4FWEbxiii3K8VjAD1N0OsdRWnjepfOv1tiJEanVhEdggp1ek+OyLl2cuUvK8JO7mYxmEGAzpQDsvBCbxKEiHS6dH+3cwJxZtxPVzdSZJdbDJl4FRvBJ4W8OiFeDik92jLmv9uHnHA5R/NhVsDgCe0hnjn4BXIuzjZpxAyhLNgMHS04lCZo25mzLPby3XXUdxzvnXxqUCfER21hEwusAhqP1bWST4AC5lRqsSWr7toCzMJKyJLaD/mCXNB+I5fe4bWkcW9cF3YOYWM5uWNM73JSm4fy5YpnLSgD/btDvIPOGDmczHpozekTvmhUVAhKzsYxsl/NntkbisIaG2rjIV0BMJjMh2y6jjpg+4ucz4EaasR3ZpWh1NJ4cQJAQdpYgGme4nyOs2vjFtjJWgTcmOHQCDglWAOHxENXKae/ol7IdWV6bfJt/5Buup8N1UWrSN2A43WY2DqmqaFXICfoQ+pVdw41rZtnh6lqP9Gz4pyiMkTjiNUduZb4D9i8ToGboZH/N6RxdlH9ao7U/b1Pl84yn1IyLRjVFRCLX88BmfExXthIqasGDgyv9B/awnFgnt05EO+q6nWpPwAMjwad7KBHEJYgkd0q+alWYjUluCYJJPbbZrAbVWvV9E5eusaAdilKi/j+dJ9Lixxv6tEEwQMvAHxKXtNU19rAQMrE2mbfW4imEfDghkZ9mvxLFAhkUKPPSxvDLpj1lICmvgOM0N5xti1dATqlG6iu5zPuwwCpnmUD3gFRMWKcDsYhQkvBPZlpnbv06BVeyCS6CUVC3j2OLQcFfTDtw7LnLeqLAjue0dR/fPfZ1fxKhIcaRxd9z6tk5Rq4Qxiki0ZrKpxgL80YkioeSkzCh5M/tnewNIEDsGYgoBhxYhXmOuZPCxP1OHPIOIeNSKVbHDzVs4l2Z3nJIE7pgfeAMfwJuOEh0a9p7NALxHIEj0dI0bS0R38Zx4NjQbYDOP43AysuATDMAojczwb5vKIl7TIXOTwwj1aTdj1S2vLOtG++GfO65QuVdT3AGiIejwsgLtyScrpNYUahB5NrwI93dCEyoyWofykxGq6qf/m4/4Hf/5o0npYaAAAAAAAAAAAAA=",R="/tech-note/assets/hapigo.ac47eb57.webp",T="/tech-note/assets/tuya.f86e2ec8.webp",P="/tech-note/assets/hyperswitch.c9aa5d64.webp",Q="/tech-note/assets/karabiner-elements.e19c1429.webp",q="/tech-note/assets/maccopier.03e43da5.webp",X="data:image/webp;base64,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",H="/tech-note/assets/openemu.ab5da847.webp",K="/tech-note/assets/shottr.ec3b8b93.webp",L="/tech-note/assets/usbfistman.56e7c8d7.webp",j="/tech-note/assets/switchhosts.383e70bb.webp",F="/tech-note/assets/pixelmator-pro.1e047e6e.webp",U="/tech-note/assets/keka.2e3baaa1.webp",Y="/tech-note/assets/snippets-lab.e039ebff.webp",te=JSON.parse('{"title":"INX \u5E94\u7528\u5546\u5E97","titleTemplate":"\u81F4\u529B\u4E8E\u63A8\u5E7F\u5404\u7C7B\u9AD8\u54C1\u8D28\u8F6F\u4EF6\u7684\u5728\u7EBF\u5E94\u7528\u5546\u5E97","description":"\u81F4\u529B\u4E8E\u63A8\u5E7F\u5404\u7C7B\u9AD8\u54C1\u8D28\u8F6F\u4EF6\u7684\u5728\u7EBF\u5E94\u7528\u5546\u5E97","frontmatter":{"layout":"page","title":"INX \u5E94\u7528\u5546\u5E97","titleTemplate":"\u81F4\u529B\u4E8E\u63A8\u5E7F\u5404\u7C7B\u9AD8\u54C1\u8D28\u8F6F\u4EF6\u7684\u5728\u7EBF\u5E94\u7528\u5546\u5E97","description":"\u81F4\u529B\u4E8E\u63A8\u5E7F\u5404\u7C7B\u9AD8\u54C1\u8D28\u8F6F\u4EF6\u7684\u5728\u7EBF\u5E94\u7528\u5546\u5E97"},"headers":[],"relativePath":"app/index.md","lastUpdated":1670817628000}'),_={name:"app/index.md"},se=Object.assign(_,{setup(e){const{frontmatter:o}=u(),r={title:o.value.title,titleTemplate:o.value.description},a=[{name:"Rectangle Pro",intro:"\u4F7F\u7528\u952E\u76D8\u5FEB\u6377\u952E\u6765\u79FB\u52A8/\u8C03\u6574\u7A97\u53E3\u5927\u5C0F",link:"https://rectangleapp.com/pro",icon:V,category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-11",charge:"\u514D\u8D3910\u5929+\u4E70\u65AD",chip:["AppleChip"],size:"14.7MB",tags:["\u7A97\u53E3\u8C03\u6574"]},{name:"HapiGo",intro:"\u591A\u5408\u4E00\u542F\u52A8\u5668\uFF0C\u5373\u65F6\u641C\u7D22\u3001\u5FEB\u901F\u9884\u89C8\u53CA\u76F4\u63A5\u542F\u52A8",link:"https://hapigo.com/",icon:R,category:"\u6548\u7387\u5DE5\u5177",updated:"2022-12-11",charge:"\u514D\u8D39+\u8BA2\u9605",size:"31.8MB",chip:["AppleChip"],tags:["\u542F\u52A8\u5668","\u526A\u8D34\u677F","\u7FFB\u8BD1"]},{name:"HyperSwitch",intro:"\u8FD8\u539F Windows \u7A97\u53E3\u5207\u6362",link:"https://bahoom.com/hyperswitch",icon:P,category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-11",charge:"\u514D\u8D39",size:"2.2\u2006MB",chip:["AppleChip"],tags:["\u7A97\u53E3\u5207\u6362"]},{name:"Karabiner Elements",intro:"\u952E\u76D8/\u9F20\u6807\u6539\u952E\u5DE5\u5177",link:"https://karabiner-elements.pqrs.org/",icon:Q,category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-11",charge:"\u514D\u8D39",size:"20.7\u2006MB",chip:["AppleChip"],tags:["\u6539\u952E"]},{name:"MacCopier",intro:"\u81EA\u52A8\u590D\u5236\u77ED\u4FE1\u9A8C\u8BC1\u7801\u5230\u526A\u8D34\u677F",link:"https://github.com/DreamSaddle/MacCopier",icon:q,category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-11",charge:"\u514D\u8D39\u5F00\u6E90",size:"20.7\u2006MB",chip:["AppleChip"],tags:["\u6539\u952E"]},{name:"\u56FE\u538B",intro:"\u7B80\u5355\u6613\u7528\u7684\u56FE\u7247\u538B\u7F29\u8F6F\u4EF6",link:"https://tuya.xinxiao.tech/",icon:T,category:"\u6548\u7387\u5DE5\u5177",updated:"2022-12-11",charge:"\u514D\u8D39\u5F00\u6E90",size:"75.1MB",chip:["AppleChip","Windows"],tags:["\u56FE\u7247\u538B\u7F29"]},{name:"Android \u6587\u4EF6\u4F20\u8F93",intro:"\u5728 Mac \u7535\u8111\u548C Android \u8BBE\u5907\u4E4B\u95F4\u6D4F\u89C8\u548C\u4F20\u8F93\u6587\u4EF6",link:"https://tuya.xinxiao.tech/",icon:L,category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-11",charge:"\u514D\u8D39",size:"3.7\u2006MB",chip:["AppleChip"],tags:["\u6587\u4EF6\u4F20\u8F93"]},{name:"MenubarX",intro:"Mac \u83DC\u5355\u680F\u6D4F\u89C8\u5668\uFF0C\u53EF\u4EE5\u5728\u83DC\u5355\u680F\u56FA\u5B9A\u4EFB\u4F55\u7F51\u9875",link:"https://menubarx.app/",icon:X,category:"\u6548\u7387\u5DE5\u5177",updated:"2022-12-11",charge:"\u514D\u8D39+\u4E70\u65AD",size:"8\u2006MB",chip:["AppleChip"],tags:["\u6D4F\u89C8\u5668","\u83DC\u5355\u680F\u589E\u5F3A"]},{name:"OpenEmu",intro:"\u591A\u5408\u4E00\u638C\u673A/\u8857\u673A\u6A21\u62DF\u5668\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E GBA/NDS/FC/PSP/\u2026\u2026",link:"https://openemu.org/",icon:H,category:"\u6E38\u620F\u5DE5\u5177",updated:"2022-12-11",charge:"\u514D\u8D39\u5F00\u6E90",size:"32MB",chip:["AppleChip"],tags:["\u6E38\u620F\u673A\u6A21\u62DF\u5668"]},{name:"Shottr",intro:"\u5C4F\u5E55\u622A\u56FE\u5DE5\u5177\uFF0C\u652F\u6301\u53D6\u8272/\u8D34\u56FE/\u6807\u6CE8/\u6D4B\u91CF/OCR/\u65E0\u75D5\u6253\u7801/\u6EDA\u52A8\u622A\u56FE\u2026\u2026",link:"https://shottr.cc/",icon:K,category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-11",charge:"\u514D\u8D39",size:"1.3MB",chip:["AppleChip"],tags:["\u5C4F\u5E55\u622A\u56FE","\u56FE\u7247\u6253\u7801","OCR"]},{name:"SwitchHosts",intro:"\u65B9\u4FBF\u5FEB\u6377\u7684\u7BA1\u7406/\u5207\u6362 Host \u6587\u4EF6",link:"https://swh.app/",icon:j,category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-12",charge:"\u514D\u8D39\u5F00\u6E90",size:"81.8MB",chip:["AppleChip","Windows","Linux"],tags:["\u79D1\u5B66\u4E0A\u7F51"]},{name:"Pixelmator Pro",intro:"\u7B80\u5355\u6613\u7528\u7684\u4E13\u4E1A\u56FE\u50CF\u7F16\u8F91\u5DE5\u5177",link:"https://www.pixelmator.com/pro/",icon:F,category:"\u56FE\u50CF\u7F16\u8F91",updated:"2022-12-12",charge:"\u514D\u8D397\u5929+\u4E70\u65AD",size:"81.8MB",chip:["AppleChip"],tags:[]},{name:"Keka",intro:"\u5C0F\u5DE7\u8F7B\u4FBF\u7684\u6587\u4EF6\u538B\u7F29\u5DE5\u5177",link:"http://www.keka.io/zh-cn/",icon:U,category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-12",charge:"\u81EA\u613F\u4ED8\u8D39",size:"36.4MB",chip:["AppleChip"],tags:["\u6587\u4EF6\u538B\u7F29"]},{name:"SnippetsLab",intro:"\u4EE3\u7801\u7247\u6BB5 + Markdown \u7BA1\u7406\u5DE5\u5177",link:"https://www.renfei.org/snippets-lab/",icon:Y,category:"\u6548\u7387\u5DE5\u5177",updated:"2022-12-12",charge:"\u4E70\u65AD",size:"50.5MB",chip:["AppleChip"],tags:["\u4EE3\u7801\u7247\u6BB5","Markdown"]}];return(i,$)=>(s(),n("div",null,[k(S,{pageInfo:r,apps:a})]))}});export{te as __pageData,se as default};
