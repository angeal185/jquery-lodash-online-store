

$.getJSON('./public/data/data.json', function(data) {



  function initBase(){
    initBaseTpl();
    initNav(data.nav,data.domain);
    bcrumbInit();
    initSidebar(data.sidebar);
    addCategories(data.items);
    addTags(data.items);
    initFooter(data.footer.copy,data.footer.links);
  }


  function initApp(){
    searchCat(data.items,data.domain);
    searchTag(data.items,data.domain);
    latestItems(data.items,data.domain);
    cartBadgeInit();
    scrollTop('#app');
  }



  initBase();



  page('/'+data.domain, function(ctx){
    bcrumbHide()
    setTransition(data.transition.div,data.transition.type)
    initItemSlider(data.slides)
    itemList(data.items,data.domain)
    searchItems(data.items,data.domain)

  });

  page('/'+data.domain+'about', function(ctx){
    bcrumbChange('About')
    setTransition(data.transition.div,data.transition.type)
    showtoast('About')
  });

  page('/'+data.domain+'contact', function(){
    bcrumbChange('Contact')
    setTransition(data.transition.div,data.transition.type)
  });

  page('/'+data.domain+'cart', function(){
    bcrumbChange('Cart')
    setTransition(data.transition.div,data.transition.type)
    initCartList(data.domain);
  });

  page('/'+data.domain+'blog', function(){
    bcrumbChange('Blog')
    setTransition(data.transition.div,data.transition.type)
    showtoast('Blog')
    initBlog(data.blog,data.domain)

  });

  page('/'+data.domain+'blog/:id', function(ctx){
    var res = ctx.params.id;
    bcrumbChange('Blog')
    setTransition(data.transition.div,data.transition.type)
    itemSingleBlog(data.blog,res,data.domain)
    showtoast('Blog')
  });

  page('/'+data.domain+'gallery', function(){

    bcrumbChange('Gallery')
    setTransition(data.transition.div,data.transition.type)
    showtoast('Gallery')
    initGallery(data.gallery)




  });

  page('/'+data.domain+'search/:id', function(ctx){
    var res = ctx.params.id;
    bcrumbChange('Search')
    setTransition(data.transition.div,data.transition.type)
    searchInit(res,data.items,data.domain)

  });

  page('/'+data.domain+'category/:id', function(ctx){
    var res = ctx.params.id;
    bcrumbChange('Category')
    setTransition(data.transition.div,data.transition.type)
    catInit(res,data.items,data.domain)

  });

  page('/'+data.domain+'tag/:id', function(ctx){
    var res = ctx.params.id;
    bcrumbChange('Tag')
    setTransition(data.transition.div,data.transition.type)
    tagInit(res,data.items,data.domain)

  });

  page('/'+data.domain+'item/:id', function(ctx){
    var res = ctx.params.id;
    bcrumbChange('Item')
    setTransition(data.transition.div,data.transition.type)
    itemSingle(data.items,res)
  });



  initApp();
  page.start();


});
