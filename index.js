const answer = document.getElementById("req");
const cel_far = document.getElementById("cel_far");
const far_cel = document.getElementById("far_cel");
const res = document.getElementById("result");
let temp;
temp = Number(temp);

function convert(){
if(cel_far.checked)
{
    temp =Number(req.value);
    temp = (temp * 1.8) + 32;
    res.textContent=temp + "℉";
}
else if(far_cel.checked)
{
    temp = Number(req.value);
    temp = (temp - 32) * 5/9 ;
    res.textContent=temp + "℃";
}
else
{
    res.textContent="first select something";   
}
}
