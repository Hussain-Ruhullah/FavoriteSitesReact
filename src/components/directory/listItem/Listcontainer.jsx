import React from 'react';
import { Accordion, Input } from 'chayns-components/lib';
import ListItem from './ListItem';
// import htmlToELement from 'html-to-element';
// import SearchBox from './search';
import fetchData from '../../Utils/Fetch';
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
            take: 4,
            timeOut: 0
        }
        this.loadSites()

    }

    async loadSites(append) {
        let result = await fetchData(this.state.keyWord, this.state.skip, this.state.take);

        console.log(result);
        if (!append) this.items = [];
        for (let i = 0; i < result.length; i++) {
            this.items.push(result[i]);
        }
        this.setState({
            item: this.items,
        })
        chayns.hideWaitCursor();
    }

    InputHandler(nWord) {
        chayns.showWaitCursor();
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            this.setState({
                keyWord: nWord
            })
            this.items = [];
            this.setState({ skip: 0 })
            this.loadSites(false);
        }, 500);
    }
    showMore() {
        chayns.showWaitCursor();
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            let $skip = this.state.skip + 4;
            console.log(this.state.skip);
            this.setState({
                skip: $skip,
            })
            this.loadSites(true);
        }, 500);
    }

    render() {
        return (
            <Accordion
                className="listAccordion"
                defaultOpened
                head='Websites'
                right={
                    <div style={{height:'15px'}}>

                        <span
                            id="span"
                            style={{height:'auto'}}>
                            <span className="right">
                                <i className="fa fa-search" />
                            </span>
                            <Input
                                style={{font:'10px'}}
                                className="searchBox"
                                placeholder="search"
                                onChange={(text) => {this.InputHandler(text)}}

                            />
                        </span>
                    </div>
                }
            >

                {
                    this.state.item.map(({siteId, locationId, appstoreName}) => {
                        console.log(siteId, locationId, appstoreName)

                        return <ListItem key={siteId} siteId={siteId} locationId={locationId} appstoreName={appstoreName} />
                    })
                }
                <div className="right"
                    style={{ padding: '19px' }}
                >
                    <a
                        href="#"
                        onClick={() => {
                            this.showMore();
                        }}>Mehr anzeigen</a>
                </div>
            </Accordion>
        );
    }
}