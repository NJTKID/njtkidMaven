<!DOCTYPE html>
<html>
<head data-suburl="">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	
		<meta name="author" content="coding-144" />
		<meta name="description" content="coding-144 - 毕设项目 SSM到Spring Boot 从零开发校园商铺平台" />
		<meta name="keywords" content="慕课网Git,代码托管,Git,Git代码托管,实战课源码">
	
	<meta name="referrer" content="no-referrer-when-downgrade" />
	<meta name="_csrf" content="H4Bu4-Hhbd0hK6zKbhAvCmbHlLg6MTYxMzcyMzIyOTUyNzczMTU0Mg==" />
	<meta name="_suburl" content="" />
	
	
	
		<meta property="og:url" content="https://git.imooc.com/coding-144/coding-144" />
		<meta property="og:type" content="object" />
		<meta property="og:title" content="coding-144/coding-144">
		<meta property="og:description" content="毕设项目 SSM到Spring Boot 从零开发校园商铺平台">
		<meta property="og:image" content="https://git.imooc.com/img/avatar_default.png" />
	
	
	<link rel="shortcut icon" href="/img/favicon.ico" />

	<script src="/js/jquery-1.11.3.min.js"></script>
	<script src="/js/libs/jquery.are-you-sure.js"></script>
	<link rel="stylesheet" href="/assets/font-awesome-4.6.3/css/font-awesome.min.css">
	<link rel="stylesheet" href="/assets/font-imooc/css/font-less.css">
	<link rel="stylesheet" href="/assets/font-imv2/css/style.css">
	<link rel="stylesheet" href="/assets/octicons-4.3.0/octicons.min.css">
	<link rel="stylesheet" href="/js/libs/moco/v1.0/dist/css/moco.min.css?v=1">
	
	

	

	
	<link rel="stylesheet" href="/css/semantic-2.2.13.min.css">
	<link rel="stylesheet" href="/css/gogs.css?v=ffd58de614cbac9361a58ea879831fad">
	<link rel="stylesheet" href="/css/profie.css?v=ffd58de614cbac9361a58ea879831fad">
	
	<script src="/js/semantic-2.2.13.min.js"></script>
	<script src="/js/gogs.js?v=ffd58de614cbac9361a58ea879831fad1"></script>
	<script src="/js/libs/moco/v1.0/dist/js/moco.min.js?v=1"></script>

	
	<script type = "text/javascript">
	(function() {
		window.zhuge = window.zhuge || [];
		window.zhuge.methods = "_init identify track getDid getSid getKey setSuperProperty setUserProperties setWxProperties setPlatform".split(" ");
		window.zhuge.factory = function(b) {
		return function() {
			var a = Array.prototype.slice.call(arguments);
			a.unshift(b);
			window.zhuge.push(a);
			return window.zhuge;
		}
		};
		for (var i = 0; i < window.zhuge.methods.length; i++) {
		var key = window.zhuge.methods[i];
		window.zhuge[key] = window.zhuge.factory(key);
		}
		window.zhuge.load = function(b, x) {
		if (!document.getElementById("zhuge-js")) {
			var a = document.createElement("script");
			var verDate = new Date();
			var verStr = verDate.getFullYear().toString() + verDate.getMonth().toString() + verDate.getDate().toString();

			a.type = "text/javascript";
			a.id = "zhuge-js";
			a.async = !0;
			a.src = (location.protocol == 'http:' ? "http://sdk.zhugeio.com/zhuge.min.js?v=": 'https://zgsdk.zhugeio.com/zhuge.min.js?v=') + verStr;
			a.onerror = function() {
			window.zhuge.identify = window.zhuge.track = function(ename, props, callback) {
				if(callback && Object.prototype.toString.call(callback) === '[object Function]') {
				callback();
				} else if (Object.prototype.toString.call(props) === '[object Function]') {
				props();
				}
			};
			};
			var c = document.getElementsByTagName("script")[0];
			c.parentNode.insertBefore(a, c);

			window.zhuge._init(b, x)
		}
		};
			window.zhuge.load('f375fe2f71e542a4b890d9a620f9fb32', {
				superProperty: {
					'应用名称': '诸葛io'
				},
				debug: false,
				adTrack: false,
				autoTrack: false,
				singlePage: false
			});
	})();
	</script>

	<title>coding-144/coding-144: 毕设项目 SSM到Spring Boot 从零开发校园商铺平台 - 慕课网Git</title>

	<meta name="theme-color" content="#ff5343">

	

</head>
<body>
	<div class="full height">
		<noscript>Please enable JavaScript in your browser!</noscript>

		
			<div class="following bar gray">

				<div class="ui container">
					<div class="ui grid">
						<div class="column">
							<div class="ui top secondary menu definemenu">
								<a class="item brand" href="/">
									<img class="ui mini image" src="/img/favicon.png">
								</a>

								
									<a class="item" href="/issues">任务管理</a>
									<a class="item" href="/pulls">合并请求</a>
								

								<a class="item" href="/explore/repos" style="display: none;">发现</a>

								
									<div class="right menu">
									
									
										<div class="ui dropdown head link jump item poping up" data-variation="tiny inverted" style="height: 52px;">
											<span class="text">
												<i class="octicon octicon-plus"><span class="sr-only">创建...</span></i>
												<i class="octicon octicon-triangle-down"></i>
											</span>
											<div class="menu">
												<a class="item" href="/repo/create">
													<i class="octicon octicon-plus"></i> 创建仓库
												</a>
												<a class="item" href="/repo/migrate">
													<i class="octicon octicon-repo-clone"></i> 迁移外部仓库
												</a>
												
												<a class="item" href="/org/create">
													<i class="octicon octicon-organization"></i> 创建新的组织
												</a>
												
											</div>
										</div>
									
										<div class="ui dropdown head link jump item poping up mr0" tabindex="-1" data-variation="tiny inverted">
											<span class="text avatar">
												<img class="ui avatar image" src="//img.mukewang.com/5709e11e00019ce506400640-100-100.jpg">
												
												<i class="ellipsis vertical icon" tabindex="-1"></i>
											</span>
											<div class="menu" tabindex="-1">
												
												<a class="item" href="/NJTKID">
													<i class="octicon octicon-person"></i>
													个人主页
												</a>
												<a class=" item" href="/user/settings/ssh">
													<i class="octicon octicon-settings"></i>
													用户设置
												</a>
												<a class="item" target="_blank" href="//www.imooc.com/help/cate/27" rel="noreferrer">
													<i class="octicon octicon-question"></i>
													帮助
												</a>
												

												<div class="divider"></div>
												<a  class="item" href="//git.imooc.com/passport/user/logout?referer=//git.imooc.com">
													<i class="octicon octicon-sign-out"></i>
													退出
												</a>
											</div>
										</div>
									</div>

								
							</div>
						</div>
					</div>
				</div>
			</div>
		


<div class="repository file list">
	<div class="header-wrapper">

	<div class="ui container">
		<div class="ui vertically padded grid head">
			<div class="column">
				<div class="ui header">
					<div class="ui huge breadcrumb">
						<i class="mega-octicon octicon-lock"></i>
						<a href="/coding-144">毕设利器 SSM到Spring Boot 从零开发校园商铺平台</a>
						<div class="divider"> / </div>
						<a href="/coding-144/coding-144">coding-144</a>
						
						
					</div>

					
						<div class="ui right">
							<div class="ui labeled button" tabindex="0">
								<a class="ui basic button" href="/coding-144/coding-144/action/unwatch?redirect_to=%2fcoding-144%2fcoding-144%2fsrc%2fmaster%2fmvco2o%2fsrc%2fmain%2fwebapp%2fresources%2fjs%2fcommon%2fzepto.js">
									<i class="icon fa-eye"></i>取消关注
								</a>
								<a class="ui basic label" href="/coding-144/coding-144/watchers">
									3542
								</a>
							</div>
							<div class="ui labeled button" tabindex="0">
								<a class="ui basic button" href="/coding-144/coding-144/action/star?redirect_to=%2fcoding-144%2fcoding-144%2fsrc%2fmaster%2fmvco2o%2fsrc%2fmain%2fwebapp%2fresources%2fjs%2fcommon%2fzepto.js">
									<i class="icon fa-star-o"></i>点赞
								</a>
								<a class="ui basic label" href="/coding-144/coding-144/stars">
									122
								</a>
							</div>
							
								<div class="ui labeled button" tabindex="0">
									<a class="ui basic button " href="/repo/fork/319">
										<i class="octicon octicon-repo-forked"></i>Fork
									</a>
									<a class="ui basic label" href="/coding-144/coding-144/forks">
										201
									</a>
								</div>
							
						</div>
					
				</div>
			</div>
		</div>
	</div>


	<div class="ui tabs container">
		<div class="ui tabular menu navbar">
			
				<a class="active item" href="/coding-144/coding-144">
					<i class="octicon octicon-file-text"></i> 代码
				</a>
			
			
				<a class=" item" href="/coding-144/coding-144/issues">
					<i class="octicon octicon-issue-opened"></i> Issues <span class="ui small label">0</span>
				</a>
			
			
				<a class=" item" href="/coding-144/coding-144/pulls">
					<i class="octicon octicon-git-pull-request"></i> Pull Requests <span class="ui small label">1</span>
				</a>
			
			
				<a class=" item" href="/coding-144/coding-144/wiki">
					<i class="octicon octicon-book"></i> Wiki
				</a>
			
			
		</div>
	</div>
	<div class="ui tabs divider"></div>

</div>

	<div class="ui container">
		




		
		<div class="ui secondary menu">
			<div class="fitted item choose reference">
	<div class="ui floating filter dropdown" data-no-results="未找到结果">
			<div class="ui basic small button">
			<span class="text">
				<i class="octicon octicon-git-branch"></i>
				分支:
				<strong class="branch_text">master</strong>
			</span>
			<i class="dropdown icon"></i>
		</div>
		<div class="menu">
			<div class="ui icon search input">
				<i class="filter icon"></i>
				<input name="search" placeholder="过滤分支或标签...">
			</div>
			<div class="header">
				<div class="ui grid">
					<div class="two column row">
						<a class="reference column" href="#" data-target="#branch-list">
							<span class="text black">
								分支列表
							</span>
						</a>
						<a class="reference column" href="#" data-target="#tag-list">
							<span class="text ">
								标签列表
							</span>
						</a>
					</div>
				</div>
			</div>
			<div id="branch-list" class="scrolling menu" >
				
					<div class="item selected" data-url="/coding-144/coding-144/src/master/mvco2o/src/main/webapp/resources/js/common/zepto.js">master</div>
				
					<div class="item " data-url="/coding-144/coding-144/src/ssmwithoutwechatandredis/mvco2o/src/main/webapp/resources/js/common/zepto.js">ssmwithoutwechatandredis</div>
				
			</div>
			<div id="tag-list" class="scrolling menu" style="display: none">
				
			</div>
		</div>
	</div>
