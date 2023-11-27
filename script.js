const bm=document.getElementById('bm');
const bml1=document.getElementById('bm-l1');
const bml2=document.getElementById('bm-l2');
const bml3=document.getElementById('bm-l3');

isBmOpen=false;

bm.addEventListener('click',()=>{
    if(isBmOpen){
        bml1.style.transform='rotate(45deg)';
        bml2.style.display='none';
        bml3.style.transform='rotate(-45deg)';
    }
    else{
        bml1.style.transform='rotate(0deg)';
        bml2.style.display='flex';
        bml3.style.transform='rotate(0deg)';
    }
    isBmOpen=!isBmOpen;
})