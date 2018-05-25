"use strict";
// tslint:disable:quotemark
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseItems = {
    payload: {
        google: {
            expectUserResponse: true,
            richResponse: {
                items: []
            },
            userStorage: '{"data":{}}',
            systemIntent: {}
        }
    },
    outputContexts: [
        {
            name: "projects/cesarapp-14ad4/agent/sessions/a9d5037d-4ff4-475c-b439-b01d2bf31a68/contexts/_actions_on_google",
            lifespanCount: 99,
            parameters: {
                data: "{}"
            }
        }
    ]
};
exports.ResponseSuggestion = {
    payload: {
        google: {
            expectUserResponse: true,
            richResponse: {
                suggestions: []
            },
            userStorage: '{"data":{}}'
        }
    },
    outputContexts: [
        {
            name: "projects/cesarapp-14ad4/agent/sessions/a9d5037d-4ff4-475c-b439-b01d2bf31a68/contexts/_actions_on_google",
            lifespanCount: 99,
            parameters: {
                data: "{}"
            }
        }
    ]
};
exports.ResponseSuggestionItems = {
    payload: {
        google: {
            expectUserResponse: true,
            richResponse: {
                items: [],
                suggestions: []
            },
            userStorage: '{"data":{}}'
        }
    },
    outputContexts: [
        {
            name: "projects/cesarapp-14ad4/agent/sessions/a9d5037d-4ff4-475c-b439-b01d2bf31a68/contexts/_actions_on_google",
            lifespanCount: 99,
            parameters: {
                data: "{}"
            }
        }
    ]
};
exports.Simple = {
    payload: {
        google: {
            expectUserResponse: false,
            richResponse: {
                items: [
                    {
                        simpleResponse: {
                            textToSpeech: "El ultimo episodio fue este ",
                            displayText: "El ultimo episodio fue este"
                        }
                    }
                ]
            },
            userStorage: '{"data":{}}'
        }
    },
    outputContexts: [
        {
            name: "projects/cesarapp-14ad4/agent/sessions/a9d5037d-4ff4-475c-b439-b01d2bf31a68/contexts/_actions_on_google",
            lifespanCount: 99,
            parameters: {
                data: "{}"
            }
        }
    ]
};
//# sourceMappingURL=DialogResponse.js.map