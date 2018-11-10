export interface DialogflowRequest {
  responseId: string;
  queryResult: QueryResult;
  originalDetectIntentRequest: OriginalDetectIntentRequest;
  session: string;
}

interface OriginalDetectIntentRequest {
  payload: Payload;
}

interface Payload {
  data: Data;
  source: string;
}

interface Data {
  sender: Sender;
  recipient: Sender;
  message: Message;
  timestamp: number;
}

interface Message {
  mid: string;
  text: string;
  seq: number;
}

interface Sender {
  id: string;
}

interface QueryResult {
  queryText: string;
  parameters: Parameters;
  allRequiredParamsPresent: boolean;
  fulfillmentMessages: FulfillmentMessage[];
  outputContexts: OutputContext[];
  intent: Intent;
  intentDetectionConfidence: number;
  languageCode: string;
}

interface Intent {
  name: string;
  displayName: string;
}

interface OutputContext {
  name: string;
  lifespanCount: number;
  parameters: Parameters2;
}

interface Parameters2 {
  "number1.original": string;
  number: number;
  number1: number;
  "number.original": string;
  facebook_sender_id: string;
}

interface FulfillmentMessage {
  text: Text;
}

interface Text {
  text: string[];
}

interface Parameters {
  number: number;
  number1: number;
}
