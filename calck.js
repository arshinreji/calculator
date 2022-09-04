function display(num){
result.value+=num
}
//(remove all item from text box ac button function)
function clearAll(){
result.value=""
}
//(evaluvate expression using eval)
function output(){
result.value=eval(result.value)
}
function removeItem(){
result.value=(result.value).slice(0,-1)
}
