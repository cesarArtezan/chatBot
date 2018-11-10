export interface DialogRespond {
    fulfillmentMessages?: FulfillmentMessage[];
    fulfillmentText?: any;

}

interface FulfillmentMessage {
    platform: string;
    card: Card;
}

interface Card {
    title: string;
    subtitle: string;
    imageUri: string;
    buttons: Button[];
}

interface Button {
    text: string;
    postback: string;
}