</div>

			
			<div class="fitted item">
				
				
				
					<div class="ui breadcrumb">
						<a class="section" href="/coding-144/coding-144/src/master">coding-144</a>
						
							<div class="divider"> / </div>
							
								
								<span class="section"><a href="/coding-144/coding-144/src/master/mvco2o">mvco2o</a></span>
							
						
							<div class="divider"> / </div>
							
								
								<span class="section"><a href="/coding-144/coding-144/src/master/mvco2o/src">src</a></span>
							
						
							<div class="divider"> / </div>
							
								
								<span class="section"><a href="/coding-144/coding-144/src/master/mvco2o/src/main">main</a></span>
							
						
							<div class="divider"> / </div>
							
								
								<span class="section"><a href="/coding-144/coding-144/src/master/mvco2o/src/main/webapp">webapp</a></span>
							
						
							<div class="divider"> / </div>
							
								
								<span class="section"><a href="/coding-144/coding-144/src/master/mvco2o/src/main/webapp/resources">resources</a></span>
							
						
							<div class="divider"> / </div>
							
								
								<span class="section"><a href="/coding-144/coding-144/src/master/mvco2o/src/main/webapp/resources/js">js</a></span>
							
						
							<div class="divider"> / </div>
							
								
								<span class="section"><a href="/coding-144/coding-144/src/master/mvco2o/src/main/webapp/resources/js/common">common</a></span>
							
						
							<div class="divider"> / </div>
							
								<span class="active section">zepto.js</span>
							
						
					</div>
				
			</div>
			<div class="right fitted item">
				
					<div id="file-buttons" class="ui tiny blue buttons">
						
						
					</div>
				

				
					
			</div>
		</div>
		
			<div id="file-content" class="tab-size-8">
	<h4 class="ui top attached header" id="repo-read-file">
		
			<i class="file text outline icon ui left"></i>
			<strong>zepto.js</strong> <span class="text grey normal">55 KB</span>
		
		
			<div class="ui right file-actions">
				<div class="ui buttons">
					
						<a class="ui button" href="/coding-144/coding-144/src/97d199ca834c4b0bc5e91bb6bc595266a649cc39/mvco2o/src/main/webapp/resources/js/common/zepto.js">永久链接</a>
					
					<a class="ui button" href="/coding-144/coding-144/commits/master/mvco2o/src/main/webapp/resources/js/common/zepto.js">文件历史</a>
					<a class="ui button" href="/coding-144/coding-144/raw/master/mvco2o/src/main/webapp/resources/js/common/zepto.js">原始文件</a>
				</div>
				
					
						<i class="octicon octicon-pencil btn-octicon poping up disabled" data-content="您必须Fork此仓库才能对此文件进行修改操作" data-position="bottom center" data-variation="tiny inverted"></i>
					
					
						<i class="octicon octicon-trashcan btn-octicon poping up disabled" data-content="您必须具有可写权限才能对此文件进行修改操作" data-position="bottom center" data-variation="tiny inverted"></i>
					
				
			</div>
		
	</h4>
	<div class="ui attached table segment">
		<div id="" class="file-view code-view has-emoji">
			
				<table>
					<tbody>
						<tr>
						
							<td class="lines-num"><span id="L1">1</span><span id="L2">2</span><span id="L3">3</span><span id="L4">4</span><span id="L5">5</span><span id="L6">6</span><span id="L7">7</span><span id="L8">8</span><span id="L9">9</span><span id="L10">10</span><span id="L11">11</span><span id="L12">12</span><span id="L13">13</span><span id="L14">14</span><span id="L15">15</span><span id="L16">16</span><span id="L17">17</span><span id="L18">18</span><span id="L19">19</span><span id="L20">20</span><span id="L21">21</span><span id="L22">22</span><span id="L23">23</span><span id="L24">24</span><span id="L25">25</span><span id="L26">26</span><span id="L27">27</span><span id="L28">28</span><span id="L29">29</span><span id="L30">30</span><span id="L31">31</span><span id="L32">32</span><span id="L33">33</span><span id="L34">34</span><span id="L35">35</span><span id="L36">36</span><span id="L37">37</span><span id="L38">38</span><span id="L39">39</span><span id="L40">40</span><span id="L41">41</span><span id="L42">42</span><span id="L43">43</span><span id="L44">44</span><span id="L45">45</span><span id="L46">46</span><span id="L47">47</span><span id="L48">48</span><span id="L49">49</span><span id="L50">50</span><span id="L51">51</span><span id="L52">52</span><span id="L53">53</span><span id="L54">54</span><span id="L55">55</span><span id="L56">56</span><span id="L57">57</span><span id="L58">58</span><span id="L59">59</span><span id="L60">60</span><span id="L61">61</span><span id="L62">62</span><span id="L63">63</span><span id="L64">64</span><span id="L65">65</span><span id="L66">66</span><span id="L67">67</span><span id="L68">68</span><span id="L69">69</span><span id="L70">70</span><span id="L71">71</span><span id="L72">72</span><span id="L73">73</span><span id="L74">74</span><span id="L75">75</span><span id="L76">76</span><span id="L77">77</span><span id="L78">78</span><span id="L79">79</span><span id="L80">80</span><span id="L81">81</span><span id="L82">82</span><span id="L83">83</span><span id="L84">84</span><span id="L85">85</span><span id="L86">86</span><span id="L87">87</span><span id="L88">88</span><span id="L89">89</span><span id="L90">90</span><span id="L91">91</span><span id="L92">92</span><span id="L93">93</span><span id="L94">94</span><span id="L95">95</span><span id="L96">96</span><span id="L97">97</span><span id="L98">98</span><span id="L99">99</span><span id="L100">100</span><span id="L101">101</span><span id="L102">102</span><span id="L103">103</span><span id="L104">104</span><span id="L105">105</span><span id="L106">106</span><span id="L107">107</span><span id="L108">108</span><span id="L109">109</span><span id="L110">110</span><span id="L111">111</span><span id="L112">112</span><span id="L113">113</span><span id="L114">114</span><span id="L115">115</span><span id="L116">116</span><span id="L117">117</span><span id="L118">118</span><span id="L119">119</span><span id="L120">120</span><span id="L121">121</span><span id="L122">122</span><span id="L123">123</span><span id="L124">124</span><span id="L125">125</span><span id="L126">126</span><span id="L127">127</span><span id="L128">128</span><span id="L129">129</span><span id="L130">130</span><span id="L131">131</span><span id="L132">132</span><span id="L133">133</span><span id="L134">134</span><span id="L135">135</span><span id="L136">136</span><span id="L137">137</span><span id="L138">138</span><span id="L139">139</span><span id="L140">140</span><span id="L141">141</span><span id="L142">142</span><span id="L143">143</span><span id="L144">144</span><span id="L145">145</span><span id="L146">146</span><span id="L147">147</span><span id="L148">148</span><span id="L149">149</span><span id="L150">150</span><span id="L151">151</span><span id="L152">152</span><span id="L153">153</span><span id="L154">154</span><span id="L155">155</span><span id="L156">156</span><span id="L157">157</span><span id="L158">158</span><span id="L159">159</span><span id="L160">160</span><span id="L161">161</span><span id="L162">162</span><span id="L163">163</span><span id="L164">164</span><span id="L165">165</span><span id="L166">166</span><span id="L167">167</span><span id="L168">168</span><span id="L169">169</span><span id="L170">170</span><span id="L171">171</span><span id="L172">172</span><span id="L173">173</span><span id="L174">174</span><span id="L175">175</span><span id="L176">176</span><span id="L177">177</span><span id="L178">178</span><span id="L179">179</span><span id="L180">180</span><span id="L181">181</span><span id="L182">182</span><span id="L183">183</span><span id="L184">184</span><span id="L185">185</span><span id="L186">186</span><span id="L187">187</span><span id="L188">188</span><span id="L189">189</span><span id="L190">190</span><span id="L191">191</span><span id="L192">192</span><span id="L193">193</span><span id="L194">194</span><span id="L195">195</span><span id="L196">196</span><span id="L197">197</span><span id="L198">198</span><span id="L199">199</span><span id="L200">200</span><span id="L201">201</span><span id="L202">202</span><span id="L203">203</span><span id="L204">204</span><span id="L205">205</span><span id="L206">206</span><span id="L207">207</span><span id="L208">208</span><span id="L209">209</span><span id="L210">210</span><span id="L211">211</span><span id="L212">212</span><span id="L213">213</span><span id="L214">214</span><span id="L215">215</span><span id="L216">216</span><span id="L217">217</span><span id="L218">218</span><span id="L219">219</span><span id="L220">220</span><span id="L221">221</span><span id="L222">222</span><span id="L223">223</span><span id="L224">224</span><span id="L225">225</span><span id="L226">226</span><span id="L227">227</span><span id="L228">228</span><span id="L229">229</span><span id="L230">230</span><span id="L231">231</span><span id="L232">232</span><span id="L233">233</span><span id="L234">234</span><span id="L235">235</span><span id="L236">236</span><span id="L237">237</span><span id="L238">238</span><span id="L239">239</span><span id="L240">240</span><span id="L241">241</span><span id="L242">242</span><span id="L243">243</span><span id="L244">244</span><span id="L245">245</span><span id="L246">246</span><span id="L247">247</span><span id="L248">248</span><span id="L249">249</span><span id="L250">250</span><span id="L251">251</span><span id="L252">252</span><span id="L253">253</span><span id="L254">254</span><span id="L255">255</span><span id="L256">256</span><span id="L257">257</span><span id="L258">258</span><span id="L259">259</span><span id="L260">260</span><span id="L261">261</span><span id="L262">262</span><span id="L263">263</span><span id="L264">264</span><span id="L265">265</span><span id="L266">266</span><span id="L267">267</span><span id="L268">268</span><span id="L269">269</span><span id="L270">270</span><span id="L271">271</span><span id="L272">272</span><span id="L273">273</span><span id="L274">274</span><span id="L275">275</span><span id="L276">276</span><span id="L277">277</span><span id="L278">278</span><span id="L279">279</span><span id="L280">280</span><span id="L281">281</span><span id="L282">282</span><span id="L283">283</span><span id="L284">284</span><span id="L285">285</span><span id="L286">286</span><span id="L287">287</span><span id="L288">288</span><span id="L289">289</span><span id="L290">290</span><span id="L291">291</span><span id="L292">292</span><span id="L293">293</span><span id="L294">294</span><span id="L295">295</span><span id="L296">296</span><span id="L297">297</span><span id="L298">298</span><span id="L299">299</span><span id="L300">300</span><span id="L301">301</span><span id="L302">302</span><span id="L303">303</span><span id="L304">304</span><span id="L305">305</span><span id="L306">306</span><span id="L307">307</span><span id="L308">308</span><span id="L309">309</span><span id="L310">310</span><span id="L311">311</span><span id="L312">312</span><span id="L313">313</span><span id="L314">314</span><span id="L315">315</span><span id="L316">316</span><span id="L317">317</span><span id="L318">318</span><span id="L319">319</span><span id="L320">320</span><span id="L321">321</span><span id="L322">322</span><span id="L323">323</span><span id="L324">324</span><span id="L325">325</span><span id="L326">326</span><span id="L327">327</span><span id="L328">328</span><span id="L329">329</span><span id="L330">330</span><span id="L331">331</span><span id="L332">332</span><span id="L333">333</span><span id="L334">334</span><span id="L335">335</span><span id="L336">336</span><span id="L337">337</span><span id="L338">338</span><span id="L339">339</span><span id="L340">340</span><span id="L341">341</span><span id="L342">342</span><span id="L343">343</span><span id="L344">344</span><span id="L345">345</span><span id="L346">346</span><span id="L347">347</span><span id="L348">348</span><span id="L349">349</span><span id="L350">350</span><span id="L351">351</span><span id="L352">352</span><span id="L353">353</span><span id="L354">354</span><span id="L355">355</span><span id="L356">356</span><span id="L357">357</span><span id="L358">358</span><span id="L359">359</span><span id="L360">360</span><span id="L361">361</span><span id="L362">362</span><span id="L363">363</span><span id="L364">364</span><span id="L365">365</span><span id="L366">366</span><span id="L367">367</span><span id="L368">368</span><span id="L369">369</span><span id="L370">370</span><span id="L371">371</span><span id="L372">372</span><span id="L373">373</span><span id="L374">374</span><span id="L375">375</span><span id="L376">376</span><span id="L377">377</span><span id="L378">378</span><span id="L379">379</span><span id="L380">380</span><span id="L381">381</span><span id="L382">382</span><span id="L383">383</span><span id="L384">384</span><span id="L385">385</span><span id="L386">386</span><span id="L387">387</span><span id="L388">388</span><span id="L389">389</span><span id="L390">390</span><span id="L391">391</span><span id="L392">392</span><span id="L393">393</span><span id="L394">394</span><span id="L395">395</span><span id="L396">396</span><span id="L397">397</span><span id="L398">398</span><span id="L399">399</span><span id="L400">400</span><span id="L401">401</span><span id="L402">402</span><span id="L403">403</span><span id="L404">404</span><span id="L405">405</span><span id="L406">406</span><span id="L407">407</span><span id="L408">408</span><span id="L409">409</span><span id="L410">410</span><span id="L411">411</span><span id="L412">412</span><span id="L413">413</span><span id="L414">414</span><span id="L415">415</span><span id="L416">416</span><span id="L417">417</span><span id="L418">418</span><span id="L419">419</span><span id="L420">420</span><span id="L421">421</span><span id="L422">422</span><span id="L423">423</span><span id="L424">424</span><span id="L425">425</span><span id="L426">426</span><span id="L427">427</span><span id="L428">428</span><span id="L429">429</span><span id="L430">430</span><span id="L431">431</span><span id="L432">432</span><span id="L433">433</span><span id="L434">434</span><span id="L435">435</span><span id="L436">436</span><span id="L437">437</span><span id="L438">438</span><span id="L439">439</span><span id="L440">440</span><span id="L441">441</span><span id="L442">442</span><span id="L443">443</span><span id="L444">444</span><span id="L445">445</span><span id="L446">446</span><span id="L447">447</span><span id="L448">448</span><span id="L449">449</span><span id="L450">450</span><span id="L451">451</span><span id="L452">452</span><span id="L453">453</span><span id="L454">454</span><span id="L455">455</span><span id="L456">456</span><span id="L457">457</span><span id="L458">458</span><span id="L459">459</span><span id="L460">460</span><span id="L461">461</span><span id="L462">462</span><span id="L463">463</span><span id="L464">464</span><span id="L465">465</span><span id="L466">466</span><span id="L467">467</span><span id="L468">468</span><span id="L469">469</span><span id="L470">470</span><span id="L471">471</span><span id="L472">472</span><span id="L473">473</span><span id="L474">474</span><span id="L475">475</span><span id="L476">476</span><span id="L477">477</span><span id="L478">478</span><span id="L479">479</span><span id="L480">480</span><span id="L481">481</span><span id="L482">482</span><span id="L483">483</span><span id="L484">484</span><span id="L485">485</span><span id="L486">486</span><span id="L487">487</span><span id="L488">488</span><span id="L489">489</span><span id="L490">490</span><span id="L491">491</span><span id="L492">492</span><span id="L493">493</span><span id="L494">494</span><span id="L495">495</span><span id="L496">496</span><span id="L497">497</span><span id="L498">498</span><span id="L499">499</span><span id="L500">500</span><span id="L501">501</span><span id="L502">502</span><span id="L503">503</span><span id="L504">504</span><span id="L505">505</span><span id="L506">506</span><span id="L507">507</span><span id="L508">508</span><span id="L509">509</span><span id="L510">510</span><span id="L511">511</span><span id="L512">512</span><span id="L513">513</span><span id="L514">514</span><span id="L515">515</span><span id="L516">516</span><span id="L517">517</span><span id="L518">518</span><span id="L519">519</span><span id="L520">520</span><span id="L521">521</span><span id="L522">522</span><span id="L523">523</span><span id="L524">524</span><span id="L525">525</span><span id="L526">526</span><span id="L527">527</span><span id="L528">528</span><span id="L529">529</span><span id="L530">530</span><span id="L531">531</span><span id="L532">532</span><span id="L533">533</span><span id="L534">534</span><span id="L535">535</span><span id="L536">536</span><span id="L537">537</span><span id="L538">538</span><span id="L539">539</span><span id="L540">540</span><span id="L541">541</span><span id="L542">542</span><span id="L543">543</span><span id="L544">544</span><span id="L545">545</span><span id="L546">546</span><span id="L547">547</span><span id="L548">548</span><span id="L549">549</span><span id="L550">550</span><span id="L551">551</span><span id="L552">552</span><span id="L553">553</span><span id="L554">554</span><span id="L555">555</span><span id="L556">556</span><span id="L557">557</span><span id="L558">558</span><span id="L559">559</span><span id="L560">560</span><span id="L561">561</span><span id="L562">562</span><span id="L563">563</span><span id="L564">564</span><span id="L565">565</span><span id="L566">566</span><span id="L567">567</span><span id="L568">568</span><span id="L569">569</span><span id="L570">570</span><span id="L571">571</span><span id="L572">572</span><span id="L573">573</span><span id="L574">574</span><span id="L575">575</span><span id="L576">576</span><span id="L577">577</span><span id="L578">578</span><span id="L579">579</span><span id="L580">580</span><span id="L581">581</span><span id="L582">582</span><span id="L583">583</span><span id="L584">584</span><span id="L585">585</span><span id="L586">586</span><span id="L587">587</span><span id="L588">588</span><span id="L589">589</span><span id="L590">590</span><span id="L591">591</span><span id="L592">592</span><span id="L593">593</span><span id="L594">594</span><span id="L595">595</span><span id="L596">596</span><span id="L597">597</span><span id="L598">598</span><span id="L599">599</span><span id="L600">600</span><span id="L601">601</span><span id="L602">602</span><span id="L603">603</span><span id="L604">604</span><span id="L605">605</span><span id="L606">606</span><span id="L607">607</span><span id="L608">608</span><span id="L609">609</span><span id="L610">610</span><span id="L611">611</span><span id="L612">612</span><span id="L613">613</span><span id="L614">614</span><span id="L615">615</span><span id="L616">616</span><span id="L617">617</span><span id="L618">618</span><span id="L619">619</span><span id="L620">620</span><span id="L621">621</span><span id="L622">622</span><span id="L623">623</span><span id="L624">624</span><span id="L625">625</span><span id="L626">626</span><span id="L627">627</span><span id="L628">628</span><span id="L629">629</span><span id="L630">630</span><span id="L631">631</span><span id="L632">632</span><span id="L633">633</span><span id="L634">634</span><span id="L635">635</span><span id="L636">636</span><span id="L637">637</span><span id="L638">638</span><span id="L639">639</span><span id="L640">640</span><span id="L641">641</span><span id="L642">642</span><span id="L643">643</span><span id="L644">644</span><span id="L645">645</span><span id="L646">646</span><span id="L647">647</span><span id="L648">648</span><span id="L649">649</span><span id="L650">650</span><span id="L651">651</span><span id="L652">652</span><span id="L653">653</span><span id="L654">654</span><span id="L655">655</span><span id="L656">656</span><span id="L657">657</span><span id="L658">658</span><span id="L659">659</span><span id="L660">660</span><span id="L661">661</span><span id="L662">662</span><span id="L663">663</span><span id="L664">664</span><span id="L665">665</span><span id="L666">666</span><span id="L667">667</span><span id="L668">668</span><span id="L669">669</span><span id="L670">670</span><span id="L671">671</span><span id="L672">672</span><span id="L673">673</span><span id="L674">674</span><span id="L675">675</span><span id="L676">676</span><span id="L677">677</span><span id="L678">678</span><span id="L679">679</span><span id="L680">680</span><span id="L681">681</span><span id="L682">682</span><span id="L683">683</span><span id="L684">684</span><span id="L685">685</span><span id="L686">686</span><span id="L687">687</span><span id="L688">688</span><span id="L689">689</span><span id="L690">690</span><span id="L691">691</span><span id="L692">692</span><span id="L693">693</span><span id="L694">694</span><span id="L695">695</span><span id="L696">696</span><span id="L697">697</span><span id="L698">698</span><span id="L699">699</span><span id="L700">700</span><span id="L701">701</span><span id="L702">702</span><span id="L703">703</span><span id="L704">704</span><span id="L705">705</span><span id="L706">706</span><span id="L707">707</span><span id="L708">708</span><span id="L709">709</span><span id="L710">710</span><span id="L711">711</span><span id="L712">712</span><span id="L713">713</span><span id="L714">714</span><span id="L715">715</span><span id="L716">716</span><span id="L717">717</span><span id="L718">718</span><span id="L719">719</span><span id="L720">720</span><span id="L721">721</span><span id="L722">722</span><span id="L723">723</span><span id="L724">724</span><span id="L725">725</span><span id="L726">726</span><span id="L727">727</span><span id="L728">728</span><span id="L729">729</span><span id="L730">730</span><span id="L731">731</span><span id="L732">732</span><span id="L733">733</span><span id="L734">734</span><span id="L735">735</span><span id="L736">736</span><span id="L737">737</span><span id="L738">738</span><span id="L739">739</span><span id="L740">740</span><span id="L741">741</span><span id="L742">742</span><span id="L743">743</span><span id="L744">744</span><span id="L745">745</span><span id="L746">746</span><span id="L747">747</span><span id="L748">748</span><span id="L749">749</span><span id="L750">750</span><span id="L751">751</span><span id="L752">752</span><span id="L753">753</span><span id="L754">754</span><span id="L755">755</span><span id="L756">756</span><span id="L757">757</span><span id="L758">758</span><span id="L759">759</span><span id="L760">760</span><span id="L761">761</span><span id="L762">762</span><span id="L763">763</span><span id="L764">764</span><span id="L765">765</span><span id="L766">766</span><span id="L767">767</span><span id="L768">768</span><span id="L769">769</span><span id="L770">770</span><span id="L771">771</span><span id="L772">772</span><span id="L773">773</span><span id="L774">774</span><span id="L775">775</span><span id="L776">776</span><span id="L777">777</span><span id="L778">778</span><span id="L779">779</span><span id="L780">780</span><span id="L781">781</span><span id="L782">782</span><span id="L783">783</span><span id="L784">784</span><span id="L785">785</span><span id="L786">786</span><span id="L787">787</span><span id="L788">788</span><span id="L789">789</span><span id="L790">790</span><span id="L791">791</span><span id="L792">792</span><span id="L793">793</span><span id="L794">794</span><span id="L795">795</span><span id="L796">796</span><span id="L797">797</span><span id="L798">798</span><span id="L799">799</span><span id="L800">800</span><span id="L801">801</span><span id="L802">802</span><span id="L803">803</span><span id="L804">804</span><span id="L805">805</span><span id="L806">806</span><span id="L807">807</span><span id="L808">808</span><span id="L809">809</span><span id="L810">810</span><span id="L811">811</span><span id="L812">812</span><span id="L813">813</span><span id="L814">814</span><span id="L815">815</span><span id="L816">816</span><span id="L817">817</span><span id="L818">818</span><span id="L819">819</span><span id="L820">820</span><span id="L821">821</span><span id="L822">822</span><span id="L823">823</span><span id="L824">824</span><span id="L825">825</span><span id="L826">826</span><span id="L827">827</span><span id="L828">828</span><span id="L829">829</span><span id="L830">830</span><span id="L831">831</span><span id="L832">832</span><span id="L833">833</span><span id="L834">834</span><span id="L835">835</span><span id="L836">836</span><span id="L837">837</span><span id="L838">838</span><span id="L839">839</span><span id="L840">840</span><span id="L841">841</span><span id="L842">842</span><span id="L843">843</span><span id="L844">844</span><span id="L845">845</span><span id="L846">846</span><span id="L847">847</span><span id="L848">848</span><span id="L849">849</span><span id="L850">850</span><span id="L851">851</span><span id="L852">852</span><span id="L853">853</span><span id="L854">854</span><span id="L855">855</span><span id="L856">856</span><span id="L857">857</span><span id="L858">858</span><span id="L859">859</span><span id="L860">860</span><span id="L861">861</span><span id="L862">862</span><span id="L863">863</span><span id="L864">864</span><span id="L865">865</span><span id="L866">866</span><span id="L867">867</span><span id="L868">868</span><span id="L869">869</span><span id="L870">870</span><span id="L871">871</span><span id="L872">872</span><span id="L873">873</span><span id="L874">874</span><span id="L875">875</span><span id="L876">876</span><span id="L877">877</span><span id="L878">878</span><span id="L879">879</span><span id="L880">880</span><span id="L881">881</span><span id="L882">882</span><span id="L883">883</span><span id="L884">884</span><span id="L885">885</span><span id="L886">886</span><span id="L887">887</span><span id="L888">888</span><span id="L889">889</span><span id="L890">890</span><span id="L891">891</span><span id="L892">892</span><span id="L893">893</span><span id="L894">894</span><span id="L895">895</span><span id="L896">896</span><span id="L897">897</span><span id="L898">898</span><span id="L899">899</span><span id="L900">900</span><span id="L901">901</span><span id="L902">902</span><span id="L903">903</span><span id="L904">904</span><span id="L905">905</span><span id="L906">906</span><span id="L907">907</span><span id="L908">908</span><span id="L909">909</span><span id="L910">910</span><span id="L911">911</span><span id="L912">912</span><span id="L913">913</span><span id="L914">914</span><span id="L915">915</span><span id="L916">916</span><span id="L917">917</span><span id="L918">918</span><span id="L919">919</span><span id="L920">920</span><span id="L921">921</span><span id="L922">922</span><span id="L923">923</span><span id="L924">924</span><span id="L925">925</span><span id="L926">926</span><span id="L927">927</span><span id="L928">928</span><span id="L929">929</span><span id="L930">930</span><span id="L931">931</span><span id="L932">932</span><span id="L933">933</span><span id="L934">934</span><span id="L935">935</span><span id="L936">936</span><span id="L937">937</span><span id="L938">938</span><span id="L939">939</span><span id="L940">940</span><span id="L941">941</span><span id="L942">942</span><span id="L943">943</span><span id="L944">944</span><span id="L945">945</span><span id="L946">946</span><span id="L947">947</span><span id="L948">948</span><span id="L949">949</span><span id="L950">950</span><span id="L951">951</span><span id="L952">952</span><span id="L953">953</span><span id="L954">954</span><span id="L955">955</span><span id="L956">956</span><span id="L957">957</span><span id="L958">958</span><span id="L959">959</span><span id="L960">960</span><span id="L961">961</span><span id="L962">962</span><span id="L963">963</span><span id="L964">964</span><span id="L965">965</span><span id="L966">966</span><span id="L967">967</span><span id="L968">968</span><span id="L969">969</span><span id="L970">970</span><span id="L971">971</span><span id="L972">972</span><span id="L973">973</span><span id="L974">974</span><span id="L975">975</span><span id="L976">976</span><span id="L977">977</span><span id="L978">978</span><span id="L979">979</span><span id="L980">980</span><span id="L981">981</span><span id="L982">982</span><span id="L983">983</span><span id="L984">984</span><span id="L985">985</span><span id="L986">986</span><span id="L987">987</span><span id="L988">988</span><span id="L989">989</span><span id="L990">990</span><span id="L991">991</span><span id="L992">992</span><span id="L993">993</span><span id="L994">994</span><span id="L995">995</span><span id="L996">996</span><span id="L997">997</span><span id="L998">998</span><span id="L999">999</span><span id="L1000">1000</span><span id="L1001">1001</span><span id="L1002">1002</span><span id="L1003">1003</span><span id="L1004">1004</span><span id="L1005">1005</span><span id="L1006">1006</span><span id="L1007">1007</span><span id="L1008">1008</span><span id="L1009">1009</span><span id="L1010">1010</span><span id="L1011">1011</span><span id="L1012">1012</span><span id="L1013">1013</span><span id="L1014">1014</span><span id="L1015">1015</span><span id="L1016">1016</span><span id="L1017">1017</span><span id="L1018">1018</span><span id="L1019">1019</span><span id="L1020">1020</span><span id="L1021">1021</span><span id="L1022">1022</span><span id="L1023">1023</span><span id="L1024">1024</span><span id="L1025">1025</span><span id="L1026">1026</span><span id="L1027">1027</span><span id="L1028">1028</span><span id="L1029">1029</span><span id="L1030">1030</span><span id="L1031">1031</span><span id="L1032">1032</span><span id="L1033">1033</span><span id="L1034">1034</span><span id="L1035">1035</span><span id="L1036">1036</span><span id="L1037">1037</span><span id="L1038">1038</span><span id="L1039">1039</span><span id="L1040">1040</span><span id="L1041">1041</span><span id="L1042">1042</span><span id="L1043">1043</span><span id="L1044">1044</span><span id="L1045">1045</span><span id="L1046">1046</span><span id="L1047">1047</span><span id="L1048">1048</span><span id="L1049">1049</span><span id="L1050">1050</span><span id="L1051">1051</span><span id="L1052">1052</span><span id="L1053">1053</span><span id="L1054">1054</span><span id="L1055">1055</span><span id="L1056">1056</span><span id="L1057">1057</span><span id="L1058">1058</span><span id="L1059">1059</span><span id="L1060">1060</span><span id="L1061">1061</span><span id="L1062">1062</span><span id="L1063">1063</span><span id="L1064">1064</span><span id="L1065">1065</span><span id="L1066">1066</span><span id="L1067">1067</span><span id="L1068">1068</span><span id="L1069">1069</span><span id="L1070">1070</span><span id="L1071">1071</span><span id="L1072">1072</span><span id="L1073">1073</span><span id="L1074">1074</span><span id="L1075">1075</span><span id="L1076">1076</span><span id="L1077">1077</span><span id="L1078">1078</span><span id="L1079">1079</span><span id="L1080">1080</span><span id="L1081">1081</span><span id="L1082">1082</span><span id="L1083">1083</span><span id="L1084">1084</span><span id="L1085">1085</span><span id="L1086">1086</span><span id="L1087">1087</span><span id="L1088">1088</span><span id="L1089">1089</span><span id="L1090">1090</span><span id="L1091">1091</span><span id="L1092">1092</span><span id="L1093">1093</span><span id="L1094">1094</span><span id="L1095">1095</span><span id="L1096">1096</span><span id="L1097">1097</span><span id="L1098">1098</span><span id="L1099">1099</span><span id="L1100">1100</span><span id="L1101">1101</span><span id="L1102">1102</span><span id="L1103">1103</span><span id="L1104">1104</span><span id="L1105">1105</span><span id="L1106">1106</span><span id="L1107">1107</span><span id="L1108">1108</span><span id="L1109">1109</span><span id="L1110">1110</span><span id="L1111">1111</span><span id="L1112">1112</span><span id="L1113">1113</span><span id="L1114">1114</span><span id="L1115">1115</span><span id="L1116">1116</span><span id="L1117">1117</span><span id="L1118">1118</span><span id="L1119">1119</span><span id="L1120">1120</span><span id="L1121">1121</span><span id="L1122">1122</span><span id="L1123">1123</span><span id="L1124">1124</span><span id="L1125">1125</span><span id="L1126">1126</span><span id="L1127">1127</span><span id="L1128">1128</span><span id="L1129">1129</span><span id="L1130">1130</span><span id="L1131">1131</span><span id="L1132">1132</span><span id="L1133">1133</span><span id="L1134">1134</span><span id="L1135">1135</span><span id="L1136">1136</span><span id="L1137">1137</span><span id="L1138">1138</span><span id="L1139">1139</span><span id="L1140">1140</span><span id="L1141">1141</span><span id="L1142">1142</span><span id="L1143">1143</span><span id="L1144">1144</span><span id="L1145">1145</span><span id="L1146">1146</span><span id="L1147">1147</span><span id="L1148">1148</span><span id="L1149">1149</span><span id="L1150">1150</span><span id="L1151">1151</span><span id="L1152">1152</span><span id="L1153">1153</span><span id="L1154">1154</span><span id="L1155">1155</span><span id="L1156">1156</span><span id="L1157">1157</span><span id="L1158">1158</span><span id="L1159">1159</span><span id="L1160">1160</span><span id="L1161">1161</span><span id="L1162">1162</span><span id="L1163">1163</span><span id="L1164">1164</span><span id="L1165">1165</span><span id="L1166">1166</span><span id="L1167">1167</span><span id="L1168">1168</span><span id="L1169">1169</span><span id="L1170">1170</span><span id="L1171">1171</span><span id="L1172">1172</span><span id="L1173">1173</span><span id="L1174">1174</span><span id="L1175">1175</span><span id="L1176">1176</span><span id="L1177">1177</span><span id="L1178">1178</span><span id="L1179">1179</span><span id="L1180">1180</span><span id="L1181">1181</span><span id="L1182">1182</span><span id="L1183">1183</span><span id="L1184">1184</span><span id="L1185">1185</span><span id="L1186">1186</span><span id="L1187">1187</span><span id="L1188">1188</span><span id="L1189">1189</span><span id="L1190">1190</span><span id="L1191">1191</span><span id="L1192">1192</span><span id="L1193">1193</span><span id="L1194">1194</span><span id="L1195">1195</span><span id="L1196">1196</span><span id="L1197">1197</span><span id="L1198">1198</span><span id="L1199">1199</span><span id="L1200">1200</span><span id="L1201">1201</span><span id="L1202">1202</span><span id="L1203">1203</span><span id="L1204">1204</span><span id="L1205">1205</span><span id="L1206">1206</span><span id="L1207">1207</span><span id="L1208">1208</span><span id="L1209">1209</span><span id="L1210">1210</span><span id="L1211">1211</span><span id="L1212">1212</span><span id="L1213">1213</span><span id="L1214">1214</span><span id="L1215">1215</span><span id="L1216">1216</span><span id="L1217">1217</span><span id="L1218">1218</span><span id="L1219">1219</span><span id="L1220">1220</span><span id="L1221">1221</span><span id="L1222">1222</span><span id="L1223">1223</span><span id="L1224">1224</span><span id="L1225">1225</span><span id="L1226">1226</span><span id="L1227">1227</span><span id="L1228">1228</span><span id="L1229">1229</span><span id="L1230">1230</span><span id="L1231">1231</span><span id="L1232">1232</span><span id="L1233">1233</span><span id="L1234">1234</span><span id="L1235">1235</span><span id="L1236">1236</span><span id="L1237">1237</span><span id="L1238">1238</span><span id="L1239">1239</span><span id="L1240">1240</span><span id="L1241">1241</span><span id="L1242">1242</span><span id="L1243">1243</span><span id="L1244">1244</span><span id="L1245">1245</span><span id="L1246">1246</span><span id="L1247">1247</span><span id="L1248">1248</span><span id="L1249">1249</span><span id="L1250">1250</span><span id="L1251">1251</span><span id="L1252">1252</span><span id="L1253">1253</span><span id="L1254">1254</span><span id="L1255">1255</span><span id="L1256">1256</span><span id="L1257">1257</span><span id="L1258">1258</span><span id="L1259">1259</span><span id="L1260">1260</span><span id="L1261">1261</span><span id="L1262">1262</span><span id="L1263">1263</span><span id="L1264">1264</span><span id="L1265">1265</span><span id="L1266">1266</span><span id="L1267">1267</span><span id="L1268">1268</span><span id="L1269">1269</span><span id="L1270">1270</span><span id="L1271">1271</span><span id="L1272">1272</span><span id="L1273">1273</span><span id="L1274">1274</span><span id="L1275">1275</span><span id="L1276">1276</span><span id="L1277">1277</span><span id="L1278">1278</span><span id="L1279">1279</span><span id="L1280">1280</span><span id="L1281">1281</span><span id="L1282">1282</span><span id="L1283">1283</span><span id="L1284">1284</span><span id="L1285">1285</span><span id="L1286">1286</span><span id="L1287">1287</span><span id="L1288">1288</span><span id="L1289">1289</span><span id="L1290">1290</span><span id="L1291">1291</span><span id="L1292">1292</span><span id="L1293">1293</span><span id="L1294">1294</span><span id="L1295">1295</span><span id="L1296">1296</span><span id="L1297">1297</span><span id="L1298">1298</span><span id="L1299">1299</span><span id="L1300">1300</span><span id="L1301">1301</span><span id="L1302">1302</span><span id="L1303">1303</span><span id="L1304">1304</span><span id="L1305">1305</span><span id="L1306">1306</span><span id="L1307">1307</span><span id="L1308">1308</span><span id="L1309">1309</span><span id="L1310">1310</span><span id="L1311">1311</span><span id="L1312">1312</span><span id="L1313">1313</span><span id="L1314">1314</span><span id="L1315">1315</span><span id="L1316">1316</span><span id="L1317">1317</span><span id="L1318">1318</span><span id="L1319">1319</span><span id="L1320">1320</span><span id="L1321">1321</span><span id="L1322">1322</span><span id="L1323">1323</span><span id="L1324">1324</span><span id="L1325">1325</span><span id="L1326">1326</span><span id="L1327">1327</span><span id="L1328">1328</span><span id="L1329">1329</span><span id="L1330">1330</span><span id="L1331">1331</span><span id="L1332">1332</span><span id="L1333">1333</span><span id="L1334">1334</span><span id="L1335">1335</span><span id="L1336">1336</span><span id="L1337">1337</span><span id="L1338">1338</span><span id="L1339">1339</span><span id="L1340">1340</span><span id="L1341">1341</span><span id="L1342">1342</span><span id="L1343">1343</span><span id="L1344">1344</span><span id="L1345">1345</span><span id="L1346">1346</span><span id="L1347">1347</span><span id="L1348">1348</span><span id="L1349">1349</span><span id="L1350">1350</span><span id="L1351">1351</span><span id="L1352">1352</span><span id="L1353">1353</span><span id="L1354">1354</span><span id="L1355">1355</span><span id="L1356">1356</span><span id="L1357">1357</span><span id="L1358">1358</span><span id="L1359">1359</span><span id="L1360">1360</span><span id="L1361">1361</span><span id="L1362">1362</span><span id="L1363">1363</span><span id="L1364">1364</span><span id="L1365">1365</span><span id="L1366">1366</span><span id="L1367">1367</span><span id="L1368">1368</span><span id="L1369">1369</span><span id="L1370">1370</span><span id="L1371">1371</span><span id="L1372">1372</span><span id="L1373">1373</span><span id="L1374">1374</span><span id="L1375">1375</span><span id="L1376">1376</span><span id="L1377">1377</span><span id="L1378">1378</span><span id="L1379">1379</span><span id="L1380">1380</span><span id="L1381">1381</span><span id="L1382">1382</span><span id="L1383">1383</span><span id="L1384">1384</span><span id="L1385">1385</span><span id="L1386">1386</span><span id="L1387">1387</span><span id="L1388">1388</span><span id="L1389">1389</span><span id="L1390">1390</span><span id="L1391">1391</span><span id="L1392">1392</span><span id="L1393">1393</span><span id="L1394">1394</span><span id="L1395">1395</span><span id="L1396">1396</span><span id="L1397">1397</span><span id="L1398">1398</span><span id="L1399">1399</span><span id="L1400">1400</span><span id="L1401">1401</span><span id="L1402">1402</span><span id="L1403">1403</span><span id="L1404">1404</span><span id="L1405">1405</span><span id="L1406">1406</span><span id="L1407">1407</span><span id="L1408">1408</span><span id="L1409">1409</span><span id="L1410">1410</span><span id="L1411">1411</span><span id="L1412">1412</span><span id="L1413">1413</span><span id="L1414">1414</span><span id="L1415">1415</span><span id="L1416">1416</span><span id="L1417">1417</span><span id="L1418">1418</span><span id="L1419">1419</span><span id="L1420">1420</span><span id="L1421">1421</span><span id="L1422">1422</span><span id="L1423">1423</span><span id="L1424">1424</span><span id="L1425">1425</span><span id="L1426">1426</span><span id="L1427">1427</span><span id="L1428">1428</span><span id="L1429">1429</span><span id="L1430">1430</span><span id="L1431">1431</span><span id="L1432">1432</span><span id="L1433">1433</span><span id="L1434">1434</span><span id="L1435">1435</span><span id="L1436">1436</span><span id="L1437">1437</span><span id="L1438">1438</span><span id="L1439">1439</span><span id="L1440">1440</span><span id="L1441">1441</span><span id="L1442">1442</span><span id="L1443">1443</span><span id="L1444">1444</span><span id="L1445">1445</span><span id="L1446">1446</span><span id="L1447">1447</span><span id="L1448">1448</span><span id="L1449">1449</span><span id="L1450">1450</span><span id="L1451">1451</span><span id="L1452">1452</span><span id="L1453">1453</span><span id="L1454">1454</span><span id="L1455">1455</span><span id="L1456">1456</span><span id="L1457">1457</span><span id="L1458">1458</span><span id="L1459">1459</span><span id="L1460">1460</span><span id="L1461">1461</span><span id="L1462">1462</span><span id="L1463">1463</span><span id="L1464">1464</span><span id="L1465">1465</span><span id="L1466">1466</span><span id="L1467">1467</span><span id="L1468">1468</span><span id="L1469">1469</span><span id="L1470">1470</span><span id="L1471">1471</span><span id="L1472">1472</span><span id="L1473">1473</span><span id="L1474">1474</span><span id="L1475">1475</span><span id="L1476">1476</span><span id="L1477">1477</span><span id="L1478">1478</span><span id="L1479">1479</span><span id="L1480">1480</span><span id="L1481">1481</span><span id="L1482">1482</span><span id="L1483">1483</span><span id="L1484">1484</span><span id="L1485">1485</span><span id="L1486">1486</span><span id="L1487">1487</span><span id="L1488">1488</span><span id="L1489">1489</span><span id="L1490">1490</span><span id="L1491">1491</span><span id="L1492">1492</span><span id="L1493">1493</span><span id="L1494">1494</span><span id="L1495">1495</span><span id="L1496">1496</span><span id="L1497">1497</span><span id="L1498">1498</span><span id="L1499">1499</span><span id="L1500">1500</span><span id="L1501">1501</span><span id="L1502">1502</span><span id="L1503">1503</span><span id="L1504">1504</span><span id="L1505">1505</span><span id="L1506">1506</span><span id="L1507">1507</span><span id="L1508">1508</span><span id="L1509">1509</span><span id="L1510">1510</span><span id="L1511">1511</span><span id="L1512">1512</span><span id="L1513">1513</span><span id="L1514">1514</span><span id="L1515">1515</span><span id="L1516">1516</span><span id="L1517">1517</span><span id="L1518">1518</span><span id="L1519">1519</span><span id="L1520">1520</span><span id="L1521">1521</span><span id="L1522">1522</span><span id="L1523">1523</span><span id="L1524">1524</span><span id="L1525">1525</span><span id="L1526">1526</span><span id="L1527">1527</span><span id="L1528">1528</span><span id="L1529">1529</span><span id="L1530">1530</span><span id="L1531">1531</span><span id="L1532">1532</span><span id="L1533">1533</span><span id="L1534">1534</span><span id="L1535">1535</span><span id="L1536">1536</span><span id="L1537">1537</span><span id="L1538">1538</span><span id="L1539">1539</span><span id="L1540">1540</span><span id="L1541">1541</span><span id="L1542">1542</span><span id="L1543">1543</span><span id="L1544">1544</span><span id="L1545">1545</span><span id="L1546">1546</span><span id="L1547">1547</span><span id="L1548">1548</span><span id="L1549">1549</span><span id="L1550">1550</span><span id="L1551">1551</span><span id="L1552">1552</span><span id="L1553">1553</span><span id="L1554">1554</span><span id="L1555">1555</span><span id="L1556">1556</span><span id="L1557">1557</span><span id="L1558">1558</span><span id="L1559">1559</span><span id="L1560">1560</span><span id="L1561">1561</span><span id="L1562">1562</span><span id="L1563">1563</span><span id="L1564">1564</span><span id="L1565">1565</span><span id="L1566">1566</span><span id="L1567">1567</span><span id="L1568">1568</span><span id="L1569">1569</span><span id="L1570">1570</span><span id="L1571">1571</span><span id="L1572">1572</span><span id="L1573">1573</span><span id="L1574">1574</span><span id="L1575">1575</span><span id="L1576">1576</span><span id="L1577">1577</span><span id="L1578">1578</span><span id="L1579">1579</span><span id="L1580">1580</span><span id="L1581">1581</span><span id="L1582">1582</span><span id="L1583">1583</span><span id="L1584">1584</span><span id="L1585">1585</span><span id="L1586">1586</span><span id="L1587">1587</span><span id="L1588">1588</span><span id="L1589">1589</span></td>
							<td class="lines-code"><pre><code class="js"><ol class="linenums"><li class="L1" rel="L1">/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */</li>
