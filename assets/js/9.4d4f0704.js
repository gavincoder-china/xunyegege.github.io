(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{270:function(s,a,e){"use strict";e.r(a);var t=e(38),n=Object(t.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"分布式微服务专栏002-springboot的配置读取与多环境配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式微服务专栏002-springboot的配置读取与多环境配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 分布式微服务专栏002(springboot的配置读取与多环境配置)")]),s._v(" "),e("h3",{attrs:{id:"debug细节-："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debug细节-：","aria-hidden":"true"}},[s._v("#")]),s._v(" DEBUG细节 ：")]),s._v(" "),e("p",[s._v("不要把断点打在方法上")]),s._v(" "),e("h3",{attrs:{id:"从配置文件中获取属性的值："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从配置文件中获取属性的值：","aria-hidden":"true"}},[s._v("#")]),s._v(" 从配置文件中获取属性的值：")]),s._v(" "),e("p",[s._v("注意设置idea的编码格式")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('语法：@Value("${}")\n作用：获取配置文件中的属性的值\n缺点：获取多个需要频繁的取值\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("新知识点：")]),s._v(" "),e("p",[s._v("vo包的概念表示程序返回给前端页面的数据")]),s._v(" "),e("p",[s._v("dto包的概念表示程序给数据库的数据")]),s._v(" "),e("p",[s._v("谷歌插件JSON-handle用于更加直观的查看json字符串")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@ConfigurationProperties(prefix = "")\n\n//字符串写法\nname: 云层\nage: 18\nid: 007\n//list写法\nlist:\n - 王一鸣\n - 17\n //map写法\nmap: {k1 : v1,k2 : v2}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h3",{attrs:{id:"多环境配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多环境配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 多环境配置")]),s._v(" "),e("p",[s._v("为什么配置多环境：")]),s._v(" "),e("blockquote",[e("p",[s._v("解耦了各种环境的配置")])]),s._v(" "),e("p",[s._v("开发环境（dev）")]),s._v(" "),e("p",[s._v("测试环境( test)")]),s._v(" "),e("p",[s._v("生产环境(prd)")]),s._v(" "),e("p",[s._v("配置文件规范写法：application-dev.properties")]),s._v(" "),e("p",[s._v("指定读取配置文件：spring.profiles.active=配置环境名（-符号后面的）")]),s._v(" "),e("h2",{attrs:{id:"面试默写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试默写","aria-hidden":"true"}},[s._v("#")]),s._v(" 面试默写")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("使用@value注解的语法")]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${user.name}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("使用@ConfigurationProperties的语法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@ConfigurationProperties(perfix = "user")\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("使用@ConfigurationProperties扫描yml配置文件中读取list与map时候，properties中分别应该怎么写？")]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[s._v("student"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" gavin\n  age"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n  gender"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" man\n  list"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" coder\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" age"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" fullstack\n  map"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("薪资"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" many"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("address"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 杭州"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nteacher"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" betty\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[s._v("student"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gavin\nstudent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\nstudent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("map"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gavin\nstudent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("map"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n\n\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("@value与@configurationProperties注解分别在什么时候用")]),s._v(" "),e("blockquote",[e("p",[s._v("当我们从配置文件中取出一两条数据的时候,选用@value,因为方便快捷")]),s._v(" "),e("p",[s._v("当读取配合多的时候,如给一个对象配置赋值,我们需要@configurationProperties")])])]),s._v(" "),e("li",[e("p",[s._v("多配置文件的写法")]),s._v(" "),e("blockquote",[e("p",[s._v("application-dev.properties")]),s._v(" "),e("p",[s._v("application-test.properties")]),s._v(" "),e("p",[s._v("application-prod.properties")]),s._v(" "),e("p",[s._v("后缀可替换为yml")])])]),s._v(" "),e("li",[e("p",[s._v("多环境的切换配置")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[s._v("spring"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("profiles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("active"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])]),s._v(" "),e("h3",{attrs:{id:"课外作业："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#课外作业：","aria-hidden":"true"}},[s._v("#")]),s._v(" 课外作业：")]),s._v(" "),e("p",[s._v('1 String s = "xx" 在内存中所在位置？')]),s._v(" "),e("blockquote",[e("p",[s._v("JVM对于"),e("code",[s._v("String")]),s._v("的存储有一点特殊的地方在于有一块"),e("code",[s._v("String常量池")]),s._v("。\n这个常量池里面存着对String对象的引用。")]),s._v(" "),e("p",[s._v("比如，"),e("code",[s._v('String s = "abc"')]),s._v("会先去"),e("code",[s._v("String常量池")]),s._v("中查找有没有已经存在的引用，如果没有，声明的abc会直接生成一个String对象，并且会在"),e("code",[s._v("String常量池")]),s._v("中存入一个引用指向这个String对象。")]),s._v(" "),e("p",[s._v("之后直接声明的字符串同样也会遵循上面的步骤，所以第二次"),e("code",[s._v('String s2 = "abc"')]),s._v("从"),e("code",[s._v("String常量池")]),s._v("中找到了一个引用指向第一次声明的字符串对象。")]),s._v(" "),e("p",[s._v("而"),e("code",[s._v('new String("abc")')]),s._v("这样会直接在堆中创建新的对象，不会进入"),e("code",[s._v("String常量池")]),s._v("。要把这样的对象引用放入常量池中就涉及另一个String类的方法"),e("code",[s._v("intern()")]),s._v("，这个方法就是返回一个String对象的常量池引用。如果这个对象不在常量池中，就会把这个String对象放入常量池中并返回对应的对象引用。")])]),s._v(" "),e("p",[s._v("2 \"\" 与''在java中的区别？")]),s._v(" "),e("blockquote",[e("p",[s._v('""是字符串')]),s._v(" "),e("p",[s._v("''是字符char")])]),s._v(" "),e("p",[s._v("3 在泛型中？与T的区别？")]),s._v(" "),e("blockquote",[e("p",[s._v("通配符(?)\n上面有泛型的定义和赋值；当在赋值的时候，上面一节说赋值的都是为具体类型，当赋值的类型不确定的时候，我们用通配符(?)代替了")]),s._v(" "),e("p",[s._v("为了解决类型被限制死了不能动态根据实例来确定的缺点，引入了“通配符泛型” ，        使用通配泛型格式为<? extends Collection>，“？”代表未知类型，这个类型是实现Collection接口。")]),s._v(" "),e("p",[s._v("注意：")]),s._v(" "),e("p",[s._v("如果只指定了<?>，而没有extends，则默认是允许Object及其下的任何Java类了。也就是任意类。")]),s._v(" "),e("p",[s._v("通配符泛型不单可以向下限制，如<? extends Collection>，还可以向上限制，如<? super Double>，表示类型只能接受Double及其上层父类类型，如Number、Object类型的实例。")]),s._v(" "),e("p",[s._v("泛型类定义可以有多个泛型参数，中间用逗号隔开，还可以定义泛型接口，泛型方法。这些都与泛型类中泛型的使用规则类似。")])]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("限制泛型")]),s._v("  T")]),s._v(" "),e("p",[s._v("由于没有限制class GenericsFoo类型持有者T的范围，实际上这里的限定类型相当于Object，这和“Object泛型”实质是一样的。限制比如我们要限制T为集合接口类型。只需要这么做：\nclass GenericsFoo，这样类中的泛型T只能是Collection接口的实现类，传入非Collection接口编译会出错。")]),s._v(" "),e("p",[e("strong",[s._v("多接口限制")])]),s._v(" "),e("p",[s._v("虽然Java泛型简单的用 extends 统一的表示了原有的 extends 和 implements 的概念，但仍要遵循应用的体系，Java 只能继承一个类，但可以实现多个接口，所以你的某个类型需要用 extends 限定，且有多种类型的时候，只能存在一个是类，并且类写在第一位，接口列在后面，也就是：")]),s._v(" "),e("p",[s._v("（泛型方法的类型限定）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<T extends SomeClass & interface1 & interface2 & interface3>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（泛型类中类型参数的限制）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("public class Demo<T extends Comparable & Serializable> { \n  // T类型就可以用Comparable声明的方法和Seriablizable所拥有的特性了 \n} \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[s._v("4 <?extends T>是什么意思？")]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("\n<? extends T>：是指 **“上界通配符（Upper Bounds Wildcards）”**\n")]),s._v(" "),e("li",[s._v("\n<? super T>：是指 **“下界通配符（Lower Bounds Wildcards）”**\n")])])]),s._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly90dmExLnNpbmFpbWcuY24vbGFyZ2UvMDA2eThtTjZneTFnNzk0dmN5MDJtajMxN3MwbDhkbHouanBn?x-oss-process=image/format,png",alt:"img"}})])]),s._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly90dmExLnNpbmFpbWcuY24vbGFyZ2UvMDA2eThtTjZneTFnNzk0dm40d2hzajMxN28wbWc0M2cuanBn?x-oss-process=image/format,png",alt:"img"}})])]),s._v(" "),e("blockquote",[e("h4",{attrs:{id:"pecs-producer-extends-consumer-super"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pecs-producer-extends-consumer-super","aria-hidden":"true"}},[s._v("#")]),s._v(" PECS(Producer Extends Consumer Super)")]),s._v(" "),e("h5",{attrs:{id:"_3-1-producer-extends-你写的类是主要作为生产者向外提供数据，那么就用-extends"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-producer-extends-你写的类是主要作为生产者向外提供数据，那么就用-extends","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1 "),e("strong",[s._v("Producer Extends")]),s._v(" 你写的类是主要作为生产者向外提供数据，那么就用 "),e("code",[s._v("extends")])]),s._v(" "),e("h5",{attrs:{id:"_3-2-consumer-super-你写的类是主要作为消费者，需要吃进数据，那么就用-super"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-consumer-super-你写的类是主要作为消费者，需要吃进数据，那么就用-super","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2 "),e("strong",[s._v("Consumer Super")]),s._v(" 你写的类是主要作为消费者，需要吃进数据，那么就用 "),e("code",[s._v("super")])])])])},[],!1,null,null,null);a.default=n.exports}}]);