_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

var baseTpl = _.template('<div id="app"><div class="row"><div id="sidebar" class="col m3"></div><div id="main-view" class="col m9"></div></div></div>'),
navTpl = _.template('<nav><div class="nav-wrapper"><a href="/" class="brand-logo">{{title}}</a><ul id="nav-mobile" class="right hide-on-med-and-down"></ul></div></nav>'),
toTopTpl = _.template('<div id="toTop" class="material-icons shrink">keyboard_arrow_up</div>')
navLnk = _.template('<li><a class="waves-effect waves-light {{href}}Lnk" href="/{{href}}">{{title}}</a></li>'),
catTpl = _.template('<div class="card my-4"><h5 class="card-header">{{title}}</h5><div id="{{id}}" class="card-body"></div></div>'),
categorieTpl = _.template('<span class="{{e}} shrink">{{i}}</span>'),
itemListTpl = _.template('<div class="col s12 m3"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="{{imgSub}}"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">{{title}}<i class="material-icons right">more_vert</i></span><p><a href="/item/{{title}}">Show</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">{{title}}<i class="material-icons right">close</i></span><p>{{description}}</p></div><div class="card-action"><a href="/item/{{title}}">View item</a></div></div></div>'),
sidebarTpl = _.template('<div id="{{id}}"><h4>{{title}}</h4></div>'),
searchResTpl = _.template('<h3>Search results for: {{title}}</h3>'),
footerTpl = _.template('<footer class="page-footer row"><div class="col s6">{{text}}</div><div class="footerLinks col s6"></div></footer>'),
footerLinkTpl = _.template('<a class="right" target="_blank" href="{{href}}">{{text}}</a>'),
itemTpl = _.template('<div class="row"><div id="itemImg" class="col s7"></div><div id="itemDetail" class="col s5"></div></div>'),
itemDescTpl = _.template('<div class="col s3">{{key}}</div><div class="col s9">{{val}}</div>'),
itemHeadTpl = _.template('<h2><span class="badge blue">{{price}}</span></h2><h2 class="h2-responsive font-bold">{{title}}</h2><hr>'),
itemFootTpl = _.template('<hr><a type="button" target="_blank" href="{{link}}" class="btn waves-effect waves-light">buy</a><a type="button" id="addCart" class="btn waves-effect waves-light">Save</a>'),
itemImgTpl = _.template('<img class="materialboxed w100" src="{{img}}">'),
itemImgSmallTpl = _.template('<div class="col m4"><img class="materialboxed w100 mt40" src="{{img}}"></div>'),
itemSliderTpl = _.template('<div class="slider"><ul class="slides"></ul></div>'),
itemSlideTpl = _.template('<li><img src="{{img}}"><div class="caption {{align}}-align"><h3>{{title}}</h3><h5 class="light grey-text text-lighten-3">{{sub}}</h5></div></li>'),
bCrumb = _.template('<a href="{{href}}" class="breadcrumb">{{title}}</a>'),
latestItemTpl = _.template('<div class="col s12"><div class="card horizontal row side-item"><div class="card-image col s4"><img class="side-img" src="{{img}}"></div><div class="card-stacked col s8"><div class="card-content"><p class="truncate">Title: <span>{{title}}</span></p><p>Price: <span>{{price}}</span></p><a href="/item/{{src}}">view</a></div></div></div></div>'),
galleryItemTpl = _.template('<div class="col s3"><h5 class="center">{{title}}</h5><img class="materialboxed w100 shrink bs" data-caption="{{text}}" src="{{src}}"></div>'),
headerTpl = _.template('<h4>{{title}}</h4>'),
blogItemsTpl = _.template('<div class="blog-list col s12"><div class="row"><div class="col s4"><img class="blog-img" src="{{img}}"></div><div class="col s8"><h3>{{title}} <span class="blog-date">{{date}}</span></h3><h5>{{sub}}</h5><p class="truncate">{{content}}</p><div class="blog-btm"><p>author: {{author}}</p><a type="button" href="/blog/{{title}}" class="btn waves-effect waves-light blog-btn">Read more</a></div></div></div><hr></div>'),
blogItemTpl = _.template('<div class="container"><h3>{{title}} <span class="blog-date">{{date}}</span></h3><img class="blog-img" src="{{img}}"><h5>{{sub}}</h5><p class="truncate">{{content}}</p><p>author: {{author}}</p><a type="button" href="/blog/{{title}}" class="btn waves-effect waves-light blog-btn">back</a></div>'),
cartListTpl = _.template('<table><thead><tr id="listObj"></tr></thead><tbody id="listItems"></tbody></table>'),
cartItemTpl = _.template('<tr><td>{{title}}</td><td>{{id}}</td><td><a href="/category/{{category}}">{{category}}</a></td><td>{{price}}</td><td>{{stat}}</td><td><a href="/item/{{title}}">view</a></td><td><a target="_blank" href="{{link}}">Buy</a></td><td><button type="button" id="{{id}}" class="btn cartDel">Remove</button></td></tr>'),
cartBadgeTpl = _.template('<span class="cartBadge">{{no}}</span>'),
latestItemsBase = _.template('<div class="latestItems"><h3>Latest items</h3><div class="row latestItemsList"></div></div>'),
searchBaseTpl = _.template('<div id="search" class="input-field"><input id="searchBox" type="text" class="validate"><label for="searchBox">Search</label><button id="searchBtn" class="btn waves-effect waves-light btn-small w100">Search</button></div>')