<li class="L2" rel="L2"></li>
<li class="L3" rel="L3">var Zepto = (function() {</li>
<li class="L4" rel="L4">  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,</li>
<li class="L5" rel="L5">    document = window.document,</li>
<li class="L6" rel="L6">    elementDisplay = {}, classCache = {},</li>
<li class="L7" rel="L7">    cssNumber = { &#39;column-count&#39;: 1, &#39;columns&#39;: 1, &#39;font-weight&#39;: 1, &#39;line-height&#39;: 1,&#39;opacity&#39;: 1, &#39;z-index&#39;: 1, &#39;zoom&#39;: 1 },</li>
<li class="L8" rel="L8">    fragmentRE = /^\s*&lt;(\w+|!)[^&gt;]*&gt;/,</li>
<li class="L9" rel="L9">    singleTagRE = /^&lt;(\w+)\s*\/?&gt;(?:&lt;\/\1&gt;|)$/,</li>
<li class="L10" rel="L10">    tagExpanderRE = /&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^&gt;]*)\/&gt;/ig,</li>
<li class="L11" rel="L11">    rootNodeRE = /^(?:body|html)$/i,</li>
<li class="L12" rel="L12">    capitalRE = /([A-Z])/g,</li>
<li class="L13" rel="L13"></li>
<li class="L14" rel="L14">    // special attributes that should be get/set via method calls</li>
<li class="L15" rel="L15">    methodAttributes = [&#39;val&#39;, &#39;css&#39;, &#39;html&#39;, &#39;text&#39;, &#39;data&#39;, &#39;width&#39;, &#39;height&#39;, &#39;offset&#39;],</li>
<li class="L16" rel="L16"></li>
<li class="L17" rel="L17">    adjacencyOperators = [ &#39;after&#39;, &#39;prepend&#39;, &#39;before&#39;, &#39;append&#39; ],</li>
<li class="L18" rel="L18">    table = document.createElement(&#39;table&#39;),</li>
<li class="L19" rel="L19">    tableRow = document.createElement(&#39;tr&#39;),</li>
<li class="L20" rel="L20">    containers = {</li>
<li class="L21" rel="L21">      &#39;tr&#39;: document.createElement(&#39;tbody&#39;),</li>
<li class="L22" rel="L22">      &#39;tbody&#39;: table, &#39;thead&#39;: table, &#39;tfoot&#39;: table,</li>
<li class="L23" rel="L23">      &#39;td&#39;: tableRow, &#39;th&#39;: tableRow,</li>
<li class="L24" rel="L24">      &#39;*&#39;: document.createElement(&#39;div&#39;)</li>
<li class="L25" rel="L25">    },</li>
<li class="L26" rel="L26">    readyRE = /complete|loaded|interactive/,</li>
<li class="L27" rel="L27">    simpleSelectorRE = /^[\w-]*$/,</li>
<li class="L28" rel="L28">    class2type = {},</li>
<li class="L29" rel="L29">    toString = class2type.toString,</li>
<li class="L30" rel="L30">    zepto = {},</li>
<li class="L31" rel="L31">    camelize, uniq,</li>
<li class="L32" rel="L32">    tempParent = document.createElement(&#39;div&#39;),</li>
<li class="L33" rel="L33">    propMap = {</li>
<li class="L34" rel="L34">      &#39;tabindex&#39;: &#39;tabIndex&#39;,</li>
<li class="L35" rel="L35">      &#39;readonly&#39;: &#39;readOnly&#39;,</li>
<li class="L36" rel="L36">      &#39;for&#39;: &#39;htmlFor&#39;,</li>
<li class="L37" rel="L37">      &#39;class&#39;: &#39;className&#39;,</li>
<li class="L38" rel="L38">      &#39;maxlength&#39;: &#39;maxLength&#39;,</li>
<li class="L39" rel="L39">      &#39;cellspacing&#39;: &#39;cellSpacing&#39;,</li>
<li class="L40" rel="L40">      &#39;cellpadding&#39;: &#39;cellPadding&#39;,</li>
<li class="L41" rel="L41">      &#39;rowspan&#39;: &#39;rowSpan&#39;,</li>
<li class="L42" rel="L42">      &#39;colspan&#39;: &#39;colSpan&#39;,</li>
<li class="L43" rel="L43">      &#39;usemap&#39;: &#39;useMap&#39;,</li>
<li class="L44" rel="L44">      &#39;frameborder&#39;: &#39;frameBorder&#39;,</li>
<li class="L45" rel="L45">      &#39;contenteditable&#39;: &#39;contentEditable&#39;</li>
<li class="L46" rel="L46">    },</li>
<li class="L47" rel="L47">    isArray = Array.isArray ||</li>
<li class="L48" rel="L48">      function(object){ return object instanceof Array }</li>
<li class="L49" rel="L49"></li>
<li class="L50" rel="L50">  zepto.matches = function(element, selector) {</li>
<li class="L51" rel="L51">    if (!selector || !element || element.nodeType !== 1) return false</li>
<li class="L52" rel="L52">    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||</li>
<li class="L53" rel="L53">                          element.oMatchesSelector || element.matchesSelector</li>
<li class="L54" rel="L54">    if (matchesSelector) return matchesSelector.call(element, selector)</li>
<li class="L55" rel="L55">    // fall back to performing a selector:</li>
<li class="L56" rel="L56">    var match, parent = element.parentNode, temp = !parent</li>
<li class="L57" rel="L57">    if (temp) (parent = tempParent).appendChild(element)</li>
<li class="L58" rel="L58">    match = ~zepto.qsa(parent, selector).indexOf(element)</li>
<li class="L59" rel="L59">    temp &amp;&amp; tempParent.removeChild(element)</li>
<li class="L60" rel="L60">    return match</li>
<li class="L61" rel="L61">  }</li>
<li class="L62" rel="L62"></li>
<li class="L63" rel="L63">  function type(obj) {</li>
<li class="L64" rel="L64">    return obj == null ? String(obj) :</li>
<li class="L65" rel="L65">      class2type[toString.call(obj)] || &#34;object&#34;</li>
<li class="L66" rel="L66">  }</li>
<li class="L67" rel="L67"></li>
<li class="L68" rel="L68">  function isFunction(value) { return type(value) == &#34;function&#34; }</li>
<li class="L69" rel="L69">  function isWindow(obj)     { return obj != null &amp;&amp; obj == obj.window }</li>
<li class="L70" rel="L70">  function isDocument(obj)   { return obj != null &amp;&amp; obj.nodeType == obj.DOCUMENT_NODE }</li>
<li class="L71" rel="L71">  function isObject(obj)     { return type(obj) == &#34;object&#34; }</li>
<li class="L72" rel="L72">  function isPlainObject(obj) {</li>
<li class="L73" rel="L73">    return isObject(obj) &amp;&amp; !isWindow(obj) &amp;&amp; Object.getPrototypeOf(obj) == Object.prototype</li>
<li class="L74" rel="L74">  }</li>
<li class="L75" rel="L75">  function likeArray(obj) { return typeof obj.length == &#39;number&#39; }</li>
<li class="L76" rel="L76"></li>
<li class="L77" rel="L77">  function compact(array) { return filter.call(array, function(item){ return item != null }) }</li>
<li class="L78" rel="L78">  function flatten(array) { return array.length &gt; 0 ? $.fn.concat.apply([], array) : array }</li>
<li class="L79" rel="L79">  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : &#39;&#39; }) }</li>
<li class="L80" rel="L80">  function dasherize(str) {</li>
<li class="L81" rel="L81">    return str.replace(/::/g, &#39;/&#39;)</li>
<li class="L82" rel="L82">           .replace(/([A-Z]+)([A-Z][a-z])/g, &#39;$1_$2&#39;)</li>
<li class="L83" rel="L83">           .replace(/([a-z\d])([A-Z])/g, &#39;$1_$2&#39;)</li>
<li class="L84" rel="L84">           .replace(/_/g, &#39;-&#39;)</li>
<li class="L85" rel="L85">           .toLowerCase()</li>
<li class="L86" rel="L86">  }</li>
<li class="L87" rel="L87">  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }</li>
<li class="L88" rel="L88"></li>
<li class="L89" rel="L89">  function classRE(name) {</li>
<li class="L90" rel="L90">    return name in classCache ?</li>
<li class="L91" rel="L91">      classCache[name] : (classCache[name] = new RegExp(&#39;(^|\\s)&#39; + name + &#39;(\\s|$)&#39;))</li>
<li class="L92" rel="L92">  }</li>
<li class="L93" rel="L93"></li>
<li class="L94" rel="L94">  function maybeAddPx(name, value) {</li>
<li class="L95" rel="L95">    return (typeof value == &#34;number&#34; &amp;&amp; !cssNumber[dasherize(name)]) ? value + &#34;px&#34; : value</li>
<li class="L96" rel="L96">  }</li>
<li class="L97" rel="L97"></li>
<li class="L98" rel="L98">  function defaultDisplay(nodeName) {</li>
<li class="L99" rel="L99">    var element, display</li>
<li class="L100" rel="L100">    if (!elementDisplay[nodeName]) {</li>
<li class="L101" rel="L101">      element = document.createElement(nodeName)</li>
<li class="L102" rel="L102">      document.body.appendChild(element)</li>
<li class="L103" rel="L103">      display = getComputedStyle(element, &#39;&#39;).getPropertyValue(&#34;display&#34;)</li>
<li class="L104" rel="L104">      element.parentNode.removeChild(element)</li>
<li class="L105" rel="L105">      display == &#34;none&#34; &amp;&amp; (display = &#34;block&#34;)</li>
<li class="L106" rel="L106">      elementDisplay[nodeName] = display</li>
<li class="L107" rel="L107">    }</li>
<li class="L108" rel="L108">    return elementDisplay[nodeName]</li>
<li class="L109" rel="L109">  }</li>
<li class="L110" rel="L110"></li>
<li class="L111" rel="L111">  function children(element) {</li>
<li class="L112" rel="L112">    return &#39;children&#39; in element ?</li>
<li class="L113" rel="L113">      slice.call(element.children) :</li>
<li class="L114" rel="L114">      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })</li>
<li class="L115" rel="L115">  }</li>
<li class="L116" rel="L116"></li>
<li class="L117" rel="L117">  // `$.zepto.fragment` takes a html string and an optional tag name</li>
<li class="L118" rel="L118">  // to generate DOM nodes nodes from the given html string.</li>
<li class="L119" rel="L119">  // The generated DOM nodes are returned as an array.</li>
<li class="L120" rel="L120">  // This function can be overriden in plugins for example to make</li>
<li class="L121" rel="L121">  // it compatible with browsers that don&#39;t support the DOM fully.</li>
<li class="L122" rel="L122">  zepto.fragment = function(html, name, properties) {</li>
<li class="L123" rel="L123">    var dom, nodes, container</li>
<li class="L124" rel="L124"></li>
<li class="L125" rel="L125">    // A special case optimization for a single tag</li>
<li class="L126" rel="L126">    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))</li>
<li class="L127" rel="L127"></li>
<li class="L128" rel="L128">    if (!dom) {</li>
<li class="L129" rel="L129">      if (html.replace) html = html.replace(tagExpanderRE, &#34;&lt;$1&gt;&lt;/$2&gt;&#34;)</li>
<li class="L130" rel="L130">      if (name === undefined) name = fragmentRE.test(html) &amp;&amp; RegExp.$1</li>
<li class="L131" rel="L131">      if (!(name in containers)) name = &#39;*&#39;</li>
<li class="L132" rel="L132"></li>
<li class="L133" rel="L133">      container = containers[name]</li>
<li class="L134" rel="L134">      container.innerHTML = &#39;&#39; + html</li>
<li class="L135" rel="L135">      dom = $.each(slice.call(container.childNodes), function(){</li>
<li class="L136" rel="L136">        container.removeChild(this)</li>
<li class="L137" rel="L137">      })</li>
<li class="L138" rel="L138">    }</li>
<li class="L139" rel="L139"></li>
<li class="L140" rel="L140">    if (isPlainObject(properties)) {</li>
<li class="L141" rel="L141">      nodes = $(dom)</li>
<li class="L142" rel="L142">      $.each(properties, function(key, value) {</li>
<li class="L143" rel="L143">        if (methodAttributes.indexOf(key) &gt; -1) nodes[key](value)</li>
<li class="L144" rel="L144">        else nodes.attr(key, value)</li>
<li class="L145" rel="L145">      })</li>
<li class="L146" rel="L146">    }</li>
<li class="L147" rel="L147"></li>
<li class="L148" rel="L148">    return dom</li>
<li class="L149" rel="L149">  }</li>
<li class="L150" rel="L150"></li>
<li class="L151" rel="L151">  // `$.zepto.Z` swaps out the prototype of the given `dom` array</li>
<li class="L152" rel="L152">  // of nodes with `$.fn` and thus supplying all the Zepto functions</li>
<li class="L153" rel="L153">  // to the array. Note that `__proto__` is not supported on Internet</li>
<li class="L154" rel="L154">  // Explorer. This method can be overriden in plugins.</li>
<li class="L155" rel="L155">  zepto.Z = function(dom, selector) {</li>
<li class="L156" rel="L156">    dom = dom || []</li>
<li class="L157" rel="L157">    dom.__proto__ = $.fn</li>
<li class="L158" rel="L158">    dom.selector = selector || &#39;&#39;</li>
<li class="L159" rel="L159">    return dom</li>
<li class="L160" rel="L160">  }</li>
<li class="L161" rel="L161"></li>
<li class="L162" rel="L162">  // `$.zepto.isZ` should return `true` if the given object is a Zepto</li>
<li class="L163" rel="L163">  // collection. This method can be overriden in plugins.</li>
<li class="L164" rel="L164">  zepto.isZ = function(object) {</li>
<li class="L165" rel="L165">    return object instanceof zepto.Z</li>
<li class="L166" rel="L166">  }</li>
<li class="L167" rel="L167"></li>
<li class="L168" rel="L168">  // `$.zepto.init` is Zepto&#39;s counterpart to jQuery&#39;s `$.fn.init` and</li>
<li class="L169" rel="L169">  // takes a CSS selector and an optional context (and handles various</li>
<li class="L170" rel="L170">  // special cases).</li>
<li class="L171" rel="L171">  // This method can be overriden in plugins.</li>
<li class="L172" rel="L172">  zepto.init = function(selector, context) {</li>
<li class="L173" rel="L173">    var dom</li>
<li class="L174" rel="L174">    // If nothing given, return an empty Zepto collection</li>
<li class="L175" rel="L175">    if (!selector) return zepto.Z()</li>
<li class="L176" rel="L176">    // Optimize for string selectors</li>
<li class="L177" rel="L177">    else if (typeof selector == &#39;string&#39;) {</li>
<li class="L178" rel="L178">      selector = selector.trim()</li>
<li class="L179" rel="L179">      // If it&#39;s a html fragment, create nodes from it</li>
<li class="L180" rel="L180">      // Note: In both Chrome 21 and Firefox 15, DOM error 12</li>
<li class="L181" rel="L181">      // is thrown if the fragment doesn&#39;t begin with &lt;</li>
<li class="L182" rel="L182">      if (selector[0] == &#39;&lt;&#39; &amp;&amp; fragmentRE.test(selector))</li>
<li class="L183" rel="L183">        dom = zepto.fragment(selector, RegExp.$1, context), selector = null</li>
<li class="L184" rel="L184">      // If there&#39;s a context, create a collection on that context first, and select</li>
<li class="L185" rel="L185">      // nodes from there</li>
<li class="L186" rel="L186">      else if (context !== undefined) return $(context).find(selector)</li>
<li class="L187" rel="L187">      // If it&#39;s a CSS selector, use it to select nodes.</li>
<li class="L188" rel="L188">      else dom = zepto.qsa(document, selector)</li>
<li class="L189" rel="L189">    }</li>
<li class="L190" rel="L190">    // If a function is given, call it when the DOM is ready</li>
<li class="L191" rel="L191">    else if (isFunction(selector)) return $(document).ready(selector)</li>
<li class="L192" rel="L192">    // If a Zepto collection is given, just return it</li>
<li class="L193" rel="L193">    else if (zepto.isZ(selector)) return selector</li>
<li class="L194" rel="L194">    else {</li>
<li class="L195" rel="L195">      // normalize array if an array of nodes is given</li>
<li class="L196" rel="L196">      if (isArray(selector)) dom = compact(selector)</li>
<li class="L197" rel="L197">      // Wrap DOM nodes.</li>
<li class="L198" rel="L198">      else if (isObject(selector))</li>
<li class="L199" rel="L199">        dom = [selector], selector = null</li>
<li class="L200" rel="L200">      // If it&#39;s a html fragment, create nodes from it</li>
<li class="L201" rel="L201">      else if (fragmentRE.test(selector))</li>
<li class="L202" rel="L202">        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null</li>
<li class="L203" rel="L203">      // If there&#39;s a context, create a collection on that context first, and select</li>
<li class="L204" rel="L204">      // nodes from there</li>
<li class="L205" rel="L205">      else if (context !== undefined) return $(context).find(selector)</li>
<li class="L206" rel="L206">      // And last but no least, if it&#39;s a CSS selector, use it to select nodes.</li>
<li class="L207" rel="L207">      else dom = zepto.qsa(document, selector)</li>
<li class="L208" rel="L208">    }</li>
<li class="L209" rel="L209">    // create a new Zepto collection from the nodes found</li>
<li class="L210" rel="L210">    return zepto.Z(dom, selector)</li>
<li class="L211" rel="L211">  }</li>
<li class="L212" rel="L212"></li>
<li class="L213" rel="L213">  // `$` will be the base `Zepto` object. When calling this</li>
<li class="L214" rel="L214">  // function just call `$.zepto.init, which makes the implementation</li>
<li class="L215" rel="L215">  // details of selecting nodes and creating Zepto collections</li>
<li class="L216" rel="L216">  // patchable in plugins.</li>
<li class="L217" rel="L217">  $ = function(selector, context){</li>
<li class="L218" rel="L218">    return zepto.init(selector, context)</li>
<li class="L219" rel="L219">  }</li>
<li class="L220" rel="L220"></li>
<li class="L221" rel="L221">  function extend(target, source, deep) {</li>
<li class="L222" rel="L222">    for (key in source)</li>
<li class="L223" rel="L223">      if (deep &amp;&amp; (isPlainObject(source[key]) || isArray(source[key]))) {</li>
<li class="L224" rel="L224">        if (isPlainObject(source[key]) &amp;&amp; !isPlainObject(target[key]))</li>
<li class="L225" rel="L225">          target[key] = {}</li>
<li class="L226" rel="L226">        if (isArray(source[key]) &amp;&amp; !isArray(target[key]))</li>
<li class="L227" rel="L227">          target[key] = []</li>
<li class="L228" rel="L228">        extend(target[key], source[key], deep)</li>
<li class="L229" rel="L229">      }</li>
<li class="L230" rel="L230">      else if (source[key] !== undefined) target[key] = source[key]</li>
<li class="L231" rel="L231">  }</li>
<li class="L232" rel="L232"></li>
<li class="L233" rel="L233">  // Copy all but undefined properties from one or more</li>
<li class="L234" rel="L234">  // objects to the `target` object.</li>
<li class="L235" rel="L235">  $.extend = function(target){</li>
<li class="L236" rel="L236">    var deep, args = slice.call(arguments, 1)</li>
<li class="L237" rel="L237">    if (typeof target == &#39;boolean&#39;) {</li>
<li class="L238" rel="L238">      deep = target</li>
<li class="L239" rel="L239">      target = args.shift()</li>
<li class="L240" rel="L240">    }</li>
<li class="L241" rel="L241">    args.forEach(function(arg){ extend(target, arg, deep) })</li>
<li class="L242" rel="L242">    return target</li>
<li class="L243" rel="L243">  }</li>
<li class="L244" rel="L244"></li>
<li class="L245" rel="L245">  // `$.zepto.qsa` is Zepto&#39;s CSS selector implementation which</li>
<li class="L246" rel="L246">  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.</li>
<li class="L247" rel="L247">  // This method can be overriden in plugins.</li>
<li class="L248" rel="L248">  zepto.qsa = function(element, selector){</li>
<li class="L249" rel="L249">    var found,</li>
<li class="L250" rel="L250">        maybeID = selector[0] == &#39;#&#39;,</li>
<li class="L251" rel="L251">        maybeClass = !maybeID &amp;&amp; selector[0] == &#39;.&#39;,</li>
<li class="L252" rel="L252">        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked</li>
<li class="L253" rel="L253">        isSimple = simpleSelectorRE.test(nameOnly)</li>
<li class="L254" rel="L254">    return (isDocument(element) &amp;&amp; isSimple &amp;&amp; maybeID) ?</li>
<li class="L255" rel="L255">      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :</li>
<li class="L256" rel="L256">      (element.nodeType !== 1 &amp;&amp; element.nodeType !== 9) ? [] :</li>
<li class="L257" rel="L257">      slice.call(</li>
<li class="L258" rel="L258">        isSimple &amp;&amp; !maybeID ?</li>
<li class="L259" rel="L259">          maybeClass ? element.getElementsByClassName(nameOnly) : // If it&#39;s simple, it could be a class</li>
<li class="L260" rel="L260">          element.getElementsByTagName(selector) : // Or a tag</li>
<li class="L261" rel="L261">          element.querySelectorAll(selector) // Or it&#39;s not simple, and we need to query all</li>
<li class="L262" rel="L262">      )</li>
<li class="L263" rel="L263">  }</li>
<li class="L264" rel="L264"></li>
<li class="L265" rel="L265">  function filtered(nodes, selector) {</li>
<li class="L266" rel="L266">    return selector == null ? $(nodes) : $(nodes).filter(selector)</li>
<li class="L267" rel="L267">  }</li>
<li class="L268" rel="L268"></li>
<li class="L269" rel="L269">  $.contains = document.documentElement.contains ?</li>
<li class="L270" rel="L270">    function(parent, node) {</li>
<li class="L271" rel="L271">      return parent !== node &amp;&amp; parent.contains(node)</li>
<li class="L272" rel="L272">    } :</li>
<li class="L273" rel="L273">    function(parent, node) {</li>
<li class="L274" rel="L274">      while (node &amp;&amp; (node = node.parentNode))</li>
<li class="L275" rel="L275">        if (node === parent) return true</li>
<li class="L276" rel="L276">      return false</li>
<li class="L277" rel="L277">    }</li>
<li class="L278" rel="L278"></li>
<li class="L279" rel="L279">  function funcArg(context, arg, idx, payload) {</li>
<li class="L280" rel="L280">    return isFunction(arg) ? arg.call(context, idx, payload) : arg</li>
<li class="L281" rel="L281">  }</li>
<li class="L282" rel="L282"></li>
<li class="L283" rel="L283">  function setAttribute(node, name, value) {</li>
<li class="L284" rel="L284">    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)</li>
<li class="L285" rel="L285">  }</li>
<li class="L286" rel="L286"></li>
<li class="L287" rel="L287">  // access className property while respecting SVGAnimatedString</li>
<li class="L288" rel="L288">  function className(node, value){</li>
<li class="L289" rel="L289">    var klass = node.className || &#39;&#39;,</li>
<li class="L290" rel="L290">        svg   = klass &amp;&amp; klass.baseVal !== undefined</li>
<li class="L291" rel="L291"></li>
<li class="L292" rel="L292">    if (value === undefined) return svg ? klass.baseVal : klass</li>
<li class="L293" rel="L293">    svg ? (klass.baseVal = value) : (node.className = value)</li>
<li class="L294" rel="L294">  }</li>
<li class="L295" rel="L295"></li>
<li class="L296" rel="L296">  // &#34;true&#34;  =&gt; true</li>
<li class="L297" rel="L297">  // &#34;false&#34; =&gt; false</li>
<li class="L298" rel="L298">  // &#34;null&#34;  =&gt; null</li>
<li class="L299" rel="L299">  // &#34;42&#34;    =&gt; 42</li>
<li class="L300" rel="L300">  // &#34;42.5&#34;  =&gt; 42.5</li>
<li class="L301" rel="L301">  // &#34;08&#34;    =&gt; &#34;08&#34;</li>
<li class="L302" rel="L302">  // JSON    =&gt; parse if valid</li>
<li class="L303" rel="L303">  // String  =&gt; self</li>
<li class="L304" rel="L304">  function deserializeValue(value) {</li>
<li class="L305" rel="L305">    try {</li>
<li class="L306" rel="L306">      return value ?</li>
<li class="L307" rel="L307">        value == &#34;true&#34; ||</li>
<li class="L308" rel="L308">        ( value == &#34;false&#34; ? false :</li>
<li class="L309" rel="L309">          value == &#34;null&#34; ? null :</li>
<li class="L310" rel="L310">          +value + &#34;&#34; == value ? +value :</li>
<li class="L311" rel="L311">          /^[\[\{]/.test(value) ? $.parseJSON(value) :</li>
<li class="L312" rel="L312">          value )</li>
<li class="L313" rel="L313">        : value</li>
<li class="L314" rel="L314">    } catch(e) {</li>
<li class="L315" rel="L315">      return value</li>
<li class="L316" rel="L316">    }</li>
<li class="L317" rel="L317">  }</li>
<li class="L318" rel="L318"></li>
<li class="L319" rel="L319">  $.type = type</li>
<li class="L320" rel="L320">  $.isFunction = isFunction</li>
<li class="L321" rel="L321">  $.isWindow = isWindow</li>
<li class="L322" rel="L322">  $.isArray = isArray</li>
<li class="L323" rel="L323">  $.isPlainObject = isPlainObject</li>
<li class="L324" rel="L324"></li>
<li class="L325" rel="L325">  $.isEmptyObject = function(obj) {</li>
<li class="L326" rel="L326">    var name</li>
<li class="L327" rel="L327">    for (name in obj) return false</li>
<li class="L328" rel="L328">    return true</li>
<li class="L329" rel="L329">  }</li>
<li class="L330" rel="L330"></li>
<li class="L331" rel="L331">  $.inArray = function(elem, array, i){</li>
<li class="L332" rel="L332">    return emptyArray.indexOf.call(array, elem, i)</li>
<li class="L333" rel="L333">  }</li>
<li class="L334" rel="L334"></li>
<li class="L335" rel="L335">  $.camelCase = camelize</li>
<li class="L336" rel="L336">  $.trim = function(str) {</li>
<li class="L337" rel="L337">    return str == null ? &#34;&#34; : String.prototype.trim.call(str)</li>
<li class="L338" rel="L338">  }</li>
<li class="L339" rel="L339"></li>
<li class="L340" rel="L340">  // plugin compatibility</li>
<li class="L341" rel="L341">  $.uuid = 0</li>
<li class="L342" rel="L342">  $.support = { }</li>
<li class="L343" rel="L343">  $.expr = { }</li>
<li class="L344" rel="L344"></li>
<li class="L345" rel="L345">  $.map = function(elements, callback){</li>
<li class="L346" rel="L346">    var value, values = [], i, key</li>
<li class="L347" rel="L347">    if (likeArray(elements))</li>
<li class="L348" rel="L348">      for (i = 0; i &lt; elements.length; i++) {</li>
<li class="L349" rel="L349">        value = callback(elements[i], i)</li>
<li class="L350" rel="L350">        if (value != null) values.push(value)</li>
<li class="L351" rel="L351">      }</li>
<li class="L352" rel="L352">    else</li>
<li class="L353" rel="L353">      for (key in elements) {</li>
<li class="L354" rel="L354">        value = callback(elements[key], key)</li>
<li class="L355" rel="L355">        if (value != null) values.push(value)</li>
<li class="L356" rel="L356">      }</li>
<li class="L357" rel="L357">    return flatten(values)</li>
<li class="L358" rel="L358">  }</li>
<li class="L359" rel="L359"></li>
<li class="L360" rel="L360">  $.each = function(elements, callback){</li>
<li class="L361" rel="L361">    var i, key</li>
<li class="L362" rel="L362">    if (likeArray(elements)) {</li>
<li class="L363" rel="L363">      for (i = 0; i &lt; elements.length; i++)</li>
<li class="L364" rel="L364">        if (callback.call(elements[i], i, elements[i]) === false) return elements</li>
<li class="L365" rel="L365">    } else {</li>
<li class="L366" rel="L366">      for (key in elements)</li>
<li class="L367" rel="L367">        if (callback.call(elements[key], key, elements[key]) === false) return elements</li>
<li class="L368" rel="L368">    }</li>
<li class="L369" rel="L369"></li>
<li class="L370" rel="L370">    return elements</li>
<li class="L371" rel="L371">  }</li>
<li class="L372" rel="L372"></li>
<li class="L373" rel="L373">  $.grep = function(elements, callback){</li>
<li class="L374" rel="L374">    return filter.call(elements, callback)</li>
<li class="L375" rel="L375">  }</li>
<li class="L376" rel="L376"></li>
<li class="L377" rel="L377">  if (window.JSON) $.parseJSON = JSON.parse</li>
<li class="L378" rel="L378"></li>
<li class="L379" rel="L379">  // Populate the class2type map</li>
<li class="L380" rel="L380">  $.each(&#34;Boolean Number String Function Array Date RegExp Object Error&#34;.split(&#34; &#34;), function(i, name) {</li>
<li class="L381" rel="L381">    class2type[ &#34;[object &#34; + name + &#34;]&#34; ] = name.toLowerCase()</li>
<li class="L382" rel="L382">  })</li>
<li class="L383" rel="L383"></li>
<li class="L384" rel="L384">  // Define methods that will be available on all</li>
<li class="L385" rel="L385">  // Zepto collections</li>
<li class="L386" rel="L386">  $.fn = {</li>
<li class="L387" rel="L387">    // Because a collection acts like an array</li>
<li class="L388" rel="L388">    // copy over these useful array functions.</li>
<li class="L389" rel="L389">    forEach: emptyArray.forEach,</li>
<li class="L390" rel="L390">    reduce: emptyArray.reduce,</li>
<li class="L391" rel="L391">    push: emptyArray.push,</li>
<li class="L392" rel="L392">    sort: emptyArray.sort,</li>
<li class="L393" rel="L393">    indexOf: emptyArray.indexOf,</li>
<li class="L394" rel="L394">    concat: emptyArray.concat,</li>
<li class="L395" rel="L395"></li>
<li class="L396" rel="L396">    // `map` and `slice` in the jQuery API work differently</li>
<li class="L397" rel="L397">    // from their array counterparts</li>
<li class="L398" rel="L398">    map: function(fn){</li>
<li class="L399" rel="L399">      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))</li>
<li class="L400" rel="L400">    },</li>
<li class="L401" rel="L401">    slice: function(){</li>
<li class="L402" rel="L402">      return $(slice.apply(this, arguments))</li>
<li class="L403" rel="L403">    },</li>
<li class="L404" rel="L404"></li>
<li class="L405" rel="L405">    ready: function(callback){</li>
<li class="L406" rel="L406">      // need to check if document.body exists for IE as that browser reports</li>
<li class="L407" rel="L407">      // document ready when it hasn&#39;t yet created the body element</li>
<li class="L408" rel="L408">      if (readyRE.test(document.readyState) &amp;&amp; document.body) callback($)</li>
<li class="L409" rel="L409">      else document.addEventListener(&#39;DOMContentLoaded&#39;, function(){ callback($) }, false)</li>
<li class="L410" rel="L410">      return this</li>
<li class="L411" rel="L411">    },</li>
<li class="L412" rel="L412">    get: function(idx){</li>
<li class="L413" rel="L413">      return idx === undefined ? slice.call(this) : this[idx &gt;= 0 ? idx : idx + this.length]</li>
<li class="L414" rel="L414">    },</li>
<li class="L415" rel="L415">    toArray: function(){ return this.get() },</li>
<li class="L416" rel="L416">    size: function(){</li>
<li class="L417" rel="L417">      return this.length</li>
<li class="L418" rel="L418">    },</li>
<li class="L419" rel="L419">    remove: function(){</li>
<li class="L420" rel="L420">      return this.each(function(){</li>
<li class="L421" rel="L421">        if (this.parentNode != null)</li>
<li class="L422" rel="L422">          this.parentNode.removeChild(this)</li>
<li class="L423" rel="L423">      })</li>
<li class="L424" rel="L424">    },</li>
<li class="L425" rel="L425">    each: function(callback){</li>
<li class="L426" rel="L426">      emptyArray.every.call(this, function(el, idx){</li>
<li class="L427" rel="L427">        return callback.call(el, idx, el) !== false</li>
<li class="L428" rel="L428">      })</li>
<li class="L429" rel="L429">      return this</li>
<li class="L430" rel="L430">    },</li>
<li class="L431" rel="L431">    filter: function(selector){</li>
<li class="L432" rel="L432">      if (isFunction(selector)) return this.not(this.not(selector))</li>
<li class="L433" rel="L433">      return $(filter.call(this, function(element){</li>
<li class="L434" rel="L434">        return zepto.matches(element, selector)</li>
<li class="L435" rel="L435">      }))</li>
<li class="L436" rel="L436">    },</li>
<li class="L437" rel="L437">    add: function(selector,context){</li>
<li class="L438" rel="L438">      return $(uniq(this.concat($(selector,context))))</li>
<li class="L439" rel="L439">    },</li>
<li class="L440" rel="L440">    is: function(selector){</li>
<li class="L441" rel="L441">      return this.length &gt; 0 &amp;&amp; zepto.matches(this[0], selector)</li>
<li class="L442" rel="L442">    },</li>
<li class="L443" rel="L443">    not: function(selector){</li>
<li class="L444" rel="L444">      var nodes=[]</li>
<li class="L445" rel="L445">      if (isFunction(selector) &amp;&amp; selector.call !== undefined)</li>
<li class="L446" rel="L446">        this.each(function(idx){</li>
<li class="L447" rel="L447">          if (!selector.call(this,idx)) nodes.push(this)</li>
<li class="L448" rel="L448">        })</li>
<li class="L449" rel="L449">      else {</li>
<li class="L450" rel="L450">        var excludes = typeof selector == &#39;string&#39; ? this.filter(selector) :</li>
<li class="L451" rel="L451">          (likeArray(selector) &amp;&amp; isFunction(selector.item)) ? slice.call(selector) : $(selector)</li>
<li class="L452" rel="L452">        this.forEach(function(el){</li>
<li class="L453" rel="L453">          if (excludes.indexOf(el) &lt; 0) nodes.push(el)</li>
<li class="L454" rel="L454">        })</li>
<li class="L455" rel="L455">      }</li>
<li class="L456" rel="L456">      return $(nodes)</li>
<li class="L457" rel="L457">    },</li>
<li class="L458" rel="L458">    has: function(selector){</li>
<li class="L459" rel="L459">      return this.filter(function(){</li>
<li class="L460" rel="L460">        return isObject(selector) ?</li>
<li class="L461" rel="L461">          $.contains(this, selector) :</li>
<li class="L462" rel="L462">          $(this).find(selector).size()</li>
<li class="L463" rel="L463">      })</li>
<li class="L464" rel="L464">    },</li>
<li class="L465" rel="L465">    eq: function(idx){</li>
<li class="L466" rel="L466">      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)</li>
<li class="L467" rel="L467">    },</li>
<li class="L468" rel="L468">    first: function(){</li>
<li class="L469" rel="L469">      var el = this[0]</li>
<li class="L470" rel="L470">      return el &amp;&amp; !isObject(el) ? el : $(el)</li>
<li class="L471" rel="L471">    },</li>
<li class="L472" rel="L472">    last: function(){</li>
<li class="L473" rel="L473">      var el = this[this.length - 1]</li>
<li class="L474" rel="L474">      return el &amp;&amp; !isObject(el) ? el : $(el)</li>
<li class="L475" rel="L475">    },</li>
<li class="L476" rel="L476">    find: function(selector){</li>
<li class="L477" rel="L477">      var result, $this = this</li>
<li class="L478" rel="L478">      if (!selector) result = $()</li>
<li class="L479" rel="L479">      else if (typeof selector == &#39;object&#39;)</li>
<li class="L480" rel="L480">        result = $(selector).filter(function(){</li>
<li class="L481" rel="L481">          var node = this</li>
<li class="L482" rel="L482">          return emptyArray.some.call($this, function(parent){</li>
<li class="L483" rel="L483">            return $.contains(parent, node)</li>
<li class="L484" rel="L484">          })</li>
<li class="L485" rel="L485">        })</li>
<li class="L486" rel="L486">      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))</li>
<li class="L487" rel="L487">      else result = this.map(function(){ return zepto.qsa(this, selector) })</li>
<li class="L488" rel="L488">      return result</li>
<li class="L489" rel="L489">    },</li>
<li class="L490" rel="L490">    closest: function(selector, context){</li>
<li class="L491" rel="L491">      var node = this[0], collection = false</li>
<li class="L492" rel="L492">      if (typeof selector == &#39;object&#39;) collection = $(selector)</li>
<li class="L493" rel="L493">      while (node &amp;&amp; !(collection ? collection.indexOf(node) &gt;= 0 : zepto.matches(node, selector)))</li>
<li class="L494" rel="L494">        node = node !== context &amp;&amp; !isDocument(node) &amp;&amp; node.parentNode</li>
<li class="L495" rel="L495">      return $(node)</li>
<li class="L496" rel="L496">    },</li>
<li class="L497" rel="L497">    parents: function(selector){</li>
<li class="L498" rel="L498">      var ancestors = [], nodes = this</li>
<li class="L499" rel="L499">      while (nodes.length &gt; 0)</li>
<li class="L500" rel="L500">        nodes = $.map(nodes, function(node){</li>
<li class="L501" rel="L501">          if ((node = node.parentNode) &amp;&amp; !isDocument(node) &amp;&amp; ancestors.indexOf(node) &lt; 0) {</li>
<li class="L502" rel="L502">            ancestors.push(node)</li>
<li class="L503" rel="L503">            return node</li>
<li class="L504" rel="L504">          }</li>
<li class="L505" rel="L505">        })</li>
<li class="L506" rel="L506">      return filtered(ancestors, selector)</li>
<li class="L507" rel="L507">    },</li>
<li class="L508" rel="L508">    parent: function(selector){</li>
<li class="L509" rel="L509">      return filtered(uniq(this.pluck(&#39;parentNode&#39;)), selector)</li>
<li class="L510" rel="L510">    },</li>
<li class="L511" rel="L511">    children: function(selector){</li>
<li class="L512" rel="L512">      return filtered(this.map(function(){ return children(this) }), selector)</li>
<li class="L513" rel="L513">    },</li>
<li class="L514" rel="L514">    contents: function() {</li>
<li class="L515" rel="L515">      return this.map(function() { return slice.call(this.childNodes) })</li>
<li class="L516" rel="L516">    },</li>
<li class="L517" rel="L517">    siblings: function(selector){</li>
<li class="L518" rel="L518">      return filtered(this.map(function(i, el){</li>
<li class="L519" rel="L519">        return filter.call(children(el.parentNode), function(child){ return child!==el })</li>
<li class="L520" rel="L520">      }), selector)</li>
<li class="L521" rel="L521">    },</li>
<li class="L522" rel="L522">    empty: function(){</li>
<li class="L523" rel="L523">      return this.each(function(){ this.innerHTML = &#39;&#39; })</li>
<li class="L524" rel="L524">    },</li>
<li class="L525" rel="L525">    // `pluck` is borrowed from Prototype.js</li>
<li class="L526" rel="L526">    pluck: function(property){</li>
<li class="L527" rel="L527">      return $.map(this, function(el){ return el[property] })</li>
<li class="L528" rel="L528">    },</li>
<li class="L529" rel="L529">    show: function(){</li>
<li class="L530" rel="L530">      return this.each(function(){</li>
<li class="L531" rel="L531">        this.style.display == &#34;none&#34; &amp;&amp; (this.style.display = &#39;&#39;)</li>
<li class="L532" rel="L532">        if (getComputedStyle(this, &#39;&#39;).getPropertyValue(&#34;display&#34;) == &#34;none&#34;)</li>
<li class="L533" rel="L533">          this.style.display = defaultDisplay(this.nodeName)</li>
<li class="L534" rel="L534">      })</li>
<li class="L535" rel="L535">    },</li>
<li class="L536" rel="L536">    replaceWith: function(newContent){</li>
<li class="L537" rel="L537">      return this.before(newContent).remove()</li>
<li class="L538" rel="L538">    },</li>
<li class="L539" rel="L539">    wrap: function(structure){</li>
<li class="L540" rel="L540">      var func = isFunction(structure)</li>
<li class="L541" rel="L541">      if (this[0] &amp;&amp; !func)</li>
<li class="L542" rel="L542">        var dom   = $(structure).get(0),</li>
<li class="L543" rel="L543">            clone = dom.parentNode || this.length &gt; 1</li>
<li class="L544" rel="L544"></li>
<li class="L545" rel="L545">      return this.each(function(index){</li>
<li class="L546" rel="L546">        $(this).wrapAll(</li>
<li class="L547" rel="L547">          func ? structure.call(this, index) :</li>
<li class="L548" rel="L548">            clone ? dom.cloneNode(true) : dom</li>
<li class="L549" rel="L549">        )</li>
<li class="L550" rel="L550">      })</li>
<li class="L551" rel="L551">    },</li>
<li class="L552" rel="L552">    wrapAll: function(structure){</li>
<li class="L553" rel="L553">      if (this[0]) {</li>
<li class="L554" rel="L554">        $(this[0]).before(structure = $(structure))</li>
<li class="L555" rel="L555">        var children</li>
<li class="L556" rel="L556">        // drill down to the inmost element</li>
<li class="L557" rel="L557">        while ((children = structure.children()).length) structure = children.first()</li>
<li class="L558" rel="L558">        $(structure).append(this)</li>
<li class="L559" rel="L559">      }</li>
<li class="L560" rel="L560">      return this</li>
<li class="L561" rel="L561">    },</li>
<li class="L562" rel="L562">    wrapInner: function(structure){</li>
<li class="L563" rel="L563">      var func = isFunction(structure)</li>
<li class="L564" rel="L564">      return this.each(function(index){</li>
<li class="L565" rel="L565">        var self = $(this), contents = self.contents(),</li>
<li class="L566" rel="L566">            dom  = func ? structure.call(this, index) : structure</li>
<li class="L567" rel="L567">        contents.length ? contents.wrapAll(dom) : self.append(dom)</li>
<li class="L568" rel="L568">      })</li>
<li class="L569" rel="L569">    },</li>
<li class="L570" rel="L570">    unwrap: function(){</li>
<li class="L571" rel="L571">      this.parent().each(function(){</li>
<li class="L572" rel="L572">        $(this).replaceWith($(this).children())</li>
<li class="L573" rel="L573">      })</li>
<li class="L574" rel="L574">      return this</li>
<li class="L575" rel="L575">    },</li>
<li class="L576" rel="L576">    clone: function(){</li>
<li class="L577" rel="L577">      return this.map(function(){ return this.cloneNode(true) })</li>
<li class="L578" rel="L578">    },</li>
<li class="L579" rel="L579">    hide: function(){</li>
<li class="L580" rel="L580">      return this.css(&#34;display&#34;, &#34;none&#34;)</li>
<li class="L581" rel="L581">    },</li>
<li class="L582" rel="L582">    toggle: function(setting){</li>
<li class="L583" rel="L583">      return this.each(function(){</li>
<li class="L584" rel="L584">        var el = $(this)</li>
<li class="L585" rel="L585">        ;(setting === undefined ? el.css(&#34;display&#34;) == &#34;none&#34; : setting) ? el.show() : el.hide()</li>
<li class="L586" rel="L586">      })</li>
<li class="L587" rel="L587">    },</li>
<li class="L588" rel="L588">    prev: function(selector){ return $(this.pluck(&#39;previousElementSibling&#39;)).filter(selector || &#39;*&#39;) },</li>
<li class="L589" rel="L589">    next: function(selector){ return $(this.pluck(&#39;nextElementSibling&#39;)).filter(selector || &#39;*&#39;) },</li>
<li class="L590" rel="L590">    html: function(html){</li>
<li class="L591" rel="L591">      return 0 in arguments ?</li>
<li class="L592" rel="L592">        this.each(function(idx){</li>
<li class="L593" rel="L593">          var originHtml = this.innerHTML</li>
<li class="L594" rel="L594">          $(this).empty().append( funcArg(this, html, idx, originHtml) )</li>
<li class="L595" rel="L595">        }) :</li>
<li class="L596" rel="L596">        (0 in this ? this[0].innerHTML : null)</li>
<li class="L597" rel="L597">    },</li>
<li class="L598" rel="L598">    text: function(text){</li>
<li class="L599" rel="L599">      return 0 in arguments ?</li>
<li class="L600" rel="L600">        this.each(function(idx){</li>
<li class="L601" rel="L601">          var newText = funcArg(this, text, idx, this.textContent)</li>
<li class="L602" rel="L602">          this.textContent = newText == null ? &#39;&#39; : &#39;&#39;+newText</li>
<li class="L603" rel="L603">        }) :</li>
<li class="L604" rel="L604">        (0 in this ? this[0].textContent : null)</li>
<li class="L605" rel="L605">    },</li>
<li class="L606" rel="L606">    attr: function(name, value){</li>
<li class="L607" rel="L607">      var result</li>
<li class="L608" rel="L608">      return (typeof name == &#39;string&#39; &amp;&amp; !(1 in arguments)) ?</li>
<li class="L609" rel="L609">        (!this.length || this[0].nodeType !== 1 ? undefined :</li>
<li class="L610" rel="L610">          (!(result = this[0].getAttribute(name)) &amp;&amp; name in this[0]) ? this[0][name] : result</li>
<li class="L611" rel="L611">        ) :</li>
<li class="L612" rel="L612">        this.each(function(idx){</li>
<li class="L613" rel="L613">          if (this.nodeType !== 1) return</li>
<li class="L614" rel="L614">          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])</li>
<li class="L615" rel="L615">          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))</li>
<li class="L616" rel="L616">        })</li>
<li class="L617" rel="L617">    },</li>
<li class="L618" rel="L618">    removeAttr: function(name){</li>
<li class="L619" rel="L619">      return this.each(function(){ this.nodeType === 1 &amp;&amp; name.split(&#39; &#39;).forEach(function(attribute){</li>
<li class="L620" rel="L620">        setAttribute(this, attribute)</li>
<li class="L621" rel="L621">      }, this)})</li>
<li class="L622" rel="L622">    },</li>
<li class="L623" rel="L623">    prop: function(name, value){</li>
<li class="L624" rel="L624">      name = propMap[name] || name</li>
<li class="L625" rel="L625">      return (1 in arguments) ?</li>
<li class="L626" rel="L626">        this.each(function(idx){</li>
<li class="L627" rel="L627">          this[name] = funcArg(this, value, idx, this[name])</li>
<li class="L628" rel="L628">        }) :</li>
<li class="L629" rel="L629">        (this[0] &amp;&amp; this[0][name])</li>
<li class="L630" rel="L630">    },</li>
<li class="L631" rel="L631">    data: function(name, value){</li>
<li class="L632" rel="L632">      var attrName = &#39;data-&#39; + name.replace(capitalRE, &#39;-$1&#39;).toLowerCase()</li>
<li class="L633" rel="L633"></li>
<li class="L634" rel="L634">      var data = (1 in arguments) ?</li>
<li class="L635" rel="L635">        this.attr(attrName, value) :</li>
<li class="L636" rel="L636">        this.attr(attrName)</li>
<li class="L637" rel="L637"></li>
<li class="L638" rel="L638">      return data !== null ? deserializeValue(data) : undefined</li>
<li class="L639" rel="L639">    },</li>
<li class="L640" rel="L640">    val: function(value){</li>
<li class="L641" rel="L641">      return 0 in arguments ?</li>
<li class="L642" rel="L642">        this.each(function(idx){</li>
<li class="L643" rel="L643">          this.value = funcArg(this, value, idx, this.value)</li>
<li class="L644" rel="L644">        }) :</li>
<li class="L645" rel="L645">        (this[0] &amp;&amp; (this[0].multiple ?</li>
<li class="L646" rel="L646">           $(this[0]).find(&#39;option&#39;).filter(function(){ return this.selected }).pluck(&#39;value&#39;) :</li>
<li class="L647" rel="L647">           this[0].value)</li>
<li class="L648" rel="L648">        )</li>
<li class="L649" rel="L649">    },</li>
<li class="L650" rel="L650">    offset: function(coordinates){</li>
<li class="L651" rel="L651">      if (coordinates) return this.each(function(index){</li>
<li class="L652" rel="L652">        var $this = $(this),</li>
<li class="L653" rel="L653">            coords = funcArg(this, coordinates, index, $this.offset()),</li>
<li class="L654" rel="L654">            parentOffset = $this.offsetParent().offset(),</li>
<li class="L655" rel="L655">            props = {</li>
<li class="L656" rel="L656">              top:  coords.top  - parentOffset.top,</li>
<li class="L657" rel="L657">              left: coords.left - parentOffset.left</li>
<li class="L658" rel="L658">            }</li>
<li class="L659" rel="L659"></li>
<li class="L660" rel="L660">        if ($this.css(&#39;position&#39;) == &#39;static&#39;) props[&#39;position&#39;] = &#39;relative&#39;</li>
<li class="L661" rel="L661">        $this.css(props)</li>
<li class="L662" rel="L662">      })</li>
<li class="L663" rel="L663">      if (!this.length) return null</li>
<li class="L664" rel="L664">      var obj = this[0].getBoundingClientRect()</li>
<li class="L665" rel="L665">      return {</li>
<li class="L666" rel="L666">        left: obj.left + window.pageXOffset,</li>
<li class="L667" rel="L667">        top: obj.top + window.pageYOffset,</li>
<li class="L668" rel="L668">        width: Math.round(obj.width),</li>
<li class="L669" rel="L669">        height: Math.round(obj.height)</li>
<li class="L670" rel="L670">      }</li>
<li class="L671" rel="L671">    },</li>
<li class="L672" rel="L672">    css: function(property, value){</li>
<li class="L673" rel="L673">      if (arguments.length &lt; 2) {</li>
<li class="L674" rel="L674">        var computedStyle, element = this[0]</li>
<li class="L675" rel="L675">        if(!element) return</li>
<li class="L676" rel="L676">        computedStyle = getComputedStyle(element, &#39;&#39;)</li>
<li class="L677" rel="L677">        if (typeof property == &#39;string&#39;)</li>
<li class="L678" rel="L678">          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)</li>
<li class="L679" rel="L679">        else if (isArray(property)) {</li>
<li class="L680" rel="L680">          var props = {}</li>
<li class="L681" rel="L681">          $.each(property, function(_, prop){</li>
<li class="L682" rel="L682">            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))</li>
<li class="L683" rel="L683">          })</li>
<li class="L684" rel="L684">          return props</li>
<li class="L685" rel="L685">        }</li>
<li class="L686" rel="L686">      }</li>
<li class="L687" rel="L687"></li>
<li class="L688" rel="L688">      var css = &#39;&#39;</li>
<li class="L689" rel="L689">      if (type(property) == &#39;string&#39;) {</li>
<li class="L690" rel="L690">        if (!value &amp;&amp; value !== 0)</li>
<li class="L691" rel="L691">          this.each(function(){ this.style.removeProperty(dasherize(property)) })</li>
<li class="L692" rel="L692">        else</li>
<li class="L693" rel="L693">          css = dasherize(property) + &#34;:&#34; + maybeAddPx(property, value)</li>
<li class="L694" rel="L694">      } else {</li>
<li class="L695" rel="L695">        for (key in property)</li>
<li class="L696" rel="L696">          if (!property[key] &amp;&amp; property[key] !== 0)</li>
<li class="L697" rel="L697">            this.each(function(){ this.style.removeProperty(dasherize(key)) })</li>
<li class="L698" rel="L698">          else</li>
<li class="L699" rel="L699">            css += dasherize(key) + &#39;:&#39; + maybeAddPx(key, property[key]) + &#39;;&#39;</li>
<li class="L700" rel="L700">      }</li>
<li class="L701" rel="L701"></li>
<li class="L702" rel="L702">      return this.each(function(){ this.style.cssText += &#39;;&#39; + css })</li>
<li class="L703" rel="L703">    },</li>
<li class="L704" rel="L704">    index: function(element){</li>
<li class="L705" rel="L705">      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])</li>
<li class="L706" rel="L706">    },</li>
<li class="L707" rel="L707">    hasClass: function(name){</li>
<li class="L708" rel="L708">      if (!name) return false</li>
<li class="L709" rel="L709">      return emptyArray.some.call(this, function(el){</li>
<li class="L710" rel="L710">        return this.test(className(el))</li>
<li class="L711" rel="L711">      }, classRE(name))</li>
<li class="L712" rel="L712">    },</li>
<li class="L713" rel="L713">    addClass: function(name){</li>
<li class="L714" rel="L714">      if (!name) return this</li>
<li class="L715" rel="L715">      return this.each(function(idx){</li>
<li class="L716" rel="L716">        if (!(&#39;className&#39; in this)) return</li>
<li class="L717" rel="L717">        classList = []</li>
<li class="L718" rel="L718">        var cls = className(this), newName = funcArg(this, name, idx, cls)</li>
<li class="L719" rel="L719">        newName.split(/\s+/g).forEach(function(klass){</li>
<li class="L720" rel="L720">          if (!$(this).hasClass(klass)) classList.push(klass)</li>
<li class="L721" rel="L721">        }, this)</li>
<li class="L722" rel="L722">        classList.length &amp;&amp; className(this, cls + (cls ? &#34; &#34; : &#34;&#34;) + classList.join(&#34; &#34;))</li>
<li class="L723" rel="L723">      })</li>
<li class="L724" rel="L724">    },</li>
<li class="L725" rel="L725">    removeClass: function(name){</li>
<li class="L726" rel="L726">      return this.each(function(idx){</li>
<li class="L727" rel="L727">        if (!(&#39;className&#39; in this)) return</li>
<li class="L728" rel="L728">        if (name === undefined) return className(this, &#39;&#39;)</li>
<li class="L729" rel="L729">        classList = className(this)</li>
<li class="L730" rel="L730">        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){</li>
<li class="L731" rel="L731">          classList = classList.replace(classRE(klass), &#34; &#34;)</li>
<li class="L732" rel="L732">        })</li>
<li class="L733" rel="L733">        className(this, classList.trim())</li>
<li class="L734" rel="L734">      })</li>
<li class="L735" rel="L735">    },</li>
<li class="L736" rel="L736">    toggleClass: function(name, when){</li>
<li class="L737" rel="L737">      if (!name) return this</li>
<li class="L738" rel="L738">      return this.each(function(idx){</li>
<li class="L739" rel="L739">        var $this = $(this), names = funcArg(this, name, idx, className(this))</li>
<li class="L740" rel="L740">        names.split(/\s+/g).forEach(function(klass){</li>
<li class="L741" rel="L741">          (when === undefined ? !$this.hasClass(klass) : when) ?</li>
<li class="L742" rel="L742">            $this.addClass(klass) : $this.removeClass(klass)</li>
<li class="L743" rel="L743">        })</li>
<li class="L744" rel="L744">      })</li>
<li class="L745" rel="L745">    },</li>
<li class="L746" rel="L746">    scrollTop: function(value){</li>
<li class="L747" rel="L747">      if (!this.length) return</li>
<li class="L748" rel="L748">      var hasScrollTop = &#39;scrollTop&#39; in this[0]</li>
<li class="L749" rel="L749">      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset</li>
<li class="L750" rel="L750">      return this.each(hasScrollTop ?</li>
<li class="L751" rel="L751">        function(){ this.scrollTop = value } :</li>
<li class="L752" rel="L752">        function(){ this.scrollTo(this.scrollX, value) })</li>
<li class="L753" rel="L753">    },</li>
<li class="L754" rel="L754">    scrollLeft: function(value){</li>
<li class="L755" rel="L755">      if (!this.length) return</li>
<li class="L756" rel="L756">      var hasScrollLeft = &#39;scrollLeft&#39; in this[0]</li>
<li class="L757" rel="L757">      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset</li>
<li class="L758" rel="L758">      return this.each(hasScrollLeft ?</li>
<li class="L759" rel="L759">        function(){ this.scrollLeft = value } :</li>
<li class="L760" rel="L760">        function(){ this.scrollTo(value, this.scrollY) })</li>
<li class="L761" rel="L761">    },</li>
<li class="L762" rel="L762">    position: function() {</li>
<li class="L763" rel="L763">      if (!this.length) return</li>
<li class="L764" rel="L764"></li>
<li class="L765" rel="L765">      var elem = this[0],</li>
<li class="L766" rel="L766">        // Get *real* offsetParent</li>
<li class="L767" rel="L767">        offsetParent = this.offsetParent(),</li>
<li class="L768" rel="L768">        // Get correct offsets</li>
<li class="L769" rel="L769">        offset       = this.offset(),</li>
<li class="L770" rel="L770">        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()</li>
<li class="L771" rel="L771"></li>
<li class="L772" rel="L772">      // Subtract element margins</li>
<li class="L773" rel="L773">      // note: when an element has margin: auto the offsetLeft and marginLeft</li>
<li class="L774" rel="L774">      // are the same in Safari causing offset.left to incorrectly be 0</li>
<li class="L775" rel="L775">      offset.top  -= parseFloat( $(elem).css(&#39;margin-top&#39;) ) || 0</li>
<li class="L776" rel="L776">      offset.left -= parseFloat( $(elem).css(&#39;margin-left&#39;) ) || 0</li>
<li class="L777" rel="L777"></li>
<li class="L778" rel="L778">      // Add offsetParent borders</li>
<li class="L779" rel="L779">      parentOffset.top  += parseFloat( $(offsetParent[0]).css(&#39;border-top-width&#39;) ) || 0</li>
<li class="L780" rel="L780">      parentOffset.left += parseFloat( $(offsetParent[0]).css(&#39;border-left-width&#39;) ) || 0</li>
<li class="L781" rel="L781"></li>
<li class="L782" rel="L782">      // Subtract the two offsets</li>
<li class="L783" rel="L783">      return {</li>
<li class="L784" rel="L784">        top:  offset.top  - parentOffset.top,</li>
<li class="L785" rel="L785">        left: offset.left - parentOffset.left</li>
<li class="L786" rel="L786">      }</li>
<li class="L787" rel="L787">    },</li>
<li class="L788" rel="L788">    offsetParent: function() {</li>
<li class="L789" rel="L789">      return this.map(function(){</li>
<li class="L790" rel="L790">        var parent = this.offsetParent || document.body</li>
<li class="L791" rel="L791">        while (parent &amp;&amp; !rootNodeRE.test(parent.nodeName) &amp;&amp; $(parent).css(&#34;position&#34;) == &#34;static&#34;)</li>
<li class="L792" rel="L792">          parent = parent.offsetParent</li>
<li class="L793" rel="L793">        return parent</li>
<li class="L794" rel="L794">      })</li>
<li class="L795" rel="L795">    }</li>
<li class="L796" rel="L796">  }</li>
<li class="L797" rel="L797"></li>
<li class="L798" rel="L798">  // for now</li>
<li class="L799" rel="L799">  $.fn.detach = $.fn.remove</li>
<li class="L800" rel="L800"></li>
<li class="L801" rel="L801">  // Generate the `width` and `height` functions</li>
<li class="L802" rel="L802">  ;[&#39;width&#39;, &#39;height&#39;].forEach(function(dimension){</li>
<li class="L803" rel="L803">    var dimensionProperty =</li>
<li class="L804" rel="L804">      dimension.replace(/./, function(m){ return m[0].toUpperCase() })</li>
<li class="L805" rel="L805"></li>
<li class="L806" rel="L806">    $.fn[dimension] = function(value){</li>
<li class="L807" rel="L807">      var offset, el = this[0]</li>
<li class="L808" rel="L808">      if (value === undefined) return isWindow(el) ? el[&#39;inner&#39; + dimensionProperty] :</li>
<li class="L809" rel="L809">        isDocument(el) ? el.documentElement[&#39;scroll&#39; + dimensionProperty] :</li>
<li class="L810" rel="L810">        (offset = this.offset()) &amp;&amp; offset[dimension]</li>
<li class="L811" rel="L811">      else return this.each(function(idx){</li>
<li class="L812" rel="L812">        el = $(this)</li>
<li class="L813" rel="L813">        el.css(dimension, funcArg(this, value, idx, el[dimension]()))</li>
<li class="L814" rel="L814">      })</li>
<li class="L815" rel="L815">    }</li>
<li class="L816" rel="L816">  })</li>
<li class="L817" rel="L817"></li>
<li class="L818" rel="L818">  function traverseNode(node, fun) {</li>
<li class="L819" rel="L819">    fun(node)</li>
<li class="L820" rel="L820">    for (var i = 0, len = node.childNodes.length; i &lt; len; i++)</li>
<li class="L821" rel="L821">      traverseNode(node.childNodes[i], fun)</li>
<li class="L822" rel="L822">  }</li>
<li class="L823" rel="L823"></li>
<li class="L824" rel="L824">  // Generate the `after`, `prepend`, `before`, `append`,</li>
<li class="L825" rel="L825">  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.</li>
<li class="L826" rel="L826">  adjacencyOperators.forEach(function(operator, operatorIndex) {</li>
<li class="L827" rel="L827">    var inside = operatorIndex % 2 //=&gt; prepend, append</li>
<li class="L828" rel="L828"></li>
<li class="L829" rel="L829">    $.fn[operator] = function(){</li>
<li class="L830" rel="L830">      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings</li>
<li class="L831" rel="L831">      var argType, nodes = $.map(arguments, function(arg) {</li>
<li class="L832" rel="L832">            argType = type(arg)</li>
<li class="L833" rel="L833">            return argType == &#34;object&#34; || argType == &#34;array&#34; || arg == null ?</li>
<li class="L834" rel="L834">              arg : zepto.fragment(arg)</li>
<li class="L835" rel="L835">          }),</li>
<li class="L836" rel="L836">          parent, copyByClone = this.length &gt; 1</li>
<li class="L837" rel="L837">      if (nodes.length &lt; 1) return this</li>
<li class="L838" rel="L838"></li>
<li class="L839" rel="L839">      return this.each(function(_, target){</li>
<li class="L840" rel="L840">        parent = inside ? target : target.parentNode</li>
<li class="L841" rel="L841"></li>
<li class="L842" rel="L842">        // convert all methods to a &#34;before&#34; operation</li>
<li class="L843" rel="L843">        target = operatorIndex == 0 ? target.nextSibling :</li>
<li class="L844" rel="L844">                 operatorIndex == 1 ? target.firstChild :</li>
<li class="L845" rel="L845">                 operatorIndex == 2 ? target :</li>
<li class="L846" rel="L846">                 null</li>
<li class="L847" rel="L847"></li>
<li class="L848" rel="L848">        var parentInDocument = $.contains(document.documentElement, parent)</li>
<li class="L849" rel="L849"></li>
<li class="L850" rel="L850">        nodes.forEach(function(node){</li>
<li class="L851" rel="L851">          if (copyByClone) node = node.cloneNode(true)</li>
<li class="L852" rel="L852">          else if (!parent) return $(node).remove()</li>
<li class="L853" rel="L853"></li>
<li class="L854" rel="L854">          parent.insertBefore(node, target)</li>
<li class="L855" rel="L855">          if (parentInDocument) traverseNode(node, function(el){</li>
<li class="L856" rel="L856">            if (el.nodeName != null &amp;&amp; el.nodeName.toUpperCase() === &#39;SCRIPT&#39; &amp;&amp;</li>
<li class="L857" rel="L857">               (!el.type || el.type === &#39;text/javascript&#39;) &amp;&amp; !el.src)</li>
<li class="L858" rel="L858">              window[&#39;eval&#39;].call(window, el.innerHTML)</li>
<li class="L859" rel="L859">          })</li>
<li class="L860" rel="L860">        })</li>
<li class="L861" rel="L861">      })</li>
<li class="L862" rel="L862">    }</li>
<li class="L863" rel="L863"></li>
<li class="L864" rel="L864">    // after    =&gt; insertAfter</li>
<li class="L865" rel="L865">    // prepend  =&gt; prependTo</li>
<li class="L866" rel="L866">    // before   =&gt; insertBefore</li>
<li class="L867" rel="L867">    // append   =&gt; appendTo</li>
<li class="L868" rel="L868">    $.fn[inside ? operator+&#39;To&#39; : &#39;insert&#39;+(operatorIndex ? &#39;Before&#39; : &#39;After&#39;)] = function(html){</li>
<li class="L869" rel="L869">      $(html)[operator](this)</li>
<li class="L870" rel="L870">      return this</li>
<li class="L871" rel="L871">    }</li>
<li class="L872" rel="L872">  })</li>
<li class="L873" rel="L873"></li>
<li class="L874" rel="L874">  zepto.Z.prototype = $.fn</li>
<li class="L875" rel="L875"></li>
<li class="L876" rel="L876">  // Export internal API functions in the `$.zepto` namespace</li>
<li class="L877" rel="L877">  zepto.uniq = uniq</li>
<li class="L878" rel="L878">  zepto.deserializeValue = deserializeValue</li>
<li class="L879" rel="L879">  $.zepto = zepto</li>
<li class="L880" rel="L880"></li>
<li class="L881" rel="L881">  return $</li>
<li class="L882" rel="L882">})()</li>
<li class="L883" rel="L883"></li>
<li class="L884" rel="L884">window.Zepto = Zepto</li>
<li class="L885" rel="L885">window.$ === undefined &amp;&amp; (window.$ = Zepto)</li>
<li class="L886" rel="L886"></li>
<li class="L887" rel="L887">;(function($){</li>
<li class="L888" rel="L888">  var _zid = 1, undefined,</li>
<li class="L889" rel="L889">      slice = Array.prototype.slice,</li>
<li class="L890" rel="L890">      isFunction = $.isFunction,</li>
<li class="L891" rel="L891">      isString = function(obj){ return typeof obj == &#39;string&#39; },</li>
<li class="L892" rel="L892">      handlers = {},</li>
<li class="L893" rel="L893">      specialEvents={},</li>
<li class="L894" rel="L894">      focusinSupported = &#39;onfocusin&#39; in window,</li>
<li class="L895" rel="L895">      focus = { focus: &#39;focusin&#39;, blur: &#39;focusout&#39; },</li>
<li class="L896" rel="L896">      hover = { mouseenter: &#39;mouseover&#39;, mouseleave: &#39;mouseout&#39; }</li>
<li class="L897" rel="L897"></li>
<li class="L898" rel="L898">  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = &#39;MouseEvents&#39;</li>
<li class="L899" rel="L899"></li>
<li class="L900" rel="L900">  function zid(element) {</li>
<li class="L901" rel="L901">    return element._zid || (element._zid = _zid++)</li>
<li class="L902" rel="L902">  }</li>
<li class="L903" rel="L903">  function findHandlers(element, event, fn, selector) {</li>
<li class="L904" rel="L904">    event = parse(event)</li>
<li class="L905" rel="L905">    if (event.ns) var matcher = matcherFor(event.ns)</li>
<li class="L906" rel="L906">    return (handlers[zid(element)] || []).filter(function(handler) {</li>
<li class="L907" rel="L907">      return handler</li>
<li class="L908" rel="L908">        &amp;&amp; (!event.e  || handler.e == event.e)</li>
<li class="L909" rel="L909">        &amp;&amp; (!event.ns || matcher.test(handler.ns))</li>
<li class="L910" rel="L910">        &amp;&amp; (!fn       || zid(handler.fn) === zid(fn))</li>
<li class="L911" rel="L911">        &amp;&amp; (!selector || handler.sel == selector)</li>
<li class="L912" rel="L912">    })</li>
<li class="L913" rel="L913">  }</li>
<li class="L914" rel="L914">  function parse(event) {</li>
<li class="L915" rel="L915">    var parts = (&#39;&#39; + event).split(&#39;.&#39;)</li>
<li class="L916" rel="L916">    return {e: parts[0], ns: parts.slice(1).sort().join(&#39; &#39;)}</li>
<li class="L917" rel="L917">  }</li>
<li class="L918" rel="L918">  function matcherFor(ns) {</li>
<li class="L919" rel="L919">    return new RegExp(&#39;(?:^| )&#39; + ns.replace(&#39; &#39;, &#39; .* ?&#39;) + &#39;(?: |$)&#39;)</li>
<li class="L920" rel="L920">  }</li>
<li class="L921" rel="L921"></li>
<li class="L922" rel="L922">  function eventCapture(handler, captureSetting) {</li>
<li class="L923" rel="L923">    return handler.del &amp;&amp;</li>
<li class="L924" rel="L924">      (!focusinSupported &amp;&amp; (handler.e in focus)) ||</li>
<li class="L925" rel="L925">      !!captureSetting</li>
<li class="L926" rel="L926">  }</li>
<li class="L927" rel="L927"></li>
<li class="L928" rel="L928">  function realEvent(type) {</li>
<li class="L929" rel="L929">    return hover[type] || (focusinSupported &amp;&amp; focus[type]) || type</li>
<li class="L930" rel="L930">  }</li>
<li class="L931" rel="L931"></li>
<li class="L932" rel="L932">  function add(element, events, fn, data, selector, delegator, capture){</li>
<li class="L933" rel="L933">    var id = zid(element), set = (handlers[id] || (handlers[id] = []))</li>
<li class="L934" rel="L934">    events.split(/\s/).forEach(function(event){</li>
<li class="L935" rel="L935">      if (event == &#39;ready&#39;) return $(document).ready(fn)</li>
<li class="L936" rel="L936">      var handler   = parse(event)</li>
<li class="L937" rel="L937">      handler.fn    = fn</li>
<li class="L938" rel="L938">      handler.sel   = selector</li>
<li class="L939" rel="L939">      // emulate mouseenter, mouseleave</li>
<li class="L940" rel="L940">      if (handler.e in hover) fn = function(e){</li>
<li class="L941" rel="L941">        var related = e.relatedTarget</li>
<li class="L942" rel="L942">        if (!related || (related !== this &amp;&amp; !$.contains(this, related)))</li>
<li class="L943" rel="L943">          return handler.fn.apply(this, arguments)</li>
<li class="L944" rel="L944">      }</li>
<li class="L945" rel="L945">      handler.del   = delegator</li>
<li class="L946" rel="L946">      var callback  = delegator || fn</li>
<li class="L947" rel="L947">      handler.proxy = function(e){</li>
<li class="L948" rel="L948">        e = compatible(e)</li>
<li class="L949" rel="L949">        if (e.isImmediatePropagationStopped()) return</li>
<li class="L950" rel="L950">        e.data = data</li>
<li class="L951" rel="L951">        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))</li>
<li class="L952" rel="L952">        if (result === false) e.preventDefault(), e.stopPropagation()</li>
<li class="L953" rel="L953">        return result</li>
<li class="L954" rel="L954">      }</li>
<li class="L955" rel="L955">      handler.i = set.length</li>
<li class="L956" rel="L956">      set.push(handler)</li>
<li class="L957" rel="L957">      if (&#39;addEventListener&#39; in element)</li>
<li class="L958" rel="L958">        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))</li>
<li class="L959" rel="L959">    })</li>
<li class="L960" rel="L960">  }</li>
<li class="L961" rel="L961">  function remove(element, events, fn, selector, capture){</li>
<li class="L962" rel="L962">    var id = zid(element)</li>
<li class="L963" rel="L963">    ;(events || &#39;&#39;).split(/\s/).forEach(function(event){</li>
<li class="L964" rel="L964">      findHandlers(element, event, fn, selector).forEach(function(handler){</li>
<li class="L965" rel="L965">        delete handlers[id][handler.i]</li>
<li class="L966" rel="L966">      if (&#39;removeEventListener&#39; in element)</li>
<li class="L967" rel="L967">        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))</li>
<li class="L968" rel="L968">      })</li>
<li class="L969" rel="L969">    })</li>
<li class="L970" rel="L970">  }</li>
<li class="L971" rel="L971"></li>
<li class="L972" rel="L972">  $.event = { add: add, remove: remove }</li>
<li class="L973" rel="L973"></li>
<li class="L974" rel="L974">  $.proxy = function(fn, context) {</li>
<li class="L975" rel="L975">    var args = (2 in arguments) &amp;&amp; slice.call(arguments, 2)</li>
<li class="L976" rel="L976">    if (isFunction(fn)) {</li>
<li class="L977" rel="L977">      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }</li>
<li class="L978" rel="L978">      proxyFn._zid = zid(fn)</li>
<li class="L979" rel="L979">      return proxyFn</li>
<li class="L980" rel="L980">    } else if (isString(context)) {</li>
<li class="L981" rel="L981">      if (args) {</li>
<li class="L982" rel="L982">        args.unshift(fn[context], fn)</li>
<li class="L983" rel="L983">        return $.proxy.apply(null, args)</li>
<li class="L984" rel="L984">      } else {</li>
<li class="L985" rel="L985">        return $.proxy(fn[context], fn)</li>
<li class="L986" rel="L986">      }</li>
<li class="L987" rel="L987">    } else {</li>
<li class="L988" rel="L988">      throw new TypeError(&#34;expected function&#34;)</li>
<li class="L989" rel="L989">    }</li>
<li class="L990" rel="L990">  }</li>
<li class="L991" rel="L991"></li>
<li class="L992" rel="L992">  $.fn.bind = function(event, data, callback){</li>
<li class="L993" rel="L993">    return this.on(event, data, callback)</li>
<li class="L994" rel="L994">  }</li>
<li class="L995" rel="L995">  $.fn.unbind = function(event, callback){</li>
<li class="L996" rel="L996">    return this.off(event, callback)</li>
<li class="L997" rel="L997">  }</li>
<li class="L998" rel="L998">  $.fn.one = function(event, selector, data, callback){</li>
<li class="L999" rel="L999">    return this.on(event, selector, data, callback, 1)</li>
<li class="L1000" rel="L1000">  }</li>
<li class="L1001" rel="L1001"></li>
<li class="L1002" rel="L1002">  var returnTrue = function(){return true},</li>
<li class="L1003" rel="L1003">      returnFalse = function(){return false},</li>
<li class="L1004" rel="L1004">      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,</li>
<li class="L1005" rel="L1005">      eventMethods = {</li>
<li class="L1006" rel="L1006">        preventDefault: &#39;isDefaultPrevented&#39;,</li>
<li class="L1007" rel="L1007">        stopImmediatePropagation: &#39;isImmediatePropagationStopped&#39;,</li>
<li class="L1008" rel="L1008">        stopPropagation: &#39;isPropagationStopped&#39;</li>
<li class="L1009" rel="L1009">      }</li>
<li class="L1010" rel="L1010"></li>
<li class="L1011" rel="L1011">  function compatible(event, source) {</li>
<li class="L1012" rel="L1012">    if (source || !event.isDefaultPrevented) {</li>
<li class="L1013" rel="L1013">      source || (source = event)</li>
<li class="L1014" rel="L1014"></li>
<li class="L1015" rel="L1015">      $.each(eventMethods, function(name, predicate) {</li>
<li class="L1016" rel="L1016">        var sourceMethod = source[name]</li>
<li class="L1017" rel="L1017">        event[name] = function(){</li>
<li class="L1018" rel="L1018">          this[predicate] = returnTrue</li>
<li class="L1019" rel="L1019">          return sourceMethod &amp;&amp; sourceMethod.apply(source, arguments)</li>
<li class="L1020" rel="L1020">        }</li>
<li class="L1021" rel="L1021">        event[predicate] = returnFalse</li>
<li class="L1022" rel="L1022">      })</li>
<li class="L1023" rel="L1023"></li>
<li class="L1024" rel="L1024">      if (source.defaultPrevented !== undefined ? source.defaultPrevented :</li>
<li class="L1025" rel="L1025">          &#39;returnValue&#39; in source ? source.returnValue === false :</li>
<li class="L1026" rel="L1026">          source.getPreventDefault &amp;&amp; source.getPreventDefault())</li>
<li class="L1027" rel="L1027">        event.isDefaultPrevented = returnTrue</li>
<li class="L1028" rel="L1028">    }</li>
<li class="L1029" rel="L1029">    return event</li>
<li class="L1030" rel="L1030">  }</li>
<li class="L1031" rel="L1031"></li>
<li class="L1032" rel="L1032">  function createProxy(event) {</li>
<li class="L1033" rel="L1033">    var key, proxy = { originalEvent: event }</li>
<li class="L1034" rel="L1034">    for (key in event)</li>
<li class="L1035" rel="L1035">      if (!ignoreProperties.test(key) &amp;&amp; event[key] !== undefined) proxy[key] = event[key]</li>
<li class="L1036" rel="L1036"></li>
<li class="L1037" rel="L1037">    return compatible(proxy, event)</li>
<li class="L1038" rel="L1038">  }</li>
<li class="L1039" rel="L1039"></li>
<li class="L1040" rel="L1040">  $.fn.delegate = function(selector, event, callback){</li>
<li class="L1041" rel="L1041">    return this.on(event, selector, callback)</li>
<li class="L1042" rel="L1042">  }</li>
<li class="L1043" rel="L1043">  $.fn.undelegate = function(selector, event, callback){</li>
<li class="L1044" rel="L1044">    return this.off(event, selector, callback)</li>
<li class="L1045" rel="L1045">  }</li>
<li class="L1046" rel="L1046"></li>
<li class="L1047" rel="L1047">  $.fn.live = function(event, callback){</li>
<li class="L1048" rel="L1048">    $(document.body).delegate(this.selector, event, callback)</li>
<li class="L1049" rel="L1049">    return this</li>
<li class="L1050" rel="L1050">  }</li>
<li class="L1051" rel="L1051">  $.fn.die = function(event, callback){</li>
<li class="L1052" rel="L1052">    $(document.body).undelegate(this.selector, event, callback)</li>
<li class="L1053" rel="L1053">    return this</li>
<li class="L1054" rel="L1054">  }</li>
<li class="L1055" rel="L1055"></li>
<li class="L1056" rel="L1056">  $.fn.on = function(event, selector, data, callback, one){</li>
<li class="L1057" rel="L1057">    var autoRemove, delegator, $this = this</li>
<li class="L1058" rel="L1058">    if (event &amp;&amp; !isString(event)) {</li>
<li class="L1059" rel="L1059">      $.each(event, function(type, fn){</li>
<li class="L1060" rel="L1060">        $this.on(type, selector, data, fn, one)</li>
<li class="L1061" rel="L1061">      })</li>
<li class="L1062" rel="L1062">      return $this</li>
<li class="L1063" rel="L1063">    }</li>
<li class="L1064" rel="L1064"></li>
<li class="L1065" rel="L1065">    if (!isString(selector) &amp;&amp; !isFunction(callback) &amp;&amp; callback !== false)</li>
<li class="L1066" rel="L1066">      callback = data, data = selector, selector = undefined</li>
<li class="L1067" rel="L1067">    if (isFunction(data) || data === false)</li>
<li class="L1068" rel="L1068">      callback = data, data = undefined</li>
<li class="L1069" rel="L1069"></li>
<li class="L1070" rel="L1070">    if (callback === false) callback = returnFalse</li>
<li class="L1071" rel="L1071"></li>
<li class="L1072" rel="L1072">    return $this.each(function(_, element){</li>
<li class="L1073" rel="L1073">      if (one) autoRemove = function(e){</li>
<li class="L1074" rel="L1074">        remove(element, e.type, callback)</li>
<li class="L1075" rel="L1075">        return callback.apply(this, arguments)</li>
<li class="L1076" rel="L1076">      }</li>
<li class="L1077" rel="L1077"></li>
<li class="L1078" rel="L1078">      if (selector) delegator = function(e){</li>
<li class="L1079" rel="L1079">        var evt, match = $(e.target).closest(selector, element).get(0)</li>
<li class="L1080" rel="L1080">        if (match &amp;&amp; match !== element) {</li>
<li class="L1081" rel="L1081">          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})</li>
<li class="L1082" rel="L1082">          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))</li>
<li class="L1083" rel="L1083">        }</li>
<li class="L1084" rel="L1084">      }</li>
<li class="L1085" rel="L1085"></li>
<li class="L1086" rel="L1086">      add(element, event, callback, data, selector, delegator || autoRemove)</li>
<li class="L1087" rel="L1087">    })</li>
<li class="L1088" rel="L1088">  }</li>
<li class="L1089" rel="L1089">  $.fn.off = function(event, selector, callback){</li>
<li class="L1090" rel="L1090">    var $this = this</li>
<li class="L1091" rel="L1091">    if (event &amp;&amp; !isString(event)) {</li>
<li class="L1092" rel="L1092">      $.each(event, function(type, fn){</li>
<li class="L1093" rel="L1093">        $this.off(type, selector, fn)</li>
<li class="L1094" rel="L1094">      })</li>
<li class="L1095" rel="L1095">      return $this</li>
<li class="L1096" rel="L1096">    }</li>
<li class="L1097" rel="L1097"></li>
<li class="L1098" rel="L1098">    if (!isString(selector) &amp;&amp; !isFunction(callback) &amp;&amp; callback !== false)</li>
<li class="L1099" rel="L1099">      callback = selector, selector = undefined</li>
<li class="L1100" rel="L1100"></li>
<li class="L1101" rel="L1101">    if (callback === false) callback = returnFalse</li>
<li class="L1102" rel="L1102"></li>
<li class="L1103" rel="L1103">    return $this.each(function(){</li>
<li class="L1104" rel="L1104">      remove(this, event, callback, selector)</li>
<li class="L1105" rel="L1105">    })</li>
<li class="L1106" rel="L1106">  }</li>
<li class="L1107" rel="L1107"></li>
<li class="L1108" rel="L1108">  $.fn.trigger = function(event, args){</li>
<li class="L1109" rel="L1109">    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)</li>
<li class="L1110" rel="L1110">    event._args = args</li>
<li class="L1111" rel="L1111">    return this.each(function(){</li>
<li class="L1112" rel="L1112">      // handle focus(), blur() by calling them directly</li>
<li class="L1113" rel="L1113">      if (event.type in focus &amp;&amp; typeof this[event.type] == &#34;function&#34;) this[event.type]()</li>
<li class="L1114" rel="L1114">      // items in the collection might not be DOM elements</li>
<li class="L1115" rel="L1115">      else if (&#39;dispatchEvent&#39; in this) this.dispatchEvent(event)</li>
<li class="L1116" rel="L1116">      else $(this).triggerHandler(event, args)</li>
<li class="L1117" rel="L1117">    })</li>
<li class="L1118" rel="L1118">  }</li>
<li class="L1119" rel="L1119"></li>
<li class="L1120" rel="L1120">  // triggers event handlers on current element just as if an event occurred,</li>
<li class="L1121" rel="L1121">  // doesn&#39;t trigger an actual event, doesn&#39;t bubble</li>
<li class="L1122" rel="L1122">  $.fn.triggerHandler = function(event, args){</li>
<li class="L1123" rel="L1123">    var e, result</li>
<li class="L1124" rel="L1124">    this.each(function(i, element){</li>
<li class="L1125" rel="L1125">      e = createProxy(isString(event) ? $.Event(event) : event)</li>
<li class="L1126" rel="L1126">      e._args = args</li>
<li class="L1127" rel="L1127">      e.target = element</li>
<li class="L1128" rel="L1128">      $.each(findHandlers(element, event.type || event), function(i, handler){</li>
<li class="L1129" rel="L1129">        result = handler.proxy(e)</li>
<li class="L1130" rel="L1130">        if (e.isImmediatePropagationStopped()) return false</li>
<li class="L1131" rel="L1131">      })</li>
<li class="L1132" rel="L1132">    })</li>
<li class="L1133" rel="L1133">    return result</li>
<li class="L1134" rel="L1134">  }</li>
<li class="L1135" rel="L1135"></li>
<li class="L1136" rel="L1136">  // shortcut methods for `.bind(event, fn)` for each event type</li>
<li class="L1137" rel="L1137">  ;(&#39;focusin focusout focus blur load resize scroll unload click dblclick &#39;+</li>
<li class="L1138" rel="L1138">  &#39;mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave &#39;+</li>
<li class="L1139" rel="L1139">  &#39;change select keydown keypress keyup error&#39;).split(&#39; &#39;).forEach(function(event) {</li>
<li class="L1140" rel="L1140">    $.fn[event] = function(callback) {</li>
<li class="L1141" rel="L1141">      return (0 in arguments) ?</li>
<li class="L1142" rel="L1142">        this.bind(event, callback) :</li>
<li class="L1143" rel="L1143">        this.trigger(event)</li>
<li class="L1144" rel="L1144">    }</li>
<li class="L1145" rel="L1145">  })</li>
<li class="L1146" rel="L1146"></li>
<li class="L1147" rel="L1147">  $.Event = function(type, props) {</li>
<li class="L1148" rel="L1148">    if (!isString(type)) props = type, type = props.type</li>
<li class="L1149" rel="L1149">    var event = document.createEvent(specialEvents[type] || &#39;Events&#39;), bubbles = true</li>
<li class="L1150" rel="L1150">    if (props) for (var name in props) (name == &#39;bubbles&#39;) ? (bubbles = !!props[name]) : (event[name] = props[name])</li>
<li class="L1151" rel="L1151">    event.initEvent(type, bubbles, true)</li>
<li class="L1152" rel="L1152">    return compatible(event)</li>
<li class="L1153" rel="L1153">  }</li>
<li class="L1154" rel="L1154"></li>
<li class="L1155" rel="L1155">})(Zepto)</li>
<li class="L1156" rel="L1156"></li>
<li class="L1157" rel="L1157">;(function($){</li>
<li class="L1158" rel="L1158">  var jsonpID = 0,</li>
<li class="L1159" rel="L1159">      document = window.document,</li>
<li class="L1160" rel="L1160">      key,</li>
<li class="L1161" rel="L1161">      name,</li>
<li class="L1162" rel="L1162">      rscript = /&lt;script\b[^&lt;]*(?:(?!&lt;\/script&gt;)&lt;[^&lt;]*)*&lt;\/script&gt;/gi,</li>
<li class="L1163" rel="L1163">      scriptTypeRE = /^(?:text|application)\/javascript/i,</li>
<li class="L1164" rel="L1164">      xmlTypeRE = /^(?:text|application)\/xml/i,</li>
<li class="L1165" rel="L1165">      jsonType = &#39;application/json&#39;,</li>
<li class="L1166" rel="L1166">      htmlType = &#39;text/html&#39;,</li>
<li class="L1167" rel="L1167">      blankRE = /^\s*$/,</li>
<li class="L1168" rel="L1168">      originAnchor = document.createElement(&#39;a&#39;)</li>
<li class="L1169" rel="L1169"></li>
<li class="L1170" rel="L1170">  originAnchor.href = window.location.href</li>
<li class="L1171" rel="L1171"></li>
<li class="L1172" rel="L1172">  // trigger a custom event and return false if it was cancelled</li>
<li class="L1173" rel="L1173">  function triggerAndReturn(context, eventName, data) {</li>
<li class="L1174" rel="L1174">    var event = $.Event(eventName)</li>
<li class="L1175" rel="L1175">    $(context).trigger(event, data)</li>
<li class="L1176" rel="L1176">    return !event.isDefaultPrevented()</li>
<li class="L1177" rel="L1177">  }</li>
<li class="L1178" rel="L1178"></li>
<li class="L1179" rel="L1179">  // trigger an Ajax &#34;global&#34; event</li>
<li class="L1180" rel="L1180">  function triggerGlobal(settings, context, eventName, data) {</li>
<li class="L1181" rel="L1181">    if (settings.global) return triggerAndReturn(context || document, eventName, data)</li>
<li class="L1182" rel="L1182">  }</li>
<li class="L1183" rel="L1183"></li>
<li class="L1184" rel="L1184">  // Number of active Ajax requests</li>
<li class="L1185" rel="L1185">  $.active = 0</li>
<li class="L1186" rel="L1186"></li>
<li class="L1187" rel="L1187">  function ajaxStart(settings) {</li>
<li class="L1188" rel="L1188">    if (settings.global &amp;&amp; $.active++ === 0) triggerGlobal(settings, null, &#39;ajaxStart&#39;)</li>
<li class="L1189" rel="L1189">  }</li>
<li class="L1190" rel="L1190">  function ajaxStop(settings) {</li>
<li class="L1191" rel="L1191">    if (settings.global &amp;&amp; !(--$.active)) triggerGlobal(settings, null, &#39;ajaxStop&#39;)</li>
<li class="L1192" rel="L1192">  }</li>
<li class="L1193" rel="L1193"></li>
<li class="L1194" rel="L1194">  // triggers an extra global event &#34;ajaxBeforeSend&#34; that&#39;s like &#34;ajaxSend&#34; but cancelable</li>
<li class="L1195" rel="L1195">  function ajaxBeforeSend(xhr, settings) {</li>
<li class="L1196" rel="L1196">    var context = settings.context</li>
<li class="L1197" rel="L1197">    if (settings.beforeSend.call(context, xhr, settings) === false ||</li>
<li class="L1198" rel="L1198">        triggerGlobal(settings, context, &#39;ajaxBeforeSend&#39;, [xhr, settings]) === false)</li>
<li class="L1199" rel="L1199">      return false</li>
<li class="L1200" rel="L1200"></li>
<li class="L1201" rel="L1201">    triggerGlobal(settings, context, &#39;ajaxSend&#39;, [xhr, settings])</li>
<li class="L1202" rel="L1202">  }</li>
<li class="L1203" rel="L1203">  function ajaxSuccess(data, xhr, settings, deferred) {</li>
<li class="L1204" rel="L1204">    var context = settings.context, status = &#39;success&#39;</li>
<li class="L1205" rel="L1205">    settings.success.call(context, data, status, xhr)</li>
<li class="L1206" rel="L1206">    if (deferred) deferred.resolveWith(context, [data, status, xhr])</li>
<li class="L1207" rel="L1207">    triggerGlobal(settings, context, &#39;ajaxSuccess&#39;, [xhr, settings, data])</li>
<li class="L1208" rel="L1208">    ajaxComplete(status, xhr, settings)</li>
<li class="L1209" rel="L1209">  }</li>
<li class="L1210" rel="L1210">  // type: &#34;timeout&#34;, &#34;error&#34;, &#34;abort&#34;, &#34;parsererror&#34;</li>
<li class="L1211" rel="L1211">  function ajaxError(error, type, xhr, settings, deferred) {</li>
<li class="L1212" rel="L1212">    var context = settings.context</li>
<li class="L1213" rel="L1213">    settings.error.call(context, xhr, type, error)</li>
<li class="L1214" rel="L1214">    if (deferred) deferred.rejectWith(context, [xhr, type, error])</li>
<li class="L1215" rel="L1215">    triggerGlobal(settings, context, &#39;ajaxError&#39;, [xhr, settings, error || type])</li>
<li class="L1216" rel="L1216">    ajaxComplete(type, xhr, settings)</li>
<li class="L1217" rel="L1217">  }</li>
<li class="L1218" rel="L1218">  // status: &#34;success&#34;, &#34;notmodified&#34;, &#34;error&#34;, &#34;timeout&#34;, &#34;abort&#34;, &#34;parsererror&#34;</li>
<li class="L1219" rel="L1219">  function ajaxComplete(status, xhr, settings) {</li>
<li class="L1220" rel="L1220">    var context = settings.context</li>
<li class="L1221" rel="L1221">    settings.complete.call(context, xhr, status)</li>
<li class="L1222" rel="L1222">    triggerGlobal(settings, context, &#39;ajaxComplete&#39;, [xhr, settings])</li>
<li class="L1223" rel="L1223">    ajaxStop(settings)</li>
<li class="L1224" rel="L1224">  }</li>
<li class="L1225" rel="L1225"></li>
<li class="L1226" rel="L1226">  // Empty function, used as default callback</li>
<li class="L1227" rel="L1227">  function empty() {}</li>
<li class="L1228" rel="L1228"></li>
<li class="L1229" rel="L1229">  $.ajaxJSONP = function(options, deferred){</li>
<li class="L1230" rel="L1230">    if (!(&#39;type&#39; in options)) return $.ajax(options)</li>
<li class="L1231" rel="L1231"></li>
<li class="L1232" rel="L1232">    var _callbackName = options.jsonpCallback,</li>
<li class="L1233" rel="L1233">      callbackName = ($.isFunction(_callbackName) ?</li>
<li class="L1234" rel="L1234">        _callbackName() : _callbackName) || (&#39;jsonp&#39; + (++jsonpID)),</li>
<li class="L1235" rel="L1235">      script = document.createElement(&#39;script&#39;),</li>
<li class="L1236" rel="L1236">      originalCallback = window[callbackName],</li>
<li class="L1237" rel="L1237">      responseData,</li>
<li class="L1238" rel="L1238">      abort = function(errorType) {</li>
<li class="L1239" rel="L1239">        $(script).triggerHandler(&#39;error&#39;, errorType || &#39;abort&#39;)</li>
<li class="L1240" rel="L1240">      },</li>
<li class="L1241" rel="L1241">      xhr = { abort: abort }, abortTimeout</li>
<li class="L1242" rel="L1242"></li>
<li class="L1243" rel="L1243">    if (deferred) deferred.promise(xhr)</li>
<li class="L1244" rel="L1244"></li>
<li class="L1245" rel="L1245">    $(script).on(&#39;load error&#39;, function(e, errorType){</li>
<li class="L1246" rel="L1246">      clearTimeout(abortTimeout)</li>
<li class="L1247" rel="L1247">      $(script).off().remove()</li>
<li class="L1248" rel="L1248"></li>
<li class="L1249" rel="L1249">      if (e.type == &#39;error&#39; || !responseData) {</li>
<li class="L1250" rel="L1250">        ajaxError(null, errorType || &#39;error&#39;, xhr, options, deferred)</li>
<li class="L1251" rel="L1251">      } else {</li>
<li class="L1252" rel="L1252">        ajaxSuccess(responseData[0], xhr, options, deferred)</li>
<li class="L1253" rel="L1253">      }</li>
<li class="L1254" rel="L1254"></li>
<li class="L1255" rel="L1255">      window[callbackName] = originalCallback</li>
<li class="L1256" rel="L1256">      if (responseData &amp;&amp; $.isFunction(originalCallback))</li>
<li class="L1257" rel="L1257">        originalCallback(responseData[0])</li>
<li class="L1258" rel="L1258"></li>
<li class="L1259" rel="L1259">      originalCallback = responseData = undefined</li>
<li class="L1260" rel="L1260">    })</li>
<li class="L1261" rel="L1261"></li>
<li class="L1262" rel="L1262">    if (ajaxBeforeSend(xhr, options) === false) {</li>
<li class="L1263" rel="L1263">      abort(&#39;abort&#39;)</li>
<li class="L1264" rel="L1264">      return xhr</li>
<li class="L1265" rel="L1265">    }</li>
<li class="L1266" rel="L1266"></li>
<li class="L1267" rel="L1267">    window[callbackName] = function(){</li>
<li class="L1268" rel="L1268">      responseData = arguments</li>
<li class="L1269" rel="L1269">    }</li>
<li class="L1270" rel="L1270"></li>
<li class="L1271" rel="L1271">    script.src = options.url.replace(/\?(.+)=\?/, &#39;?$1=&#39; + callbackName)</li>
<li class="L1272" rel="L1272">    document.head.appendChild(script)</li>
<li class="L1273" rel="L1273"></li>
<li class="L1274" rel="L1274">    if (options.timeout &gt; 0) abortTimeout = setTimeout(function(){</li>
<li class="L1275" rel="L1275">      abort(&#39;timeout&#39;)</li>
<li class="L1276" rel="L1276">    }, options.timeout)</li>
<li class="L1277" rel="L1277"></li>
<li class="L1278" rel="L1278">    return xhr</li>
<li class="L1279" rel="L1279">  }</li>
<li class="L1280" rel="L1280"></li>
<li class="L1281" rel="L1281">  $.ajaxSettings = {</li>
<li class="L1282" rel="L1282">    // Default type of request</li>
<li class="L1283" rel="L1283">    type: &#39;GET&#39;,</li>
<li class="L1284" rel="L1284">    // Callback that is executed before request</li>
<li class="L1285" rel="L1285">    beforeSend: empty,</li>
<li class="L1286" rel="L1286">    // Callback that is executed if the request succeeds</li>
<li class="L1287" rel="L1287">    success: empty,</li>
<li class="L1288" rel="L1288">    // Callback that is executed the the server drops error</li>
<li class="L1289" rel="L1289">    error: empty,</li>
<li class="L1290" rel="L1290">    // Callback that is executed on request complete (both: error and success)</li>
<li class="L1291" rel="L1291">    complete: empty,</li>
<li class="L1292" rel="L1292">    // The context for the callbacks</li>
<li class="L1293" rel="L1293">    context: null,</li>
<li class="L1294" rel="L1294">    // Whether to trigger &#34;global&#34; Ajax events</li>
<li class="L1295" rel="L1295">    global: true,</li>
<li class="L1296" rel="L1296">    // Transport</li>
<li class="L1297" rel="L1297">    xhr: function () {</li>
<li class="L1298" rel="L1298">      return new window.XMLHttpRequest()</li>
<li class="L1299" rel="L1299">    },</li>
<li class="L1300" rel="L1300">    // MIME types mapping</li>
<li class="L1301" rel="L1301">    // IIS returns Javascript as &#34;application/x-javascript&#34;</li>
<li class="L1302" rel="L1302">    accepts: {</li>
<li class="L1303" rel="L1303">      script: &#39;text/javascript, application/javascript, application/x-javascript&#39;,</li>
<li class="L1304" rel="L1304">      json:   jsonType,</li>
<li class="L1305" rel="L1305">      xml:    &#39;application/xml, text/xml&#39;,</li>
<li class="L1306" rel="L1306">      html:   htmlType,</li>
<li class="L1307" rel="L1307">      text:   &#39;text/plain&#39;</li>
<li class="L1308" rel="L1308">    },</li>
<li class="L1309" rel="L1309">    // Whether the request is to another domain</li>
<li class="L1310" rel="L1310">    crossDomain: false,</li>
<li class="L1311" rel="L1311">    // Default timeout</li>
<li class="L1312" rel="L1312">    timeout: 0,</li>
<li class="L1313" rel="L1313">    // Whether data should be serialized to string</li>
<li class="L1314" rel="L1314">    processData: true,</li>
<li class="L1315" rel="L1315">    // Whether the browser should be allowed to cache GET responses</li>
<li class="L1316" rel="L1316">    cache: true</li>
<li class="L1317" rel="L1317">  }</li>
<li class="L1318" rel="L1318"></li>
<li class="L1319" rel="L1319">  function mimeToDataType(mime) {</li>
<li class="L1320" rel="L1320">    if (mime) mime = mime.split(&#39;;&#39;, 2)[0]</li>
<li class="L1321" rel="L1321">    return mime &amp;&amp; ( mime == htmlType ? &#39;html&#39; :</li>
<li class="L1322" rel="L1322">      mime == jsonType ? &#39;json&#39; :</li>
<li class="L1323" rel="L1323">      scriptTypeRE.test(mime) ? &#39;script&#39; :</li>
<li class="L1324" rel="L1324">      xmlTypeRE.test(mime) &amp;&amp; &#39;xml&#39; ) || &#39;text&#39;</li>
<li class="L1325" rel="L1325">  }</li>
<li class="L1326" rel="L1326"></li>
<li class="L1327" rel="L1327">  function appendQuery(url, query) {</li>
<li class="L1328" rel="L1328">    if (query == &#39;&#39;) return url</li>
<li class="L1329" rel="L1329">    return (url + &#39;&amp;&#39; + query).replace(/[&amp;?]{1,2}/, &#39;?&#39;)</li>
<li class="L1330" rel="L1330">  }</li>
<li class="L1331" rel="L1331"></li>
<li class="L1332" rel="L1332">  // serialize payload and append it to the URL for GET requests</li>
<li class="L1333" rel="L1333">  function serializeData(options) {</li>
<li class="L1334" rel="L1334">    if (options.processData &amp;&amp; options.data &amp;&amp; $.type(options.data) != &#34;string&#34;)</li>
<li class="L1335" rel="L1335">      options.data = $.param(options.data, options.traditional)</li>
<li class="L1336" rel="L1336">    if (options.data &amp;&amp; (!options.type || options.type.toUpperCase() == &#39;GET&#39;))</li>
<li class="L1337" rel="L1337">      options.url = appendQuery(options.url, options.data), options.data = undefined</li>
<li class="L1338" rel="L1338">  }</li>
<li class="L1339" rel="L1339"></li>
<li class="L1340" rel="L1340">  $.ajax = function(options){</li>
<li class="L1341" rel="L1341">    var settings = $.extend({}, options || {}),</li>
<li class="L1342" rel="L1342">        deferred = $.Deferred &amp;&amp; $.Deferred(),</li>
<li class="L1343" rel="L1343">        urlAnchor</li>
<li class="L1344" rel="L1344">    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]</li>
<li class="L1345" rel="L1345"></li>
<li class="L1346" rel="L1346">    ajaxStart(settings)</li>
<li class="L1347" rel="L1347"></li>
<li class="L1348" rel="L1348">    if (!settings.crossDomain) {</li>
<li class="L1349" rel="L1349">      urlAnchor = document.createElement(&#39;a&#39;)</li>
<li class="L1350" rel="L1350">      urlAnchor.href = settings.url</li>
<li class="L1351" rel="L1351">      urlAnchor.href = urlAnchor.href</li>
<li class="L1352" rel="L1352">      settings.crossDomain = (originAnchor.protocol + &#39;//&#39; + originAnchor.host) !== (urlAnchor.protocol + &#39;//&#39; + urlAnchor.host)</li>
<li class="L1353" rel="L1353">    }</li>
<li class="L1354" rel="L1354"></li>
<li class="L1355" rel="L1355">    if (!settings.url) settings.url = window.location.toString()</li>
<li class="L1356" rel="L1356">    serializeData(settings)</li>
<li class="L1357" rel="L1357"></li>
<li class="L1358" rel="L1358">    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)</li>
<li class="L1359" rel="L1359">    if (hasPlaceholder) dataType = &#39;jsonp&#39;</li>
<li class="L1360" rel="L1360"></li>
<li class="L1361" rel="L1361">    if (settings.cache === false || (</li>
<li class="L1362" rel="L1362">         (!options || options.cache !== true) &amp;&amp;</li>
<li class="L1363" rel="L1363">         (&#39;script&#39; == dataType || &#39;jsonp&#39; == dataType)</li>
<li class="L1364" rel="L1364">        ))</li>
<li class="L1365" rel="L1365">      settings.url = appendQuery(settings.url, &#39;_=&#39; + Date.now())</li>
<li class="L1366" rel="L1366"></li>
<li class="L1367" rel="L1367">    if (&#39;jsonp&#39; == dataType) {</li>
<li class="L1368" rel="L1368">      if (!hasPlaceholder)</li>
<li class="L1369" rel="L1369">        settings.url = appendQuery(settings.url,</li>
<li class="L1370" rel="L1370">          settings.jsonp ? (settings.jsonp + &#39;=?&#39;) : settings.jsonp === false ? &#39;&#39; : &#39;callback=?&#39;)</li>
<li class="L1371" rel="L1371">      return $.ajaxJSONP(settings, deferred)</li>
<li class="L1372" rel="L1372">    }</li>
<li class="L1373" rel="L1373"></li>
<li class="L1374" rel="L1374">    var mime = settings.accepts[dataType],</li>
<li class="L1375" rel="L1375">        headers = { },</li>
<li class="L1376" rel="L1376">        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },</li>
<li class="L1377" rel="L1377">        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,</li>
<li class="L1378" rel="L1378">        xhr = settings.xhr(),</li>
<li class="L1379" rel="L1379">        nativeSetHeader = xhr.setRequestHeader,</li>
<li class="L1380" rel="L1380">        abortTimeout</li>
<li class="L1381" rel="L1381"></li>
<li class="L1382" rel="L1382">    if (deferred) deferred.promise(xhr)</li>
<li class="L1383" rel="L1383"></li>
<li class="L1384" rel="L1384">    if (!settings.crossDomain) setHeader(&#39;X-Requested-With&#39;, &#39;XMLHttpRequest&#39;)</li>
<li class="L1385" rel="L1385">    setHeader(&#39;Accept&#39;, mime || &#39;*/*&#39;)</li>
<li class="L1386" rel="L1386">    if (mime = settings.mimeType || mime) {</li>
<li class="L1387" rel="L1387">      if (mime.indexOf(&#39;,&#39;) &gt; -1) mime = mime.split(&#39;,&#39;, 2)[0]</li>
<li class="L1388" rel="L1388">      xhr.overrideMimeType &amp;&amp; xhr.overrideMimeType(mime)</li>
<li class="L1389" rel="L1389">    }</li>
<li class="L1390" rel="L1390">    if (settings.contentType || (settings.contentType !== false &amp;&amp; settings.data &amp;&amp; settings.type.toUpperCase() != &#39;GET&#39;))</li>
<li class="L1391" rel="L1391">      setHeader(&#39;Content-Type&#39;, settings.contentType || &#39;application/x-www-form-urlencoded&#39;)</li>
<li class="L1392" rel="L1392"></li>
<li class="L1393" rel="L1393">    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])</li>
<li class="L1394" rel="L1394">    xhr.setRequestHeader = setHeader</li>
<li class="L1395" rel="L1395"></li>
<li class="L1396" rel="L1396">    xhr.onreadystatechange = function(){</li>
<li class="L1397" rel="L1397">      if (xhr.readyState == 4) {</li>
<li class="L1398" rel="L1398">        xhr.onreadystatechange = empty</li>
<li class="L1399" rel="L1399">        clearTimeout(abortTimeout)</li>
<li class="L1400" rel="L1400">        var result, error = false</li>
<li class="L1401" rel="L1401">        if ((xhr.status &gt;= 200 &amp;&amp; xhr.status &lt; 300) || xhr.status == 304 || (xhr.status == 0 &amp;&amp; protocol == &#39;file:&#39;)) {</li>
<li class="L1402" rel="L1402">          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader(&#39;content-type&#39;))</li>
<li class="L1403" rel="L1403">          result = xhr.responseText</li>
<li class="L1404" rel="L1404"></li>
<li class="L1405" rel="L1405">          try {</li>
<li class="L1406" rel="L1406">            // http://perfectionkills.com/global-eval-what-are-the-options/</li>
<li class="L1407" rel="L1407">            if (dataType == &#39;script&#39;)    (1,eval)(result)</li>
<li class="L1408" rel="L1408">            else if (dataType == &#39;xml&#39;)  result = xhr.responseXML</li>
<li class="L1409" rel="L1409">            else if (dataType == &#39;json&#39;) result = blankRE.test(result) ? null : $.parseJSON(result)</li>
<li class="L1410" rel="L1410">          } catch (e) { error = e }</li>
<li class="L1411" rel="L1411"></li>
<li class="L1412" rel="L1412">          if (error) ajaxError(error, &#39;parsererror&#39;, xhr, settings, deferred)</li>
<li class="L1413" rel="L1413">          else ajaxSuccess(result, xhr, settings, deferred)</li>
<li class="L1414" rel="L1414">        } else {</li>
<li class="L1415" rel="L1415">          ajaxError(xhr.statusText || null, xhr.status ? &#39;error&#39; : &#39;abort&#39;, xhr, settings, deferred)</li>
<li class="L1416" rel="L1416">        }</li>
<li class="L1417" rel="L1417">      }</li>
<li class="L1418" rel="L1418">    }</li>
<li class="L1419" rel="L1419"></li>
<li class="L1420" rel="L1420">    if (ajaxBeforeSend(xhr, settings) === false) {</li>
<li class="L1421" rel="L1421">      xhr.abort()</li>
<li class="L1422" rel="L1422">      ajaxError(null, &#39;abort&#39;, xhr, settings, deferred)</li>
<li class="L1423" rel="L1423">      return xhr</li>
<li class="L1424" rel="L1424">    }</li>
<li class="L1425" rel="L1425"></li>
<li class="L1426" rel="L1426">    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]</li>
<li class="L1427" rel="L1427"></li>
<li class="L1428" rel="L1428">    var async = &#39;async&#39; in settings ? settings.async : true</li>
<li class="L1429" rel="L1429">    xhr.open(settings.type, settings.url, async, settings.username, settings.password)</li>
<li class="L1430" rel="L1430"></li>
<li class="L1431" rel="L1431">    for (name in headers) nativeSetHeader.apply(xhr, headers[name])</li>
<li class="L1432" rel="L1432"></li>
<li class="L1433" rel="L1433">    if (settings.timeout &gt; 0) abortTimeout = setTimeout(function(){</li>
<li class="L1434" rel="L1434">        xhr.onreadystatechange = empty</li>
<li class="L1435" rel="L1435">        xhr.abort()</li>
<li class="L1436" rel="L1436">        ajaxError(null, &#39;timeout&#39;, xhr, settings, deferred)</li>
<li class="L1437" rel="L1437">      }, settings.timeout)</li>
<li class="L1438" rel="L1438"></li>
<li class="L1439" rel="L1439">    // avoid sending empty string (#319)</li>
<li class="L1440" rel="L1440">    xhr.send(settings.data ? settings.data : null)</li>
<li class="L1441" rel="L1441">    return xhr</li>
<li class="L1442" rel="L1442">  }</li>
<li class="L1443" rel="L1443"></li>
<li class="L1444" rel="L1444">  // handle optional data/success arguments</li>
<li class="L1445" rel="L1445">  function parseArguments(url, data, success, dataType) {</li>
<li class="L1446" rel="L1446">    if ($.isFunction(data)) dataType = success, success = data, data = undefined</li>
<li class="L1447" rel="L1447">    if (!$.isFunction(success)) dataType = success, success = undefined</li>
<li class="L1448" rel="L1448">    return {</li>
<li class="L1449" rel="L1449">      url: url</li>
<li class="L1450" rel="L1450">    , data: data</li>
<li class="L1451" rel="L1451">    , success: success</li>
<li class="L1452" rel="L1452">    , dataType: dataType</li>
<li class="L1453" rel="L1453">    }</li>
<li class="L1454" rel="L1454">  }</li>
<li class="L1455" rel="L1455"></li>
<li class="L1456" rel="L1456">  $.get = function(/* url, data, success, dataType */){</li>
<li class="L1457" rel="L1457">    return $.ajax(parseArguments.apply(null, arguments))</li>
<li class="L1458" rel="L1458">  }</li>
<li class="L1459" rel="L1459"></li>
<li class="L1460" rel="L1460">  $.post = function(/* url, data, success, dataType */){</li>
<li class="L1461" rel="L1461">    var options = parseArguments.apply(null, arguments)</li>
<li class="L1462" rel="L1462">    options.type = &#39;POST&#39;</li>
<li class="L1463" rel="L1463">    return $.ajax(options)</li>
<li class="L1464" rel="L1464">  }</li>
<li class="L1465" rel="L1465"></li>
<li class="L1466" rel="L1466">  $.getJSON = function(/* url, data, success */){</li>
<li class="L1467" rel="L1467">    var options = parseArguments.apply(null, arguments)</li>
<li class="L1468" rel="L1468">    options.dataType = &#39;json&#39;</li>
<li class="L1469" rel="L1469">    return $.ajax(options)</li>
<li class="L1470" rel="L1470">  }</li>
<li class="L1471" rel="L1471"></li>
<li class="L1472" rel="L1472">  $.fn.load = function(url, data, success){</li>
<li class="L1473" rel="L1473">    if (!this.length) return this</li>
<li class="L1474" rel="L1474">    var self = this, parts = url.split(/\s/), selector,</li>
<li class="L1475" rel="L1475">        options = parseArguments(url, data, success),</li>
<li class="L1476" rel="L1476">        callback = options.success</li>
<li class="L1477" rel="L1477">    if (parts.length &gt; 1) options.url = parts[0], selector = parts[1]</li>
<li class="L1478" rel="L1478">    options.success = function(response){</li>
<li class="L1479" rel="L1479">      self.html(selector ?</li>
<li class="L1480" rel="L1480">        $(&#39;&lt;div&gt;&#39;).html(response.replace(rscript, &#34;&#34;)).find(selector)</li>
<li class="L1481" rel="L1481">        : response)</li>
<li class="L1482" rel="L1482">      callback &amp;&amp; callback.apply(self, arguments)</li>
<li class="L1483" rel="L1483">    }</li>
<li class="L1484" rel="L1484">    $.ajax(options)</li>
<li class="L1485" rel="L1485">    return this</li>
<li class="L1486" rel="L1486">  }</li>
<li class="L1487" rel="L1487"></li>
<li class="L1488" rel="L1488">  var escape = encodeURIComponent</li>
<li class="L1489" rel="L1489"></li>
<li class="L1490" rel="L1490">  function serialize(params, obj, traditional, scope){</li>
<li class="L1491" rel="L1491">    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)</li>
<li class="L1492" rel="L1492">    $.each(obj, function(key, value) {</li>
<li class="L1493" rel="L1493">      type = $.type(value)</li>
<li class="L1494" rel="L1494">      if (scope) key = traditional ? scope :</li>
<li class="L1495" rel="L1495">        scope + &#39;[&#39; + (hash || type == &#39;object&#39; || type == &#39;array&#39; ? key : &#39;&#39;) + &#39;]&#39;</li>
<li class="L1496" rel="L1496">      // handle data in serializeArray() format</li>
<li class="L1497" rel="L1497">      if (!scope &amp;&amp; array) params.add(value.name, value.value)</li>
<li class="L1498" rel="L1498">      // recurse into nested objects</li>
<li class="L1499" rel="L1499">      else if (type == &#34;array&#34; || (!traditional &amp;&amp; type == &#34;object&#34;))</li>
<li class="L1500" rel="L1500">        serialize(params, value, traditional, key)</li>
<li class="L1501" rel="L1501">      else params.add(key, value)</li>
<li class="L1502" rel="L1502">    })</li>
<li class="L1503" rel="L1503">  }</li>
<li class="L1504" rel="L1504"></li>
<li class="L1505" rel="L1505">  $.param = function(obj, traditional){</li>
<li class="L1506" rel="L1506">    var params = []</li>
<li class="L1507" rel="L1507">    params.add = function(key, value) {</li>
<li class="L1508" rel="L1508">      if ($.isFunction(value)) value = value()</li>
<li class="L1509" rel="L1509">      if (value == null) value = &#34;&#34;</li>
<li class="L1510" rel="L1510">      this.push(escape(key) + &#39;=&#39; + escape(value))</li>
<li class="L1511" rel="L1511">    }</li>
<li class="L1512" rel="L1512">    serialize(params, obj, traditional)</li>
<li class="L1513" rel="L1513">    return params.join(&#39;&amp;&#39;).replace(/%20/g, &#39;+&#39;)</li>
<li class="L1514" rel="L1514">  }</li>
<li class="L1515" rel="L1515">})(Zepto)</li>
<li class="L1516" rel="L1516"></li>
<li class="L1517" rel="L1517">;(function($){</li>
<li class="L1518" rel="L1518">  $.fn.serializeArray = function() {</li>
<li class="L1519" rel="L1519">    var name, type, result = [],</li>
<li class="L1520" rel="L1520">      add = function(value) {</li>
<li class="L1521" rel="L1521">        if (value.forEach) return value.forEach(add)</li>
<li class="L1522" rel="L1522">        result.push({ name: name, value: value })</li>
<li class="L1523" rel="L1523">      }</li>
<li class="L1524" rel="L1524">    if (this[0]) $.each(this[0].elements, function(_, field){</li>
<li class="L1525" rel="L1525">      type = field.type, name = field.name</li>
<li class="L1526" rel="L1526">      if (name &amp;&amp; field.nodeName.toLowerCase() != &#39;fieldset&#39; &amp;&amp;</li>
<li class="L1527" rel="L1527">        !field.disabled &amp;&amp; type != &#39;submit&#39; &amp;&amp; type != &#39;reset&#39; &amp;&amp; type != &#39;button&#39; &amp;&amp; type != &#39;file&#39; &amp;&amp;</li>
<li class="L1528" rel="L1528">        ((type != &#39;radio&#39; &amp;&amp; type != &#39;checkbox&#39;) || field.checked))</li>
<li class="L1529" rel="L1529">          add($(field).val())</li>
<li class="L1530" rel="L1530">    })</li>
<li class="L1531" rel="L1531">    return result</li>
<li class="L1532" rel="L1532">  }</li>
<li class="L1533" rel="L1533"></li>
<li class="L1534" rel="L1534">  $.fn.serialize = function(){</li>
<li class="L1535" rel="L1535">    var result = []</li>
<li class="L1536" rel="L1536">    this.serializeArray().forEach(function(elm){</li>
<li class="L1537" rel="L1537">      result.push(encodeURIComponent(elm.name) + &#39;=&#39; + encodeURIComponent(elm.value))</li>
<li class="L1538" rel="L1538">    })</li>
<li class="L1539" rel="L1539">    return result.join(&#39;&amp;&#39;)</li>
<li class="L1540" rel="L1540">  }</li>
<li class="L1541" rel="L1541"></li>
<li class="L1542" rel="L1542">  $.fn.submit = function(callback) {</li>
<li class="L1543" rel="L1543">    if (0 in arguments) this.bind(&#39;submit&#39;, callback)</li>
<li class="L1544" rel="L1544">    else if (this.length) {</li>
<li class="L1545" rel="L1545">      var event = $.Event(&#39;submit&#39;)</li>
<li class="L1546" rel="L1546">      this.eq(0).trigger(event)</li>
<li class="L1547" rel="L1547">      if (!event.isDefaultPrevented()) this.get(0).submit()</li>
<li class="L1548" rel="L1548">    }</li>
<li class="L1549" rel="L1549">    return this</li>
<li class="L1550" rel="L1550">  }</li>
<li class="L1551" rel="L1551"></li>
<li class="L1552" rel="L1552">})(Zepto)</li>
<li class="L1553" rel="L1553"></li>
<li class="L1554" rel="L1554">;(function($){</li>
<li class="L1555" rel="L1555">  // __proto__ doesn&#39;t exist on IE&lt;11, so redefine</li>
<li class="L1556" rel="L1556">  // the Z function to use object extension instead</li>
<li class="L1557" rel="L1557">  if (!(&#39;__proto__&#39; in {})) {</li>
<li class="L1558" rel="L1558">    $.extend($.zepto, {</li>
<li class="L1559" rel="L1559">      Z: function(dom, selector){</li>
<li class="L1560" rel="L1560">        dom = dom || []</li>
<li class="L1561" rel="L1561">        $.extend(dom, $.fn)</li>
<li class="L1562" rel="L1562">        dom.selector = selector || &#39;&#39;</li>
<li class="L1563" rel="L1563">        dom.__Z = true</li>
<li class="L1564" rel="L1564">        return dom</li>
<li class="L1565" rel="L1565">      },</li>
<li class="L1566" rel="L1566">      // this is a kludge but works</li>
<li class="L1567" rel="L1567">      isZ: function(object){</li>
<li class="L1568" rel="L1568">        return $.type(object) === &#39;array&#39; &amp;&amp; &#39;__Z&#39; in object</li>
<li class="L1569" rel="L1569">      }</li>
<li class="L1570" rel="L1570">    })</li>
<li class="L1571" rel="L1571">  }</li>
<li class="L1572" rel="L1572"></li>
<li class="L1573" rel="L1573">  // getComputedStyle shouldn&#39;t freak out when called</li>
<li class="L1574" rel="L1574">  // without a valid element as argument</li>
<li class="L1575" rel="L1575">  try {</li>
<li class="L1576" rel="L1576">    getComputedStyle(undefined)</li>
<li class="L1577" rel="L1577">  } catch(e) {</li>
<li class="L1578" rel="L1578">    var nativeGetComputedStyle = getComputedStyle;</li>
<li class="L1579" rel="L1579">    window.getComputedStyle = function(element){</li>
<li class="L1580" rel="L1580">      try {</li>
<li class="L1581" rel="L1581">        return nativeGetComputedStyle(element)</li>
<li class="L1582" rel="L1582">      } catch(e) {</li>
<li class="L1583" rel="L1583">        return null</li>
<li class="L1584" rel="L1584">      }</li>
<li class="L1585" rel="L1585">    }</li>
<li class="L1586" rel="L1586">  }</li>
<li class="L1587" rel="L1587">})(Zepto)</li>
<li class="L1588" rel="L1588"></li>
<li class="L1589" rel="L1589"></li>
</ol></code></pre></td>
						
						</tr>
					</tbody>
				</table>
			
		</div>
	</div>
</div>

<script>
function submitDeleteForm() {
    var message = prompt("delete_confirm_message\n\ndelete_commit_summary", "Delete ''");
    if (message != null) {
        $("#delete-message").val(message);
        $("#delete-file-form").submit()
    }
}
</script>

		
	</div>
</div>

	</div>
	
	<div id="J_GotoTop" class="elevator">
		<a href="//www.imooc.com/user/feedback" class="elevator-msg" target="_blank">
			<i class="imv2-feedback"></i>
			<span class="">意见反馈</span>
		</a>
		<a href="//www.imooc.com/help/cate/27" class="elevator-faq" target="_blank">
			<i class="imv2-help icon blue"></i>
			<span class="">帮助中心</span>
		</a>
		
		<a href="javascript:void(0)" class="elevator-weixin no-goto" id="js-elevator-weixin" >
			<i class="imv2-weixigzh"></i>
			<span class="">官方微信</span>
			<div class="elevator-weixin-box"></div>
		</a>
		<a href="javascript:void(0)" class="elevator-top no-goto" style="display:none" id="backTop">
			<i class="imv2-arrow2_u"></i>
			<span class="">返回顶部</span>
		</a>
	</div>
	<footer>
		<div class="ui container">
			<div class="ui left">Copyright © 2018 imooc.com All Rights Reserved | 京ICP备 12003892号-11</div>
			<div class="ui right links">
				<div class="ui language bottom floating upward slide up dropdown link item">
					<i class="world icon"></i>
					<div class="text">简体中文</div>
					<div class="menu">
						
							<a class="item active selected" href="#">简体中文</a>
						
							<a class="item " href="/coding-144/coding-144/src/master/mvco2o/src/main/webapp/resources/js/common/zepto.js?lang=en-US">English</a>
						
							<a class="item " href="/coding-144/coding-144/src/master/mvco2o/src/main/webapp/resources/js/common/zepto.js?lang=zh-HK">繁體中文</a>
						
					</div>
				</div>
			</div>
		</div>
	</footer>

<script>
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f0cfcccd7b1393990c78efdeebff3968";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
<script>
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
</script>


<div style="display: none;">
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?84d74dc9bf9efbc24efce88f71f831cb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

</div>
</body>



	<link rel="stylesheet" href="/plugins/highlight-9.6.0/github.css">
	<script src="/plugins/highlight-9.6.0/highlight.pack.js"></script>




<script src="/js/libs/emojify-1.1.0.min.js"></script> 
<script src="/js/libs/clipboard-1.5.9.min.js"></script>

</html>

