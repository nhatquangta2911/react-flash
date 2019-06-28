import styles from './DashBoardBlogAdd.scss';
import React, { Component } from 'react';
import TextArea from '../../components/TextArea';
import Select from 'react-select';
import TagApi from '../../api/TagApi';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import BlogApi from '../../api/BlogApi';
import Toast from '../Toast/Toast';


export default class DashBoardBlogAdd extends Component {

   constructor(props) {
      super(props);
      this.state = {
         title: '',
         header: '',
         content: EditorState.createEmpty(),
         image: '',
         tags: [],
         allTags: [],
      }
   }

   
   componentDidMount() {
      TagApi.list()
         .then(res => {
            let data = [];
            res.data.forEach(tag => {
               data.push({label: tag.name, value: tag._id})
            });
            this.setState({
               allTags: data
            })
         })
         .catch(res => {});
   }

   onEditorStateChange = (content) => {
      this.setState({
         content
      });
   }

   onSubmit = () => {
      const result = draftToHtml(convertToRaw(this.state.content.getCurrentContent()));
      const post = {
         title: this.state.title,
         header: this.state.header,
         image: this.state.image,
         content: result,
         tags: this.state.tags && this.state.tags.map(tag => tag.value)
      }
      BlogApi.add(post, window.localStorage.getItem('token'))
         .then(res => {
            this.props.history.push('/blogs');
            Toast.success('Created Blog');
         })
         .catch(err => {
            err && Toast.error('Something went wrong. Please try again!');
         })
   }

   render() {
      return (
         <div className="dashboard-blog-add-container">
            <input
               type="text"
               placeholder="Title"
               id="title"
               required
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
            <p onClick={this.onSubmit} className="btn-submit-blog">Submit</p>
         </div>
      )
   }
}
