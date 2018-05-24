"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:quotemark
exports.ResponDialog = {
    responseId: 'f0a90c6e-eedf-4a2a-986d-6e853f0753a7',
    queryResult: {
        queryText: 'prueba',
        parameters: {
            time: ''
        },
        allRequiredParamsPresent: true,
        webhookPayload: {
            google: {
                userStorage: '{"data":{}}',
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
                                image: {
                                    accessibilityText: 'AngularFirebase Logo',
                                    url: 'https://goo.gl/Fz9nrQ'
                                },
                                title: 'Watch the latest Episode',
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
                expectUserResponse: true
            }
        },
        outputContexts: [
            {
                // tslint:disable-next-line:max-line-length
                name: 'projects/cesarapp-14ad4/agent/sessions/a9d5037d-4ff4-475c-b439-b01d2bf31a68/contexts/_actions_on_google',
                lifespanCount: 99,
                parameters: {
                    data: '{}',
                    timeoriginal: '',
                    time: ''
                }
            }
        ],
        intent: {
            name: 'projects/cesarapp-14ad4/agent/intents/f7c13fe3-4a5c-47de-ba0c-abce0c80f180',
            displayName: 'prueba'
        },
        intentDetectionConfidence: 1,
        diagnosticInfo: {
            webhook_latency_ms: 64
        },
        languageCode: 'es'
    },
    webhookStatus: {
        message: 'Webhook execution successful'
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