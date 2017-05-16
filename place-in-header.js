<script type="text/javascript">
function toggleAccept() {
var acceptLink = document.getElementById("accept");
var agreeCheckbox = document.getElementById("agreeCheckbox");
if (agreeCheckbox.checked) {
acceptLink.onclick=function() {
window.location=this.href + "&cbrblaccpt=true";
return false;
}
} else {
acceptLink.onclick=function() {
mustAccept();
return false;
}
}
}
function mustAccept() {
window.alert("By clicking accept, you agree to the payment terms of this recurring product.");
}

toggleAccept()

</script>
