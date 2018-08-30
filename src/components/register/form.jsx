import { Accordion, Input } from 'chayns-components/lib';
import React from 'react';
import { Button, TextArea  } from 'chayns-components';

import './form.scss';

export default class Form extends React.Component {
        constructor(){

            super();

            this.state = {
                name: "",
                postAdress: "",
                eMailAdress: "",
                comment: "",
            };

            
        }

        render() {
            return (
                <Accordion className="Accordion" head="Melde deine Website" defaultOpened>
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
                    <Input 
                        id="epostAdress" 
                        className="form" 
                        type="text" 
                        placeholder="postAdresse"  
                        style={{width:'100%'}}  
                        required 
                        onChange={(epostAdress)=>{
                            console.log(epostAdress);
                            this.setState({
                                postAdress:epostAdress
                            })
                        }}
                    />
                    <Input
                        id="eeMailAdress"
                        className="form"
                        type="text"
                        placeholder="eMailAdresse"
                        style={{width:'100%'}}
                        required
                        regExp={'^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'}
                        onChange={(eeMailAdress)=>{
                            console.log(eeMailAdress);
                            if (eeMailAdress!==null){
                                this.setState({
                                    eMailAdress:eeMailAdress
                                   })
                            }
                            
                        }}
                    />
                    <TextArea 
                        className="TextArea" 
                        placeholder="Eingabefeld" 
                        onChange={(TextArea) => {
                            console.log(TextArea)
                            this.setState({
                                comment:TextArea
                            })
                            
                        }} 
                        style={{width:'100%'}} 
                        autogrow={true} 
                        required 
                    />
                    <div style={{textAlign:'center'}}>
                    <Button
                        disabled={this.state.name==""||this.state.postAdress==""||this.state.comment==""||this.state.eMailAdress==""}
                        onClick={() => {
                            this.sendToPage();
                        }}
                    >
                        Senden
                    </Button>
                    </div>
                </Accordion>
            );
        }

        sendToPage(){
            chayns.intercom.sendMessageToPage({ 
                text: "User: " + this.state.name + " \n postAdresse: " + this.state.postAdress + " \n eMailAdresse : " + this.state.eMailAdress + "\n said: " + this.state.comment
            }).then(function(data){            
                if(data.status == 200)
                   chayns.dialog.alert('','thank you');
            });
           
        }
        
};
