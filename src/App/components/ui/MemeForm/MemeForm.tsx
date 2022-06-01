import { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import React from "react";
import Button from "../Button/Button";
import styles from "./MemeForm.module.css";

//types
interface IMemeFormProps {
  meme: MemeInterface;
  onMemeChange: Function;
  images: Array<ImageInterface>;
}

const MemeForm: React.FC<IMemeFormProps> = (props) => {
  return (
    <div data-testid="MemeForm" className={styles.MemeForm}>
      <form>
        <h1>Titre</h1>
        <input
          type="text"
          id="f_titre"
          placeholder="saisir titre"
          value={props.meme.titre}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            console.log(evt.target.value);
            props.onMemeChange({
              ...props.meme,
              titre: evt.target.value,
            });
          }}
        />
        <hr />
        <h2>Image</h2>
        <select value={props.meme.imageId} onChange={evt=>{
            props.onMemeChange({...props.meme, imageId:Number(evt.target.value)})
        }}>
          {
            props.images.map((e,i)=><option value={e.id} key={'select-option-'+i}>{e.name}</option>)
          }
        </select>
        <hr />
        <h2>text</h2>
        <input
          type="text"
          value={props.meme.text}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            console.log(evt.target.value);
            props.onMemeChange({ ...props.meme, text: evt.target.value });
          }}
        />
        <div className={styles.half}>
          <div>
            <label htmlFor="f_x">x:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              value={props.meme.x}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                console.log(evt.target.value);
                props.onMemeChange({
                  ...props.meme,
                  x: Number(evt.target.value),
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              value={props.meme.y}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                console.log(evt.target.value);
                props.onMemeChange({
                  ...props.meme,
                  y: Number(evt.target.value),
                });
              }}
            />
          </div>
        </div>
        <hr />
        <label htmlFor="f_color">Couleur</label>
        <input
          type="color"
          id="f_color"
          value={props.meme.color}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            console.log(evt.target.value);
            props.onMemeChange({ ...props.meme, color: evt.target.value });
          }}
        />
        <div className={styles.half}>
          <div>
            <label htmlFor="f_sz">font-size:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              value={props.meme.fontSize}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                console.log(evt.target.value);
                props.onMemeChange({
                  ...props.meme,
                  fontSize: Number(evt.target.value),
                });
              }}
              min={0}
            />
          </div>
          <div>
            <label htmlFor="f_fw">font-weight:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              min="100"
              step="100"
              max="900"
              value={props.meme.fontWeight}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                console.log(evt.target.value);
                props.onMemeChange({
                  ...props.meme,
                  fontWeight: evt.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className={styles.half}>
          <div>
            <label htmlFor="f_underline">underline:</label>
            <br />
            <input
              id="f_underline"
              type="checkbox"
              checked={props.meme.underline}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                console.log(evt.target.value);
                props.onMemeChange({
                  ...props.meme,
                  underline: evt.target.checked,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <br />
            <input
              id="f_italic"
              type="checkbox"
              checked={props.meme.italic}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                console.log(evt.target.value);
                props.onMemeChange({
                  ...props.meme,
                  italic: evt.target.checked,
                });
              }}
            />
          </div>
        </div>
        <div className={styles.half}>
          <Button>b1</Button>
          <Button>b2</Button>
        </div>
      </form>
    </div>
  );
};
export default MemeForm;
