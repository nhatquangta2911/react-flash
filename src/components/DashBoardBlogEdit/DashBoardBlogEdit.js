import styles from "./DashBoardBlogEdit.scss";
import React, { Component, Fragment } from "react";
import TextArea from "../../components/TextArea";
import Select from "react-select";
import TagApi from "../../api/TagApi";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import BlogApi from "../../api/BlogApi";
import Toast from "../Toast/Toast";
import Loading from "../Loading";

export default class DashBoardBlogEdit extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         title: "",
         header: "",
         content: EditorState.createEmpty(),
         image: "",
         tags: [],
         allTags: []
      };
   }

   componentWillMount() {
      const id = document.location.href.split("editPost/")[1];
      BlogApi.get(id)
         .then(res => {
            const blocksFromHtml = htmlToDraft(res.data.content);
            const { contentBlocks, entityMap } = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(
               contentBlocks,
               entityMap
            );
            const tagsResult = [];
            res.data.tags.map(tag => {
               tagsResult.push({ label: tag.name, value: tag._id });
            });
            this.setState({
               isLoading: false,
               title: res.data.title,
               header: res.data.header,
               content: EditorState.createWithContent(contentState),
               image: res.data.image,
               tags: tagsResult
            });
         })
         .catch(err => {
            Toast.error("Something went wrong. Please try again!");
         });
   }

   componentDidMount() {
      TagApi.list()
         .then(res => {
            let data = [];
            res.data.forEach(tag => {
               data.push({ label: tag.name, value: tag._id });
            });
            this.setState({
               allTags: data
            });
         })
         .catch(res => {});
   }

   onEditorStateChange = content => {
      this.setState({
         content
      });
   };

   onSubmit = () => {
      const result = draftToHtml(
         convertToRaw(this.state.content.getCurrentContent())
      );
      const post = {
         title: this.state.title,
         header: this.state.header,
         image: this.state.image,
         content: result,
         tags: this.state.tags && this.state.tags.map(tag => tag.value)
      };
      BlogApi.update(document.location.href.split('editPost/')[1], post, window.localStorage.getItem("token"))
         .then(res => {
            window.location.href = "/dashboard/all-posts"
            Toast.success("Created Blog");
         })
         .catch(err => {
            err && Toast.error("Something went wrong. Please try again!");
         });
   };

   render() {
      const isLoading = this.state.isLoading;
      return (
         <Fragment>
            {isLoading && <Loading message="Loading Post..." />}
            {!isLoading && 
            <div className="dashboard-blog-add-container">
               <h5>Edit Post</h5>
               <input
                  type="text"
                  placeholder="Title"
                  id="title"
                  required
                  defaultValue={this.state.title}
                  onChange={v => {
                     this.setState({
                        title: v.target.value
                     });
                  }}
               />
               <input
                  type="text"
                  placeholder="Header"
                  id="header"
                  required
                  defaultValue={this.state.header}
                  onChange={v => {
                     this.setState({
                        header: v.target.value
                     });
                  }}
               />
               <Select
                  cachedOptions
                  isMulti
                  name="tags"
                  options={this.state.allTags}
                  value={this.state.tags}
                  defaultValue={this.state.tags}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={v => {
                     this.setState({
                        tags: v
                     });
                  }}
               />
               <input
                  type="text"
                  placeholder="Cover Picture"
                  id="image"
                  defaultValue={this.state.image}
                  required
                  onChange={v => {
                     this.setState({
                        image: v.target.value
                     });
                  }}
               />
               <Editor
                  editorState={this.state.content}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                  placeholder="Content"
                  onEditorStateChange={this.onEditorStateChange}
               />
               <p onClick={this.onSubmit} className="btn-submit-blog">
                  Submit
               </p>
            </div>}
         </Fragment>
      );
   }
}
