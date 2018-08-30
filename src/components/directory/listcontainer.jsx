import React from 'react';
import { Accordion, Input } from 'chayns-components/lib';
import ListItem from './listItem/listItem';
// import htmlToELement from 'html-to-element';
// import SearchBox from './search';
import fetchData from '../Utils/fetch';
// import listItem from './listItem/listItem';
// import loadMoreButton from './showMore/showMore';
// import component from 'chayns-components/lib/react-chayns-animations/component';
import './webstyles.scss';
export default class SiteList extends React.Component {
    constructor(element) {
        super()
        // this.keyWord = 'pizza';
        this.items = [];
        this.state = {
            item: [],
            keyWord: 'pizza',
            skip: 0,
            take:4,
            timeout: 0
        }
        this.loadSites()

    }

    async loadSites(append) {
        let result = await fetchData(this.state.keyWord, this.state.skip, this.state.take);
        // if(this.skip===0){ skip is only 0 if a new word is searched 
        // document.querySelector("#accordionBody").innerHTML='';// clear accordion__body
        // create a notfound response using .len func
        // }
        console.log(result);
        if(!append) this.items = [];
        for (let i = 0; i < result.length; i++) {
            this.items.push(result[i]);
        }
        this.setState({
            item: this.items,
        })
        chayns.hideWaitCursor();
    }

    render() {
        return (
            <Accordion
                className="listAccordion"
                defaultOpened
                head="Searched Websites..."
            >
                <div style={{ textAlign: 'right' }}>
                    <Input
                        className="searchBox"
                        placeholder="this is a placeholder"
                        onChange={(nWord) => {
                            chayns.showWaitCursor();
                            clearTimeout(this.timeout);
                            this.timeout = setTimeout(() => {
                                this.setState({
                                    keyWord: nWord
                                })
                                this.items = [];
                                this.setState({skip:0})
                                this.loadSites(false);
                            }, 500);
                            
                        }}

                    />
                </div>
                {
                    this.state.item.map(({ siteId, locationId, appstoreName }) => {
                        console.log(siteId, locationId, appstoreName)

                        return <ListItem key={siteId} siteId={siteId} locationId={locationId} appstoreName={appstoreName} />
                    })
                }
                <div
                    className="right"
                    style={{ textAlign: 'right' }}
                    onClick={() => {
                        chayns.showWaitCursor();
                        clearTimeout(this.timeout);
                        this.timeout = setTimeout(() => {
                            let $skip= this.state.skip+4;
                            console.log(this.state.skip);
                            // let $take= this.take+4;
                            this.setState({
                                skip : $skip,
                                // take: $take
                            })
                            this.loadSites(true);
                            
                        }, 500);

                    }


                        // console.log(this.skip);
                        // let newskip= this.ammount+=4;
                        // this.setState({
                        //     skip: newskip
                        // })
                    }

                >
                    Show More
            </div>
            </Accordion>
        );
    }

    // createListHtml() {
    //     const listElement = htmlToELement(`
    //     <div class="accordion  accordion--open">
    //         <div class=" accordion__head ">gesuchte Webseiten
    //         </div>
    //         <div  class="accordion__body">
    //             <div id="accordionBody" >
    //            </div>
    //             <div class="accordion__content">
    //             </div>
    //         </div>
    //     </div>
    //     `);
    //     //t 


    //     listElement.querySelector('.accordion__content').appendChild(
    //         this.$showMoreButton.loadMoreHtml(()=>{ //t
    //             // only increases the number of skipped results
    //             this.skip+=8;
    //             //t to if this.skip=== in loadsites
    //             this.loadSites();
    //         })
    //     );
    //     console.log("listitem", listElement);
    //     return listElement;
    // }

    // async loadSites(){
    //     chayns.hideWaitCursor();
    //     let result=  await fetchData(this.keyWord, this.skip);
    //     if(this.skip===0){// skip is only 0 if a new word is searched 
    //         document.querySelector("#accordionBody").innerHTML='';// clear accordion__body
    //         // create a notfound response using .len func
    //     }
    //     this.displayResult(result);
    // }

    // displayResult(result){
    //     const $resultBody = document.querySelector("#accordionBody");

    // 	for (let i = 0; i < result.length; i++) {
    //         $resultBody.appendChild(
    //             this.itemClass.createItemHtml(result[i].siteId,result[i].appstoreName)
    //         )
    // 	}
    // }
}