// ==UserScript==
// @name           Maknyos AutoIn
// @namespace      http://userscripts.org/scripts/show/91629
// @version        3.7.11
// @description    Auto submit to get link
// @homepageURL    https://greasyfork.org/scripts/97
// @author         Idx
// @include        /^https?://maknyos.indowebster.com/*/
// @include        /^https?://(.+\.)2shared.com/file/*/
// @include        /^https?://(.+\.)zippyshare.com/v/*/
// @include        /^https?://(|www\.)mediafire.com/*/
// @include        /^https?://(|www\.)sendspace.com/file/*/
// @include        /^https?://(|www\.)uptobox.com\/\w/
// @include        /^https?://(|www\.)howfile.com/file/*/
// @include        /^https?://(|www\.)uppit.com/*/
// @include        /^https?://(|www\.)imzupload.com/*/
// @include        /^https?://(|www\.)jumbofiles.com/*/
// @include        /^https?://(|www\.)sendmyway.com/*/
// @include        /^https?://(|www\.)tusfiles.net/*/
// @include        /^https?://(|www\.)dropbox.com/s/*/
// @include        /^https?://(|www\.)solidfiles.com/*/
// @include        /^https?://(|www\.)yadi.sk/*/
// @include        /^https?://(|www\.)datafilehost.com/d/*/
// @include        /^https?://(|www\.)userscloud.com/*/
// @include        /^https?://(|www\.)hulkload.com/*/
// @include        /^https?://app.box.com/s/*/
// @include        /^https?://(|www\.)dailyuploads.net/*/
// @include        /^https?://(|www\.)kumpulbagi.id/*/
// @include        /^https?://(|www\.)kb.simple-aja.info/*/
// @include        /^https?://(|www\.)moesubs.com/url/*/
// @include        /^https?://kirino.uguu.at/*/
// @include        /^https?://(|www\.)seiba.ga/*/
// @include        /^https?://(|www\.)mylinkgen.com/*/
//
// ==/UserScript==



