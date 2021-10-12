const dropZone=document.querySelector('.drop-zone');
const fileSelect=document.querySelector('#file-select');
const browseBtn=document.querySelector('.browsebtn');
const showlink=document.querySelector('.show-link');
const sendlink=document.querySelector('.send-link');
const show=document.querySelector('.show');
const showMail=document.querySelector('.showMail');
const copybtn=document.querySelector('.copy-btn');
const status=document.querySelector('.status');
const percentage=document.querySelector('.percentage');

dropZone.addEventListener("dragover", function(e) {
    e.preventDefault();
    if(!dropZone.classList.contains('dropped'))
        dropZone.classList.add('dropped');
  
});

dropZone.addEventListener("dragleave", function(e) {
    e.preventDefault();
    if(dropZone.classList.contains('dropped'))
        dropZone.classList.remove('dropped');
    
});

dropZone.addEventListener("drop",function(e){
    e.preventDefault();
    dropZone.classList.remove('dropped');
    const file=e.dataTransfer.files;
    if(file.length){
        fileSelect.files=file;
        uploadFile();
    }
})
fileSelect.addEventListener("change",()=>{
    uploadFile();
})
browseBtn.addEventListener("click",()=>{
    fileSelect.click();
})

const uploadFile=()=>{
    const file=fileSelect.files[0];
    const formData=new FormData();
    formData.append("myfile",file);

    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==XMLHttpRequest.OPENED){
            status.style.display='block';
        }
        if(xhr.readyState==XMLHttpRequest.DONE){
            const url=JSON.parse(xhr.response).file;
            showlink.value=url;
            sendlink.value=url;
            status.style.display='none';
        }
    }
    xhr.upload.onprogress=updateProgress;
    xhr.open("POST","http://localhost:8080/api/files");
    xhr.send(formData);
}
function updateProgress(e){
    let percent=Math.floor((e.loaded/e.total)*100);
    percentage.innerHTML=percent;
    if(e.loaded==e.total){
        show.style.display="block";
        showMail.style.display="block";
        document.querySelector('.ready').style.display='block';
    }
}

copybtn.addEventListener("click",()=>{
    showlink.select();
    document.execCommand('copy');
})