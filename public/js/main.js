
/*
setCart([{
  title:"title",
  id:"N00001",
  category:"category1",
  price: 1,
  "status":"available",
  link: "https://www.x.com"
}])
*/


$.getJSON('./public/data/data.json', function(data) {



  function initBase(){
    initBaseTpl();
    initNav(data.nav);
    bcrumbInit();
    initSidebar(data.sidebar);
    addCategories(data.items);
    addTags(data.items);
    initFooter(data.footer.copy,data.footer.links);
  }


  function initApp(){
    searchCat(data.items);
    searchTag(data.items);
    latestItems(data.items);
    cartBadgeInit();
    scrollTop('#app');
  }



  initBase();



  page('/jquery-lodash-online-store/', function(ctx){
    bcrumbHide()
    setTransition(data.transition.div,data.transition.type)
    initItemSlider(data.slides)
    itemList(data.items)
    searchItems(data.items)

  });

  page('/jquery-lodash-online-store/about', function(ctx){
    bcrumbChange('About')
    setTransition(data.transition.div,data.transition.type)
    showtoast('About')
  });

  page('/jquery-lodash-online-store/contact', function(){
    bcrumbChange('Contact')
    setTransition(data.transition.div,data.transition.type)
  });

  page('/jquery-lodash-online-store/cart', function(){
    bcrumbChange('Cart')
    setTransition(data.transition.div,data.transition.type)
    initCartList();
  });

  page('/jquery-lodash-online-store/blog', function(){
    bcrumbChange('Blog')
    setTransition(data.transition.div,data.transition.type)
    showtoast('Blog')
    initBlog(data.blog)

  });

  page('/jquery-lodash-online-store/blog/:id', function(ctx){
    var res = ctx.params.id;
    bcrumbChange('Blog')
    setTransition(data.transition.div,data.transition.type)
    itemSingleBlog(data.blog,res)
    showtoast('Blog')
  });

  page('/jquery-lodash-online-store/gallery', function(){

    bcrumbChange('Gallery')
    setTransition(data.transition.div,data.transition.type)
    showtoast('Gallery')
    initGallery(data.gallery)




  });

  page('/jquery-lodash-online-store/search/:id', function(ctx){
    var res = ctx.params.id;
    bcrumbChange('Search')
    setTransition(data.transition.div,data.transition.type)
    searchInit(res,data.items)

  });

  page('/jquery-lodash-online-store/category/:id', function(ctx){
    var res = ctx.params.id;
    bcrumbChange('Category')
    setTransition(data.transition.div,data.transition.type)
    catInit(res,data.items)

  });

  page('/jquery-lodash-online-store/tag/:id', function(ctx){
    var res = ctx.params.id;
    bcrumbChange('Tag')
    setTransition(data.transition.div,data.transition.type)
    tagInit(res,data.items)

  });

  page('/jquery-lodash-online-store/item/:id', function(ctx){
    var res = ctx.params.id;
    bcrumbChange('Item')
    setTransition(data.transition.div,data.transition.type)
    itemSingle(data.items,res)
  });



  initApp();
  page.start();


});
