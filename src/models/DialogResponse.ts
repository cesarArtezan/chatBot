// tslint:disable:quotemark

export let ResponseItems = {
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
      name:
        "projects/cesarapp-14ad4/agent/sessions/a9d5037d-4ff4-475c-b439-b01d2bf31a68/contexts/_actions_on_google",
      lifespanCount: 99,
      parameters: {
        data: "{}"
      }
    }
  ]
};
export let ResponseSuggestion = {
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
      name:
        "projects/cesarapp-14ad4/agent/sessions/a9d5037d-4ff4-475c-b439-b01d2bf31a68/contexts/_actions_on_google",
      lifespanCount: 99,
      parameters: {
        data: "{}"
      }
    }
  ]
};
export let ResponseSuggestionItems = {
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
      name:
        "projects/cesarapp-14ad4/agent/sessions/a9d5037d-4ff4-475c-b439-b01d2bf31a68/contexts/_actions_on_google",
      lifespanCount: 99,
      parameters: {
        data: "{}"
      }
    }
  ]
};

export interface ItemsSimpleResponse {
  simpleResponse?: {
    textToSpeech?: string;
    displayText?: string;
  };
}
export interface BasicCard {
  basicCard: {
    title: string;
    image?: {
      url: string;
      accessibilityText: string;
    };
    buttons?: [
      {
        title: string;
        openUrlAction: {
          url: string;
        };
      }
    ];
  };
}
export interface Suggestions {
  title: string;
}
export interface List {
  listSelect: {
    title: string;
    items: [
      {
        title: string;
        description?: string;
        image?: {
          url?: string;
          accessibilityText?: string;
        };
      }
    ];
  };
}
export interface ListSelect {
  title: string;
  items: [
    {
      title: string;
      description?: string;
      image?: {
        url?: string;
        accessibilityText?: string;
      };
    }
  ];
}
export interface SystemIntent {
  intent: "actions.intent.OPTION";
  data?: {
    "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec";
    listSelect: ListSelect;
  };
}
export let Simple = {
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
      name:
        "projects/cesarapp-14ad4/agent/sessions/a9d5037d-4ff4-475c-b439-b01d2bf31a68/contexts/_actions_on_google",
      lifespanCount: 99,
      parameters: {
        data: "{}"
      }
    }
  ]
};
