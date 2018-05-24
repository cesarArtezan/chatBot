"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:quotemark
exports.ResponDialog = {
    fulfillmentText: 'This is a text response',
    fulfillmentMessages: [
        {
            card: {
                title: 'card title',
                subtitle: 'card text',
                imageUri: 'https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png',
                buttons: [
                    {
                        text: 'button text',
                        postback: 'https://assistant.google.com/'
                    }
                ]
            }
        }
    ],
    source: 'example.com',
    payload: {
        google: {
            expectUserResponse: true,
            richResponse: {
                items: [
                    {
                        simpleResponse: {
                            textToSpeech: 'this is a simple response'
                        }
                    }
                ]
            }
        },
        facebook: {
            text: 'Hello, Facebook!'
        },
        slack: {
            text: 'This is a text response for Slack.'
        }
    },
    outputContexts: [
        {
            name: 'projects/${PROJECT_ID}/agent/sessions/${SESSION_ID}/contexts/context name',
            lifespanCount: 5,
            parameters: {
                param: 'param value'
            }
        }
    ],
    followupEventInput: {
        name: 'event name',
        languageCode: 'en-US',
        parameters: {
            param: 'param value'
        }
    }
};
exports.ResponDialog2 = {
    payload: {
        google: {
            expectUserResponse: true,
            richResponse: {
                items: [
                    {
                        simpleResponse: {
                            textToSpeech: 'El ultimo episodio fue este ',
                            displayText: 'El ultimo episodio fue este'
                        }
                    },
                    {
                        basicCard: {
                            title: 'Watch the latest Episode',
                            image: {
                                url: 'https://goo.gl/Fz9nrQ',
                                accessibilityText: 'AngularFirebase Logo'
                            },
                            buttons: [
                                {
                                    title: 'Watch',
                                    openUrlAction: {
                                        url: 'https://angularfirebase.com/lessons'
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            userStorage: '{"data":{}}'
        }
    },
    outputContexts: [
        {
            name: 'projects/cesarapp-14ad4/agent/sessions/a9d5037d-4ff4-475c-b439-b01d2bf31a68/contexts/_actions_on_google',
            lifespanCount: 99,
            parameters: {
                data: '{}'
            }
        }
    ]
};
//# sourceMappingURL=DialogResponse.js.map