(function() {
  var gvar=function(){};
  gvar.__DEBUG__ = 1;

  function MaknyosHelper(baseURI){
    this.baseURI=baseURI;
    this.domain=null;
    this.action=new Actions();
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
        this.action.baseCleanUp();
        this.action.invoked();
      }
      return this;
    },
  };


  function Actions(){
    this.invoked=null;
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

    // do waitwhat -> thenwhat
    waitforit: function(waitwhat, thenwhat, delay){
      var stoWait,
        itry = 0,
        maxtry = 100,
        thenwhatwrap = function(){
          ('function' == typeof thenwhat ) &&
            thenwhat();
        };
      
      if( !delay )
        delay = 0;

      if('function' == typeof waitwhat){
        var waitwrap = function(){
          itry++;
          if( waitwhat() ){
            stoWait && clearTimeout( stoWait )
            thenwhatwrap();
          }
          else{
            if( itry < maxtry )
              waitwrap()
          }
        },
        stoWait = setTimeout(waitwrap, delay+1000);
      }
      else
        thenwhatwrap();
    },

    // load url to an iframe
    frameload: function(url){
      var body, cb_fn, idfrm = 'xMNyFrame';
      var iframe = document.createElement('iframe');
      
      if( g('#'+idfrm) )
        g('#'+idfrm).removeChild()
      iframe.setAttribute('id', idfrm);
      iframe.setAttribute('title', "iFrame of "+idfrm+"; src="+url);
      iframe.setAttribute('style', 'position:absolute; z-index:999999; '+(gvar.__DEBUG__ ? 'border:1px solid #000; left:0; top:0; width:100%;' : 'border:0; height:0; width:0; left:-9999; bottom:9999'));
      iframe.setAttribute('src', url);

      body = g('body');
      if( gvar.__DEBUG__ )
        body.insertBefore(iframe, body.firstChild);
        else
        g('body').appendChild(iframe);

      if( g('#'+idfrm) )
        this.clog("iframe created, src="+url);
      else
        this.clog("error while creating iframe");
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

    // basic cleanup document from anoying things
    // eg. iframe, onclick body, etc
    baseCleanUp: function(){
      this.clog("killing frames..");
      this.killframes();

      this.clog("killing click events.");
      this.killevents(null, 'click');
      this.killevents(null, 'mousedown');
    },

    // brutaly kill frames
    killframes: function(par){
      !par && (par = document);
      var o = par.getElementsByTagName('iframe');
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

    isVisible: function (ele) {
      // this.clog("visibility-test; clientWidth="+ele.clientWidth+'; clientHeight='+ele.clientHeight+'; opacity='+ele.style.opacity+'; visibility='+ele.style.visibility+'; offsetParent='+ele.offsetParent);
      return true &&
        // ele.clientWidth !== 0 &&
        // ele.clientHeight !== 0 &&
        ele.offsetParent !== null &&
        ele.style.opacity !== 0 &&
        ele.style.visibility !== 'hidden';
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
          GM_log(msg);
      }
      else
        console && console.log && console.log(msg);
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
      rule: /maknyos\.indowebster\.com/,
      run: function(){
        this.clog('inside indowebster');

        var that = this;
        var waitFor, code, count, counter, countdown = g('#countdown');
        var btn_free, f1form = g('form[name="F1"]');

        if( f1form ){
          counter = g('[id*="ountdow"]');
          if( !this.isVisible(counter) ){

            SimulateMouse(g('#btn_download'), "click", true);
          }
          else{
            if( count = g('*', counter) ){
              
              setTimeout(function(){
                
                if( code = g('[name="code"]', f1form) ){
                  that.scrap_simplecapcay( code );
                  code.focus();
                }

              }, 123);

              if( waitFor = parseInt( $(count).text() ) ){
                this.clog("waiting for "+waitFor+' seconds');
                this.waitforit(function(){

                  return !that.isVisible( counter );
                }, function(){
                  SimulateMouse(g('#btn_download'), "click", true);
                }, waitFor * 1000);
              }
            }
          }
        }
        else if( btn_free = g('[name="method_free"]') ){
          this.clog("commencing btn_free ");
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
      run: function(){

        var dcg, selector, that, is_match_path = /mediafire\.com\/(view|download)\b/;
        that = this;

        if( !is_match_path.test(that.get_href()) ) return;
        that.clog('inside mediafire, '+that.get_href());

        setTimeout(function(){ that.killframes() }, 123);

        if( dcg = g("#docControlGroup") ){
          selector = './/a[contains(@target,"_blank")]';
          selector = xp(selector, dcg, true);
          selector && that.set_href(selector.getAttribute('href'))
        }
        else {
          that.waitforit(function(){
            return g('.download_link a');
          }, function(){
            SimulateMouse(g('.download_link a'), "click", true);
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

        this.clog('inside uptobox');
        var btnDownload, that = this;

        // force download link with https based on its parent protocol
        var prefilter_uptobox_https = function(href_){
          var prot = location.protocol;
          if( location.protocol == 'https:' && !/https:/i.test(href_) ){
            href_ = href_.replace(/^http\:/i, 'https:');
            
            that.clog('https download-link='+href_);
          }
          return href_;
        };
        btnDownload = g('[type=submit][value*="ownload"]');

        if( btnDownload ){

          SimulateMouse(btnDownload, "click", true, prefilter_uptobox_https);
        }
        else{
          btnDownload = g('#countdown_str');
          if( btnDownload ){
            this.clog('disabled='+btnDownload.getAttribute('disabled'));
            if( btnDownload.getAttribute('disabled') ){

              // do downoad
            }
            else{
              var waitstr = String(g('#countdown_str').textContent).replace(/[\s\W]/g,'').toLowerCase();
              this.clog(waitstr);
              if( cucok = /(?:[a-zA-Z]+)?(\d+)(?:[a-zA-Z]+)?/.exec(waitstr) ){
                this.clog(cucok);

                this.waitforit(function(){
                  return g('#btn_download');
                }, function(){
                  SimulateMouse(g('#btn_download'), "click", true, prefilter_uptobox_https);
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
        this.clog('method_free='+btnDownload);
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

        // prevent page to load, submission
        var maxTry = 3, iTry=0, sTryStop;
        var cb_pagestop = function(){
          var el = g('[name=quick]');
          if( el ){
            el.removeAttribute('checked');
            el.parentNode.removeChild(el);
          }

          el = g('[name=F1]');
          el && el.submit();
        };

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
        var href, that, btnDownload;
        that = this;

        that.clog('inside solidfiles, '+that.get_href());
        setTimeout(function(){
          that.killframes();
          that.disableWindowOpen();
        }, 123);

        if( btnDownload = xp('//a[contains(.,"ownloa") and not(contains(@href,"remiu"))]', g('.dl .buttons'), true) )
          setTimeout(function(){
            
            if( href = that.parse_handle_href( btnDownload.getAttribute("href") ) )
              btnDownload.setAttribute("href", href);

            SimulateMouse(btnDownload, "click", true)
          }, 125);
        else
          this.clog('solidfiles: missing download button, page may changed');
      }
    },
    yadi: {
      rule: /yadi\.sk/,
      run: function(){
        var btnDownload, that = this;

        that.clog('inside yadi, '+that.get_href());
        if( btnDownload = g('*[data-click-action="resource.download"]') ){
          var triggered = !1;

          // proper content ready is required, since button used some ajax on it.
          document.addEventListener('DOMContentLoaded', function() {
            if( !triggered )
              setTimeout(function(){
                that.clog('Simulating Click.. #2');
                SimulateMouse(btnDownload, "click", true)
              }, 125);
          }, false);

          setTimeout(function(){
            that.clog('Simulating Click.. #1');
            SimulateMouse(btnDownload, "click", true);
            triggered = 1;
          }, 100);
        }
        else
          this.clog('yadi: missing download button, page may changed');
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
        var FORM,
            that = this,
            btn_selector = '//button[contains(@id, "ownlo") and not(contains(@disabled,"disabled"))]';

        that.clog('inside userscloud, '+that.get_href());
        setTimeout(function(){ that.killframes() }, 123);

        this.waitforit(function(){
          return xp(btn_selector, null, true);
        }, function(){
          if( xp('//form[@name="F1"]', null, true) )
            setTimeout(function(){
                var btn_download = xp(btn_selector, null, true);
                SimulateMouse(btn_download, "click", true);

            }, 345);
            
        }, 100);
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
        var that = this, el, FORM, btnDownload;

        if( FORM = xp('//form[@name="F1"]', null, true) ){
          // uncheck download-manager
          el = g('[name="chkIsAdd"]');
          if( el )
            el.removeAttribute('checked');

          setTimeout(function(){ FORM.submit() }, 345);
        }
        else if( g(".inner") ){
          
          btnDownload = xp('//a[contains(@href,"dailyuploads.net") and contains(@href,"/d/")]', g(".inner"), true);

          // since loading this href to iframe is not gonna work,
          // bypass load it in `top.location` instead.
          btnDownload && SimulateMouse(btnDownload, "click", true, function(href){
            href = encodeURI( href );
            top.location.href = href;

            // dont let simulate continue with click events
            return true;
          });
        }
      }
    },
  
    kumpulbagi: {
      rule: /kumpulbagi\.id/,
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
        var btnDownload = null,
            img_click = xp('//img[contains(@src, "click.")]', null, true)
        ;
        btnDownload = (img_click ? img_click.parentNode : null);
        if( btnDownload && btnDownload.nodeName === 'A' )
          setTimeout(function(){

            location.href = btnDownload.getAttribute('href');
          }, 125);
        else
          this.clog('moesubs\: missing download button, page may changed');
      }
    },

    "kirino-uguu-seiba": {
      rule: /kirino\.uguu\.at|seiba\.ga/,
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
            btnContinue = null
        ;
        if( wrapBox ){
          btnContinue = g('.btn', wrapBox);
          btnContinue && this.set_href(btnContinue);
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

          MNy.action.clog("SimulateMouse trying href loaded to iFrame");
          MNy.action.frameload(href);
          is_error = false;
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
  };  
})();
/* eof. */
