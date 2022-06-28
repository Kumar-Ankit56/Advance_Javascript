// document.getElementById("clickMe").addEventListener("click", function xf() {
//     console.log("clicked");
// })


///lets merge with closure as well like how many button clicked happednd
// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xf() {
//     console.log("clicked",++count);
// })
//But this is appropriate method


function attachEventlistner(){
    let count=0;
    document.getElementById("clickMe").addEventListener("click", function xf() {
        console.log("clicked",++count);
    });
}
attachEventlistner();

//If you will observe the click botton by the eventlistner then you will find the buttom is attached with click event and it has handler that is taking the xf call back  function if you will closely observe this then in the scope of the handler it will show the handler where it actually present it has its parent environment as closure and it parent parent environment as global.


//Question Garbage Collection  & removeeventlistner
// Event listner are heavy as they form closures. So even when call stack is empty,addEventListener won't free up memory allocated to count as it doesn't knowwhen it may need count again. S we remove event listner when we don't need them(garbage collect) on click onHover onScroll all in a page can Slowdown the page.

