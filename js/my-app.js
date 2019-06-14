// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/list/',
    	url: 'list.html',
    	name: 'list',
  		},
		
		{
		path: '/cards/',
    	url: 'cards.html',
    	name: 'cards',
  		},
		
		{
		path: '/menu/',
    	url: 'menu.html',
    	name: 'menu',
  		},
		
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		
		{
		path: '/menu2/',
    	url: 'menu2.html',
    	name: 'menu2',
  		},
		
		{
		path: '/info2/',
    	url: 'info2.html',
    	name: 'info2',
  		},
		
		{
		path: '/menu3/',
    	url: 'menu3.html',
    	name: 'menu3',
  		},
		
		{
		path: '/info3/',
    	url: 'info3.html',
    	name: 'info3',
  		},
		
		
		{
		path: '/menu4/',
    	url: 'menu4.html',
    	name: 'menu4',
  		},
		
		{
		path: '/info4/',
    	url: 'info4.html',
    	name: 'info4',
  		},
		
		{
		path: '/index/',
    	url: 'index.html',
    	name: 'index',
  		},
		
		{
		path: '/aboutus/',
    	url: 'aboutus.html',
    	name: 'aboutus',
  		},
		
		{
		path: '/adriana/',
    	url: 'adriana.html',
    	name: 'adriana',
  		},
		 
		
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

