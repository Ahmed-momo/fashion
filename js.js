function toggleResetBtn(){
    const resetBtn = document.querySelector('.reset')
    resetBtn.classList.toggle('active')
}

function switchBanner(name){
    const banner = document.querySelector('#banner');
    if(!banner.classList.contains(name)){
          banner.className = 'banner';
          banner.classList.add(name);
          toggleResetBtn();
    }
    return;
    
}

function resetBanner(){
    const banner = document.querySelector('#banner');
    banner.className = 'banner';
    toggleResetBtn();
}
