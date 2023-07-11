import React, { useState, useEffect } from 'react';
import axios from 'axios';
import awan2 from '../../img/awan2.webp';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editCommentId, setEditCommentId] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('https://backend-rouge-five.vercel.app/comments');
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editMode) {
        await axios.patch(`https://backend-rouge-five.vercel.app/comments/${editCommentId}`, {
          name,
          comment,
        });
        setEditMode(false);
        setEditCommentId('');
      } else {
        const response = await axios.post('https://backend-rouge-five.vercel.app/comments', {
          name,
          comment,
        });
        setComments([...comments, response.data]);
      }
      setName('');
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`https://backend-rouge-five.vercel.app/comments/${id}`);
      const { name, comment } = response.data;
      setName(name);
      setComment(comment);
      setEditMode(true);
      setEditCommentId(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditCommentId('');
    setName('');
    setComment('');
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backend-rouge-five.vercel.app/comments/${id}`);
      setComments(comments.filter((comment) => comment._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comment-container">
      <img src={awan2} alt="Awan2" className="welcome-image1" />
      <h2>Saran dan Masukan</h2>
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment._id} className="comment-item">
            <strong>{comment.name}</strong>: {comment.comment}
            <div className="comment-actions">
              <button onClick={() => handleEdit(comment._id)}>Edit</button>
              <button onClick={() => handleDelete(comment._id)}>Hapus</button>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="comment-input"
        />
        <input
          type="text"
          placeholder="Komentar"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="comment-input"
        />
        <div className="comment-button-container">
          <button type="submit" className="comment-button">
            {editMode ? 'Simpan' : 'Tambah Komentar'}
          </button>
          {editMode && (
            <button type="button" onClick={handleCancelEdit} className="comment-button">
              Batal
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CommentList;

