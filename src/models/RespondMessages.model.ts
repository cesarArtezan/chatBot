export interface DialogRespond {
    fulfillmentMessages?: FulfillmentMessage[];
    fulfillmentText?: any;

}

interface FulfillmentMessage {
    platform: string;
    card?: Card;
    quick_replies?: QuickReplies;
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
interface QuickReplies {
    title: string;
    quickReplies: string[];
}
