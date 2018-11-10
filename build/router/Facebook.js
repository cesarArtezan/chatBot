"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const req = require("request");
class FacebookRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.use("/", (request, response) => {
            console.log("Dialogflow Request body: " + JSON.stringify(request.body));
            const dialoflowRequest = request.body;
            const intents = dialoflowRequest.queryResult.intent.displayName;
            const res = {};
            if (intents === "suma") {
                const { number, number1 } = dialoflowRequest.queryResult.parameters;
                const sum = number + number1;
                res.fulfillmentText = `La suma de ${number} ➕ ${number1} es ${sum} ✔️`;
            }
            if (intents === "quien-eres") {
                res.fulfillmentText = `Soy un Robot 🤖`;
            }
            if (intents === "vleeko") {
                res.fulfillmentMessages = [
                    {
                        platform: "FACEBOOK",
                        card: {
                            title: "Vleeko",
                            subtitle: "Empresa de Marketing Digital",
                            imageUri: "https://i.pinimg.com/280x280_RS/4e/a9/0f/4ea90f2f869d452967942e96d0dfde3d.jpg",
                            buttons: [
                                {
                                    postback: "https://vleeko.com/",
                                    text: "Vleeko"
                                }
                            ]
                        }
                    }
                ];
            }
            response.json(res);
            ////////////////////////////////
            /*   // response.setHeader()
             // response.json({ fulfillmentText: ` es 5` });
             response.json({
                 "fulfillmentMessages": [
                     {
                         "platform": "FACEBOOK",
                         "card": {
                             "title": "Title: this is a title",
                             "subtitle": "This is an subtitle.  Text can include unicode characters including emoji 📱.",
                             "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                             "buttons": [
                                 {
                                     "text": "This is a button",
                                     "postback": "https://assistant.google.com/"
                                 }
                             ]
                         }
                     },
                     {
                         "platform": "FACEBOOK",
                         "text": "algo 1"
                     }
                 ]

             });
             // response.send(`algo1`);
                const responseJson = {};
                 const richResponseV2Card = {
                     "title": "Title: this is a title",
                     "subtitle": "This is an subtitle.  Text can include unicode characters including emoji 📱.",
                     "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                     "buttons": [
                         {
                             "text": "This is a button",
                             "postback": "https://assistant.google.com/"
                         }
                     ]
                 };
                 const r = {
                     "fulfillmentMessages": [
                         {
                             "platform": "FACEBOOK",
                             "card": {
                                 "title": `algo`,
                                 "subtitle": `algo`,
                                 "imageUri": `algo`,
                                 "buttons": [
                                     {
                                         "text": "Watch video",
                                         "postback": `google.com`
                                     }
                                 ]
                             }
                         },
                     ]
                 };
                 // responseJson["fulfillmentMessages"] = r.fulfillmentMessages;
                 responseJson["fulfillmentText"] = "algo";
                 response.json(responseJson); */
        });
    }
}
exports.FacebookRouter = FacebookRouter;
//# sourceMappingURL=Facebook.js.map