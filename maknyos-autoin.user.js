// ==UserScript==
// @name           Maknyos AutoIn
// @namespace      http://userscripts.org/scripts/show/91629
// @icon           https://github.com/idoenk/maknyos-autoin/raw/master/assets/img/icon-60x60.png
// @version        3.9.37
// @description    Auto click get link, iframe killer. Hosts: indowebster,2shared,zippyshare,mediafire,sendspace,uptobox,howfile,uppit,imzupload,jumbofiles,sendmyway,tusfiles,dropbox,dropapk,uploadbank,suprafiles,yadi.sk,datafilehost,userscloud,hulkload,app.box.com,dailyuploads,kumpulbagi,moesubs,uploadrocket,my.pcloud.com,kirino.ga,seiba.ga,mylinkgen,rgho.st,uploads.to,upload.ee,upload.so,cloud.mail.ru,bc.vc,sh.st,adf.ly,adfoc.us,gen.lib.rus.ec,libgen.io,golibgen.io,bookzz.org,bookfi.net
// @homepageURL    https://greasyfork.org/scripts/97
// @author         Idx
// @grant          GM_log
// @require        https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @include        /^https?://(files|maknyos)\.indowebster\.com/\w/
// @include        /^https?://(.+\.)2shared\.com/file/\w/
// @include        /^https?://(.+\.)zippyshare\.com/v/\w/
// @include        /^https?://(.+\.)dfpan\.com/((file|fs)/\w+|file/down/\w+)/
// @include        /^https?://(|www\.)mediafire\.com/(download|view|file)/\w/
// @include        /^https?://(|www\.)sendspace\.com/file/\w/
// @include        /^https?://(|www\.)uptobox\.com/\w/
// @include        /^https?://(|www\.)yimuhe\.com/((down|file)-|n_dd\.php\?)\w/
// @include        /^https?://(|www\.)howfile\.com/file/\w/
// @include        /^https?://(|www\.)uppit\.com/\w/
// @include        /^https?://(|www\.)imzupload\.com/\w/
// @include        /^https?://(|www\.)jumbofiles\.com/\w/
// @include        /^https?://(|www\.)sendmyway\.com/\w/
// @include        /^https?://(|www\.)tusfiles\.net/\w/
// @include        /^https?://(|www\.)dropbox\.com/s/\w/
// @include        /^https?://(|www\.)solidfiles\.com/\w/
// @include        /^https?://(|www\.)yadi\.sk/\w/
// @include        /^https?://(|www\.)datafilehost\.com/d/\w/
// @include        /^https?://(|www\.)userscloud\.com/\w/
// @include        /^https?://(|www\.)hulkload\.com/\w/
// @include        /^https?://app\.box\.com/s/\w/
// @include        /^https?://(|www\.)dailyuploads\.net/\w/
// @include        /^https?://(|www\.)kumpulbagi\.id/\w/
// @include        /^https?://(|www\.)kbagi\.com/\w/
// @include        /^https?://(|www\.)kb.simple-aja\.info/\w/
// @include        /^https?://(|www\.)moesubs\.com/url/\w/
// @include        /^https?://kirino\.ga/lak/\w/
// @include        /^https?://(|www\.)kirino\.sexy/\w/
// @include        /^https?://(|www\.)seiba\.ga/\w/
// @include        /^https?://(|www\.)mylinkgen\.com/\w/
// @include        /^https?://(|www\.)openload\.co/\w/
// @include        /^https?://(|www\.)oload\.tv/\w/
// @include        /^https?://(|www\.)rgho\.st/\w/
// @include        /^https?://(|www\.)uploadrocket\.net/\w/
// @include        /^https?://(|www\.)(upload\.so|uplod\.ws)/\w/
// @include        /^https?://(|www\.)upload\.ee/files/\w/
// @include        /^https?://(|www\.)uploads\.to/\w/
// @include        /^https?://(|www\.)uploadbank\.com/\w/
// @include        /^https?://(|www\.)drop\.me/\w/
// @include        /^https?://(|www\.)jzrputtbut.net/\w/
// @include        /^https?://(|www\.)dropapk\.com/\w/
// @include        /^https?://(|www\.)suprafiles\.org/\w/
// @include        /^https?://(|www\.)cloudyfiles\.org/\w/
// @include        /^https?://(|www\.)douploads\.com/\w/
// @include        /^https?://(|www\.)file-upload\.com/\w/
// @include        /^https?://(|www\.)topddl\.net/file/\w/
// @include        /^https?://(|www\.)up-4ever\.com/\w/
// @include        /^https?://(|www\.)3rbup\.com/\w/
// @include        /^https?://(|www\.)megadrive\.co/\w/
// @include        /^https?://(|www\.)samaup\.com/\w/
// @include        /^https?://(|www\.)akoam\.com/download/[^\/]+/\w/
// @include        /^https?://(|www\.)rapidgator\.net/(file|download)/\w/
// @include        /^https?://(|www\.)filefactory\.com/file/[^\/]+/\w/
// @include        /^https?://up\.top4top\.net/\w/
// @include        /^https?://public\.upera\.co/\w/
// @include        /^https?://cloud\.mail\.ru/public/\w/
// @include        /^https?://drive\.google\.com/file/d\/\w/
// @include        /^https?://docs\.google\.com/uc\?\w/
// @include        /^https?://bc\.vc/([\w]+)(\#\w+?)?$/
// @include        /^https?://sh\.st/([\w]+)(\#\w+?)?$/
// @include        /^https?://adf\.ly/\w/
// @include        /^https?://adfoc\.us/\w/
// @include        /^https?://my\.pcloud\.com/publink/\w/
// @include        /^https?://filescdn\.com/\w/
// @include        /^https?://gen\.lib\.rus\.ec/\w/
// @include        /^https?://libgen\.io/\w/
// @include        /^https?://libgen\.me/\w/
// @include        /^https?://golibgen\.io/\w/
// @include        /^https?://bookzz\.org/\w/
// @include        /^https?://(|\w+.)bookfi\.net/\w/
// ==/UserScript==



