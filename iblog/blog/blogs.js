/*
	集合所有的博客
*/
define(function(require, exports, module){
	var blogs = [];

	var blog_1 =  require('./2014-06-21.js'); //取得外界exs
	blogs.push(blog_1.blog_2014_06_21_am_1); //调用exs的blog

	
	exports.blogs = blogs;
});