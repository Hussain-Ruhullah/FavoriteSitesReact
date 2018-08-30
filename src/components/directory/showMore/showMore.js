import htmlToElement from 'html-to-element';
import { callbackify } from 'util';//what is callbackify?

export default class loadMoreButton{
    constructor(){

    }
    loadMoreHtml(callback){
        const loadMoreTxt = htmlToElement(`
        <div class="grid__item col-1-1-desktop col-1-1-mobile">
                        <div class="mehr">
                            <a href="#" class="right" id="load">
                                <br>Mehr anzeigen</a>
                        </div>
                    </div>
        `)
        loadMoreTxt.querySelector('#load').addEventListener('click',()=>{
            callback();
        })
        return loadMoreTxt;
    }
    
}