(function() {
  var gvar=function(){};
  gvar.__DEBUG__ = !1;

  function MaknyosHelper(baseURI){
    this.baseURI = baseURI;
    this.domain  = null;
    gvar.isFF    = !1;

    if("function" !== typeof GM_log || (gvar.isFF = (navigator.userAgent.indexOf('Firefox') !== -1)) ){
      GM_log = function(_msg) {
        try {
          unsafeWindow.console.log('GM_log: '+_msg)
        }
        catch(e){}
      };

      try {
        GM_log('GM_log function GM_log rewriten');
      }
      catch(e){}
    }

    this.action  = new Actions();
  }
  MaknyosHelper.prototype = {
    matchDomain: function(){
      var domain = this.baseURI.match(/^https?:\/\/([^\/]+)\//);
      if(domain)
        this.domain=domain[1];
      return this;
    },

    matchAction: function(){
      if(this.domain)
        this.action.find(this.domain);
      return this;
    },

    invokeAction: function(){
      if(this.action.invoked){
        if(!this.action.noBaseClean)
          this.action.baseCleanUp();
        this.action.invoked();
      }
      return this;
    },
  };


  function Actions(){
    this.invoked=null;
    this.noBaseClean=null;
  }
  Actions.prototype = {
    find: function(domain){
      this.clog('Actions:find, domain='+domain);

      var isMatch, pattern;
      
      for(var key in this.patterns){
        pattern = this.patterns[key];
        this.clog('pattern-check: '+pattern.rule+' vs '+domain);
        isMatch = typeof pattern.rule === 'string' ? pattern.rule == domain : pattern.rule.test(domain);
        if(isMatch){
          this.invoked = pattern.run;
          this.noBaseClean = !isUndefined(pattern.noBaseClean) && pattern.noBaseClean;
          return;
        }
      }
    },

    get_href: function(){
      return location.href;
    },
    set_href: function(x){
      location.href = x;
    },

    parse_handle_href: function(x){
      var cucok, href;
      if( "string" == typeof x )
        href = x;
      else if( "object" == typeof x )
        href = x.getAttribute("href");

      if( href && /\/handle\?/.test(href) ){
        href = href.replace('&amp;', '&');
        if( cucok = /\&?fl=((?:f|ht)tps?[^\&]+)/i.exec(href) )
          href = decodeURIComponent(cucok[1]);
        else
          this.clog("parsing fail on href, missing param `fl=`");
      }
      return href;
    },

    /**
     * Try find form to submit of given button element
     * If it fail, just click that button anyway
     */
    trySumbit: function(button, cb_before){
      var tform = this.closest(button, 'form'),
          el    = null
      ;

      if( 'function' === typeof cb_before )
        cb_before(tform);

      if( tform ){
        if( el = g('[name="referer"]', tform) )
          el.value = '';

        if( button.getAttribute('name') ){
          el = document.createElement('input');
          el.setAttribute('type', 'hidden');
          el.setAttribute('name', button.getAttribute('name'));
          if( button.value )
            el.value = button.value;
          else if(button.textContent)
            el.value = button.textContent;

          tform.appendChild(el);
        }

        tform.submit();
      }
      else{
        this.clog('Inside trySumbit: form not found. Clicking button..');
        
        SimulateMouse(button, "click", true);
      }
    },

    // do waitwhat -> thenwhat
    waitforit: function(waitwhat, thenwhat, delay){
      var ME = this,
          stoWait = null,
          itry    = 0,
          maxtry  = 10,
          thenwhatwrap = function(r){
            ME.clog('callback waiting element, doing thenwhatwrap..');
            ('function' == typeof thenwhat ) &&
              thenwhat(r);
          };
      
      if( !delay )
        delay = 0;
      delay = parseInt( delay );

      ME.clog('waiting for element..');
      if('function' == typeof waitwhat){
        var waitwrap = function(){
          ME.clog('['+itry+']: inside waitwrap..');
          itry++;
          var r_ = null;
          if( r_ = waitwhat() ){
            stoWait && clearTimeout( stoWait )
            thenwhatwrap( r_ );
          }
          else{
            if( itry < maxtry )
              stoWait = setTimeout(waitwrap, delay+1000);
            else{

              ME.clog('waitforit failed...');
            }
          }
        };
        stoWait = setTimeout(waitwrap, delay+1000);
      }
      else
        thenwhatwrap();
    },

    observer_init_: function(ev){
      var ME = this,
          params = ME.param_observe
      ;
      ME.clog('inside observer_init_..');
      ME.clog(ME.param_observe);
      
      if( ev.type == params.event ){
        
        ME.clog('ahoy this match event...'+ev.type)
      }
    },
    observe: function(element, params){
      var ME = this,
          config = {}
      ;
      if( !(params && params.callback) ){
        ME.clog('missing required params');
        return !1;
      }

      // create an observer instance
      var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      var observer = new MutationObserver(function(mutations) {
        var BreakException = {};
        try{
          mutations.forEach(function(mutation) {
            // var $el = $(mutation.target);
            // if( is_observed ) throw BreakException;

            if( 'function' == typeof params.callback )
              params.callback( mutation.target );
          });
        }catch(e){

          if(e!==BreakException) throw e;
        }
      });
       
      // configuration of the observer:
      config = $.extend({
        attributes: true,
        childList: true,
        characterData: true
      }, params.config);
      ME.clog(config);
      
      // pass in the target node, as well as the observer options
      observer.observe(element, config);
       
      // later, you can stop observing
      // observer.disconnect();
      gvar.observer = observer;
    },

    injectBodyStyle: function(stylesString){
      var style = document.createElement("style");
      style.appendChild( document.createTextNode(stylesString) );
      document.body.appendChild(style);
    },
    injectBodyScript: function(scriptFunc){
      var script = document.createElement("script");
      script.textContent = "(" + scriptFunc.toString() + ")();";
      document.body.appendChild(script);
    },

    // load url to an iframe
    frameload: function(url){
      var body, cb_fn, idfrm = 'xMNyFrame';
      var iframe = document.createElement('iframe');
      
      if( g('#'+idfrm) )
        g('#'+idfrm).removeChild();

      iframe.setAttribute('id', idfrm);
      iframe.setAttribute('title', "iFrame of "+idfrm+"; src="+url);
      iframe.setAttribute('style', 'position:absolute; z-index:999999; '+(gvar.__DEBUG__ ? 'border:1px solid #000; left:0; top:0; width:100%;' : 'border:0; height:0; width:0; left:-9999; bottom:9999'));
      iframe.setAttribute('src', url);

      body = g('body');
      if( gvar.__DEBUG__ )
        body.insertBefore(iframe, body.firstChild);
      else
        g('body').appendChild(iframe);


      if( gvar.__DEBUG__ ){
        if( g('#'+idfrm) )
          this.clog("iframe created, src="+url);
        else
          this.clog("error while creating iframe");
      }
    },
    // resize capcay
    rezCapcay: function(target, dims){
      if(!target) return;
      if(dims.length){
        var styleStr='';
        dims[0] && (styleStr += 'width:'+dims[0]+'px;');
        dims[1] && (styleStr += 'height:'+dims[1]+'px;');
        target.setAttribute('style', styleStr);
      }
    },

    disableWindowOpen: function(){
      if(unsafeWindow){
        unsafeWindow.open = function(){};
      }

      if(window){
        window.open = function(){};
      }
    },

    // get codes of simple capcay code
    scrap_simplecapcay: function(el_code){
      var $code = $(el_code);
      var codes=[], thecodes = [];
      var $trycode = $code.closest("td").prev();
      if( $trycode.length ){
        $trycode.find(">div > span").each(function(){
          var $me = $(this);
          var pl = $me.css("paddingLeft").replace('px','');
          thecodes.push({
            'id': pl,
            'val': $me.text()
          })
        });

        thecodes.sort(function(a,b) {
          return a.id - b.id;
        });
        for(var i=0, iL=thecodes.length; i<iL; i++)
          codes.push( thecodes[i].val );

        if( codes.length )
          $code.val( codes.join("") );
      }

      return codes;
    },

    scrapScriptsByRegex: function(pattern, parent){
      // must be ( match instanceof RegExp )

      if( 'undefined' == typeof parent )
        parent = document;

      var scripts = parent.getElementsByTagName('script'),
          cucok = null,
          inner = ''
      ;
      for( var i = 0; i < scripts.length; i++ ){
        if( inner = scripts[i].innerHTML ){
          this.clog(inner);
          if( cucok = pattern.exec(inner) )
            break;
        }
      }
      return cucok;
    },

    // basic cleanup document from anoying things
    // eg. iframe, onclick body, etc
    baseCleanUp: function(){
      this.clog("killing frames..");
      this.killframes();

      this.clog("killing click events.");
      this.killevents(null, 'click');
      this.killevents(null, 'mousedown');

      this.clog("killing onbeforeunload events.");
      this.killunload();
    },

    // brutaly kill frames
    killframes: function(par){
      !par && (par = document);
      var o = par.getElementsByTagName('iframe');
      for(var i=o.length-1;i>=0;i--)
        o[i].parentNode.removeChild(o[i]);

      o = gAll('.ad'+'sbygo'+'ogle');
      for(var i=o.length-1;i>=0;i--)
        o[i].parentNode.removeChild(o[i]);

      this.clog("killframes done");
    },

    killevents: function(par, type, handle){
      !type && (type = 'click');
      !par && (par = document);
      !handle && (handle = function(){});
      var o = par.getElementsByTagName('*');
      for(var i=o.length-1;i>=0;i--){
        if ( o[i].removeEventListener ) {
          o[i].removeAttribute("on"+type);
          //W3C Standard    
          o[i].removeEventListener( type, handle, true );
        }
      }
      this.clog("killevents done");
    },

    killunload: function(){
      window.onbeforeunload = null;
      window.onunload = null;
      unsafeWindow.onbeforeunload = null;
    },

    isVisible: function (ele) {
      // this.clog("visibility-test; clientWidth="+ele.clientWidth+'; clientHeight='+ele.clientHeight+'; opacity='+ele.style.opacity+'; visibility='+ele.style.visibility+'; offsetParent='+ele.offsetParent);
      return true &&
        // ele.clientWidth !== 0 &&
        // ele.clientHeight !== 0 &&
        ele.offsetParent !== null &&
        ele.style.opacity !== 0 &&
        ele.style.visibility !== 'hidden';
    },

    hasClass: function(cName, ele){
      if(!cName || !ele) return;
      var clss = (ele.getAttribute('class')||'').split(' ');
      return (clss.indexOf(cName) != -1);
    },

    // get nearest parent element matching selector
    closest: function (el, selector) {
      var parent, matchesFn;

      // find vendor prefix
      ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
        if (typeof document.body[fn] == 'function') {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }

      return null;
    },

    show_alert: function(msg, force) {
      if(arguments.callee.counter) {
        arguments.callee.counter++
      }else {
        arguments.callee.counter = 1
      }

      if("function" == typeof GM_log){
        GM_log("(" + arguments.callee.counter + ") " + (typeof msg == "object" ? ">>" : msg));
        if( typeof msg == "object" )
          GM_log( msg );
      }
      else{
        console && console.log && console.log(msg);
      }
      if( force == 0 )
        return
    },
    clog: function(x){
      if( !gvar.__DEBUG__ )
        return
      this.show_alert(x);
    }
  };
  Actions.prototype.patterns = {
    indowebster: {
      rule: /(files|maknyos)\.indowebster\.com/,
      run: function(){

        var that = this,
            dlBtn = g('#downloadBtn'),
            delayTime = 0,
            btn_free, scripts, innerScript,
            cucok, cokcok, fnName,
            el, mainWrap, aabp
        ;
        // anti-(antiabp) :: injectBodyStyle-ish
        aabp = function(){
          var style = document.createElement("style"),
              css = ''
                +'*[id*="idb"] ~ #bodyAndFooter{display: initial!important;}'
                +'*[id*="idb"]{display:none!important;}'
              ;

          style.textContent = css;
          document.body.insertBefore(style, document.body.firstChild);
          that.clog('injecting anti-(antiabp)..');
        };
        aabp();

        if( dlBtn ){

          scripts = document.getElementsByTagName( 'script' );
          for( var i = 0; i < scripts.length; ++i ) {
            innerScript = scripts[i].innerHTML;
            innerScript = innerScript.trim();
            
            if( innerScript ){
              if( cucok = /(\$\.post\b.+)/m.exec(innerScript)) {

                if( cokcok = /var\s+s\s+=\s(\d+)/.exec(innerScript) )
                  delayTime = parseInt(cokcok[1]);

                innerScript = cucok[1];

                // getting fn-name
                if( cucok = /function\([^\)]+.\s*\{\s*(\w+)/.exec(innerScript) )
                  fnName = cucok[1];

                // required: [fnName, delayTime]
                var scriptHandler = function(){
                  return (function(win, $){
                    var gvar = gvar||{};
                    gvar.__DEBUG__ = !1;

                    win["__dlhit__"] = null;
                    win["___function___"] = function(ret){
                      console.log('AHOYY, .......')
                      console.log(ret);

                      var $tgt = $("#filename");
                      $tgt.prepend('<div>DOWNLOAD</div>');
                      $("#filename").wrap("<a href='"+ret+"' class='button color_blue'></a>");
                      $tgt.parent().css('display', 'block');

                      setTimeout(function(){
                        win["iframe_preloader"](ret)
                      }, 100);
                      $('#downloadBtn').remove();
                      win["__dlhit__"] = true;
                    };

                    win["iframe_preloader"] = __iframe_preloader__;
                    win["g"] = __function_g__;

                    setTimeout(function(){
                      if( win["__dlhit__"] === null ){
                        
                        console.log('requesting XHR die to __dlhit__='+win["__dlhit__"]);
                        ___innerScript___;
                      }
                    }, (___delaytime___+1)*1000);
                  })(window, jQuery);
                };
                scriptHandler = scriptHandler.toString();
                scriptHandler = scriptHandler.replace(/___function___/i, fnName);
                scriptHandler = scriptHandler.replace(/___innerScript___/i, innerScript);
                scriptHandler = scriptHandler.replace(/___delaytime___/i, delayTime);
                scriptHandler = scriptHandler.replace(/__iframe_preloader__/i, this.frameload.toString());
                scriptHandler = scriptHandler.replace(/__function_g__/i, g.toString());

                this.injectBodyScript(scriptHandler);

                // end-it
                break;
              }
            }
          }
          // end:for

          // remove css idb: #idb
          scripts = document.getElementsByTagName( 'style' );
          for( var i = 0; i < scripts.length; ++i ){
            innerScript = scripts[i].innerHTML;
            if( innerScript ){
              if( cucok = /\#idb/.exec(innerScript)) {

                scripts[i].parentNode.removeChild(scripts[i]);
                break;
              }
            }
          }
          // end:for
        }
        else if( btn_free = g('.block.al_c a.downloadBtn') ){
          btn_free.setAttribute('data-target', btn_free.getAttribute('href'));
          btn_free.setAttribute('href', 'javascript:;');
          btn_free.setAttribute('_target', 'self');
          btn_free.onclick = function(e){
            var href = this.getAttribute('data-target');;
            this.setAttribute('href', href);
            location.href = href;
            return true;
          }
          SimulateMouse(btn_free, "click", true);
        }
      }
    },

    sendspace: {
      rule: /sendspace\.com/,
      run: function(){
        this.clog('inside sendspace');
        g('#download_button') && SimulateMouse(g('#download_button'), "click", true);
      }
    },

    zippyshare: {
      rule: /zippyshare\.com/,
      run: function(){
        this.clog('inside zippyshare');
        var btn = btn = g("[id=dlbutton]");

        // failover, just incase
        if( !btn ) {
          btn = g("[alt*=Download]");
          if( btn )
            btn = btn.parentNode;
          else
            btn = g("[class=download]");

          if( btn )
            btn = btn.parentNode;
        }

        if( btn ) {
          this.waitforit(function(){

            return /(?:\.zippyshare\.com)?\/d\/.+/.test( btn.getAttribute("href") );
          }, function(){

            btn && SimulateMouse(btn, "click", true);
          });
        }
        else{

          this.clog('missing: download button');
        }
      }
    },

    mediafire: {
      rule: /mediafire\.com/,
      noBaseClean: true,
      run: function(){

        var that = this,
            dcg, selector, btn, nbtn
        ;

        if( dcg = g("#docControlGroup") ){
          selector = './/a[contains(@target,"_blank")]';
          selector = xp(selector, dcg, true);
          selector && that.set_href(selector.getAttribute('href'))
        }
        else if( dcg = g('#recaptcha_widget_div') ){
          var recapcay = g('.g-recaptcha', dcg),
              site_key = recapcay.getAttribute('data-sitekey')
          ;

          if('function' === typeof $ && site_key){

            $('.g-recaptcha', dcg)
              .replaceWith($('<div id="maknyos-recaptcha" data-bijikuda="1" data-sitekey="'+site_key+'"></div>'));

            // recaptcha-rebuilder
            var scriptHandler = function(_site_key){
              return (function(win, $){

                if("undefined" !== typeof grecaptcha){
                  grecaptcha.render("maknyos-recaptcha", {
                    sitekey: "___SITEKEY___",
                    callback: function(){ $(".dl_startlink > a").trigger("click") }
                  });
                }
                else{

                  console.log('grecaptcha undefined');
                }
              })(window, $);
            };
            scriptHandler = scriptHandler.toString();
            scriptHandler = scriptHandler.replace(/___SITEKEY___/, site_key);
            that.injectBodyScript(scriptHandler);

            var cssString = ''
              +'#form_captcha .captchaPromo:before { content: "Click to download"; font-size: 1.2em; color: #ccc; position: absolute; top: 6px; left: -20px; margin-top: -30px;}'
              +'.nonpro_adslayout #form_captcha .captchaPromo, .freeAccount .pro #form_captcha .captchaPromo{ background-size: 275%; background-position-y: -110px; }'
            ;
            that.injectBodyStyle(cssString);
          }
        } else {

          that.waitforit(function(){
            return g('.download_link a');
          }, function(){
            btn = g('.download_link a');
            nbtn = document.createElement('a');
            nbtn.setAttribute('href', btn.getAttribute('href'));
            nbtn.setAttribute('onclick', 'location.href=this.href; return !1');
            nbtn.innerHTML = btn.innerHTML;
            btn.parentNode.replaceChild(nbtn, btn);

            SimulateMouse(nbtn, "click", true);
          }, 100);
        }
      }
    },

    '2shared': {
      rule: /\b2shared\.com/,
      run: function(){
        this.clog('inside 2shared;');

        var gotit = false, dlBtn=null, btns, that;

        that = this;
        setTimeout(function(){
          btns = xp('//*[contains(@id,"dlBtn") and not(contains(@style,"display:"))]', null);

          if( btns.snapshotLength ){
            if( btns.snapshotLength == 1 ){
              gotit = true;
              dlBtn = btns.snapshotItem(0);
            }
            else
              for(var i=0, iL=btns.snapshotLength; i<iL; i++){
                dlBtn = btns.snapshotItem(i);
                that.clog(dlBtn);
                if( that.isVisible(dlBtn) ){
                  gotit = true;
                  break;
                }
              }
          }

          if( gotit && dlBtn ){
            // this.frameload(dlBtn.getAttribute('href'));
            that.set_href(dlBtn.getAttribute('href'));
          }
          else
            that.clog("unable finding download-button");
        }, 345);
      }
    },

    uptobox: {
      rule: /uptobox\.com/,
      run: function(){

        var that        = this
            waitStr     = null,
            waitFor     = !1,
            countdown   = g('#timeLeft'),
            btnDownload = g('#btn_download')
        ;

        // force download link with https based on its parent protocol
        var prefilter_uptobox_https = function(href_){
          var prot = location.protocol;
          if( location.protocol == 'https:' && !/https:/i.test(href_) ){
            href_ = href_.replace(/^http\:/i, 'https:');
            
            that.clog('https download-link='+href_);
          }
          return href_;
        };
        

        if( countdown ){
          scripts = document.getElementsByTagName( 'script' );
          for( var i = 0; i < scripts.length; ++i ) {
            if( cucok = /\bcountdownNum\s*=\s*(\d+)/.exec(scripts[i].innerHTML)) {
              waitFor = Math.floor(parseInt( cucok[1] ) / 3);
              break;
            }
          }

          if( waitFor ){
            this.waitforit(function(){

              var disabled = btnDownload.getAttribute('disabled');
              return ('undefined' != typeof disabled && disabled ? !1 : btnDownload);
            }, function(el){

              SimulateMouse(el, "click", true);
            }, waitFor * 1000);
          }
        }
        else{
          // is the timeleft timer simply not activated
          if( btnDownload ){

            SimulateMouse(btnDownload, "click", true, prefilter_uptobox_https);
          }
          else{
            btnDownload = g('#countdown_str');
            if( btnDownload ){
              this.clog('disabled='+btnDownload.getAttribute('disabled'));
              if( !btnDownload.getAttribute('disabled') ){

                // do downoad
              }
              else{
                waitStr = String(g('#countdown_str').textContent).replace(/[\s\W]/g,'').toLowerCase();
                if( cucok = /(?:[a-zA-Z]+)?(\d+)(?:[a-zA-Z]+)?/.exec(waitStr) ){

                  this.waitforit(function(){

                    return g('#btn_download');
                  }, function(el){

                    SimulateMouse(el, "click", true, prefilter_uptobox_https);
                  }, parseInt(cucok[1] * 1000));

                }
              }
            }
            else if( g('.button_upload') ){
              // take-care of fake exe download
              var link, rlink, el = g('.button_upload');
              if( link = el.parentNode ){
                rlink = getParameterByName("prod"+"uct_d"/*fo*/+"ownloa"+"d_url", link.getAttribute("href"));
                
                // hiding the-arse
                if( rlink ){
                  rlink = 'http://blankrefer.com/?'+rlink;
                  this.frameload(rlink);
                }
                else{
                  // last-resort, key may changed.
                  SimulateMouse(link, "click", true, prefilter_uptobox_https);
                }
              }

            }else{

              this.clog('tpl-changed, mismatch element');
            }
          }
        }
      }
    },

    howfile: {
      rule: /howfile\.com/,
      run: function(){
        this.clog('inside howfile');
        this.waitforit(function(){

          return xp('//a[contains(.,"Download")]', null, true);
        }, function(){

          var btnDownload = xp('//a[contains(@href, "/downfile/")]', g("#downloadtable"), true);
          btnDownload && SimulateMouse(btnDownload, "click", true);
        }, 234);
      }
    },

    uppit: {
      rule: /uppit\.com/,
      run: function(){
        this.clog('inside uppit');
        var countdown = g('#countdown');
        var cucok, waitFor, scripts;
        if( countdown ){
          scripts = document.getElementsByTagName( 'script' );
          for( var i = 0; i < scripts.length; ++i ) {
            if( cucok = /\bcount\s*=\s*(\d+)/.exec(scripts[i].innerHTML)) {
              waitFor = parseInt(cucok[1]);
              break;
            }
          }

          if( waitFor ){

            this.waitforit(function(){
              return !g('#countdown');
            }, function(){
              SimulateMouse(g('#btn_download'), "click", true);
            }, waitFor * 1000);
          }
        }
        else{
          SimulateMouse(g('.m-btn'), "click", true);
        }
      }
    },

    imzupload: {
      rule: /imzupload\.com/,
      run: function(){
        this.clog('inside imzupload');

        var main, btnDownload = g('[type="submit"][name="method_free"]',null,true);
        if( btnDownload ){
          SimulateMouse(btnDownload, "click", true);
        }
        else{
          g('.tbl1') &&
            g('.tbl1').setAttribute('style','display:none;');
          var imgcapcay, tbcacay = g('.captcha');
          if( tbcacay )
            imgcapcay = g('img', tbcacay);

          if( imgcapcay ){
            this.rezCapcay(imgcapcay, [null, 100]);
            g('[type=text]',tbcacay).focus();
          }
          else{
            main = g('[role=main]');
            btnDownload = xp('//a[contains(@href,"imzupload.com/files")]',main,true);
            btnDownload && this.frameload(btnDownload.getAttribute('href'))
          }
        }
      }
    },

    tusfiles: {
      rule: /tusfiles\.net/,
      run: function(){
        var that    = this,
            maxTry  = 3,
            iTry    = 0,
            sTryStop = null,
            btnDl    = null
        ;
        var cb_pagestop = function(){
          var el = null;

          if( el = g('[name=quick]') ){
            el.removeAttribute('checked');
            el.parentNode.removeChild(el);
          }

          if( el = g('[name=F1]') )
            el.submit();
        };

        if( btnDl = g('[name=F1]') ){

          sTryStop = setInterval(function(){
            window.stop();
            iTry++;

            if( iTry > maxTry ){
              sTryStop && clearInterval( sTryStop );
              if("function" == typeof cb_pagestop)
                cb_pagestop()
            }
          }, 10);
        }
        else{

          that.clog('Not download page or missing download button');
        }
      }
    },

    jumbofiles: {
      rule: /jumbofiles\.com/,
      run: function(){
        this.clog('inside jumbofiles, method not found');
      }
    },

    sendmyway: {
      rule: /sendmyway\.com/,
      run: function(){
        this.clog('inside sendmyway');
        var dd, adcopy = g('#adcopy_response'),
            btnDownload = g('#download_link'),
            btnFreeDownload = g('.btn-free.dl_btn')
        ;
        if( !adcopy && !btnDownload ){
          this.clog('adad adcopy');
          btnFreeDownload && SimulateMouse(btnFreeDownload, "click", true);
        }
        else{
          if( !btnDownload ){
            adcopy.focus();
          }
          else{
            dd = g('#direct_download');
            btnDownload = g('#download_link', dd);
            this.frameload(btnDownload.getAttribute('href'))
          }
        }
      }
    },

    box: {
      rule: /app\.box\.com/,
      run: function(){
        var btnDownload, that = this;
        this.waitforit(function(){
          return xp('//button[contains(@data-type, "download-btn")]', null, true);
        }, function(){
          btnDownload = xp('//button[contains(@data-type, "download-btn")]', null, true);
          btnDownload && SimulateMouse(btnDownload, "click", true);
        }, 100);
      }
    },

    dropbox: {
      rule: /dropbox\.com/,
      run: function(){
        var btnDownload;
        if( btnDownload = g('*[id*=download_button]') )
            setTimeout(function(){
              SimulateMouse(btnDownload, "click", true);
            }, 123);
        else
          this.clog('dropbox: missing download button, page may changed');
      }
    },

    solidfiles: {
      rule: /solidfiles\.com/,
      run: function(){
        var that  = this,
            $bc   = g('.box-content:first-child'),
            btnDownload
        ;
        that.clog('inside solidfiles, '+that.get_href());

        setTimeout(function(){
          that.killframes();
          that.disableWindowOpen();
        }, 123);

        if( btnDownload = g('[type=submit]', g('form.ng-pristine')) ){
          setTimeout(function(){
            SimulateMouse(btnDownload, "click", true)
          }, 125);
        }
        else {
          if( $bc.textContent.indexOf('downloading') == -1 )
            this.clog('solidfiles: missing download button, page may changed');
        }
      }
    },

    yadi: {
      rule: /yadi\.sk/,
      run: function(){
        var that = this;
        that.clog('inside yadi, '+that.get_href());

        this.waitforit(function(){

          return el = xp('//button[contains(@class,"button2") and contains(.,"ownloa")]', null, true);
        }, function(btnDownload){

          if( btnDownload ){

            // models-client json
            var json = g('#models-client').innerHTML,
                pdata = {};

            if( json ){
              try{
                json = JSON.parse(json)
              }catch(e){ json = null; }
            }

            if( json ){
              var data, url;

              for(var i=0, iL=json.length; i<iL; i++){
                if( isUndefined(json[i]['data']) )
                  continue;
                data = json[i]['data'];

                if(json[i].model == 'resource'){
                  if( isDefined(data['id']) )
                    pdata['id.0'] = data['id'];
                }
                else if(json[i].model == 'config'){
                  if( isDefined(data['sk']) )
                    pdata['sk'] = data['sk'];
                }
              }
              pdata['_model.0'] = 'do-get-resource-url';

              // xhr
              url = location.protocol+'//'+location.host+'/models/?_m=do-get-resource-url';
              $.post(url, pdata, function(ret){
                that.clog(ret);
                if(ret && ret.models && ret.models.length){
                  var md = ret.models[0];
                  if( md.data ){
                    if( md.data.file )
                      that.frameload( md.data.file );
                    else if( md.data.folder )
                      that.frameload( md.data.folder );
                  }
                  else{

                    that.clog('yadi: missing xhr data models');
                  }
                }
              });
            }
            else{

              that.clog('yadi: missing models-clients');
            }
          }
          else{
            that.clog('yadi: missing download button, page may changed');
          }
            
        }, 100);
      }
    },

    datafilehost: {
      rule: /datafilehost\.com/,
      run: function(){
        var that, btnDownload;
        that = this;

        that.clog('inside datafilehost, '+that.get_href());
        setTimeout(function(){ that.killframes() }, 123);

        // pick selector dat relevant and exist on several browsers
        if( btnDownload = xp('//a[contains(@href,"/get.php?") or contains(@class,"ownloa")]', null, true) )
          setTimeout(function(){

            if( href = that.parse_handle_href( btnDownload.getAttribute("href") ) )
              btnDownload.setAttribute("href", href);

            SimulateMouse(btnDownload, "click", true)
          }, 125);
        else
          this.clog('datafilehost: missing download button, page may changed');
      }
    },

    userscloud: {
      rule: /userscloud\.com/,
      run: function(){
        var that = this,
            btnDl = null,
            tform = null,
            btn_selector = '//button[contains(@id, "ownlo") and not(contains(@disabled,"disabled"))]'
        ;
        that.clog('inside userscloud, '+that.get_href());
        setTimeout(function(){ that.killframes() }, 456);

        if( g('.innerTB') ){
          if( btnDl = xp(btn_selector, null, true) ){
            setTimeout(function(){

              tform = that.closest(btnDl, 'form');
              if( tform ){

                tform.submit()
              }
              else{

                SimulateMouse( btnDl, "click", true);
              }
            }, 345);
          }
          else if( btnDl = g('#dl_link a') ){
            // Final link

            that.set_href(btnDl.getAttribute('href'));
          }
          else{

            that.clog('Missing download button');
          }
        }
        else{

          that.clog('Not download page');
        }
      }
    },

    hulkload: {
      rule: /hulkload\.com/,
      run: function(){
        var that = this, FORM, el, adcopy;

        that.clog('inside hulkload, '+that.get_href());
        setTimeout(function(){ 
          that.killframes();

          var el_, els = xp('//*[contains(@id,"onsor")]', null);
          that.clog("els="+els.snapshotLength);
          if( els.snapshotLength ){
            for(var i=0, iL=els.snapshotLength; i<iL; i++){
              el_ = els.snapshotItem(i);
              el_.parentNode.removeChild(el_);
            }
          }

          var selector = '//a[contains(@href, "data:text/html;")]';
          that.waitforit(function(){
            return xp(selector, null, true);
          }, function(){
            var layer = xp(selector, null, true);

            layer.parentNode.removeChild( layer );
          });

        }, 123);

        if( adcopy = g("[name=adcopy_response]") ){

          adcopy.focus();
        }
        else{
          this.waitforit(function(){
            return xp('//*[contains(@id, "ownlo") and not(contains(@disabled,"disabled"))]', null, true);
          }, function(){
            if( FORM = xp('//form[@name="F1"]', null, true) ){
              if( el = xp('//input[@name="code"]', null, FORM) ){

                that.scrap_simplecapcay( el );
                el.focus();

                var counter, count, btn_download;

                btn_download = g('#btn_download');
                if( counter = g('[id*="ountdow"]') ){
                  if( !that.isVisible(counter) ){

                    SimulateMouse(btn_download, "click", true);
                  }
                  else{
                    if( count = g('*', counter) )
                    if( waitFor = parseInt( $(count).text() ) ){
                      that.clog("waiting for "+waitFor+' seconds');
                      that.waitforit(function(){

                        return !that.isVisible( counter );
                      }, function(){
                        SimulateMouse(btn_download, "click", true);
                      }, waitFor * 1000);
                    }
                  }
                }

              }
              else
                setTimeout(function(){ FORM.submit() }, 345);
            }else
            if( el = xp('//a[contains(@href,"kloa'+'d.co'+'m/fi'+'les/")]', null, true) ){
              setTimeout(function(){
                SimulateMouse(el, "click", true)
              }, 125);
            }
          }, 100);
        }
      }
    },

    dailyuploads: {
      rule: /dailyuploads\.net/,
      run: function(){
        var that  = this,
            el    = null,
            par   = null,
            tform = null,
            btnDl = null,
            brokenCT = null,
            countdown = null,
            waitStr = ''
        ;
        // flag to not wait countdown
        brokenCT = true;


        if( btnDl = g('[name="fs_download_file"]') ){

          if( el = g('[name="chkIsAdd"]') )
            el.removeAttribute('checked');

          cb_countdown = function(){
            tform = that.closest(btnDl, 'form');
            if( tform ){

              if( el = g('[name=referer]', tform, true) )
                el.parentNode.removeChild( el );

              el = document.createElement('input');
              el.setAttribute('name', 'fs_download_file');
              el.setAttribute('type', 'hidden');
              tform.appendChild( el );

              tform.submit()
            }
            else{

              SimulateMouse( btnDl, "click", true);
            }
          };


          countdown = g('#countdown_str span');
          if( !brokenCT && countdown && (countdown = (parseInt(countdown.textContent)-1) ) ){
            countdown = Math.floor(countdown / 3);

            that.waitforit(function(){

              var cnt = g('#countdown_str span');
              return ((parseInt(cnt.textContent)-1) > 0 ? !1 : true);
            }, function(){
              
              cb_countdown();
            }, countdown * 1000);
          }
          else{

            setTimeout(function(){
              cb_countdown()
            }, 3 * 1000);
          }
        }else if( (par = g('.inner')) &&  xp('//h2[contains(text(),"Link Generated")]', par, true) ){

          that.clog('Download link generated..');
          btnDl = g('a[href*=".dailyuploads.net"]', par);
          that.clog(btnDl);
          if( btnDl ){

            SimulateMouse(btnDl, "click", true);
          }
          else{

            that.clog('Missing download button');
          }
        }
        else{

          that.clog('Not a download page');
        }
      }
    },
  
    kumpulbagi: {
      rule: /kumpulbagi\.id|kbagi\.com/,
      run: function(){
        var that = this, el, FORM, parent;
        if( !g('#fileDetails') ){
          that.clog('wrong page broh, GTFO..');
          return;
        }

        if( FORM = xp('//form[contains(@action,"DownloadFile")]', null, true) ){
          
          el = g('.download', FORM);
          setTimeout(function(){ 
            SimulateMouse(el, "click", true)
          }, 345);
        }
      }
    },

    "simple-aja": {
      rule: /simple-aja\.info/,
      run: function(){
        var newbaseURI = document.baseURI
          .replace('kb.simple-aja.info','kumpulbagi.com')
          .replace('https:','http:')
        ;
        MNy = new MaknyosHelper(newbaseURI);
        MNy.matchDomain().matchAction().invokeAction();
      }
    },

    moesubs: {
      rule: /(?:www\.)?moesubs\.com/,
      run: function(){
        var that  = this,
            cucok = null,
            btnDl = null
        ;
        if( (cucok = /\burl=([^\&]+)/.exec(location.href)) ){

          top.location.href = cucok[1];
          return !1;
        }
        else{
          btnDl = g('.information a:last-child');
          if( btnDl )
            top.location.href = btnDl.getAttribute('href');
          else
            this.clog('missing download button');
        }
      }
    },

    "kirino-uguu-seiba": {
      rule: /kirino\.ga|seiba\.ga|kirino\.sexy/,
      run: function(){
        var btnDownload = null;

        if( btnDownload = g('a', g(".btns"), true) )
          setTimeout(function(){

            SimulateMouse(btnDownload, "click", true)
          }, 125);
        else
          this.clog('kirino-uguu|seiba: missing download button, page may changed');
      }
    },

    mylinkgen: {
      rule: /mylinkgen\.com/,
      run: function(){
        var wrapBox = g('#main-content'),
            btnContinue = null,
            href, cucok, el
        ;
        if( wrapBox ){
          btnContinue = g('.btn', wrapBox);
          if( btnContinue ){
            href = btnContinue.getAttribute('href');
            this.clog(href);

            if( href && /^https?\:\/\//.test(href) )
              this.set_href(btnContinue);
            else{
              if( cucok = /\shref=[\'\"](https?\:\/\/[^\'\"]+)./.exec(wrapBox.innerHTML) ){
                el = document.createElement('a');
                el.setAttribute('href', cucok[1]);
                el.setAttribute('target', '_blank');
                el.textContent = cucok[1];

                wrapBox.insertBefore(el, wrapBox.firstChild);
                this.set_href(cucok[1]);
              }
              else
                this.clog('mylinkgen: missing hidden download link, page may changed');
            }
          }
          else
            this.clog('mylinkgen: missing download button, page may changed');
        }
        else{

          this.clog('mylinkgen: missing wrapper button, page may changed');
        }
      }
    },

    openload: {
      rule: /openload\.co|oload\.tv/,
      run: function(){
        var that        = this,
            streamsel   = '#streamurl',
            streamurl   = g(streamsel),
            secondsleft = null,
            btnDl       = null,
            el_observed = !1,
            isStreamExists = (g('.video-js') || /\/embed\//.test(location.href)),
            btn_selector = '.main-button.dlbutton',
            cb_replacer = function(url){
              var link = document.createElement('a'),
              target = g('#btnDl');
              if( target ){
                link.setAttribute('href', url);
                link.setAttribute('class', "main-button");
                link.innerText = '[[ D0WNL0AD ]]';
                target.replaceWith(link);
              }
            }
        ;
        
        if( streamurl ){
          if( gvar.isFF ){
            var target = g(streamsel),
                param_observe = {
                  config: {
                    attributes: false,
                    childList: true,
                    subtree: true,
                    characterData: false
                  },
                  callback: function(e){
                    if( el_observed )
                      return !1;

                    if( e && e.innerText ){
                      cb_replacer('/stream/'+e.innerText);

                      if( !isStreamExists )
                        that.set_href('/stream/'+e.innerText);
                      
                      // flag to not returning back
                      el_observed = true;
                      if( gvar.observer )
                        gvar.observer.disconnect();
                    }
                  }
                }
            ;
            that.observe(target, param_observe);
          }
          else{
            setTimeout(function(){
              cb_replacer('/stream/'+streamurl.innerText);

              if( !isStreamExists )
                that.set_href('/stream/'+streamurl.innerText);
            }, 0)
          }
        }
        // end: streamurl

        // fail-over: remote click element
        else{
          that.clog('Error: Download failed missing '+streamsel);
          btnDl = g(btn_selector);
          secondsleft = g('#secondsleft');

          // second chance
          if( secondsleft && btnDl ){
            setTimeout(function(){
              SimulateMouse(btnDl, "click", true);

              // second-layer btn
              setTimeout(function(){
                if( btnDl = g('#realdl '+btn_selector) )
                  SimulateMouse(btnDl, "click", true);
              }, 100);
            }, parseInt(secondsleft.innerText) * 1000);
          }
          else{
            that.clog('Error: Missing download button, exiting');
          }
        }

        // bypass: frustrated-mode avoid open popup
        setTimeout(function(){
          window.open = function(){};
          unsafeWindow.open = function(){};
          window.popAdsLoaded = true;
          unsafeWindow.popAdsLoaded = true;
        }, 345);
      }
    },

    rgho: {
      rule: /rgho\.st/,
      run: function(){
        var that = this,
            href = '',
            btn_selector = '//a[contains(@href,"/download/") and contains(text(),"ownload")]';

        if( btnDl = xp(btn_selector, null, true) ){
          href = btnDl.getAttribute('href');

          if( href )
            that.set_href( href );
          else
            SimulateMouse(btnDl, "click", true);
        }else{

          this.clog('rgho: missing wrapper button, page may changed');
        }
      }
    },

    uploadee: {
      rule: /upload\.ee/,
      run: function(){
        var wrapBox = g('.textbody:last-child'),
            btnDl = null
        ;
        if( wrapBox ){
          btnDl = g('a[href*="/download/"]', wrapBox);
          if( btnDl )
            SimulateMouse(btnDl, "click", true);
          else
            this.clog('uploadee: missing download button, page may changed');
        }
        else{

          this.clog('uploadee: missing wrapper button, page may changed');
        }
      }
    },

    bcvc: {
      rule: /bc\.vc/,
      noBaseClean: true,
      run: function(){
        var that = this,
            loc = location.href,
            btnSel = '#skip_btt'
        ;

        if( loc.indexOf('#') == -1 ){
          top.location.href = loc+'#';
          location.reload();
          return !1;
        }
        else{
          if('function' === typeof window['IFrameLoaded'])
            window['IFrameLoaded']();

          try{
            $('body>iframe')
              .css('position','absolute')
              .css('width',0)
              .css('height',0)
              .css('left','-999999px')
            ;
          }catch(e){}

          (function wait2Click(){
          
            that.waitforit(function(){

              return g(btnSel);
            }, function(){

              SimulateMouse(g(btnSel), "click", true);
            }, 567);
          })();
        }
      }
    },

    shst: {
      rule: /sh\.st/,
      run: function(){
        var that = this,
            scripts = document.getElementsByTagName( 'script' ),
            cbu = null, si = null,
            cucok, cbName
        ;
        for( var i = 0; i < scripts.length; ++i ) {
          innerScript = scripts[i].innerHTML;
          if( !innerScript ) continue;

          if( null === cbu && (cucok = /callbackUrl\s*:\s*[\'\"]([^\'\"]+)/i.exec(innerScript)) )
            cbu = cucok[1];

          if( null === si && (cucok = /sessionId\s*:\s*[\'\"]([^\'\"]+)/i.exec(innerScript)) )
            si = cucok[1];

          if( cbu != null && si != null)
            break;
        }

        if( cbu && si && 'function' == typeof reqwest ){
          cbName = 'mkycb_'+String(Math.random()).replace(/0\./,'');

          that.waitforit(function(){
            var btn = g("#skip_button");
            return that.isVisible(btn) && that.hasClass('show', btn);
          }, function(){

            reqwest({
              url: cbu+'?',
              method: 'get',
              data: {
                adSessionId: si,
                adbd: 1,
                callback: cbName,
              },
              type: 'jsonp',
              success: function(ret){
                if( ret && ret.destinationUrl )
                  location.href = ret.destinationUrl;
              },
              timeout: 1e4,
              error: function(e){ that.clog( e ) }
            });

            var scriptHandler = function(){
              return (function(win){
                win["__cbName__"] = function(ret){
                  var btn = document.getElementById("skip_button");
                  btn.textContent = 'Redirecting...';

                  if(ret && ret.destinationUrl)
                    location.href = ret.destinationUrl;

                  setTimeout(function(){
                    btn.setAttribute('disabled', 'disabled');
                  }, 200)
                };
              })(window);
            };
            scriptHandler = scriptHandler.toString();
            scriptHandler = scriptHandler.replace(/__cbName__/i, cbName);

            that.injectBodyScript(scriptHandler);
          }, 345);
        }
        else{

          that.clog('Missing callbackUrl | sessionId'+('undefined' == typeof reqwest ? ' | reqwest is Undefined' : ''));
        }
      }
    },

    adfly: {
      rule: /adf\.ly/,
      noBaseClean: true,
      run: function(){
        var that = this,
            lpath = location.pathname,
            id    = '#home',
            ndv   = '',
            link  = ''
        ;
        that.clog(location.href);

        if( /\/ad\/locked/.test(lpath) ){
          return that.waitforit(function(){
            var el = g('#continue');
            return (that.isVisible(el) ? el : !1);
          }, function(cnt){
            that.clog(cnt);
            return setTimeout(function(){
              SimulateMouse(g('a', cnt), "click", true);
            });
          });
        }
        //https://adf.ly/redirecting/aHR0cDovL3d3dy5tZWRpYWZpcmUuY29tLz83ajczODR3NjdiM3RyOXE=
        else if( /\/redirecting\/\w+/.test(lpath) ){
          that.clog('inside redirecting page...');
          if( (link = g('a')) ){
            that.set_href( link.getAttribute('href') );
            return !1;
          }
        }
        else if( !g(id) || !/\/\w+$/.test(lpath) ) {

          that.clog('['+location.href+']:: Not a redirecter page..');
          return !1;
        }

        var continuum = function(ndv){
          // stage-1
          if( ndv ){
            var poluted = ndv.indexOf('!HiT'+'o'+'mmy'),
                a = '',
                b = ''
            ;
            if (poluted >= 0) 
              ndv = ndv.substring(0, poluted);

            for (var i = 0; i < ndv.length; ++i) {
              if (i % 2 === 0) {
                a = a + ndv.charAt(i);
              } else {
                b = ndv.charAt(i) + b;
              }
            }
            ndv = atob(a + b);
            ndv = ndv.substr(2);
            if( location.hash )
              ndv += location.hash;

            that.set_href( ndv );

            that.clog('stage-1: found link: '+ndv);
            return !1;
          }
          else{

            that.clog('stage-1: FAIL');
          }



          // stage-2 (failover)
          var elck = g('#cookie_notice'),
              skipSel = '#top span img[src*=sk'+'ip_'+'ad]'
          ;
          if( elck )
            elck.parentNode.removeChild( elck );


          that.waitforit(function(){
            var btn = g(skipSel), href;
            if( btn ){
              btn = btn.parentNode;
              href = btn.getAttribute('href');
            }
            return href && /^((?:(?:ht|f)tps?\:\/\/){1}\S+)/.test(href);
          }, function(){
            var btn = g(skipSel).parentNode,
                href = btn.getAttribute('href')
            ;
            if( href )
              location.href = href;
            else
              that.clog('Unable get redirect link');
          }, 345);
        };

        that.killunload();
        that.killevents(null, 'click');
        that.killevents(null, 'mousedown');
        that.injectBodyStyle('iframe{visibility:hidden!important;}');



        // wait to find these elements
        that.clog('finding ndv');
        var ping_url = location.protocol+'//'+location.hostname+'/callback/',
            id = $('#adReporter').find('[name="lt"]').val()
        ;
        if( id ){
          ping_url += id;

          return $.post(ping_url, {hithere:(new Date().getTime())}, function(){
            return $.get(location.href, function(ret){
              var patterns = [
                    /var\s+eu\s+=\s+'(?!false)(.+)'/,
                    /var\s+ysmm\s+=\s+'(.+)'/
                  ],
                  cucok = null
              ;
              if( cucok = patterns[0].exec(ret) ){
                that.clog('patterns[0]');
                cucok = cucok[1];
              }
              else if( cucok = patterns[1].exec(ret) ){
                that.clog('patterns[1]');
                cucok = cucok[1];
              }
              return continuum( cucok );
            });
          });
        }
        else{

          continuum( null );
        }
      }
    },

    adfocus: {
      rule: /adfoc\.us/,
      run: function(){
        var that = this,
            id = '#interstitial',
            skipSel = '#showSkip >a'
        ;
        if( !g(id) ){
          that.clog('['+location.href+']:: Not a redirecter page..');
          return !1;
        }

        that.waitforit(function(){
          var btn = g(skipSel), href = null;
          if( btn )
            href = btn.getAttribute('href');

          return href && /^((?:(?:ht|f)tps?\:\/\/){1}\S+)/.test(href);
        }, function(){
          var btn = g(skipSel),
              href = (btn ? btn.getAttribute('href') : null)
          ;
          if( href )
            location.href = href;
          else
            that.clog('Unable get redirect link');
        }, 345);
      }
    },

    mypcloudcom: {
      rule: /my\.pcloud\.com/,
      run: function(){
        var that = this,
            btn_selector = '//div[contains(@class,"button") and contains(text(),"ownload")]'
        ;

        if( xp(btn_selector, g('.button-area'), true) ){
          var scriptHandler = function(_site_key){
            return (function(win, $){

              var gvar          = gvar||{},
                  btn_selector  = '.button-area > .button.greenbut',
                  g             = ___func_g___,
                  frameload     = ___func_frameload___,
                  SimulateMouse = ___func_simulatemouse___
              ;


              if('undefined' != typeof publinkData && publinkData.downloadlink){
                
                frameload( publinkData.downloadlink );
              }
              else{
                console.log('publinkData undefined');

                SimulateMouse( $(btn_selector).first().get(0), "click", true );
              }
            })(window, $);
          };
          scriptHandler = scriptHandler.toString();
          scriptHandler = scriptHandler.replace(/___func_simulatemouse___/, SimulateMouse.toString());
          scriptHandler = scriptHandler.replace(/___func_g___/, g.toString());
          scriptHandler = scriptHandler.replace(/___func_frameload___/, that.frameload.toString());
          
          that.injectBodyScript(scriptHandler);
        }
        else{
          that.clog('mypcloudcom: missing button element, page may changed');
        }
      }
    },

    uploadrocket: {
      rule: /uploadrocket\.net/,
      run: function(){
        var that = this,
            form = g('[name=freeorpremium]'),
            btnDl = null, href
        ;
        if( form )
          btnDl = g('[name=method_isfree]', form);

        if( form && btnDl ){

          SimulateMouse(btnDl, "click", true);
        }
        else if( btnDl = g('#btn_download') ){
          var blah = g('#glasstop');
          blah.parentNode.removeChild( blah );

          that.clog('insert captcha...');
          g('[name=adcopy_response]').focus();

          btnDl.removeAttribute('disabled');
        }
        else{
          btnDl = xp('//a[contains(.,"rect Downlo")]', null, true);
          if( btnDl ){
            href = btnDl.getAttribute('href');
            if( href )
              that.set_href( href );
            else
              SimulateMouse(btnDl, "click", true);
          }
          else{
            
            that.clog('uploadrocket: missing download button, page may changed');
          }
        }
      }
    },

    uploadsows: {
      rule: /(upload\.so)|(uplod\.ws)/,
      run: function(){
        var that   = this,
            el     = null,
            tform  = g('#myDownloadForm'),
            btnDl  = g('.downloadbtn:not([name])'),
            href   = ''
        ;
        if( tform || btnDl ){

          if( el = g('a[href*="apploading.mobi"]') )
            el.parentNode.removeChild( el );

          if( el = g('#chkIsAdd') )
            el.checked = false;

          SimulateMouse(btnDl, "click", true);

          if( tform ){

            tform.submit();
          }
          else{
            
            SimulateMouse(btnDl, "click", true);
          }
        }
        else{
          if( el = g('.fileInfo') ){
            // # Stage 2
            if( btnDl = g('.btn-download', el) ){
              href = btnDl.getAttribute('href');
              if( href )
                that.set_href( href );
              else
                SimulateMouse(btnDl, "click", true);
            }
          }
          else{

            that.clog('Not download page');
          }
        }
      }
    },

    uploadsto: {
      rule: /uploads\.to/,
      run: function(){
        var that      = this,
            gtable    = g('.table'),
            recapcay  = g('.g-recaptcha', gtable),
            site_key  = null,
            btnCheck  = null,
            tform     = null,
            btnDl     = g("#method_free")
        ;
        if( recapcay && g('#method_free') ){
          site_key = recapcay.getAttribute('data-sitekey')

          if('function' === typeof $ && site_key){

            $(recapcay)
              .replaceWith($('<div id="maknyos-recaptcha" data-bijikuda="1" data-sitekey="'+site_key+'"></div>'));

            if( g('#maknyos-recaptcha') ){
              that.clog('g-recaptcha tampered');
              that.waitforit(function(){

                return ('undefined' == typeof grecaptcha ? !1 : grecaptcha);
              }, function(gr){
                
                gr.render("maknyos-recaptcha", {
                  sitekey: site_key,
                  callback: function(){ $("#method_free").trigger("click") }
                });
              });
            }
            else{
              that.clog('tampering g-recaptcha FAILED');
            }
          }
          else{

            that.clog('Error: site_key or jQuery is not defined');
          }
        }
        else{
          if( btnDl ){
            // # Stage 1, incase no recapcay
            SimulateMouse( btnDl, "click", true);
          }
          else if( btnDl = g('#btn_download') ){
            // # Stage 2
            
            if( btnCheck = g('#chkIsAdd') )
              btnCheck.checked = false;

            tform = that.closest(btnDl, 'form');
            if( tform )
              tform.submit();
            else
              SimulateMouse( btnDl, "click", true);
          }
          else if( btnDl = g('.btn.btn-primary[href*="downlod.me"]') ){
            that.clog('Stage 3');

            // # Stage 3
            SimulateMouse( btnDl, "click", true);
          }
          else{

            that.clog('Not download page or missing download button [Stage-?], page may changed');
          }
        }
      }
    },

    cloudmailru: {
      rule: /cloud\.mail\.ru/,
      run: function(){
        var that    = this;

        that.waitforit(function(){

          return g('.btn_main');
        }, function(btn){

          var layers = g('.layers'),
              param_observe = {
                config: {
                  attributes: false,
                  childList: true,
                  subtree: true,
                  characterData: false
                },
                callback: function(e){
                  var $dialog = $(e);
                  if( $dialog && $dialog.length )
                  setTimeout(function(){
                    $dialog.find(".b-checkbox").trigger('click');
                    $dialog.find(".btn.btn_main").trigger('click');
                    if( gvar.observer )
                      gvar.observer.disconnect();
                  }, 123)
                }
              }
          ;
          that.observe(layers, param_observe);
          SimulateMouse(btn, "click", true);
        }, 345);
      }
    },

    gdrive: {
      rule: /drive\.google\.com|docs\.google\.com/,
      run: function(){
        var that  = this,
            loc   = that.get_href()
        ;

        if( /drive.google.com/.test( loc ) ){
          gvar.stoRedirectGDrive = null;

          var $wrapper    = $('.drive-viewer'),
              id_timer    = 'maknyos-gd-timer',
              countdown   = 4,
              $btn_cancel = $('<a href="javascript:;" class="drive-viewer-dark-button goog-inline-block drive-viewer-button drive-viewer-button-clear-border btn-cancelredirect">cancel</a>');
          ;
          $btn_cancel.click(function(e){
            if( gvar.stoRedirectGDrive )
              clearInterval( gvar.stoRedirectGDrive );

            $('#'+id_timer).parent().remove();
            e.preventDefault();
            that.clog('Redirect plan canceled..');
          });
          $wrapper.prepend(''
            +'<div class="drive-viewer-toolstrip-name timer-autodownload" style="position:absolute; z-index: 10; top:9px; right: 260px; width: auto;">'
            + 'Redirecting <span id="'+id_timer+'">in (X) </span>...'
            +'</div>'
          );
          $wrapper.find(".timer-autodownload").append( $btn_cancel );

          // stInterval
          gvar.stoRedirectGDrive = setInterval(function(){
            var $tgt = $('#'+id_timer),
                count = $tgt.data('count')
            ;
            if( !(count && !isNaN(count)) && count != 0 )
              $tgt.data('count', countdown);
            
            count = parseInt( $tgt.data('count') );
            if( count > 0 ){
              count = (count - 1);
              $tgt.text( 'in ('+count+') ' );
              $tgt.data('count', count);
            }
            else{
              clearInterval( gvar.stoRedirectGDrive );
              $tgt.text('');

              var id = (function(url){
                    var ret = null, cucok;
                    if( cucok = /\/file\/d\/([^\/]+)/i.exec(url) )
                      ret = cucok[1];

                    return ret;
                  })( loc ),
                  href = location.protocol+'//docs.google.com/uc?id='+id+'&export=download'
              ;
              if( id ){

                that.clog('opening href:'+href);
                that.set_href( href );
              }
            }
          }, 1000);
        }
        else{

          that.clog('Force Downloading ....');
          SimulateMouse(g('#uc-download-link'), "click", true);
        }
      }
    },

    "e-book:genlib": {
      rule: /gen\.lib\.rus\.ec|libgen\.me|libgen\.io|golibgen\.io|bookzz\.org|(|\w+\.)bookfi\.net/,
      run: function(){
        var that      = this,
            pathname  = location.pathname,
            matchLoc  = ['foreignfiction','search.php','book'],
            imgdl, btnDl, form, rows, healLinks
        ;
        that.clog('location.hostname='+location.hostname);

        healLinks = function(){
          var $parent = $('table.c');
          if( !$parent.length || !$parent.html() ){
            if( $parent.length )
              $parent = $('table[rules="cols"]');
            else
              $parent = $('table');
          }

          setTimeout(function(){
            $('a[href*="ads.php"], a[href*="book/index"], a[href*="libgen.me"], a[href*="bookzz.org"], a[href*="bookfi.net"]', $parent).each(function(){
              var $me = $(this),
                  href = $me.attr('href')
              ;
              $me.html(''
                +'<strong>'+$me.text()+'</strong>'
              );
              if( /ads\.php/.test(href) ){
                href = href.replace('ads.php', 'get.php');
                $me.attr('href', href);
                $me.on('click', function(e){
                  e.preventDefault();
                  $(this).addClass('opened');
                  window.open(this, href.replace(/\W/g,''));
                  return !1;
                });
              }
              else{
                $me.on('click', function(e){
                  e.preventDefault();
                  $(this).addClass('opened');
                  window.open(this, href);
                  return !1;
                });
              }
            });
          }, 10);
        };
        var cssString = ''
          +'a#mlink:link{color: #1a0dab;text-decoration:none;}'
          +'a#mlink:link>strong{font-weight:normal;}'
          +'a#mlink:hover{text-decoration:underline;}'
          +'a#mlink:visited,a#mlink.opened{color: #609;}'
          +'a#mlink:visited>strong,a#mlink.opened>strong{font-weight:bold;}'
        ;

        switch(location.hostname){
          case "libgen.io":
            that.clog('pathname='+pathname);
            if( /\/ads\.php/.test(pathname) ){
              btnDl = g('[href*="get.php?md5"]');
              if( btnDl )
                SimulateMouse(btnDl, "click", true);
              else
                that.clog('Missing download button')
            }
            else{

              that.injectBodyStyle(cssString);
              healLinks();
            }
          break;

          case "bookzz.org":
          case "en.bookfi.net":
            rows = gAll('.resItemBox');
            if( rows && rows.length == 1 ){

              if( btnDl = g('.ddownload', rows[0]) )
                SimulateMouse(btnDl, "click", true);
              else
                that.clog('Missing download button');
            }
            else if(/\/book\/\w+/i.test(pathname) ){
              if( btnDl = xp('//a[contains(.,"ownloa") and contains(@href,"/dl/")]', null, true) )
                SimulateMouse(btnDl, "click", true);
              else
                that.clog('Missing download button');
            }
          break;

          case "golibgen.io":
          case "libgen.me":
            if( form = g('form[action*="noleech1.php"]') ){

              if( btnDl = g('[type=submit]', form) )
                SimulateMouse(btnDl, "click", true);
              else
                that.clog('Missing download button')
            }
          break;

          // gen.lib.rus.ec
          default:
            var unsupported = true;
            for(var i=0, iL=matchLoc.length; i<iL; i++){
              if( pathname.indexOf('/'+matchLoc[i]) !== -1 ){
                unsupported = false;
                break;
              }
            }

            if( unsupported ){
              that.clog('Exiting, location not supported, '+pathname);
              return !1
            }
            that.injectBodyStyle(cssString);
            healLinks();
          break;
        };
      }
    },

    filescdn: {
      rule: /filescdn\.com/,
      run: function(){
        var that  = this,
            btnDl = null,
            tform = null
        ;
        if( btnDl = g('#btn_download') ){

          tform = that.closest(btnDl, 'form');
          if( tform ){

            tform.submit()
          }
          else{

            SimulateMouse( btnDl, "click", true);
          }
        }
        else if( btnDl = xp('//a[(contains(.,"ownloa") and contains(.,"irect")) or contains(.,"eady!")]', null, true) ){

          SimulateMouse( btnDl, "click", true );
        }
        else{

          that.clog('Not download page')
        }
      }
    },

    uploadbank: {
      rule: /uploadbank\.com/,
      run: function(){
        var that     = this,
            cont     = g('#container'),
            recapcay = g('.g-recaptcha', cont),
            site_key = null,
            btnDl    = null
        ;

        if( recapcay ){
          site_key = recapcay.getAttribute('data-sitekey')

          if('function' === typeof $ && site_key){

            $(recapcay)
              .replaceWith($('<div id="maknyos-recaptcha" data-bijikuda="1" data-sitekey="'+site_key+'"></div>'));

            if( g('#maknyos-recaptcha') )
              that.clog('g-recaptcha tampered');
            else
              that.clog('tampering g-recaptcha FAILED');

            that.waitforit(function(){

              return ('undefined' == typeof grecaptcha ? !1 : grecaptcha);
            }, function(gr){
              
              gr.render("maknyos-recaptcha", {
                sitekey: site_key,
                callback: function(){ $("#downloadbtn").trigger("click") }
              });
            });
          }
          else{

            that.clog('Error: site_key or jQuery is not defined');
          }
        }
        else if( btnDl = g('#downloadbtn') ){

          SimulateMouse( btnDl, "click", true );
        }
        else if( btnDl = g('img[src*="downloadbutton"]') ){

          btnDl = btnDl.parentNode;
          SimulateMouse( btnDl, "click", true );
        }
        else{

          that.clog('Not download page or missing download button');
        }
      }
    },

    top4top: {
      rule: /top4top\.net/,
      run: function(){
        var that  = this,
            parent = g('#url'),
            btnDl = null, 
            scripts, inner, cucok, gotit
        ;
        if( parent ){
          btnDl = g('a', parent);
          scripts = document.getElementsByTagName( 'script' );
          gotit = !1;
          for( var i = 0; i < scripts.length; ++i ) {
            inner = scripts[i].innerHTML;
            if( !inner ) continue;
            if( inner.indexOf('timer') === -1 ) continue;

            if( cucok = /<a\shref=['"]([^'"]+)/.exec(inner) ){
              btnDl = document.createElement('a');
              btnDl.setAttribute('href', cucok[1]);

              gotit = true;
              setTimeout(function(){
                SimulateMouse( btnDl, "click", true );
              }, 100);
              break;
            }
          }
          // end: for

          if( !gotit )
          this.waitforit(function(){
            return g('.download', parent);
          }, function(el){
            btnDl = g('a', el);
            if( btnDl )
              SimulateMouse( btnDl, "click", true );
          }, 100);
        }
      }
    },

    dropme: {
      rule: /drop\.me/,
      run: function(){
        var that  = this;

        return this.waitforit(function(){
          return g('form[name="myFile"]');
        }, function(el){
          if( el )
            return el.submit();
        }, 100);
      }
    },

    dropapk: {
      rule: /dropapk\.com/,
      run: function(){
        var that  = this;

        if( g('div[id*="ez-downloa"]') || g('div[class*="gez-downloa"]') ){
        
          return that.waitforit(function(){
            var sel = '#downloadbtn',
                el  = null,
                daform = null
            ;

            if( !g(sel) ){
              if( g('img[src*="down_final.png"]') )
                sel = 'img[src*="down_final.png"]';
              else
                sel = '[type="submit"][name="method_free"]';
            }
            that.clog('sel='+sel);
            
            if( sel )
              return g(sel, null, true);
          }, function(el){
            var hid = null;

            that.clog('da callback..');
            that.clog(el.nodeName);
            if( el ) {
              if( el.nodeName == 'IMG' ){

                SimulateMouse(el.parentNode, "click", true);
              }
              else{

                if( el.nodeName == 'INPUT' ){
                  hid = document.createElement('input')
                  hid.setAttribute('type', 'hidden');
                  hid.setAttribute('name', el.getAttribute('name'));
                  hid.setAttribute('value', el.getAttribute('value'));
                }

                daform = that.closest(el, 'form');
                if( daform ){
                  if( hid )
                    daform.appendChild( hid );
                  daform.submit();
                }
                else{

                  SimulateMouse(el, "click", true);
                }
              }
            }
          }, 100);
        }
        else{

          that.clog('Not download page');
        }
      }
    },

    /**
     * Applied for: [cloudyfiles.org, suprafiles.org]
     */
    suprafiles:{
      rule: /suprafiles\.org|cloudyfiles\.org/,
      run: function(){
        var that = this,
            btnDownload = g('[type="submit"][name="method_free"]',null,true),
            cont = null,
            el   = null
        ;

        // # 1
        if( btnDownload ){

          that.trySumbit( btnDownload );
        }
        else{
          // # 3
          if( el = g('form[name="F1"]') ){

            el.submit();
          }
          else{
            // # 2
            cont = g('#container');
            if( cont && (el = g('a[href*="'+location.hostname+'"]', cont)) ){
              
              SimulateMouse(el, "click", true);
            }
            else{

              that.clog('Not download page');
            }
          }
        }
      }
    },

    publicopera: {
      rule: /public\.upera\.co/,
      run: function(){
        var that    = this, 
            section = g('.hbox'),
            anyform = null,
            btnDl   = null
        ;

        if( section ) {
          anyform = g('form');
            
          // # stage-1
          if( anyform ){

            anyform.submit();
          }

          // # stage-2
          else{
            btnDl = xp('//*[contains(@class,"btn") and contains(.,"ownloa")]', null, true);
            if( !btnDl ){
              btnDl = xp('.//a[contains(@href,"upera.co") and last()]', g('.panel', section), true);
            }
            
            if( btnDl )
              SimulateMouse(btnDl, "click", true);
          }
        }
        else{

          that.clog("Not a download page");
          return !1;
        }
      }
    },

    fileupload: {
      rule: /file-upload\.com/,
      run: function(){
        var that = this,
            recapcay  = g('.g-recaptcha'),
            site_key  = null,
            countdown = null,
            btnDl     = null,
            cb_countdown = function(){}
        ;
        if( btnDl = g('[type="submit"][name="method_free"]', null, true) ){
          // # Stage 1

          that.trySumbit( btnDl );
        }
        else if( btnDl = g('#download-btn') ){
          // # Stage 3

          SimulateMouse(btnDl, "click", true);
        }
        else{
          // # Stage 2

          if( 'undefined' != typeof $ ){

            $('.page-wrap>.text-center').each(function(){
              var $me = $(this);
              if( $me.find('ins').length )
                $me.remove();
            });
            $('#downloadbtn')
              .css('font-size', '2em');
          }

          cb_countdown = function(){
            if( recapcay ){
              
              that.waitforit(function(){

                return ('undefined' == typeof grecaptcha ? !1 : grecaptcha);
              }, function(gr){
                
                gr.render("maknyos-recaptcha", {
                  sitekey: recapcay.getAttribute('data-sitekey'),
                  callback: function(){ $("#downloadbtn").trigger("click") }
                });

                var btnDl_ = g('#downloadbtn');
                if( btnDl_ && 'undefined' != typeof $)
                  $(btnDl_).prev().remove();
              });
            }
            else if( btnDl = g('#downloadbtn') ){

              SimulateMouse( btnDl, "click", true );
            }
            else{

              that.clog('Missing download button')
            }
          };


          // is there recapcay, early tampered dom g-recaptcha
          if( recapcay ){
            site_key = recapcay.getAttribute('data-sitekey')

            if('function' === typeof $ && site_key){

              $(recapcay)
                .replaceWith($('<div id="maknyos-recaptcha" data-bijikuda="1" data-sitekey="'+site_key+'"></div>'));

              if( g('#maknyos-recaptcha') )
                that.clog('g-recaptcha tampered');
              else
                that.clog('tampering g-recaptcha FAILED');
            }
          }


          countdown = g('#countdown .seconds');
          if( countdown && (countdown = (parseInt(countdown.textContent)-1) ) ){
            countdown = Math.floor(countdown / 3);

            that.waitforit(function(){

              var cnt = g('#countdown .seconds');
              return ((parseInt(cnt.textContent)-1) > 0 ? !1 : true);
            }, function(){
              
              cb_countdown();
            }, countdown * 1000);
          }
          else{

            // remove disabled
            if( btnDl = g('#downloadbtn') ){
              btnDl.disabled = false;

              if( recapcay )
                cb_countdown();
              else
                SimulateMouse(btnDl, "click", true);
            }

            if( !g('.page-wrap') ){

              that.clog('Not download page');
            }
          }
        }
      }
    },

    topddl: {
      rule: /topddl\.net/,
      run: function(){
        var that = this,
            btnDownload = g('#btn-download',null,true)
        ;
        if( btnDownload ){

          SimulateMouse(btnDownload, "click", true);
        }
        else if( (btnDownload = g('.btn.btn-success',null,true)) ){

          btnDownload.innerHTML = '<i class="fa fa-google"></i> Login to Download File..';
          try{
            $(btnDownload).removeClass('btn-success').addClass('btn-danger');
          }catch(e){}
        }
        else{

          that.clog('Button download not found, page may changed.');
        }
      }
    },

    douploads: {
      rule: /douploads\.com/,
      run: function(){
        var that = this,
            btnCheck  = null,
            btnDl     = null,
            countdown = g('#countdown'),
            cb_countdown = function(){}
        ;
        if( btnDl = g('#downloadbtn') ){
          if( btnCheck = g('#chkIsAdd') )
            btnCheck.checked = false;

          cb_countdown = function(){
            tform = that.closest(btnDl, 'form');
            if( tform ){

              tform.submit()
            }
            else{

              SimulateMouse( btnDl, "click", true);
            }
          };

          countdown = g('#countdown .seconds');
          if( countdown && (countdown = (parseInt(countdown.textContent)-1) ) ){
            countdown = Math.floor(countdown / 3);

            that.waitforit(function(){

              var cnt = g('#countdown .seconds');
              return ((parseInt(cnt.textContent)-1) > 0 ? !1 : true);
            }, function(){
              
              cb_countdown();
            }, countdown * 1000);
          }
          else{

            cb_countdown()
          }
        }
        else if( btnDl = g('#direct_link a[href*="douploads.com"]') ){

          SimulateMouse( btnDl, "click", true );
        }
        else{

          if( g('.directlinkpage') || g('.downloadfile1') )
            that.clog('missing download button')
          else
            that.clog('Not download page')
        }
      }
    },

    dfpan: {
      rule: /dfpan\.com/,
      noBaseClean: true,
      run: function(){
        var that = this,
            el        = null,
            tform     = null,
            wrap      = null,
            vth       = null,
            btnDl     = null,
            waitFor   = !1,
            unit      = '',
            interval  = g('#interval_div')
        ;
        that.killframes();
        that.killevents(null, 'mousedown');

        if( btnDl = g('#inputDownWait>.slow_button') ){

          if( !that.isVisible(interval) ){

            that.clog(btnDl);
            SimulateMouse( btnDl, "click", true );

            setTimeout(function(){
              vth = g('#vcode_th');
              if( vth && that.isVisible(vth) ){
                if( wrap = g('td>div', vth) ){
                  el = document.createElement('p');
                  el.style.color = '#d00';
                  el.innerHTML = 'Press ENTER to continue<br/><small>You may need to wait 30 seconds before download started</small>';
                  wrap.appendChild( el );
                }

                setTimeout(function(){
                  g('[type=text]', vth).focus();
                }, 0);
                btnDl.style.backgroundColor = '#3b8ccc';
              }
              else{

                that.clog('vcode is not visible');
              }

            }, 567);
          }
          else{
            that.clog('Download interupted with interval');
            btnDl.disabled = "disabled";

            if( waitFor = g('#down_interval_tag') ){
              unit = waitFor.parentNode.textContent.trim();
              unit = unit.replace(/\s*/g,'');
              unit = unit.replace(/\d+-/g,'');

              waitFor = parseInt( waitFor.textContent );
              if( /minut/.test(unit) )
                waitFor = (waitFor * 60);
              else if( /hour/.test(unit) )
                waitFor = (waitFor * 60 * 60);

              waitFor = (waitFor + 3);

              this.waitforit(function(){
                var int = g('#interval_div');
                return that.isVisible(int) ? !1 : true;
              }, function(){
                
                location.href = location.href;
              }, waitFor * 1000);
            }
          }
        }
        else if( btnDl = g('#downbtn > a:first-child') ){

          SimulateMouse( btnDl, "click", true );
        }
        else{

          that.clog('Not download page or missing download button')
        }
      }
    },

    yimuhe: {
      rule: /yimuhe\.com/,
      noBaseClean: true,
      run: function(){
        var that  = this,
            el    = null,
            tform = null,
            btnDl = null
        ;
        that.killframes();
        that.killevents(null, 'mousedown');

        if( g('.sharp .w630') ){
          if( btnDl = g('a[href*=down-]', g('.sharp .w630')) ){

            SimulateMouse( btnDl, "click", true );
          }
          else{

            that.clog('Missing download button');
          }
        }
        else if( g('.sharp .w632') ){
          if( el = g('#download') )
            el.style.backgroundColor = '#f0f0f0';

          if( btnDl = gAll('.download>a') ){
            btnDl = btnDl[0];

            btnDl.style.backgroundColor = '#ccc';
            btnDl.style.borderColor = '#999';
            btnDl.style.verticalAlign = 'top';
            btnDl.setAttribute('title', 'DOWNLOAD');
          }


          el = g('#loading');
          if( el && that.isVisible(el) ){
            var wrap_waitfor = function(btn){
              that.clog('inside wrap_waitfor..');
              that.waitforit(function(){
                var dl = g('#download');
                return (that.isVisible(dl) ? true : !1);
              }, function(){
                that.clog('inside callbak of wrap_waitfor');
                that.clog(btn);

                
                SimulateMouse( btn, "click", true );
              });
            };

            that.waitforit(function(){
              var el_ = g('#loading');
              return (el_ && that.isVisible(el_) ? !1 : g('.yzm #code'));
            }, function(el__){

              if( el__ ){
                if('undefined' != typeof $){
                  $(el__).on('keydown', function(e){
                    that.clog('keydown='+$(this).val()+'; e.keyCode='+e.keyCode);
                    if( e.keyCode === 13 && btnDl )
                      wrap_waitfor(btnDl);
                  });
                }
                setTimeout(function(){
                  el__.focus();
                }, 0);
              }
              else{
                that.clog('Missing input code');
                if( tform = g('form', g('.yzm')) )
                  tform.submit();
              }
            }, 567);
          }
          else{

            that.clog('throbber element not found, page may changed');
          }
        }
        else if( /\/n_dd\.php/.test(location.pathname) ){
          if( btnDl = g('#downs') ){

            btnDl.innerHTML = 'DOWNLOAD';
            if('function' === typeof $){

              $('.kuan, .ggao').css('visibility', 'hidden');
              btnDl.style.position = 'absolute';
              btnDl.style.zIndex = '999999';
              btnDl.style.display = 'block';
              btnDl.style.fontSize = '2.5em';
              btnDl.style.lineHeight = '2em';
            }

            setTimeout(function(){
              SimulateMouse( btnDl, "click", true );
            }, 123);
          }
          else{

            that.clog('Missing download button');
          }
        }
        else{

          that.clog('Not download page');
        }
      }
    },

    // alias for: linkbucks?
    jzrputtbut: {
      rule: /jzrputtbut\.net/,
      noBaseClean: true,
      run: function(){
        var that  = this;
        that.killevents(null, 'mousedown');

        // iframe handler
        var o = document.getElementsByTagName('iframe');
        for(var i=o.length-1; i>=0; i--){
          o[i].style.position = 'absolute';
          o[i].style.left = '-999999px';
          o[i].style.top = '-999999px';
        }

        that.waitforit(function(){
          var timer = g('#timer');
          return (that.isVisible(timer) ? !1 : g('#skiplink'));
        }, function(el){
          if( el )
            SimulateMouse( el, "click", true );
        }, 100);
      }
    },

    up4ever: {
      rule: /up-4ever\.com/,
      noBaseClean: true,
      run: function(){
        var that     = this,
            recapcay = g('.g-recaptcha'),
            site_key = null,
            btnDl    = null,
            el       = null,
            hs       = null,
            countdown = null,
            cb_countdown = function(){}
        ;
        setTimeout(function(){
          $('#adblock_detected').val(0);
          $("#hiddensection").show();
        }, 1555);


        el = g('#hiddensection2');
        if( el )
          el.parentNode.removeChild(el);

        if( btnDl = g('[type="submit"][name="method_free"]', null, true) ){
          // # Stage 1

          that.trySumbit( btnDl );
        }
        else if( btnDl = g('#btn_downloadLink') ){
          // # Stage 3

          that.killframes();
          this.killevents(null, 'click');
          SimulateMouse(btnDl, "click", true);
        }
        else{
          // # Stage 2
          hs = g('#hiddensection');
          
          cb_countdown = function(){
            $(hs).show();
            if( recapcay ){
              
              that.waitforit(function(){

                return ('undefined' == typeof grecaptcha ? !1 : grecaptcha);
              }, function(gr){


                $('.alert-waiting').remove();
                gr.render("maknyos-recaptcha", {
                  sitekey: recapcay.getAttribute('data-sitekey'),
                  callback: function(){ $("#downloadbtn").trigger("click") }
                });

                var btnDl_ = g('#downloadbtn');
                if( btnDl_ && 'undefined' != typeof $)
                  $(btnDl_).prev().remove();
              });
            }
            else if( btnDl = g('#downloadbtn') ){

              SimulateMouse( btnDl, "click", true );
            }
            else{

              that.clog('Missing download button')
            }
          };


          // is there recapcay, early tampered dom g-recaptcha
          if( recapcay ){
            site_key = recapcay.getAttribute('data-sitekey')

            if( site_key ){

              $(recapcay)
                .replaceWith($('<div id="maknyos-recaptcha" data-bijikuda="1" data-sitekey="'+site_key+'"></div>'));
              $(hs).prev().replaceWith($('<div class="alert alert-success alert-waiting"><h3 style="text-align:center;">Wait For it...</h3></div>'));

              if( g('#maknyos-recaptcha') )
                that.clog('g-recaptcha tampered');
              else
                that.clog('tampering g-recaptcha FAILED');
            }
          }

          $(hs).show();
          countdown = g('#countdown .seconds');
          if( countdown && (countdown = (parseInt(countdown.textContent)-1) ) ){
            countdown = Math.floor(countdown / 3);

            that.waitforit(function(){

              that.killframes();
              $(hs).show();
              var cnt = g('#countdown .seconds');
              return ((parseInt(cnt.textContent)-1) > 0 ? !1 : true);
            }, function(){

              cb_countdown();
            }, countdown * 1000);
          }
          else{
            that.clog('countdown not found.');

            // remove disabled
            if( btnDl = g('#downloadbtn') ){
              btnDl.disabled = false;

              if( recapcay )
                cb_countdown();
              else
                SimulateMouse(btnDl, "click", true);
            }
            else{

              that.clog('Not download page');
            }
          }
        }
        // end: stage-2
      }
    },

    '3rbup': {
      rule: /\b3rbup\.com/,
      run: function(){
        var that      = this,
            btnDl     = null,
            countdown = null,
            cdown_sel = '.download-timer-seconds',
            dltimer   = g('.download-timer')
        ;

        if( dltimer ){
          if( countdown = g(cdown_sel) ){
            that.waitforit(function(){
              var eltimer = g(cdown_sel);

              return (eltimer ? !1 : g('.btn', dltimer));
            }, function(link){

              if( link.getAttribute('href') ){

                that.set_href( link.getAttribute('href') );
              }
              else{

                SimulateMouse(btn, "click", true);
              }
            });
          }
          else if( btnDl = g('.btn', dltimer) ){

            SimulateMouse(btnDl, "click", true);
          }
          else{

            that.clog('Not download page');
          }
        }
        else if( btnDl = g('a[href*="download_token"]') ){

          SimulateMouse(btnDl, "click", true);
        }
        else{

          that.clog('Missing download link');
        }
      }
    },

    megadrive: {
      rule: /megadrive\.co/,
      run: function(){
        var that  = this,
            btnDl = g('[type="submit"][name="method_free"]', null, true)
        ;

        // # 1
        if( btnDl ){

          that.trySumbit( btnDl );
        }
        else if( btnDl = g('#downloadbtn') ){

          that.trySumbit( btnDl );
        }
        else{

          that.clog('Not download page or missing download button');
        }
      }
    },

    samaupcom: {
      rule: /samaup\.com/,
      run: function(){
        var that  = this,
            btnCheck  = null,
            btnDl     = null,
            countdown = g('#countdown'),
            cb_countdown = function(){}
        ;
        if( btnDl = g('#downloadbtn') ){
          if( btnCheck = g('#chkIsAdd') )
            btnCheck.checked = false;

          cb_countdown = function(){
            tform = that.closest(btnDl, 'form');
            if( tform ){

              tform.submit()
            }
            else{

              SimulateMouse( btnDl, "click", true);
            }
          };

          countdown = g('#countdown .seconds');
          if( countdown && (countdown = (parseInt(countdown.textContent)-1) ) ){
            countdown = Math.floor(countdown / 3);

            that.waitforit(function(){

              var cnt = g('#countdown .seconds');
              return ((parseInt(cnt.textContent)-1) > 0 ? !1 : true);
            }, function(){
              
              cb_countdown();
            }, countdown * 1000);
          }
          else{

            cb_countdown()
          }
        }
        else if( btnDl = g('.downloadbtn a[href*="samaup.com"]') ){

          SimulateMouse( btnDl, "click", true );
        }
        else{

          that.clog('Not download page OR missing download button')
        }
      }
    },

    akoamcom: {
      rule: /akoam\.com/,
      run: function(){
        var that  = this,
            url   = that.get_href(),
            pdata = {},
            parDT = null,
            dlGotIt = null
        ;

        if( parDT = g('.download_timer') ){

          // which-ever done earlier, try xhr first
          $.post(url, pdata, function(ret){
            if( ret ){
              try{

                ret = JSON.parse(ret);
              }catch(e){
                that.clog('Fail parsing JSON');
              }
            }

            if( ret && ret.direct_link ){
              dlGotIt = true;
              var $el = $('<a '+(ret.hash_data ? 'hash-data="'+ret.hash_data+'"':'')+' class="download_buttonX" style="color: #ff0000; border: 5px solid #ff0000;" href="'+ret.direct_link+'">DOWNLOAD</a>');

              $('<div id="wrapfdl" style="position:absolute; top: 0; left:0; color: #ddd; background-color:rgba(34, 34, 34, 0.89); padding: 10px 0; text-align: center; width: 100%;"></div>')
                .appendTo( $(parDT) );
              $('#wrapfdl').html( $el );

              $el = $('#wrapfdl').find('.download_buttonX');
              if( $el.length )
                SimulateMouse($el.get(0) , "click", true );
            }
            else{
              that.clog('XHR Failed.')
              that.clog(ret);
            }
          });

          // inline we keep on waiting..
          that.waitforit(function(){

            var btn = g('#timerHolder .download_button');
            return btn ? btn : null;
          }, function(el){
            
            if( !dlGotIt )
              SimulateMouse( el, "click", true );
          }, 1000);
        }
        else{

          that.clog('Not download page, or missing element: .download_timer');
        }
      }
    },

    rapidgator: {
      rule: /rapidgator\.net/,
      run: function(){
        var that  = this,
            el    = null,
            dlBtn = null
        ;
        if( el = g('.btn-free.link') ){

          SimulateMouse( el, "click", true );
        }
        else if( dlBtn = g('.btn-download') ){

          SimulateMouse( dlBtn, "click", true );
        }
        else{

          that.clog('Missing download button');
        }
      }
    },

    filefactory: {
      rule: /filefactory\.com/,
      run: function(){
        var that  = this,
            el    = null,
            delay = 0,
            dlBtn = null
        ;
        if( el = g('#file-download-free-action-slow') ){
          delay = parseInt( g('#countdown_clock').getAttribute('data-delay') );
          SimulateMouse( el, "click", true );
          if( delay ){
            setTimeout(function(){
              // inline we keep on waiting..
              that.waitforit(function(){

                var btn = g('#file-download-free-action-start');
                return btn ? btn : null;
              }, function(el){
                
                SimulateMouse( el, "click", true );
              }, 1000);

            }, delay * 1000);
          }
          else if( dlBtn = g('#file-download-free-action-start') ){

            SimulateMouse( dlBtn, "click", true );
          }
          else{

            that.clog('Missing download button');
          }
        }
        else{
          // #file-download-free-action-start
          that.clog('Missing download button');
        }
      }
    }
  };
  // end of patterns


  var MNy = new MaknyosHelper(document.baseURI);
  MNy.matchDomain().matchAction().invokeAction();

  // lil-helpers
  function isDefined(x) { return!(x == null && x !== null) }
  function isUndefined(x) { return x == null && x !== null }
  function SimulateMouse(elem, event, preventDef, prefilter) {
    if(typeof elem != "object")
      return;

    // is it an a element? try with iframe loader
    var is_error = null,
      href = (elem && elem.getAttribute ? elem.getAttribute("href") : null);

    // make sure it's link, not some sumthin like: "javascript:;"
    if( href && /^((?:(?:ht|f)tps?\:\/\/){1}\S+)/.test(href) ){
      try{
        if('function' == typeof prefilter)
          href = prefilter( href );

        if( typeof href === "string" && href ){

          // is the direct-link is not Mixed Content with https of parent location
          var rgx = new RegExp("^"+location.protocol);
          if( !rgx.test(href) ){

            is_error = true;
          }
          else{

            MNy.action.clog("SimulateMouse trying href loaded to iFrame");
            MNy.action.frameload(href);
            is_error = false;
          }
        }
        else{

          if( href )
            is_error = false;
          else
            is_error = true;
        }
      }catch(e){ is_error = true }
    }
    else{
      MNy.action.clog("Element is either not link or invalid format. href="+href);
    }
    

    // failover, just click dat button
    if( is_error || is_error === null ){
      MNy.action.clog("SimulateMouse-click with MouseEvents");
      var evObj = document.createEvent("MouseEvents");
      preventDef = isDefined(preventDef) && preventDef ? true : false;
      evObj.initEvent(event, preventDef, true);
      try {
        elem.dispatchEvent(evObj)
      }catch(e) {}
    }
  }
  function getParameterByName(name, the_url) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    if( isUndefined(the_url) )
      the_url = location.search;
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
     results = regex.exec(the_url);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  function g(x, par){
    !par && (par = document);
    return ('string' == typeof x ? par.querySelector(x) : x);
  }
  function gAll(x, par){
    !par && (par = document);
    return ('string' == typeof x ? par.querySelectorAll(x) : x);
  }
  function xp(q, root, single) {
    if(root && typeof root == "string") {
      root = $D(root, null, true);
      if(!root) {
        return null
      }
    }
    if(!q) {
      return false
    }
    if(typeof q == "object") {
      return q
    }
    root = root || document;
    if(q[0] == "#") {
      return root.getElementById(q.substr(1));
    }else {
      if(q[0] == "/" || q[0] == "." && q[1] == "/") {
        if(single) {
          return document.evaluate(q, root, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        }
        return document.evaluate(q, root, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
      }else {
        if(q[0] == ".") {
          return root.getElementsByClassName(q.substr(1))
        }
      }
    }
    return root.getElementsByTagName(q)
  }
})();
/* eof. */
