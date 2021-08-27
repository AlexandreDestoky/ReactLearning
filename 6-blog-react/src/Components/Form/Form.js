import React from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

export default function Form() {
  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleForm = e => {
    e.preventDefault();

    dispatch({
      type:"ADDARTICLE",
      payload:article
    })

    setArticle({
      title:"",
      body:""
    })

    setTimeout(() => {
      history.push("/")
    }, 700);
  };

  const handleInputs = e => {
    if (e.target.classList.contains("inp-title")) {
      const newObjState = { ...article, title: e.target.value };
      setArticle(newObjState);
    } else if (e.target.classList.contains("inp-body")) {
      const newObjState = { ...article, body: e.target.value };
      setArticle(newObjState);
    }
  };

  // {e => setArticle({title:e.target.value})}

  return (
    <>
      <h1 className="title-form">Écrivez un article</h1>
      <form className="container-form" onSubmit={handleForm}>
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          placeholder="Entrez votre nom"
          onChange={handleInputs}
          value={article.title}
          className="inp-title"
        />

        <label htmlFor="title">Votre Article</label>
        <textarea
          id="article"
          placeholder="Votre Article ..."
          onChange={handleInputs}
          value={article.body}
          className="inp-body"
        ></textarea>

        <button>Envoyez l'article</button>
      </form>
    </>
  );
}
