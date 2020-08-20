
var activated = false;
var dropdown = false;
var vars;

function showPage(){
    if(!activated){
        var intro = document.getElementById('intro');
        var pic = document.getElementById('self');
        var desc = document.getElementById('desc');
        var pages = ['aboutme', 'cv', 'projects', 'contact'];
        var navbar = document.getElementById('navbar');
        var navlist = document.getElementById('navlist');
        var bars = document.getElementById('expand-nav');
        var fab = document.getElementsByClassName('fab');
        vars = {
            'intro': intro, 
            'pic': pic, 
            'desc': desc, 
            'pages': pages, 
            'navbar': navbar,
            'navlist': navlist,
            'bars' : bars,
            'fab' : fab
            };
    }

    var page = document.getElementById(this.innerHTML.split(' ').join('').toLowerCase() + '-page');
    vars['page'] = page;

    activated = true;

    

    for(var i=0; i < vars.pages.length; i++){
        if(this!=vars.pages[i]){
          document.getElementById(vars.pages[i]+'-page').style.display = "none";
          document.getElementById(vars.pages[i]+'-btn').style.color = "#DDD";
        }
    }

    this.style.color = "#777";
    vars.page.style.display='block';
    vars.desc.style.display = "none";
    vars.navbar.style.position = 'fixed';
    vars.intro.innerHTML = "Ye Cheng Zheng";
    vars.navbar.style.minHeight ='0px';

    mediaQueries(vars);
}

function mediaQueries(vars=null){
    if(activated && vars){
        var btns = vars.navbar.getElementsByTagName('li');
        //sidebar
        if(window.matchMedia("(min-width: 1000px)").matches){
            vars.page.style.marginTop = "0";
            vars.page.style.marginLeft = "250px";
            vars.navbar.style.width = '250px';
            vars.navbar.style.height = "100%";
            vars.navbar.style.minWidth = '250px'
            vars.navbar.style.alignItems = 'center';
            vars.navbar.style.textAlign = 'center';
            vars.navbar.style.justifyContent = "center";

            if(window.matchMedia("(max-height: 500px)").matches){
                vars.pic.style.display = 'none';
            } else{
                vars.pic.style.display = 'inline-block';
                vars.pic.style.width = "50%";
            }

            vars.intro.style.fontSize= '1.5em';
            vars.intro.style.display='block';
            vars.intro.style.margin = "10px";

            vars.navlist.style.display = 'block';
            vars.bars.style.display = 'none';

            vars.navlist.style.backgroundColor = "#222";

            for(i = 0; i < vars.fab.length; i++){
                vars.fab[i].style.display = 'inline-block'
            }

        } else{
            vars.page.style.marginLeft = "0px";
            vars.navbar.style.width = '100%';
            vars.navbar.style.height = "4em";
            if(!dropdown){
                vars.page.style.marginTop = "4em";
                vars.navlist.style.display = "none";
            } else{
                vars.page.style.marginTop = "13em";
            }
            
            vars.navbar.style.minWidth = '0px'
            vars.navbar.style.alignItems = 'normal';
            vars.navbar.style.textAlign = 'justify';
            vars.navbar.style.justifyContent = "flex-start";

            vars.pic.style.display = 'none';

            vars.intro.style.fontSize= '1.3em';
            vars.intro.style.display = 'inline-block';
            vars.intro.style.margin = "0.95em";
            
            
            vars.bars.style.display = 'inline-block';
            

            for(i = 0; i < vars.fab.length; i++){
                vars.fab[i].style.display = 'none';
            }
        }
    }
}

function showList(){
    var list = document.getElementById('navlist');
    if(dropdown){
        list.style.display = "none";
        vars.page.style.marginTop = '4em';
        dropdown = false;
    } else{
        list.style.display = "block";
        list.style.marginTop = "0px";
        list.style.backgroundColor = "#333";
        vars.page.style.marginTop = '13em';
        dropdown = true;
    }
}
    