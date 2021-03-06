import { model, Schema, Document } from "mongoose";
interface IPost extends Document {
  timestamp: Date;
  title: string;
  slug: any;
  content: string;
  featuredImage: string;
  category: string;
  published: boolean;
}
// tslint:disable object-literal-sort-keys
const PostSchema: Schema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: "",
    required: true
  },
  slug: {
    type: String,
    default: "",
    required: true,
    unique: true,
    trim: true
  },
  content: {
    type: String,
    default: "",
    required: true
  },
  featuredImage: {
    type: String,
    default: ""
  },
  category: {
    type: String,
    default: ""
  },
  published: {
    type: Boolean,
    default: false
  }
});

export default model<IPost>("Post", PostSchema);
