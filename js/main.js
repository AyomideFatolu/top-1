// function testing() {
//     console.log("this will override it") ;
// 

// testing()


document.querySelector("body").innerText = `
    Hello everyone, Emmanuel here 👋 .
 I'm currently in the foundations course, i just got to the "function basics part" while I was reading function scope from the MDN website  I decided to play around with code. The result completely confused me, please I need clarification please 
 First i linked two Javascript files to my html 
--------------------------------- 
<script src="script.js"></script> 
<script src="main.js"></script>
------------------------------------ 


on the first file( the "script.js" file) I wrote this code
-------------------------------------
function testing() {
    console.log("does it show in the console") ;
}

testing()
setTimeout(()=> testing(), 3000)
--------------------------------------


on the second file (the "main.js" file) I wrote this code
-------------------------------------------------
function testing() {
    console.log("this will override it") ;
}

testing()
----------------------------------------------------

the result I got on the console
-------------------------------------------------------
does it show in the console                         script.js:20 
this will override it                                          main.js:2 
this will override it                                          main.js:2 
-------------------------------------------------------


based on the knowledge I have I expected the function declaration( testing() ) in the second file to override the function testing() in the first file because that would have been the result if i wrote both in the same file.
that was my reason for adding the setTimeout function 
----------------------------------------------------------------
function testing() {
    console.log("does it show in the console") ;
}

testing()
setTimeout(()=> testing(), 3000)

function testing() {
    console.log("this will override it") ;
}

testing()
-------------------------------------------------------------

the result on the console
---------------------------------------------------------
this will override it                           script.js:27 
this will override it                           script.js:27 
this will override it                           script.js:27 
---------------------------------------------------------


It wasn't really confused i,d rather say i learnt something new because i tried the samething with one external js file and the inline javascript script tag
the external javascript script.js file 
---------------------------------------------------------------
function testing() {
    console.log("does it show in the console") ;
}

testing()
setTimeout(()=> testing(), 3000)
---------------------------------------------------------------


the inline javascript script tag, as you can see the external script tag was also placed at the top here
-----------------------------------------------------------------
<script src="script.js"></script>
<script>
  function testing() {
    console.log("this will override it") ;
}

testing()
</script>
---------------------------------------------------------------

i got the same result on the console
-----------------------------------------------------------------
does it show in the console                             script.js:20 
this will override it                                           index.html:27 
this will override it                                           index.html:27 
--------------------------------------------------------------------

i concluded that's probably how the javascript engine runs code, if they are in different file. 
here's what deepseek AI said
"  Why Your Original Code Worked "Weirdly"
Browsers parse scripts sequentially but execute them immediately when encountered.

Your external script's testing() was called before the inline script had a chance to overwrite it.

The console shows historical logs, even if functions are later modified.

This behavior is why experienced developers avoid duplicate function names! Let me know if you'd like to dive deeper into execution contexts. 🚀 "



i was happy i learnt something new until i decided to play around with the code again
I added both code to the same file again but did something different this time. I placed the first function in a block (curly brackets)
------------------------------------------------------------------------------------------
 {

     function testing() {
     console.log("does it show in the console") ;
} 

}

testing()
setTimeout(()=> testing(), 3000)

function testing() {
    console.log("this will override it") ;
}

testing()
-----------------------------------------------------------------------------------------------

here the resullt I got on the console
---------------------------------------------------------------------------------
does it show in the console                                      script.js:22 
 does it show in the console                                     script.js:22
 does it show in the console                                     script.js:22
--------------------------------------------------------------------------------


now that really got me confused (completely). At this point AI didnt give any reasonable explanation , please i need someone to explain what happened in the last code.
why did the first function in the curly braces print to the console despite declaring(overriding) the same function in the same code
    `

