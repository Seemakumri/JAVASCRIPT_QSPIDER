// console.log(window)
    //window.alert("this is just a message")
    //let a = alert ("this is just a message");

    function parent(){
        let a = 10;
        
        function child() //Nested function
        {
           let b = 20;
           console.log(a,b)
        }
        child(); // calling child function inside parent function
     }
     parent(); // calling parent function