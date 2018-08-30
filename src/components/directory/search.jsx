import React from 'react';
import { Accordion, Input } from 'chayns-components/lib';

export default class SearchBox extends React.Component{
    constructor(element){
        super();
        this.$timeout=0;
    }
    render(){
        return(
            <Input
                        id="eName"
                        className="form"
                        placeholder="eName"
                        style={{width:'100%'}}
                        required
                        onChange={(eName) => {
                            console.log(eName);
                            console.log(this.state.name);
                            
                            this.setState({
                                name: eName
                            })
                            console.log(this.state.name);

                        }}
                    />
        )
    }

    createSearchHtml() {
        // const searchElement = htmlToELement(`
        //     <div class="mySearch " style="padding-left:3px; display: inline; flex-direction: row;">
        //         <div class="Suche Suche--accordion ">
        //             <input class="input search scriptBox" id="getText" type="text" placeholder="Suche"/>
        //             <label for="">
        //                 <i class="fa fa-search"></i>
        //             </label>
        //         </div>
        //     </div>`);

        searchElement.querySelector('#getText').addEventListener('keyup',()=>{
            chayns.showWaitCursor();
            // deletes the timeout
            clearTimeout(this.$timeout);
                // keypressed			
			this.$timeout = setTimeout(()=>{
                // timeoutcall
                const $text= searchElement.querySelector(".search").value;
                if($text===""){
                    this.$text="chayns"
                }

                // function from listcontainer.js
                this.onChange($text);
				//callback($text);
			},500);
        });
        return searchElement
    }


}