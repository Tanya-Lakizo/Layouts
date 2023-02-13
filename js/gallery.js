const gallery = function() {

    const elems = document.querySelector('.gallery__thumbs');
    console.log(elems);
    const imageBlock = document.querySelector('.gallery__preview');
    const buttonClose = imageBlock.querySelector('.gallery__preview_close');

    if(!elems) return;

    const show = function(event) {
        event.preventDefault();

        let target = event.target;
        console.log(target);

        let targetTagName = target.tagName;

        if(targetTagName == 'IMG') {
            let parent = target.parentNode;
            console.log(parent);

            let href = parent.getAttribute('href');

            let img = document.createElement('img');
            img.setAttribute ("src", href);

            hide();
            
            imageBlock.append(img);
            imageBlock.classList.remove('hide');
        }
    }

    const hide = function (){
        imageBlock.classList = 'hide';
        let children = imageBlock.children;
        console.log(children);

        for (let i = 0; i < children.length; i++) {
            if (children[i].tagName == 'IMG') {
                imageBlock.removeChild(children[i]);
            }
        }
    }

    buttonClose.addEventListener('click', hide)
    elems.addEventListener('click', show);
};

gallery(); 

    





